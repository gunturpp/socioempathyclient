import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { ProfilePsgPage } from "../profile-psg/profile-psg";
import { LoadingProvider } from "../../providers/loading";

@IonicPage()
@Component({
  selector: 'page-choose-psg',
  templateUrl: 'choose-psg.html',
})
export class ChoosePsgPage {
  jumlahpsg: any;
  psgAva=[];
  day = JSON.stringify(this.navParams.get("selectedDay")).substring(1,11);
  session = this.navParams.get("psgBySession");
  sessionat = localStorage.setItem("sessionke",this.navParams.get("psgBySession"));
  psgAvailable=[];
  constructor(public loadingProvider: LoadingProvider,public dataProvider:DataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadingProvider.show();
    console.log('ionViewDidLoad ChoosePsgPage', this.session);
    // display psychologist by available session
    this.dataProvider.getListPsgBySessionAndDay(this.day,this.session).subscribe(listpsg=>{
      this.jumlahpsg = listpsg.length;
      for(let i = 0; i < listpsg.length; i++) {
        this.psgAvailable[i] = listpsg[i].key;
        console.log("id psg available",this.psgAvailable[i]);
        this.dataProvider.getPsgAvailable(this.psgAvailable[i]).subscribe(list => {
          this.loadingProvider.hide();
          console.log("list", list);
          this.psgAva[i] = list;
          console.log("psgAva", this.psgAva[i].schedule);
        });
      }
    })
   
  }
  ionViewDidEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }

  // getAvailable() {
  //   this.dataProvider.getAvailableSession()
  // }
  // view detail psg
  viewPsg(psgId){
    this.navCtrl.push(ProfilePsgPage, {
      psgId: psgId
    });
    console.log("psg by id", psgId);
  }

}
