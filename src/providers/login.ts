import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { Login } from '../login';
import { NavController } from 'ionic-angular';
import { LoadingProvider } from './loading';
import { AlertProvider } from './alert';
import { DataProvider } from './data';
import { LoginPage } from '../pages/login/login';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LoginProvider {
  private navCtrl: NavController;

  constructor(public angularfireDatabase: AngularFireDatabase,public dataProvider: DataProvider, public loadingProvider: LoadingProvider, public alertProvider: AlertProvider, public zone: NgZone) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (Login.emailVerification) {
          if (user["emailVerified"]) {
            //Goto Home Page.
            this.zone.run(() => {
              this.navCtrl.setRoot(Login.homePage, { animate: false });
            });
            //Since we're using a TabsPage an NgZone is required.
          } else {
            //Goto Verification Page.
            this.navCtrl.setRoot(Login.verificationPage, { animate: false });
          }
        } else {
          //Goto Home Page.
          this.zone.run(() => {
            this.navCtrl.setRoot(Login.homePage, { animate: false });
          });
          //Since we're using a TabsPage an NgZone is required.
        }
      }
    });
  }

  // Hook this provider up with the navigationController.
  // This is important, so the provider can redirect the app to the views depending
  // on the status of the Firebase user.
  setNavController(navCtrl) {
    this.navCtrl = navCtrl;
  }
  // Login on Firebase given the email and password.
  emailLogin(email, password) {
    this.loadingProvider.show();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.dataProvider.getUser(firebase.auth().currentUser.uid).subscribe(user =>{
          console.log("user success2", success)
          if(user.role == "client") {
            localStorage.setItem('uid_client', firebase.auth().currentUser.uid);
            localStorage.setItem('email_client', firebase.auth().currentUser.email);
            
            this.loadingProvider.hide();
          } else {
            this.navCtrl.setRoot(LoginPage)
            localStorage.clear();
            localStorage.setItem("toggle", "true")      
            this.alertProvider.showErrorMessage("auth/not-client");
            this.loadingProvider.hide();
          }
        })
      })
      .catch((error) => {
        this.loadingProvider.hide();
        let code = error["code"];
        this.alertProvider.showErrorMessage(code);
      });
  }

  // Register user on Firebase given the email and password.
  register(displayName,email, password, phoneNumber, gender) {
    this.loadingProvider.show();
    localStorage.setItem('gender', gender);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem("displayName", displayName);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((success) => {
        this.loadingProvider.hide();
      })
      .catch((error) => {
        this.loadingProvider.hide();
        let code = error["code"];
        this.alertProvider.showErrorMessage(code);
      });
  }

  // Send Password Reset Email to the user.
  sendPasswordReset(email) {
    this.loadingProvider.show();
    firebase.auth().sendPasswordResetEmail(email)
      .then((success) => {
        this.loadingProvider.hide();
        this.alertProvider.showPasswordResetMessage(email);
      })
      .catch((error) => {
        this.loadingProvider.hide();
        let code = error["code"];
        this.alertProvider.showErrorMessage(code);
      });
  }

}
