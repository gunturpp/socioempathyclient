import { BoardingPage } from "./../pages/boarding/boarding";
import { Component } from "@angular/core";
import { Platform, ToastController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";
import * as firebase from "firebase";
import { FcmProvider } from "../providers/fcm/fcm";
import { Subject } from "rxjs/Subject";
import { tap } from "rxjs/operators";
//Pages
import { LoginPage } from "../pages/login/login";
import { MessagesPage } from "../pages/messages/messages";
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage;

  constructor(
    platform: Platform,
    fcm: FcmProvider,
    toastCtrl: ToastController,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    keyboard: Keyboard,
    private push: Push
  ) {
    if (localStorage.getItem("toggle") == "true") {
      if (firebase.auth().currentUser) {
        this.rootPage = MessagesPage;
      } else {
        this.rootPage = LoginPage;
      }
      // this.rootPage = LovepointStorePage;
    } else {
      this.rootPage = BoardingPage;
    }
    platform.ready().then(() => {
      // // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // access token for push Notification
      fcm.getToken();
      fcm.listenToNotifications()

      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.hideKeyboardAccessoryBar(true);
    });              
  }
}
