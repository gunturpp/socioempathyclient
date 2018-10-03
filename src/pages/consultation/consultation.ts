import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { CalendarPage } from '../calendar/calendar';
import { LovepointStorePage } from '../lovepoint-store/lovepoint-store';

@Component({
  selector: 'page-consultation',
  templateUrl: 'consultation.html',
})
export class ConsultationPage {
  tabBarElement: any;
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  }
  lovepointStore() {
    this.navCtrl.push(LovepointStorePage);
    // hide tabs
    let tabs = document.querySelectorAll('.tabbar');
      if ( tabs !== null ) {
        Object.keys(tabs).map((key) => {
          tabs[ key ].style.transform = 'translateY(56px)';
        });
      } // end if
  }
  checkCalendar(){
    this.navCtrl.push(CalendarPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationPage');
  }

}
