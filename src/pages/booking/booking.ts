import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from "firebase/app";
import { AngularFireDatabase} from 'angularfire2/database';
import { LoadingProvider } from "../../providers/loading";
import * as moment from 'moment';
import { MessagesPage } from '../messages/messages';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  problem: string = "";
  psgProfile = this.navParams.get("psgProfile");
  bookingDate = new Date();
  createdAt = moment(this.bookingDate).format();
  sessionke = localStorage.getItem("sessionke");
  scheduleId =  moment(this.navParams.get("selectedDay")).format('YYYY-MM-DD');  
  consultation_time:string;
  constructor(public alertCtrl: AlertController, public loadingProvider: LoadingProvider, public angularfireDatabase: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad(){
    console.log("IonViewDidLoad BookingPage", this.psgProfile);
    this.consultationTime(); 
  }
  consultationTime() {
    switch (this.sessionke) {
      case "session1":
        this.consultation_time = "08:00 - 09:00";
        break;
      case "session2":
        this.consultation_time = "09:00 - 10:00";
        break;
      case "session3":
        this.consultation_time = "10:00 - 11:00";
        break;
      case "session4":
        this.consultation_time = "11:00 - 12:00";
        break;
      case "session5":
        this.consultation_time = "12:00 - 13:00";
        break;
      case "session6":
        this.consultation_time = "13:00 - 14:00";
        break;
      case "session7":
        this.consultation_time = "14:00 - 15:00";
        break;
      case "session8":
        this.consultation_time = "15:00 - 16:00";
        break;
      case "session9":
        this.consultation_time = "16:00 - 17:00";
        break;
      case "session10":
        this.consultation_time = "17:00 - 18:00";
        break;
      case "session11":
        this.consultation_time = "18:00 - 19:00";
        break;
      case "session12":
        this.consultation_time = "19:00 - 20:00";
        break;
      case "session13":
        this.consultation_time = "20:00 - 21:00";
        break;
      case "session14":
        this.consultation_time = "21:00 - 22:00";
        break;
      case "session16":
        this.consultation_time = "22:00 - 23:00";
        break;
      case "session17":
        this.consultation_time = "23:00 - 24:00";
        break;
      default:
        return 0;
    }
  } 
  showConfirmBooking() {
    const confirm = this.alertCtrl.create({
      title: 'Yakin booking sekarang?',
      message: 'Jadwal konsultasi akan dibuat dengan psikolog yang bersangkutan',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Booking',
          handler: () => {
            this.createBookingData();
          }
        }
      ]
    });
    confirm.present();
  }
  createBookingData(){
    this.loadingProvider.show();
    // create data in table booking
    this.angularfireDatabase.object('/booking/' + this.createdAt)
    .set({
      sessionke: this.sessionke,
      userId: firebase.auth().currentUser.uid,
      psgId: this.psgProfile.userId,
      createdAt: this.createdAt,
      scheduleId: this.scheduleId,
      problem: this.problem,
      confirmation: "waiting"
    })
    .then(() => {
      console.log("sukses buat booking");
    });

    // create data booking inside psg table as attribut "booking"
    this.angularfireDatabase.object('psg/' + this.psgProfile.userId + '/booking/' + this.createdAt)
    .update({
      seesionke: localStorage.getItem("sessionke"),
      id: this.createdAt
    })
    .then(() => {
     this.loadingProvider.hide();      
    //  show tabs
    // let tabs = document.querySelectorAll('.show-tabbar');
    // if (tabs !== null) {
    //   Object.keys(tabs).map((key) => {
    //       tabs[key].style.display = 'flex';
    //   });
    // }
    this.successAlert();
    this.navCtrl.setRoot(TabsPage);
    console.log("sukses update attribut booking di psg");     
    });
  }
  successAlert() {
    let alert = this.alertCtrl.create({
      title: 'Berhasil booking psikolog',
      subTitle: 'Harap tunggu booking anda diterima oleh psikolog.',
      buttons: ['Ok']
    });
    alert.present();
  }
}
