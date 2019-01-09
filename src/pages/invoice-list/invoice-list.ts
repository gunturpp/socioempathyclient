import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import * as moment from "moment";


@Component({
  selector: 'page-invoice-list',
  templateUrl: 'invoice-list.html',
})
export class InvoiceListPage {
  invoices=[];
  date=[];

  constructor(public dataProvider: DataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceListPage');
    this.getLisInvoicetByUser();
  }
  getLisInvoicetByUser() {
    let i = 0;
    this.dataProvider.getInvoiceByUser().subscribe(invoice => {
      this.invoices = invoice;
      invoice.forEach(getdate => {
        this.date[i] = moment(getdate.dateCreated).format('D MMM YYYY HH:mm')
        console.log("this.date[i]", this.date[i])
        i+=1;
      });
      console.log("invoices", this.invoices)
    })
  }
  ionViewWillLeave(){
    this.tabsFlex();
   }
   tabsFlex() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'flex';
        });
    }
  } 
}
