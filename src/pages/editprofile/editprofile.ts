import { DocverRegPage } from './../docver-reg/docver-reg';
import { DocverPage } from './../docver/docver';
import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, NavParams, App } from 'ionic-angular';
import { LogoutProvider } from '../../providers/logout';
import { LoadingProvider } from '../../providers/loading';
import { AlertProvider } from '../../providers/alert';
import { ImageProvider } from '../../providers/image';
import { DataProvider } from '../../providers/data';
import { AngularFireDatabase } from 'angularfire2/database';
import { Validator } from '../../validator';
import { Login } from '../../login';
import * as firebase from 'firebase';
import { ModalController, ViewController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  birth: any;
  private user: any;
  private alert;
  // HomePage
  // This is the page where the user is directed after successful login and email is confirmed.
  // A couple of profile management function is available for the user in this page such as:
  // Change name, profile pic, email, and password
  // The user can also opt for the deletion of their account, and finally logout.
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public modalCtrl : ModalController, public view: ViewController ,public alertCtrl: AlertController, public navParams: NavParams, public app: App,
    public logoutProvider: LogoutProvider, public loadingProvider: LoadingProvider, public imageProvider: ImageProvider,
    public angularfireDatabase: AngularFireDatabase, public alertProvider: AlertProvider, public dataProvider: DataProvider) {
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
      this.birth = this.user.birth
    });
    console.log("birthhh", this.birth)
  }

  // Change user's profile name, username, and description.
  setName() {
    this.alert = this.alertCtrl.create({
      title: 'Change Profile Name',
      message: "Please enter a new profile name.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Your Name',
          value: this.user.name
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let name = data["name"];
            // Check if entered name is different from the current name
            if (this.user.name != name) {
              // Check if name's length is more than five characters
              if (name.length >= Validator.profileNameValidator.minLength) {
                // Check if name contains characters and numbers only.
                if (Validator.profileNameValidator.pattern.test(name)) {
                  this.loadingProvider.show();
                  let profile = {
                    displayName: name,
                    photoURL: this.user.photoURL
                  };
                  // Update profile on Firebase
                  firebase.auth().currentUser.updateProfile(profile)
                    .then((success) => {
                      // Update userData on Database.
                      this.angularfireDatabase.object('/users/' + this.user.userId).update({
                        realName: name,
                        name: name
                      }).then((success) => {
                        Validator.profileNameValidator.pattern.test(name); //Refresh validator
                        this.alertProvider.showProfileUpdatedMessage();
                      }).catch((error) => {
                        this.alertProvider.showErrorMessage('profile/error-update-profile');
                      });
                    })
                    .catch((error) => {
                      // Show error
                      this.loadingProvider.hide();
                      let code = error["code"];
                      this.alertProvider.showErrorMessage(code);
                      if (code == 'auth/requires-recent-login') {
                        this.logoutProvider.logout();
                      }
                    });
                } else {
                  this.alertProvider.showErrorMessage('profile/invalid-chars-name');
                }
              } else {
                this.alertProvider.showErrorMessage('profile/name-too-short');
              }
            }
          }
        }
      ]
    }).present();
  }

  //Set username
  setUsername() {
    this.alert = this.alertCtrl.create({
      title: 'Change Username',
      message: "Please enter a new username.",
      inputs: [
        {
          name: 'username',
          placeholder: 'Your Username',
          value: this.user.username
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let username = data["username"];
            // Check if entered username is different from the current username
            if (this.user.username != username) {
              this.dataProvider.getUserWithUsername(username).subscribe((userList) => {
                if (userList.length > 0) {
                  this.alertProvider.showErrorMessage('profile/error-same-username');
                } else {
                  this.angularfireDatabase.object('/users/' + this.user.userId).update({
                    username: username
                  }).then((success) => {
                    this.alertProvider.showProfileUpdatedMessage();
                  }).catch((error) => {
                    this.alertProvider.showErrorMessage('profile/error-update-profile');
                  });
                }
              });
            }
          }
        }
      ]
    }).present();
  }

  //Set description
  setDescription() {
    this.alert = this.alertCtrl.create({
      title: 'Change Description',
      message: "Please enter a new description.",
      inputs: [
        {
          name: 'description',
          placeholder: 'Your Description',
          value: this.user.description
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let description = data["description"];
            // Check if entered description is different from the current description
            if (this.user.description != description) {
              this.angularfireDatabase.object('/users/' + this.user.userId).update({
                description: description
              }).then((success) => {
                this.alertProvider.showProfileUpdatedMessage();
              }).catch((error) => {
                this.alertProvider.showErrorMessage('profile/error-update-profile');
              });
            }
          }
        }
      ]
    }).present();
  }

  // Change user's email. Uses Validator.ts to validate the entered email. After, update the userData on database.
  // When the user changed their email, they have to confirm the new email address.
  setEmail() {
    this.alert = this.alertCtrl.create({
      title: 'Change Email Address',
      message: "Please enter a new email address.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Your Email Address',
          value: this.user.email
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let email = data["email"];
            //Check if entered email is different from the current email
            if (this.user.email != email) {
              //Check if email is valid.
              if (Validator.profileEmailValidator.pattern.test(email)) {
                this.loadingProvider.show();
                // Update email on Firebase.
                firebase.auth().currentUser.updateEmail(email)
                  .then((success) => {
                    // Update userData on Database.
                    this.angularfireDatabase.object('/users/' + this.user.userId).update({
                      email: email
                    }).then((success) => {
                      Validator.profileEmailValidator.pattern.test(email);
                      // Check if emailVerification is enabled, if it is go to verificationPage.
                      if (Login.emailVerification) {
                        if (!firebase.auth().currentUser.emailVerified) {
                          this.navCtrl.setRoot(Login.verificationPage);
                        }
                      }
                    }).catch((error) => {
                      this.alertProvider.showErrorMessage('profile/error-change-email');
                    });
                  })
                  .catch((error) => {
                    //Show error
                    this.loadingProvider.hide();
                    let code = error["code"];
                    this.alertProvider.showErrorMessage(code);
                    if (code == 'auth/requires-recent-login') {
                      this.logoutProvider.logout();
                    }
                  });
              } else {
                this.alertProvider.showErrorMessage('profile/invalid-email');
              }
            }
          }
        }
      ]
    }).present();
  }

  // Change user's phoneNumber
  setPhone() {
    this.alert = this.alertCtrl.create({
      title: 'Change phone Number',
      message: "Please enter a new Number.",
      inputs: [
        {
          name: 'phoneNumber',
          placeholder: 'Your phone Number',
          value: this.user.phoneNumber
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let phoneNumber = data["phoneNumber"];
            if (this.user.phoneNumber != phoneNumber) {
              console.log("nomer telpon",phoneNumber);
              // Check if number's length is more than 13 characters
              if (phoneNumber.length <= Validator.profileNumberValidator.maxLength && phoneNumber.length >= Validator.profileNumberValidator.minLength) {
                // Check if name contains characters and numbers only.
                if (Validator.profileNumberValidator.pattern.test(phoneNumber)) {
                  this.loadingProvider.show();
                  let profile = {
                    phoneNumber: phoneNumber,
                  };
                  // hasil dari comment10 baris dibawah
                  this.angularfireDatabase.object('/users/' + this.user.userId).update({
                    phoneNumber: phoneNumber
                  }).then((success) => {
                    Validator.profileNumberValidator.pattern.test(phoneNumber); //Refresh validator
                    this.alertProvider.showphoneUpdatedMessage();
                  }).catch((error) => {
                    this.alertProvider.showErrorMessage('profile/error-update-number');
                  });
                  // Update profile on Firebase
                  // firebase.auth().currentUser.updatePhoneNumber(phoneNumber)
                  //   .then((success) => {
                  //     // Update phoneNumber on Database.
                  //     this.angularfireDatabase.object('/users/' + this.user.userId).update({
                  //       phoneNumber: phoneNumber
                  //     }).then((success) => {
                  //       Validator.profileNumberValidator.pattern.test(phoneNumber); //Refresh validator
                  //       this.alertProvider.showphoneUpdatedMessage();
                  //     }).catch((error) => {
                  //       this.alertProvider.showErrorMessage('profile/error-update-number');
                  //     });
                  //   })
                  //   .catch((error) => {
                  //     // Show error
                  //     this.loadingProvider.hide();
                  //     let code = error["code"];
                  //     this.alertProvider.showErrorMessage(code);
                  //     if (code == 'auth/requires-recent-login') {
                  //       this.logoutProvider.logout();
                  //     }
                  //   });
                } else {
                  this.alertProvider.showErrorMessage('profile/invalid-chars-number');
                }
              } else {
                this.alertProvider.showErrorMessage('profile/number-too-short');
              }
            }          }
        }
      ]
    }).present();
  }
  // Change user's City
  setCity() {
    
  }
  // Change user's Profession
  setProfession() {
    this.alert = this.alertCtrl.create({
      title: 'Change Profession',
      message: "Please enter a new Profession.",
      inputs: [
        {
          name: 'profession',
          placeholder: 'Your Profession',
          value: this.user.profession
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let profession = data["profession"];
            if (this.user.profession != profession) {
              // Check if profession length is more than 25 characters and less than 2 characters
              if (profession.length <= Validator.profileProfessionValidator.maxLength && profession.length >= Validator.profileProfessionValidator.minLength) {
                // Check if profession contains characters.
                if (Validator.profileProfessionValidator.pattern.test(profession)) {
                  this.loadingProvider.show();
                  let profile = {
                    profession: profession,
                  };
                  this.angularfireDatabase.object('/users/' + this.user.userId).update({
                    profession: profession
                  }).then((success) => {
                    Validator.profileProfessionValidator.pattern.test(profession); //Refresh validator
                    this.alertProvider.showprofessionUpdatedMessage();
                  }).catch((error) => {
                    this.alertProvider.showErrorMessage('profile/error-update-profession');
                  });
                } else {
                  this.alertProvider.showErrorMessage('profile/invalid-chars-number');
                }
              } else {
                this.alertProvider.showErrorMessage('profile/number-too-short');
              }
            }          }
        }
      ]
    }).present();
  }
  // Change user's Status
  setStatus() {
    this.alert = this.alertCtrl.create();
    this.alert.setTitle('Select Status');
    this.alert.addInput({type: 'radio', label: 'Single', value: 'Single', checked: true});
    this.alert.addInput({type: 'radio', label: 'Married', value: 'Married'});
    this.alert.addButton('Cancel');
    this.alert.addButton({
      text: 'Save',
      handler: data => {
        let status = data["status"];
        if (this.user.phoneNumber != status) {
          console.log(data);
          let status = data;
          this.loadingProvider.show();
          let profile = {
            status: status,
          };
          this.angularfireDatabase.object('/users/' + this.user.userId).update({
            status: status
          }).then((success) => {
            this.alertProvider.showstatusUpdatedMessage();
          }).catch((error) => {
            this.alertProvider.showErrorMessage('profile/error-update-status');
          });
        }
      }
    }).present();
  }
  saveProfile(){
    // trigger birth update
    this.setBirth();
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
    this.navCtrl.last();

  }

  // Change user's Birthdate
  setBirth() {
    let birth = this.birth;
    if (this.user.birth != birth) {
      this.loadingProvider.show();
      let profile = {
        birth: this.birth,
      };
      this.angularfireDatabase.object('/users/' + this.user.userId).update({
        birth: this.birth
      }).then((success) => {
        // this.alertProvider.showbirthUpdatedMessage();
        console.log("update birth success");      
      }).catch((error) => {
        this.alertProvider.showErrorMessage('profile/error-update-birth');
      });
    }
  }
  
  // Change user's password, this option only shows up for users registered via Firebase.
  // The currentPassword is first checked, after which the new password should be entered twice.
  // Uses password validator from Validator.ts.
  setPassword() {
    this.alert = this.alertCtrl.create({
      title: 'Change Password',
      message: "Please enter a new password.",
      inputs: [
        {
          name: 'currentPassword',
          placeholder: 'Current Password',
          type: 'password'
        },
        {
          name: 'password',
          placeholder: 'New Password',
          type: 'password'
        },
        {
          name: 'confirmPassword',
          placeholder: 'Confirm Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let currentPassword = data["currentPassword"];
            let credential = firebase.auth.EmailAuthProvider.credential(this.user.email, currentPassword);
            // Check if currentPassword entered is correct
            this.loadingProvider.show();
            firebase.auth().currentUser.reauthenticateWithCredential(credential)
              .then((success) => {
                let password = data["password"];
                // Check if entered password is not the same as the currentPassword
                if (password != currentPassword) {
                  if (password.length >= Validator.profilePasswordValidator.minLength) {
                    if (Validator.profilePasswordValidator.pattern.test(password)) {
                      if (password == data["confirmPassword"]) {
                        // Update password on Firebase.
                        firebase.auth().currentUser.updatePassword(password)
                          .then((success) => {
                            this.loadingProvider.hide();
                            Validator.profilePasswordValidator.pattern.test(password);
                            this.alertProvider.showPasswordChangedMessage();
                          })
                          .catch((error) => {
                            this.loadingProvider.hide();
                            let code = error["code"];
                            this.alertProvider.showErrorMessage(code);
                            if (code == 'auth/requires-recent-login') {
                              this.logoutProvider.logout();
                            }
                          });
                      } else {
                        this.alertProvider.showErrorMessage('profile/passwords-do-not-match');
                      }
                    } else {
                      this.alertProvider.showErrorMessage('profile/invalid-chars-password');
                    }
                  } else {
                    this.alertProvider.showErrorMessage('profile/password-too-short');
                  }
                }
              })
              .catch((error) => {
                //Show error
                this.loadingProvider.hide();
                let code = error["code"];
                this.alertProvider.showErrorMessage(code);
              });
          }
        }
      ]
    }).present();
  }
}