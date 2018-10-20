import { BoardingPage } from "./../pages/boarding/boarding";
import { Component } from "@angular/core";
import { Platform,ToastController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";

import { FcmProvider } from '../providers/fcm/fcm';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
//Pages
import { LoginPage } from "../pages/login/login";

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
    keyboard: Keyboard
  ) {
    if (localStorage.getItem("toggle") == "true") {
      this.rootPage = LoginPage;
      // this.rootPage = LovepointStorePage;
    } else {
      this.rootPage = BoardingPage;
    }
    platform.ready().then(() => {
      // access token for push Notification
      fcm.getToken()

      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
      .subscribe()
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.hideKeyboardAccessoryBar(true);
    });
  }
}
