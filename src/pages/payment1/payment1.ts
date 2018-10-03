import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-payment1',
  templateUrl: 'payment1.html',
})
export class Payment1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Payment1Page');
  }
  takePhoto() {

  }
  fromGallery() {
    
  }

}
