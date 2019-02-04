import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { ProfilePsgPage } from "../profile-psg/profile-psg";
import { LoadingProvider } from "../../providers/loading";
import * as moment from "moment";

@Component({
  selector: 'page-choose-psg',
  templateUrl: 'choose-psg.html',
})
export class ChoosePsgPage {
  jumlahpsg: any;
  psgAva=[];
  sessionByDay = moment(this.navParams.get("selectedDay")).format('YYYY-MM-DD');
  session = "noSession";
  allSession=[];
  psgAvailable=[];
  testRadioOpen = false;
  testRadioResult: any;
  warning: string;
  constructor(public alertCtrl: AlertController, public loadingProvider: LoadingProvider,public dataProvider:DataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
  }
  ionViewDidLoad() {
    this.loadingProvider.show();
    setTimeout(() => {
      this.getKeySchedulingByDay()
    }, 1500);
    // display psychologist by available session
    if(this.session == "noSession") {
      this.warning = "Pilih Sesi";
    } else {
      this.refreshList()
    }
  }
  refreshList(){
    this.dataProvider.getListPsgBySessionAndDay(this.sessionByDay,this.session).subscribe(listpsg=>{
      this.jumlahpsg = listpsg.length;
      for(let i = 0; i < listpsg.length; i++) {
        this.psgAvailable[i] = listpsg[i].key;
        this.dataProvider.getPsgAvailable(this.psgAvailable[i]).subscribe(list => {
        console.log("list", list );
        this.psgAva[i] = list;
        this.psgAva[i].old = moment(list.birth).toNow(true)
        this.loadingProvider.hide();
      });
    }
  })
  console.log("psgAva", this.psgAva);
  }
  getKeySchedulingByDay() {
    this.dataProvider.getKeySchedulingByDay(this.sessionByDay).subscribe(sessions=>{
      console.log("key sesinya di session", sessions);
      if(sessions.length > 0) {
        sessions.forEach(sesi => {
            this.generateSessionToTime(sesi);
            this.loadingProvider.hide();
          });
        } else {
          this.allSession = null;
          this.loadingProvider.hide();
        }
      })
  }
  generateSessionToTime(sesi) {
    switch (sesi.key) {
      case "session8":
        sesi.time = "08:00 - 09:00";
        this.allSession.push(sesi)
        break;
      case "session9":
        sesi.time = "09:00 - 10:00";
        this.allSession.push(sesi)
        break;
      case "session10":
        sesi.time = "10:00 - 11:00";
        this.allSession.push(sesi)
        break;
      case "session11":
        sesi.time = "11:00 - 12:00";
        this.allSession.push(sesi)
        break;
      case "session12":
        sesi.time = "12:00 - 13:00";
        this.allSession.push(sesi)
        break;
      case "session13":
        sesi.time = "13:00 - 14:00";
        this.allSession.push(sesi)
        break;
      case "session14":
        sesi.time = "14:00 - 15:00";
        this.allSession.push(sesi)
        break;
      case "session15":
        sesi.time = "15:00 - 16:00";
        this.allSession.push(sesi)
        break;
      case "session16":
        sesi.time = "16:00 - 17:00";
        this.allSession.push(sesi)
        break;
      case "session17":
        sesi.time = "17:00 - 18:00";
        this.allSession.push(sesi)
        break;
      case "session18":
        sesi.time = "18:00 - 19:00";
        this.allSession.push(sesi)
        break;
      case "session19":
        sesi.time = "19:00 - 20:00";
        this.allSession.push(sesi)
        break;
      case "session20":
        sesi.time = "20:00 - 21:00";
        this.allSession.push(sesi)
        break;
      case "session21":
        sesi.time = "21:00 - 22:00";
        this.allSession.push(sesi)
        break;
      case "session22":
        sesi.time = "22:00 - 23:00";
        this.allSession.push(sesi)
        break;
      case "session23":
        sesi.time = "23:00 - 24:00";
        this.allSession.push(sesi)
        break;
      default:
        return 0;
    }
  } 
  // view detail psg
  viewPsg(psgId,old){
    this.navCtrl.push(ProfilePsgPage, {
      psgId: psgId,
      old:old,
      selectedDay:this.sessionByDay
    });
    console.log("psg by id", psgId);
  }
  showSession() {
    console.log("sesssi alert", this.allSession)
    let alert = this.alertCtrl.create();
    alert.setTitle('Pilih Sesi');  
      this.allSession.forEach(session => {
        alert.addInput({type: 'radio',label: session.time,value: session.key});
      })
      alert.addButton('Kembali');
      alert.addButton({
        text: 'Pilih',
        handler: (data: any) => {
          this.loadingProvider.show();
          this.psgAva = [];
          this.testRadioOpen = false;
          this.testRadioResult = data;
          this.session = data;
          localStorage.setItem("sessionke",data)
          console.log('Radio data:', this.session);
          this.refreshList()
        }
      });
      alert.present();
  }

}
