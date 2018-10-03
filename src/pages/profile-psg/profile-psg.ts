import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { BookingPage } from "../booking/booking";
import { LoadingProvider } from "../../providers/loading";


@Component({
  selector: 'page-profile-psg',
  templateUrl: 'profile-psg.html',
})
export class ProfilePsgPage {
  psychologist=[];
  psgId = this.navParams.get("psgId");
  constructor(public loadingProvider: LoadingProvider,public dataProvider:DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadingProvider.show();
    // get psg profile
    this.dataProvider.getPsgAvailable(this.psgId).subscribe((psychologist)=>{
      this.loadingProvider.hide();
      this.psychologist = psychologist;
      console.log('ionViewDidLoad ProfilePsgPage', this.psychologist);
    })
  }
  bookingPage(){
    this.navCtrl.push(BookingPage, {
      psgProfile: this.psychologist
    })
  }

}
