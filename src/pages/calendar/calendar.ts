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
  index:number;
  cek: any;
  eventz = { startTime: new Date(), endTime: new Date(), allDay: false };
  temp = [];
  date = [];
  temp2 = [];
  listSchedule: any;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  sessionStart:string;
  sessionEnd:string;
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
    // calendar show color
    this.dataProvider.getScheduling().subscribe(schedules => {
      this.index = 0;
      var temp = 1;
      schedules.forEach(schedule => {      
        this.sessionStart =  schedule.key+ "T08:00:00";
        this.sessionEnd =  schedule.key+ "T22:00:00";
        this.eventSource.push({
          title: schedule.key,
          startTime: new Date(this.sessionStart),
          endTime: new Date(this.sessionEnd),
          allDay: false
        });
        this.index++;
        temp +=1;
      });
        if(this.index < temp) {
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
  reloadSource(startTime,endTime) {
    startTime = this.eventSource.startTime;
    endTime = this.eventSource.endTime;
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
      title: "" + "Detail",
      subTitle: "From: " + start + "<br>To: " + end,
      buttons: ["OK"]
    });
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;     
  }
}
