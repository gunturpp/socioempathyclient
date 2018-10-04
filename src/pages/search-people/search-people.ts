import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { LoadingProvider } from '../../providers/loading';
import { AlertProvider } from '../../providers/alert';
import { FirebaseProvider } from '../../providers/firebase';
import { UserInfoPage } from '../user-info/user-info';
import { Message2Page } from '../message2/message2';

@Component({
  selector: 'page-search-people',
  templateUrl: 'search-people.html'
})
export class SearchPeoplePage {
  accLength: any;
  private exclude: any;
  private accounts: any;
  private alert: any;
  private account: any;
  //excludedIds : id list (friends id and current user id)
  private excludedIds: any;
  private requestsSent: any;
  private friendRequests: any;
  private searchUser: any;
  // SearchPeoplePage
  // This is the page where the user can search for other users and send a friend request.
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public loadingProvider: LoadingProvider,
    public alertCtrl: AlertController, public alertProvider: AlertProvider, public firebaseProvider: FirebaseProvider) { }

  ionViewDidLoad() {
    // Initialize
    this.loadingProvider.show();
    this.searchUser = '';
    // Get all users.
    this.dataProvider.getUsers().subscribe((accounts) => {
      this.loadingProvider.hide();
      this.accounts = accounts;
      this.accLength = this.accounts.length;
      // console.log("friend length", accounts);
      console.log("friendlist profile", this.accounts);
      this.dataProvider.getCurrentUser().subscribe((account) => {
        // Add own userId as exludedIds.
        this.excludedIds = [];
        this.exclude = this.excludedIds.length;
        console.log("excludeids : ", this.excludedIds);
        console.log("exclude : ", this.exclude);
        this.account = account;
        if (this.excludedIds.indexOf(account.key) == -1) {
          this.excludedIds.push(account.key);
        }
        // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
        // console.log("Account : "+JSON.stringify(account));
        if (account.friends) {
          account.friends.forEach(friend => {
            switch (friend.role){
              case "Client":
                if (this.excludedIds.indexOf(friend) == -1){
                  this.excludedIds.push(friend);
                }
                break;
            }

          });
        }
        // Get requests of the currentUser.
        this.dataProvider.getRequests(account.key).subscribe((requests) => {
          this.requestsSent = requests.requestsSent;
          this.friendRequests = requests.friendRequests;
        });
      });
    });
  }

  // Back
  back() {
    this.navCtrl.pop();
  }

  // Get the status of the user in relation to the logged in user.
  getStatus(user) {
    // Returns:
    // 0 when user can be requested as friend.
    // 1 when a friend request was already sent to this user.
    // 2 when this user has a pending friend request.
    if (this.requestsSent) {
      for (var i = 0; i < this.requestsSent.length; i++) {
        if (this.requestsSent[i] == user.key) {
          return 1;
        }
      }
    }
    if (this.friendRequests) {
      for (var j = 0; j < this.friendRequests.length; j++) {
        if (this.friendRequests[i] == user.key) {
          return 2;
        }
      }
    }
    return 0;
  }

  // Send friend request.
  sendFriendRequest(user) {
    this.alert = this.alertCtrl.create({
      title: 'Send Friend Request',
      message: 'Do you want to send friend request to <b>' + user.name + '</b>?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Send',
          handler: () => {
            this.firebaseProvider.sendFriendRequest(user.userId);
          }
        }
      ]
    }).present();
  }

  // Cancel friend request sent.
  cancelFriendRequest(user) {
    this.alert = this.alertCtrl.create({
      title: 'Friend Request Pending',
      message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Delete',
          handler: () => {
            this.firebaseProvider.cancelFriendRequest(user.key);
          }
        }
      ]
    }).present();
  }

  // Accept friend request.
  acceptFriendRequest(user) {
    this.alert = this.alertCtrl.create({
      title: 'Confirm Friend Request',
      message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Reject Request',
          handler: () => {
            this.firebaseProvider.deleteFriendRequest(user.key);
          }
        },
        {
          text: 'Accept Request',
          handler: () => {
            this.firebaseProvider.acceptFriendRequest(user.key);
          }
        }
      ]
    }).present();
  }

  // View user.
  viewUser(userId) {
    this.navCtrl.push(UserInfoPage, { userId: userId });
  }

}