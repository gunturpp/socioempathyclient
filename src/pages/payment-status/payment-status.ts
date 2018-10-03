import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';

@Component({
  selector: 'page-payment-status',
  templateUrl: 'payment-status.html',
})
export class PaymentStatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentStatusPage');
  }
  finish() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    } // end if
    this.navCtrl.setRoot(MessagesPage);
  }

}
