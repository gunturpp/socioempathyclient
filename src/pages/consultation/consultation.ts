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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  checkCalendar(){
    this.navCtrl.push(CalendarPage);
    let tabs = document.querySelectorAll('.show-tabbar');
    console.log('ionViewDidLoad',tabs);    
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationPage');
  }

}
