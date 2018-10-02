import { Component } from '@angular/core';
import { NavController, NavParams, App, ActionSheetController  } from 'ionic-angular';
import { SearchPeoplePage } from '../search-people/search-people';
import { UserInfoPage } from '../user-info/user-info';
import { MessagePage } from '../message/message';
import { RequestsPage } from '../requests/requests';
import { DataProvider } from '../../providers/data';
import { LoadingProvider } from '../../providers/loading';
import * as firebase from 'firebase';

@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {
  private friends: any;
  private friendRequests: any;
  private searchFriend: any;
  // FriendsPage
  // This is the page where the user can search, view, and initiate a chat with their friends.
  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public app: App, public dataProvider: DataProvider,
    public loadingProvider: LoadingProvider) { }

  ionViewDidLoad() {
    // Initialize
    this.searchFriend = '';
    this.loadingProvider.show();

    // Get friendRequests to show friendRequests count.
    this.dataProvider.getRequests(firebase.auth().currentUser.uid).subscribe((requests) => {
      this.friendRequests = requests.length;
      // console.log("friendrequest",this.friendRequests);
    });

    // Get user data on database and get list of friends.
    this.dataProvider.getCurrentUser().subscribe((account) => {
      if (account.friends) {
        for (var i = 0; i < account.friends.length; i++) {
          this.dataProvider.getUser(account.friends[i]).subscribe((friend) => {
            this.addOrUpdateFriend(friend);
          });
        }
      } else {
        this.friends = [];
      }
      this.loadingProvider.hide();
    });
  }

  // hold button
  pressEvent(e) {
    this.openMenu();
  }
  // Add or update friend data for real-time sync.
  addOrUpdateFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (var i = 0; i < this.friends.length; i++) {
        if (this.friends[i].$key == friend.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.friends[index] = friend;
      } else {
        this.friends.push(friend);
      }
    }
  }

  // Proceed to searchPeople page.
  searchPeople() {
    this.app.getRootNav().push(SearchPeoplePage);
  }

  // Proceed to requests page.
  manageRequests() {
    this.app.getRootNav().push(RequestsPage);
  }

  // Proceed to userInfo page.
  viewUser(userId) {
    this.app.getRootNav().push(UserInfoPage, { userId: userId });
  }

  // Proceed to chat page.
  message(userId) {
    this.app.getRootNav().push(MessagePage, { userId: userId });
  }

  // action sheet
   openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Options',
      buttons: [
        {
          text: 'Delete Friend',
          role: 'Delete',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Block',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
