import { Component } from "@angular/core";
import {
  NavController,
  AlertController
} from "ionic-angular";
import * as moment from "moment";
import { DataProvider } from "../../providers/data";
import { LoadingProvider } from "../../providers/loading";
import { ChoosePsgPage } from "../choose-psg/choose-psg";

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
    private alertCtrl: AlertController,
    public dataProvider: DataProvider,
    public loadingProvider: LoadingProvider
  ) {}
  ionViewWillLeave(){
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'flex';
        });
    }
  }
  ionViewDidLoad() {
    this.loadingProvider.show();
    this.getSchedule();
  }
  // go to session consultation by date choosen
  sessionByDate() {
    this.navCtrl.push(ChoosePsgPage, {
      selectedDay: this.selectedDay
    });
  }
  getSchedule() {
    this.dataProvider.getScheduling().subscribe(schedules => {
      this.index = 0;
      var temp = 1;
      schedules.forEach(schedule => { 
        const date = moment(schedule.key);
        const today = moment().format("YYYY-MM-DD");
        console.log("this.schedule",schedule);
        // calendar must be before expired date
        if(date.isAfter(today)) {
          this.sessionStart =  schedule.key+ "T08:00:00";
          this.sessionEnd =  schedule.key+ "T24:00:00";
          this.eventSource.push({
            title: schedule.key,
            startTime: new Date(this.sessionStart),
            endTime: new Date(this.sessionEnd),
            allDay: false,
          });
          this.index++;
          temp +=1;
        } else {
          console.log("past");
        }
      });
      if(this.index < temp) {
        this.refreshData();
      }
      this.loadingProvider.hide();
    });
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

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log("this.selectedDay",event);

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
