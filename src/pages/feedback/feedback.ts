import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { AlertProvider } from '../../providers/alert';
import { LoadingProvider } from '../../providers/loading';
import * as moment from 'moment';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  public feedback:any;
  public userId = this.navParams.get("userId");
  constructor(public loadingProvider: LoadingProvider, public alertProvider: AlertProvider,public dataProvider:DataProvider,  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  sendFeedback() {
    this.loadingProvider.show();
    this.dataProvider.setFeedback().set({
      pesan:this.feedback,
      userId: this.userId,
      createdAt: moment().format('MMM-DD-YYYY-h:mm:ss-a')
    }).then(success =>{
      this.alertProvider.showFeedbackSubmitMessage();
      this.loadingProvider.hide();
    }).catch(err =>{
      this.alertProvider.showErrorMessage("fail-feedback");
      this.loadingProvider.hide();
    })
  }

}
