import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, App } from 'ionic-angular';
import { LogoutProvider } from '../../providers/logout';
import { LoadingProvider } from '../../providers/loading';
import { AlertProvider } from '../../providers/alert';
import { ImageProvider } from '../../providers/image';
import { DataProvider } from '../../providers/data';
import { AngularFireDatabase } from 'angularfire2/database';
import { Login } from '../../login';
import { Camera } from '@ionic-native/camera';
import { ModalController, ViewController } from 'ionic-angular';
import { EditprofilePage } from '../../pages/editprofile/editprofile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private user: any;
  private alert;
  // HomePage
  // This is the page where the user is directed after successful login and email is confirmed.
  // A couple of profile management function is available for the user in this page such as:
  // Change name, profile pic, email, and password
  // The user can also opt for the deletion of their account, and finally logout.
  constructor(public navCtrl: NavController, public modalCtrl : ModalController, public view: ViewController ,public alertCtrl: AlertController, public navParams: NavParams, public app: App,
    public logoutProvider: LogoutProvider, public loadingProvider: LoadingProvider, public imageProvider: ImageProvider,
    public angularfireDatabase: AngularFireDatabase, public alertProvider: AlertProvider, public dataProvider: DataProvider, public camera: Camera) {
    this.logoutProvider.setApp(this.app);
  }

  ionViewDidLoad() {
    // Observe the userData on database to be used by our markup html.
    // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
    this.loadingProvider.show();
    this.dataProvider.getCurrentUser().subscribe((user) => {
      this.loadingProvider.hide();
      this.user = user;
      console.log("usernya",this.user);
      
    });
  }

  // Change user's profile photo. Uses imageProvider to process image and upload on Firebase and update userData.
  setPhoto() {
    // Ask if the user wants to take a photo or choose from photo gallery.
    this.alert = this.alertCtrl.create({
      title: 'Set Profile Photo',
      message: 'Do you want to take a photo or choose from your photo gallery?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            // Call imageProvider to process, upload, and update user photo.
            this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            // Call imageProvider to process, upload, and update user photo.
            this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.CAMERA);
          }
        }
      ]
    }).present();
  }
  
  // go to edit profile
  editProfile() {
    this.app.getRootNav().push(EditprofilePage);
    console.log("edit");

  }

}