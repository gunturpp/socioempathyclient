import { Component } from "@angular/core";
import {
  NavParams,
  NavController,
  ModalController,
  AlertController
} from "ionic-angular";
import * as moment from "moment";
import { AddSchedulePage } from "../add-schedule/add-schedule";
import { DataProvider } from "../../providers/data";
import { ConsulSessionPage } from "../consul-session/consul-session";
import { ConsultationPage } from "../consultation/consultation";
import { LoadingProvider } from "../../providers/loading";
import { ColdObservable } from "rxjs/testing/ColdObservable";
import { HomePage } from "../home/home";
import { MessagesPage } from "../messages/messages";

@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html"
})
export class CalendarPage {
  tabBarElement: any;
  currentDate: any;
  lenKey1: any;
  index: number;
  cek: any;
  eventz = { startTime: new Date(), endTime: new Date(), allDay: false };
  temp = [];
  date = [];
  temp2 = [];
  listSchedule: any;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  dates = {
    startTime: new Date().toDateString(),
    endTime: new Date().toISOString(),
    allDay: false
  };
  calendar = {
    mode: "month",
    currentDate: new Date()
  };

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private navParam: NavParams,
    public dataProvider: DataProvider,
    public loadingProvider: LoadingProvider
  ) {
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  }
  pop(){
    this.navCtrl.pop();
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    } // end if
  }
  ionViewDidEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }
  ionViewDidLoad() {

    this.loadingProvider.show();
    this.dataProvider.getScheduling().subscribe(schedule => {
      for (var i = 0; i < schedule.length; i++) {
        this.date[i] = schedule[i];
        console.log("key date", this.date[i].key);
        this.dates[i] = new Date(this.date[i].key);
        // console.log("key date", this.dates[i]);
      }
    });
    // calendar show color
    this.dataProvider.getScheduling().subscribe(schedules => {
      this.lenKey1 = schedules.length;
      console.log("lenkey1", this.lenKey1);
      console.log("schedule", schedules.key);
      this.index = 0;
      schedules.forEach(psg => {
        this.index++;
        console.log("arr", this.eventSource);
        console.log("psgsc", psg.key);
        this.currentDate = new Date();
        console.log(this.currentDate);
        
        // if(this.currentDate.to(psg.key)) {
          this.eventSource.push({
            title: psg.key,
            startTime: new Date(psg.key),
            endTime: new Date(psg.key),
            allDay: false
          });
        // }
      });
        if (this.index == this.lenKey1) {
          this.refreshData();
        }
    });

    this.loadingProvider.hide();
  }
  refreshData() {
    let eventData = this.eventz;

    eventData.startTime = new Date(12 - 2 - 1997);
    eventData.endTime = new Date(12 - 2 - 1997);

    let events = this.eventSource;
    events.push(eventData);
    this.eventSource = [];
    setTimeout(() => {
      this.eventSource = events;
      console.log("EVa: ", this.eventSource);
    });
  }
  addEvent() {
    let modal = this.modalCtrl.create(AddSchedulePage, {
      selectedDay: this.selectedDay
    });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        console.log("isi event", events);
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
          console.log("isi eventSource", this.eventSource);
        });
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  // go to session consultation by date choosen
  sessionByDate() {
    this.navCtrl.push(ConsulSessionPage, {
      selectedDay: this.selectedDay
    });
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format("LLLL");
    let end = moment(event.endTime).format("LLLL");

    let alert = this.alertCtrl.create({
      title: "" + "event.title",
      subTitle: "From: " + start + "<br>To: " + end,
      buttons: ["OK"]
    });
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}
