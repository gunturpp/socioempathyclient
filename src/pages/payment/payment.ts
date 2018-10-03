import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Payment1Page } from '../payment1/payment1';
import { PaymentStatusPage } from '../payment-status/payment-status';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  next() {
    // this.navCtrl.push(Payment1Page);
    this.navCtrl.push(PaymentStatusPage);
  }

}
