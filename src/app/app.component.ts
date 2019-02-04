import { BoardingPage } from "./../pages/boarding/boarding";
import { Component } from "@angular/core";
import { Platform, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";
import * as firebase from "firebase";
import { FcmProvider } from "../providers/fcm/fcm";
//Pages
import { LoginPage } from "../pages/login/login";
import { MessagesPage } from "../pages/messages/messages";
import { InAppBrowser } from "../../node_modules/@ionic-native/in-app-browser/ngx";
import { DataProvider } from "../providers/data";
import { AppVersion } from "../../node_modules/@ionic-native/app-version";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage;

  constructor(
    platform: Platform,
    fcm: FcmProvider,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    keyboard: Keyboard,
    public alertCtrl: AlertController,
    private browser: InAppBrowser,
    public dataProvider: DataProvider,
    private appVersion: AppVersion,
  ) {
    platform.ready().then(() => {
      // comment if want to deploy
      if (localStorage.getItem("toggle") == "true") {
        if (firebase.auth().currentUser) {
          this.rootPage = MessagesPage;
        } else {this.rootPage = LoginPage;}
      } else {this.rootPage = BoardingPage;}

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      // access token for push Notification
      fcm.getToken();
      fcm.listenToNotifications()
    
      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.hideKeyboardAccessoryBar(true);
      this.appVersions()
    });              
  }
  appVersions() {
    this.dataProvider.appVersion().subscribe(app=>{
      this.versionNumber(app);
    })
  }
  async versionNumber(app) {
    console.log("version apps", await this.appVersion.getVersionNumber())
    if( await this.appVersion.getVersionNumber() == app){
      if (localStorage.getItem("toggle") == "true") {
        if (firebase.auth().currentUser) {
          this.rootPage = MessagesPage;
        } else {this.rootPage = LoginPage;}
      } else {this.rootPage = BoardingPage;}
    } else {this.updateApp()}
  }

  updateApp() {
    const alert = this.alertCtrl.create({
        title: "Perbaharui aplikasi",
        message: "Update baru sudah tersedia, anda harus mengupdate aplikasi SocioEmpathy",
        buttons: [{text: "Update",handler: () => {this.browser.create('https://play.google.com/store/apps/details?id=id.socio.socioempathy&hl=in')}}]
      })
      alert.present();
  }
}
