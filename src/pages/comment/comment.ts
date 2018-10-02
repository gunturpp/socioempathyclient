import { DocverPage } from './../docver/docver';
import { HomePage } from './../home/home';
import { Component, ChangeDetectorRef, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams, App, AlertController, ToastController, ActionSheetController, ModalController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingProvider } from '../../providers/loading';
import { DataProvider } from '../../providers/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';
import 'rxjs/add/operator/take';
import { Item } from 'ionic-angular/components/item/item';

/**
 * Generated class for the CommentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  private timeLineID: any;
  private newComment: any;
  private commentList: any;
  private commentFound = false;

  constructor(public actionSheetCtrl : ActionSheetController, public toastCtrl: ToastController, 
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
    public formBuilder: FormBuilder, public angularfireDatabase: AngularFireDatabase, 
    public loadingProvider: LoadingProvider, public app: App, 
    public dataProvider: DataProvider, public cb: ChangeDetectorRef, 
    public data:DataProvider, public zone: NgZone, public modalCtrl: ModalController, 
    public view: ViewController, public params: NavParams) {
      //get post ID that will be commented
      this.timeLineID = params.get('timeLineID');
  }

  back(){
    this.view.dismiss();
    console.log("modal dismissed");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
    this.commentFound = false;
    this.dataProvider.getCommentTimeline().map(params=>{
      for(let item of params){
        if(item.timeLineID == this.timeLineID){
          if(item.comments == ""){
            this.commentList = [];
          }
          this.commentList = item.comments;
        }
      }
    });
  }

  postComment(){
    let ID_Post: any = this.timeLineID;
    let data: any;
    let data_timeline: any;
    let ID_User: any;
    let comments: any;
    let posts: any;
    let newTimeLine: any;
    let newTimeLine2: any;
    let friends: any;
    this.dataProvider.postCommentTimeline().subscribe(params=>{
      console.log(params);
      for(data of params){
        console.log(data.ID_User);
        console.log("data.Post_ID : "+data.ID_Post);
        console.log("ID_Post : "+ID_Post);
        if(ID_Post == data.ID_Post){
          ID_User = data.ID_User;
          console.log("ID_User : "+ID_User);

          this.dataProvider.getUserTimeLineByID(ID_User).subscribe(params=>{
            console.log("timeLine : "+params);
            newTimeLine = params;
            for(let i = newTimeLine.length-1; i>=0; i--){
              if(newTimeLine[i].timeLineID == ID_Post){
                if(newTimeLine[i].comments == ""){
                  newTimeLine[i].comments = [];
                }

                newTimeLine[i].comments.push({
                  senderId: newTimeLine[i].senderId,
                  comment: this.newComment,
                  img: newTimeLine[i].img,
                  role:  newTimeLine[i].role,
                  gender: newTimeLine[i].gender,
                  date: newTimeLine[i].date,
                  name: newTimeLine[i].name
                });

                this.angularfireDatabase.object('/users/' + ID_User).update({
                  timeLine : newTimeLine
                });

                //friends (that has relation with Post_ID) timeline comment update
                this.dataProvider.relationFriendTimeline(ID_User).subscribe(params=>{
                  friends = params;
                  for(let data_user of friends){
                    this.dataProvider.getUserTimeLineByID(data_user).subscribe(params=>{
                      newTimeLine2 = params;
                      for(let i = newTimeLine2.length-1; i>=0; i--){
                        if(newTimeLine2[i].timeLineID == ID_Post){
                          if(newTimeLine2[i].comments == ""){
                            newTimeLine2[i].comments = [];
                          }
          
                          newTimeLine2[i].comments.push({
                            senderId: newTimeLine2[i].senderId,
                            comment: this.newComment,
                            img: newTimeLine2[i].img,
                            role:  newTimeLine2[i].role,
                            gender: newTimeLine2[i].gender,
                            date: newTimeLine2[i].date,
                            name: newTimeLine[i].name
                          });

                          //clean form
                          this.newComment = "";
          
                          this.angularfireDatabase.object('/users/' + data_user).update({
                            timeLine : newTimeLine2
                          });

                        }
                      }
                    });
                  }
                });
                

              }
            }

          });

        }
      }

    });
  }

}
