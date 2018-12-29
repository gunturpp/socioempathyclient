import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from "firebase";
import { DataProvider } from "../../providers/data";
import { FCM } from '@ionic-native/fcm';



@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: Firebase,
    public afd: AngularFireDatabase,
    public dataProvider: DataProvider,
    public fcmNative: FCM,


  ) {}

  //Notifications
   //end notifications.

  // Get permission from the user
  async getToken() {
    
    this.fcmNative.getToken().then(token=>{
      console.log("token",token);
      return this.saveTokenToDatabaseRealtime (token)
    })
   }

  // Save the token to DatabaseRealtime 
  private saveTokenToDatabaseRealtime (token) {
    if (!token) return;
    // create db Notifications( devices_token
    const devicesRef = this.afd.object("/devices_token/"+token)
    localStorage.setItem('devices_token', token);
    const docData = { 
      token,
      userId:"uid_client" ,
    }

  
    return devicesRef.set(docData)
  }

  // Listen to incoming FCM messages
  async listenToNotifications() {
    return this.fcmNative.onNotification().subscribe(data=>{
      if(data.wasTapped){
        console.log("Received in background");
        console.log(data);
      } else {
       console.log("Received in foreground");
       console.log(data);
      };
    });
  }
}