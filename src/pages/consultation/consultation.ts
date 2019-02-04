import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { DataProvider } from '../../providers/data';
import { LoadingProvider } from '../../providers/loading';
import { AngularFireDatabase } from 'angularfire2/database';
import { BuyPacketPage } from '../buy-packet/buy-packet';
import { InvoiceListPage } from '../invoice-list/invoice-list';
import * as moment from "moment";

@Component({
  selector: 'page-consultation',
  templateUrl: 'consultation.html',
})
export class ConsultationPage {
  voucher:string;
  user: any;
  ticket: any;
  isUsedVoucher: any;
  packets=[];
  priceAfterDiscount=[];
  today = moment()
  expiredDate:any;

  constructor(public angularfireDatabase: AngularFireDatabase, public loadingProvider: LoadingProvider,public navCtrl: NavController,public alertCtrl: AlertController, public dataProvider: DataProvider, public navParams: NavParams) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationPage');
    this.loadingProvider.show();
    this.getTicket();
    this.callPacket();
  }
  invoicePage() {
    this.navCtrl.push(InvoiceListPage);
    this.tabsNone();
  }
  buyPacket(packet) {
    this.tabsNone()
    this.navCtrl.push(BuyPacketPage, {
      packet:packet
    });
  }
  callPacket() {
    this.packets = [{
        packets_name: "Paket Salam Kenal",
        ticket: 1,
        price: '100.000',
        discount: "50%",
        priceAfterDiscount: '50.000',
        session_time: "1 Jam",
        expired_date: 7, //in day
        code: "PSK"
      },{
        packets_name: "Paket Santai",
        ticket: 4,
        price: '400.000',
        discount: "60%",
        priceAfterDiscount: '160.000',
        session_time: "1 Jam",
        expired_date: 30, //in day
        code: "PS"
      },{
        packets_name: "Paket Ketenangan",
        ticket: 8,
        price: '800.000',
        discount: "70%",
        priceAfterDiscount: '240.000',
        session_time: "1 Jam",
        expired_date: 60, //in day
        code: "PK"
      }
    ]
  }
  getTicket() {
    this.dataProvider.getTickets().subscribe(tickets => {
      this.ticket = tickets;
      console.log('ticket',this.ticket);
      if(this.ticket.isExpired == false) {
        this.checkExpired(this.ticket.expiredDate)   
      } else {
        this.loadingProvider.hide();        
      }
    });
  }
  checkExpired(date) {
    var ticketDate = moment(date)
    this.expiredDate = ticketDate.diff(this.today,'days')
    console.log('expireddd', this.expiredDate)
    this.loadingProvider.hide();
  }

  checkCalendar(){
    if(this.ticket.ticketTotal > 0) {
      this.navCtrl.push(CalendarPage);
      this.tabsNone();
    } else {
      this.showConfirm();
    }
  }
  // enterVoucher() {
  //   this.loadingProvider.show();
  //   // get voucher by code
  //   this.dataProvider.getVoucherByCode(this.voucher).subscribe(value => {
  //     if(value.isExpired == false) {
  //         this.dataProvider.getVoucherByUser(this.voucher).subscribe(voucher=>{
  //           console.log(voucher)
  //           if (voucher == null) {
  //             var addTiket:number;
  //             var newCountActivated:number;
  //             addTiket = this.ticket + value.ticket;
  //             newCountActivated = value.countActivated + 1;
  //             console.log('addTiket',addTiket);   
  //             this.dataProvider.setVoucher(this.voucher).update({
  //               countActivated: newCountActivated
  //             })
  //             this.dataProvider.setUser(firebase.auth().currentUser.uid).update({
  //               ticketTotal: addTiket,
  //             })
  //             this.angularfireDatabase.object("/users/"+firebase.auth().currentUser.uid+'/vouchers/'+this.voucher).set({
  //               code:this.voucher,
  //               isUsed: true,
  //               created_at: new Date().toString()
  //             })
  //             console.log("Selamat anda mendapatkan "+ value.ticket+" tiket baru.");
  //             this.loadingProvider.hide();
  //           } else if(voucher.isUsed == true){
  //             alert("Maaf voucher sudah digunakan.");    
  //             this.loadingProvider.hide();
  //           }
  //         })
  //     } else {
  //       this.loadingProvider.hide();
  //       alert("Voucher sudah tidak berlaku.");
  //     }
  //   })
  // }
  showConfirm() {
    const alert = this.alertCtrl.create({
      title: 'Beli tiket?',
      subTitle: 'Anda belum memiliki tiket. Pilih paket atau masukkan voucher pada kolom di bawah.',
      buttons: ['OK']
    });
    alert.present();
  }
  tabsNone(){
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
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
