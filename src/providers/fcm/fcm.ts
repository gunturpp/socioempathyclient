import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FCM } from '@ionic-native/fcm';
import { ToastController } from 'ionic-angular';


@Injectable()
export class FcmProvider {

  constructor(
    public afd: AngularFireDatabase,
    public fcmNative: FCM,
    public toastCtrl: ToastController
  ) {}
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
       this.presentToast(data.body)
      };
    });
  }
  presentToast(body) {
    const toast = this.toastCtrl.create({
      message: 'New Message '+body,
      duration: 3000
    });
    toast.present();
  }
}