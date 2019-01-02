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
    this.getKeySchedulingByDay()
    // display psychologist by available session
    if(this.session == "noSession") {
      this.warning = "Pilih Sesi";
      this.loadingProvider.hide();
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
        this.psgAva[i].old = moment(list.born).toNow(true)
        this.loadingProvider.hide();
      });
    }
  })
  console.log("psgAva", this.psgAva);
  }
  getKeySchedulingByDay() {
    this.dataProvider.getKeySchedulingByDay(this.sessionByDay).subscribe(sessions=>{
      console.log("key sesinya di session", sessions);
      this.allSession = sessions;
      this.loadingProvider.hide();
    })
  }
  // view detail psg
  viewPsg(psgId,old){
    this.navCtrl.push(ProfilePsgPage, {
      psgId: psgId,
      old:old
    });

    console.log("psg by id", psgId);
  }
  showSession() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Pilih Sesi');  
      this.allSession.forEach(session => {
        alert.addInput({type: 'radio',label: session.key,value: session.key});
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
