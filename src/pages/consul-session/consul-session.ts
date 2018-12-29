import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { ChoosePsgPage } from "../choose-psg/choose-psg";
import { LoadingProvider } from "../../providers/loading";

@Component({
  selector: 'page-consul-session',
  templateUrl: 'consul-session.html',
})
export class  ConsulSessionPage {
  sessionHour: any;
  allsession= [];
  selectedDay = new Date();
  sessionkey=[];
  idPsg=[];
  day = JSON.stringify(this.navParams.get("selectedDay")).substring(1,11);
  session = this.navParams.get("psgBySession");

  // save just day from ConsultationPage
  sessionByDay = JSON.stringify(this.navParams.get("selectedDay")).substring(1,11);
  // save complete date
  date = JSON.stringify(this.navParams.get("selectedDay")).substring(1,24);
  constructor(public loadingProvider: LoadingProvider, public dataProvider:DataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadingProvider.show();
    this.allSessionByDay(this.sessionByDay);
    this.getKeySchedulingByDay(this.sessionByDay);
    this.getListSchedulingByDay(this.sessionByDay);
    this.totalPsgbyDaySession();
    console.log('ionViewDidLoad ConsulSessionPage');
    this.loadingProvider.hide();
    // console.log("daynya di consul-session", this.sessionByDay );
    // save date by clicked date, to use in booking table -> scheduleId
    localStorage.setItem('scheduleId', JSON.stringify(this.navParams.get("selectedDay")).substring(1,11));
  }
  ionViewDidEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }

  // total psg available by day and session
  totalPsgbyDaySession() {
    this.dataProvider.getListPsgBySessionAndDay(this.day,this.sessionByDay).subscribe(listpsg=>{
      console.log("list", listpsg.length);
    })

  }
  // get all session by date choosen
  allSessionByDay(date) {
    this.dataProvider.getSchedulingByDay(this.sessionByDay).subscribe(session=>{
      console.log("get session", session);
      this.sessionHour = session;
    })
  }
  // get array key session in schedule date
  getKeySchedulingByDay(date) {
    this.dataProvider.getKeySchedulingByDay(this.sessionByDay).subscribe(session=>{
      for(let i=0; i < session.length; i++){
      this.sessionkey[i] = session[i].key;
      // console.log("key session", this.sessionkey[i]);
      }
    });
  }
  getListSchedulingByDay(date) {
    this.dataProvider.getListSchedulingByDay(this.sessionByDay).subscribe(session=>{
      console.log("key sesinya di session", session);
      for(let i=0; i < session.length; i++){
      let allsession = [];
      allsession[i] = session[i];
      this.idPsg[i] = JSON.stringify(allsession[i]).substring(2,30);
      console.log("all session", JSON.stringify(allsession[i]));
      }
    })
  }
  choosePsychologist(sesi) {
    this.navCtrl.push(ChoosePsgPage, {
      selectedDay: this.sessionByDay,
      psgBySession: sesi
    });
  }
}
