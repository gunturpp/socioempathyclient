import { FirebaseProvider } from "./../../providers/firebase";
import { Component } from "@angular/core";
import {
  AlertController,
  NavController,
  NavParams,
  App,
  ActionSheetController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { LoadingProvider } from "../../providers/loading";
import { DataProvider } from "../../providers/data";
import { MessagePage } from "../message/message";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";
import * as moment from "moment";

@Component({
  selector: "page-messages",
  templateUrl: "messages.html"
})
export class MessagesPage {
  mainIdConversation;
  profilePsg =[];
  inputSeconds = [];
  hasStarted: boolean;
  hasFinished: boolean;
  remainingTime = [];
  displayTime = [];
  runTimer: boolean;
  timeInSeconds: any;
  conversationId: any;
  currentUser = firebase.auth().currentUser.uid;
  psgId: any;
  bookingAccept: any;
  phones: any;
  roles: any;
  iterate = 0;
  z: any;
  time: any;
  increment=0;

  conversation: Observable<any[]>;
  // conversation: any;
  private conversations = [];
  private conversationsById: any;
  private updateDateTime: any;
  private searchFriend: any;
  bookSession=[];
  bookingDay=[];
  bookConfirmation=[];
  inSession=[];

  // MessagesPage
  // This is the page where the user can see their current conversations with their friends.
  // The user can also start a new conversation.
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularfireDatabase: AngularFireDatabase,
    public loadingProvider: LoadingProvider,
    public app: App,
    public dataProvider: DataProvider,
    public firebaseProvider: FirebaseProvider,
    public alertCtrl: AlertController
  ) {
    this.roles = localStorage.getItem("registerRole");
    this.phones = localStorage.getItem("phoneNumber");
  }

  // close timer countdown
  ionViewDidLoad() {
    // var datt = new Date().toString()
    // this.angularfireDatabase
    //       .object("/vouchers/"+ "KAMIBEREMPATI")
    //       .set(
    //           {
    //           code:'KAMIBEREMPATI',
    //           created_at: datt,
    //           isExpired: false,
    //           countActivated:0,
    //           ticket:2
    //           }
    //       )
    // Create userData on the database if it doesn't exist yet.

    this.devicesTokenUpdate(); 
    this.searchFriend = "";
    this.loadingProvider.show();

    // Get info of conversations of current logged in user.
    this.dataProvider.getConversations().subscribe(conversations => {
      if (conversations.length > 0) {
        conversations.forEach(conversation => {
          console.log("conversation", conversation.key);
          this.dataProvider.getPsgAvailable(conversation.key).subscribe(psgProfile => {
              this.profilePsg.push(psgProfile);
            });
          if (conversation.key) {
            // Get conversation partner info.
            this.dataProvider.getConversationbyCurrentUser(conversation.key).subscribe(listConv => {
                // Get conversation info.
                listConv.forEach(listConversations => { 
                  listConversations.key = conversation.key;
                  this.mainIdConversation = listConversations;
                  this.dataProvider.getConversation(listConversations.conversationId).subscribe(obj => {
                      // console.log("obj", obj);
                      // Get last message of conversation.
                      this.bookingDay[this.increment] = obj.scheduleId;
                      this.bookSession[this.increment] = obj.sessionke;
                      if(obj.confirmation) {
                        this.bookConfirmation[this.increment] = obj.confirmation
                      }
                      if(obj.inSession) {
                        this.inSession[this.increment] = obj.inSession
                      }

                      this.countdown(obj.scheduleId, obj.sessionke,this.increment);
                      this.increment++;

                      let lastMessage = obj.messages[obj.messages.length - 1];
                      listConversations.date = lastMessage.date;
                      listConversations.sender = lastMessage.sender;
                      // Set unreadMessagesCount
                      listConversations.unreadMessagesCount =
                        obj.messages.length - listConversations.messagesRead;
                      // Process last message depending on messageType.
                      if (lastMessage.type == "text") {
                        if (
                          lastMessage.sender == firebase.auth().currentUser.uid
                        ) {
                          listConversations.message =
                            "You: " + lastMessage.message;
                        } else {
                          listConversations.message = lastMessage.message;
                        }
                      } else {
                        if (
                          lastMessage.sender == firebase.auth().currentUser.uid
                        ) {
                          listConversations.message =
                            "You sent a photo message.";
                        } else {
                          listConversations.message =
                            "has sent you a photo message.";
                        }
                      }
                      // Add or update listConversations.
                      this.addOrUpdateConversation(listConversations);
                    });
                });
              });
          }
        });
        this.loadingProvider.hide();
      } else {
        this.conversations = [];
        this.loadingProvider.hide();
      }
    });

    // Update conversations' last active date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function() {
        if (that.conversations) {
          that.conversations.forEach(conversation => {
            let date = conversation.date;
            conversation.date = new Date(date);
          });
        }
      }, 60000);
    }
  }
  countdown(date,time,index){
    var b = moment(date+' '+time);
    setInterval(() => { 
      var a = moment();
      this.timeInSeconds = Math.round(b.diff(a)/1000);
      this.displayTime[index] = this.getSecondsAsDigitalClock(this.timeInSeconds)
      // console.log("this.displayTime[index]", index); //just uncoment to show countdown in console	
   }, 1000);
  }
  getSecondsAsDigitalClock(inputSeconds: number) {	
      var sec_num = inputSeconds; // don't forget the second param	
      if (sec_num < 0) {	
        return 'timeover';	
      } else {	
      // console.log("milisecond", sec_num); //just uncoment to show countdown in console	
      var days = Math.floor(sec_num / 86400); // 3600 * 24	
      var hours = Math.floor(sec_num / 3600) - days * 24;	
      var temphours = Math.floor(sec_num / 3600);	
      var minutes = Math.floor((sec_num - temphours * 3600) / 60);	
      // console.log("minutes", minutes);	
      var seconds = Math.floor(sec_num - temphours * 3600 - minutes * 60);	
      var hoursString = "";	
      var minutesString = "";	
      var secondsString = "";	
      var daysString = "";	
      hoursString = hours < 10 ? "0" + hours : hours.toString();	
      minutesString = minutes < 10 ? "0" + minutes : minutes.toString();	
      secondsString = seconds < 10 ? "0" + seconds : seconds.toString();	
      daysString = days.toString();	
      // return daysString + "days ";	
      if (daysString == "0") {	
        return hoursString + ":" + minutesString + ":" + secondsString;	
      } else {	
        return (daysString +" days " +hoursString +":" +minutesString +":" + secondsString);	
      }	
    }	
  }

  devicesTokenUpdate() {
    this.dataProvider.updateDevicesToken(localStorage.getItem("devices_token"))
    .update({
      userId: firebase.auth().currentUser.uid
    })
    this.dataProvider.updateCurrentUser()
    .update({
      devices_token: localStorage.getItem("devices_token")
    })
  }
  // delete personal message
  deleteConversation(conversation) {
    // realtime load data
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.dataProvider.deleteConversations().remove(conversation);
  }

  // Add or update conversation for real-time sync based on our observer, sort by active date.
  addOrUpdateConversation(conversation) {
    if (!this.conversations) {
      this.conversations = [conversation];
    } else {
      var index = -1;
      for (var i = 0; i < this.conversations.length; i++) {
        if (this.conversations[i].key == conversation.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.conversations[index] = conversation;
      } else {
        this.conversations.push(conversation);
      }
      // Sort by last active date.
      this.conversations.sort((a: any, b: any) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        if (date1 > date2) {
          return -1;
        } else if (date1 < date2) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }


  // Create userData on the database if it doesn't exist yet.


  // Open chat with friend.
  message(psgId, idConversation,i) {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
    this.navCtrl.push(MessagePage, {
      psgId: psgId,
      idConversation: idConversation,
      session: this.bookSession[i],
      day:this.bookingDay[i],
      confirmation: this.bookConfirmation[i],
      inSession:this.inSession[i]
    });
  }

  // Return class based if conversation has unreadMessages or not.
  hasUnreadMessages(conversation) {
    // console.log("hasunread", conversation);
    if (conversation.unreadMessagesCount > 0) {
      return "bold";
    } else return "";
  }
  // alert
  showConfirm(i) {
    let confirm = this.alertCtrl.create({
      title: "Hapus Obrolan?",
      message:
        "Setelah anda menghapus obrolan,histori akan hilang, anda yakin?",
      buttons: [
        {
          text: "Tidak",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Iya",
          handler: () => {
            this.deleteConversation(i);
          }
        }
      ]
    });
    confirm.present();
  }
  //hold button
  pressEvent(e) {
    this.openMenu(e);
  }
  // action sheet
  // press button
  openMenu(deleteChat) {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Opsi",
      buttons: [
        {
          text: "Delete",
          role: "Delete",
          handler: () => {
            this.showConfirm(deleteChat);
          }
        },
        // ,{
        //   text: 'Block',
        //   handler: () => {
        //     console.log('Archive clicked');
        //   }
        // }
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }
}
