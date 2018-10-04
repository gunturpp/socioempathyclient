import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { TransactionPage } from "../transaction/transaction";
import { TopupPage } from "../topup/topup";

@Component({
  selector: "page-lovepoint-store",
  templateUrl: "lovepoint-store.html"
})
export class LovepointStorePage {

  status: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LovepointStorePage");
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

  informationLovepoints() {
    this.status = true;
  }
  close() {
    this.status = false;
  }
  menuTopUp(){
    this.navCtrl.push(TopupPage);
  }
  menuTransactions(){
    this.navCtrl.push(TransactionPage);
  }
}