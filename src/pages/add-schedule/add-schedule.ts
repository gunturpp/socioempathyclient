import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import * as moment from "moment";
import { DataProvider } from "../../providers/data";
import { LoadingProvider } from "../../providers/loading";
import * as firebase from "firebase/app";

@Component({
  selector: "page-add-schedule",
  templateUrl: "add-schedule.html"
})
export class AddSchedulePage {
  switchStatus: boolean;
  session: string;
  date: string;
  scheduling: string;
  userId: any;
  private user: any;

  event = {
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false
  };
  minDate = new Date().toISOString();

  constructor(
    public loadingProvider: LoadingProvider,
    private dataProvider: DataProvider,
    public navCtrl: NavController,
    private navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    let preselectedDate = moment(this.navParams.get("selectedDay")).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }
  // this.dataProvider.getCurrentUser().subscribe((user) => {
  //   this.loadingProvider.hide();
  //   this.user = user;
  //   console.log("usernya",this.user);

  // });
  ionViewDidLoad() {
    this.createScheduling();
    this.loadingProvider.show();
    this.dataProvider.getUser(firebase.auth().currentUser.uid).subscribe(user => {
      this.loadingProvider.hide();
      this.user = user;
      this.userId = this.user.userId;
      console.log("userScheduling", this.user);
    });
  }
  createScheduling() {
    firebase
    .database()
    .ref("/scheduling/" + firebase.auth().currentUser.uid)
    .once("value")
    .then(account => {
      //console.log(account.val());
      // No database data yet, create user data on database
      if (!account.val()) {
        // this.loadingProvider.show();
       // Insert data on our database using AngularFire.
        this.dataProvider
        .setScheduling(this.user.userId)
        .set({
          userId: this.userId,
          scheduling: "dnksdjcnsdkjcnsdkc",
          date: "10 januari 2018",
          session: '1',
          switchStatus: true
        })
        .then(() => {
          console.log("sukses buat schedule");
        });
      }
    });
  }
  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.event);
    
    console.log("udah ke save", this.event);
  }
}
