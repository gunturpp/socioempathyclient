import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase/app";
import { AngularFireDatabase} from 'angularfire2/database';
import { LoadingProvider } from "../../providers/loading";
import * as moment from 'moment';
import { MessagesPage } from '../messages/messages';


@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  problem?: string;
  psgProfile = this.navParams.get("psgProfile");
  bookingDate = new Date();
  scheduleDate = JSON.stringify(this.navParams.get("selectedDay"));
  today = moment(this.bookingDate).format();
  getTime = JSON.stringify(this.today).substring(12,20);

  scheduleId = localStorage.getItem("scheduleId");  
  constructor(public loadingProvider: LoadingProvider, public angularfireDatabase: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad(){
    console.log("IonViewDidLoad BookingPage", this.psgProfile);
    
  }
  
  createBookingData(){
    this.loadingProvider.show();
    // create data in table booking
    this.angularfireDatabase.object('/booking/' + this.today)
    .set({
      sessionke: localStorage.getItem("sessionke"),
      userId: firebase.auth().currentUser.uid,
      psgId: this.psgProfile.userId,
      createdAt: this.today,
      scheduleId: this.scheduleId,
      problem: this.problem,
      confirmation: "waiting"
    })
    .then(() => {
      console.log("sukses buat booking");
    });

    // create data booking inside psg table as attribut "booking"
    this.angularfireDatabase.object('psg/' + this.psgProfile.userId + '/booking/' + this.today)
    .update({
      seesionke: localStorage.getItem("sessionke"),
      id: this.today
    })
    .then(() => {
     this.loadingProvider.hide();      
    //  show tabs
    this.navCtrl.setRoot(MessagesPage);
     let tabs = document.querySelectorAll('.tabbar');
     if ( tabs !== null ) {
       Object.keys(tabs).map((key) => {
         tabs[ key ].style.transform = 'translateY(0)';
       });
     } // end if
 
     console.log("sukses update attribut booking di psg");     
    });
  }
}
