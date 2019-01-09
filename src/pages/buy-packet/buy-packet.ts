import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { ImageProvider } from '../../providers/image';
import { DataProvider } from '../../providers/data';
import { LoadingProvider } from '../../providers/loading';
import { Camera } from "@ionic-native/camera";
import { ConsultationPage } from '../consultation/consultation';

@Component({
  selector: 'page-buy-packet',
  templateUrl: 'buy-packet.html',
})
export class BuyPacketPage {
  private alert;
  packet = this.navParams.get("packet");
  invoice:string;
  today= moment().format('D MMM YYYY')
  day = moment().format('HHmmssDDMMYYYY')
  isPopup = false;
  isFinishPayment:boolean;
  user: any;
  newInvoice: { userId: any; invoice: string; code: any; dateCreated: string; confirmationAdmin: string; };
  constructor( public camera: Camera,public loadingProvider: LoadingProvider,public dataProvider: DataProvider, public imageProvider: ImageProvider,public alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadingProvider.show();
    this.generateInvoice();
    this.dataProvider.getCurrentUser().subscribe((user) => {
      this.loadingProvider.hide();
      this.user = user;
    });
  }
  ionViewWillLeave(){
   this.tabsOn();
  }
  btnCancel() {
    this.isPopup = false;

  }
  generateInvoice() {
    //string = SOCIO + Fractional Second minute second hour
    const time = moment().format('SSSmmssHH')
    this.invoice = 'SOCIO'+ time
  }
  uploadNota() {
    // this.isPopup = true;
    this.goUpload();
  }
  finish() {
    this.isFinishPayment = true;
  }
  goUpload() {
    this.newInvoice = {
      userId: this.user.userId,
      invoice: this.invoice,
      code: this.packet.code,
      dateCreated: new Date().toString(),
      confirmationAdmin: 'waiting'
    }
    // Ask if the user wants to take a photo or choose from photo gallery.
    this.alert = this.alertCtrl.create({
      title: 'Unggah bukti transfer',
      message: 'ingin unggah foto dari galeri?',
      buttons: [
        {
          text: 'Ambil foto',
          handler: () => {
            
            // Call imageProvider to process, upload, and update user photo.
            this.imageProvider.setNotaPhoto(this.newInvoice, this.camera.PictureSourceType.CAMERA);
            this.navCtrl.setRoot(ConsultationPage);
            this.tabsOn();
          }
        },{
          text: 'Ambil dari Galeri',
          handler: () => {
            // Call imageProvider to process, upload, and update user photo.
            this.imageProvider.setNotaPhoto(this.newInvoice, this.camera.PictureSourceType.PHOTOLIBRARY);
            this.navCtrl.setRoot(ConsultationPage);
            this.tabsOn();
          }
        },{
          text: 'Kembali',
          handler: data => { }
        },
      ]
    }).present();
  }
  tabsOn() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'flex';
        });
    }
  }
}
