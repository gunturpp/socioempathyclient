import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-termofcondition',
  templateUrl: 'termofcondition.html',
})
export class TermofconditionPage {

  constructor(public alertCtrl: AlertController, public dataProvider: DataProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermofconditionPagee');
  }
  agree() {
    this.dataProvider.updateCurrentUser().update({
      termofcondition: "setuju",
    }).then((success) => {
      this.navCtrl.setRoot(HomePage)
      this.thankyou();
    }).catch((error) => {
      console.log("gagal accept termofcondition")
    });
  }
  thankyou() {
    let confirm = this.alertCtrl.create({
      title: "Halo, Selamat datang di SocioEmpathy",
      message:
        "Curahkan isi hatimu dengan orang yang tepat dapat membantu meringankan pikiran kamu loh!. Silahkan klik tabs ditengah untuk konsultasi dengan konselor",
      buttons: [
        {
          text: "Okey",
          handler: () => {
            console.log("Disagree clicked");
          }
        }
      ]
    });
    confirm.present();
  }
}
