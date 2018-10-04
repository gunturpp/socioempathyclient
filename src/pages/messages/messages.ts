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
import { NewMessagePage } from "../new-message/new-message";
import { MessagePage } from "../message/message";
import * as firebase from "firebase/app";
import { Message2Page } from "../message2/message2";
import { concat } from "rxjs/observable/concat";
import { Observable } from "rxjs/Observable";
import * as moment from "moment";
import { timestamp } from "rxjs/operators";

@Component({
  selector: "page-messages",
  templateUrl: "messages.html"
})
export class MessagesPage {
  timeover: string;
  mainIdConversation;
  profilePsg: any;
  bookSession: any;
  inputSeconds = [];
  bookingDay: any;
  hasStarted: boolean;
  hasFinished: boolean;
  remainingTime = [];
  displayTime = [];
  runTimer: boolean;
  time: any;
  timeInSeconds: any;
  conversationId: any;
  currentUser = firebase.auth().currentUser.uid;
  psgId: any;
  bookingAccept: any;
  phones: any;
  roles: any;
  iterate = 0;
  z: any;
  i(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  conversation: Observable<any[]>;
  // conversation: any;
  private conversations = [];
  private conversationsById: any;
  private updateDateTime: any;
  private searchFriend: any;

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
  countdown() {
    let bookDay, bookMonth, bookYear, bookSec, bookMin, bookHour;
    bookDay = this.bookingDay.substring(9, 11);
    bookMonth = this.bookingDay.substring(6, 8);
    bookYear = this.bookingDay.substring(1, 5);
    this.bookSession;
    switch (this.bookSession) {
      case "session1":
        bookHour = 8;
        break;
      case "session2":
        bookHour = 10;
        break;
      case "session3":
        bookHour = 12;
        break;
      case "session4":
        bookHour = 14;
        break;
      case "session5":
        bookHour = 22;
        break;
      default:
        return 0;
    }
    console.log("sesi", bookHour);

    // current date
    let sec, min, hour, day, days, month, year, spareDay, now, later;
    var nowww = moment();
    var dayyy = nowww.day();
    var jam = moment().hours() + 1;
    year = moment().year();
    month = moment().month() + 1;
    days = nowww.date();
    hour = (bookHour - jam) * 3600;
    min = (60 - moment().minutes()) * 60;
    sec = 60 - moment().seconds();
    // console.log("hour banget", min, hour, jam, bookHour, month);

    // console.log("melesekon", moment().seconds(), moment().minutes(), moment().hours());

    // booking date
    later = moment([bookYear, bookMonth, bookDay]);
    now = moment([year, month, days]);
    spareDay = later.diff(now, "days");
    console.log("booking day later", bookDay, bookMonth, bookYear);
    console.log("booking day now", days, month, year);
    console.log("spare day", spareDay);

    // waktunya countdownnya masih sama tiap list
    day = spareDay * 86400;
    console.log("times", day, hour, min, sec);
    this.inputSeconds[this.iterate] = day + hour + min + sec;
    console.log("inputseconds", this.inputSeconds[this.iterate]);
    localStorage.setItem("inputSec", JSON.stringify(this.inputSeconds));
    this.iterate++;
  }
  /* Initialize and setup the time for question */
  initTimer() {
    // Pomodoro is usually for 25 minutes
    this.timeInSeconds = JSON.parse(localStorage.getItem("inputSec"));
    console.log("init timer", this.timeInSeconds);
    for (var i = 0; i < this.timeInSeconds.length; i++) {
      // console.log("increment", i);
      this.time = this.timeInSeconds[i];
      this.runTimer = false;
      this.hasStarted = false;
      this.hasFinished = false;
      this.remainingTime[i] = this.timeInSeconds[i];
      console.log("remain", this.remainingTime[i]);
      this.displayTime[i] = this.getSecondsAsDigitalClock(
        this.remainingTime[i]
      );
      // console.log("display", this.displayTime[i]);
    }
    if (this.timeInSeconds == null) {
      return null;
    }
  }
  // timer countdown
  startTimer() {
    this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
  }

  pauseTimer() {
    this.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      var length = JSON.parse(localStorage.getItem("inputSec")).length;
      for (var i = 0; i < length; i++) {
        if (!this.runTimer) {
          return;
        }
        this.remainingTime[i]--;
        this.displayTime[i] = this.getSecondsAsDigitalClock(
          this.remainingTime[i]
        );
      }
      // masi statis di array 0 doang
      if (this.remainingTime[i] > 0) {
        this.timerTick();
      } else {
        this.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    if (this.inputSeconds != null) {
      var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
      console.log("sec sum", sec_num); //just uncoment to show countdown in console
    }
    if (sec_num < 0) {
      this.timeover = "timeover";
      return this.timeover;
    } else {
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
        return (
          daysString +
          "days " +
          hoursString +
          ":" +
          minutesString +
          ":" +
          secondsString
        );
      }
    }
  }
  // close timer countdown

  ionViewDidLoad() {
    // Create userData on the database if it doesn't exist yet.
    this.createUserData();
    this.searchFriend = "";
    this.loadingProvider.show();

    // Get info of conversations of current logged in user.
    this.dataProvider.getConversations().subscribe(conversations => {
      console.log("CONVRSSS", conversations);
      if (conversations.length > 0) {
        conversations.forEach(conversation => {
          // console.log("psgId", conversation.key);
          this.dataProvider.getPsgAvailable(conversation.key).subscribe(psgProfile => {
              this.profilePsg = psgProfile;
              // console.log("psgProfile", psgProfile);
            });
          if (conversation.key) {
            // Get conversation partner info.
            this.dataProvider.getConversationbyCurrentUser(conversation.key).subscribe(listConv => {
                // Get conversation info.
                listConv.forEach(listConversations => { this.mainIdConversation = listConversations;
                  // console.log("list conversation", listConversations);
                  this.dataProvider.getConversation(listConversations.conversationId).subscribe(obj => {
                      // Get last message of conversation.

                      // console.log("scheduleeyid", obj.scheduleId);
                      this.bookingDay = JSON.stringify(obj.scheduleId);
                      this.bookSession = obj.sessionke;
                      this.countdown();

                      // console.log("bookingday", this.bookingDay);
                      // console.log("bookSession", this.bookSession);
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
                      // this.addOrUpdateConversation(conversation);
                      this.conversations.push(listConversations);
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
                    });
                });
              });
          }
        });
        // let now = new Date(Date.now()).getTime()/1000;
        // let x = Date.parse("Wed Aug 01 2018 16:30:00 GMT+0700 (Western Indonesia Time)");
        // // let dueDate = Date.parse(dueDate);
        // this.z = ((x/1000) -now) / 3600 / 24;
        // console.log("nowz : ", now );
        // console.log("countdown : ", this.z );
        // this.initTimer();
        // this.startTimer();
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
            //console.log(conversation.date);
          });
        }
      }, 60000);
    }
    console.log("wadoooooooo second", this.inputSeconds);
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
  createUserData() {
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .once("value")
      .then(account => {
        //console.log(account.val());
        // No database data yet, create user data on database
        if (!account.val()) {
          // this.loadingProvider.show();
          let user = firebase.auth().currentUser;
          console.log("user data", user, "haha");
          // declare
          var userId, name, provider, img, email;
          let providerData = user.providerData[0];
          userId = user.uid;
          // Get name from Firebase user.
          if (user.displayName || providerData.displayName) {
            name = user.displayName;
            name = providerData.displayName;
          } else {
            name = "New User";
          }
          // Set default username based on name and userId.
          let username = name.replace(/ /g, "") + userId.substring(0, 8);
          // Get provider from Firebase user.
          if (providerData.providerId == "password") {
            provider = "Firebase";
          } else if (providerData.providerId == "facebook.com") {
            provider = "Facebook";
          } else if (providerData.providerId == "google.com") {
            provider = "Google";
          }
          // Get photoURL from Firebase user.
          if (user.photoURL || providerData.photoURL) {
            img = user.photoURL;
            img = providerData.photoURL;
          } else {
            img = "assets/images/profile.png";
          }
          // Get email from Firebase user.
          email = user.email;
          // Set default description.
          let description = "Hello! I am a new SocioEmpathy user.";
          // set default displayName to Firebase
          // Insert data on our database using AngularFire.
          this.angularfireDatabase
            .object("/users/" + userId)
            .set({
              userId: userId,
              displayName: "Ganti Nama",
              name: name,
              username: username,
              role: localStorage.getItem("registerRole"),
              anonymouse: "false",
              realName: name,
              moodLevel: "Normal",
              provider: provider,
              img: img,
              docStatus: "false",
              KTM: "",
              PsyCard: "",
              KTP: "",
              gender: localStorage.getItem("gender"),
              email: email,
              phoneNumber: localStorage.getItem("phoneNumber"),
              description: description,
              dateCreated: new Date().toString(),
              city: "None",
              status: "None",
              birth: "None",
              profession: "None"
            })
            .then(() => {
              this.loadingProvider.hide();
            });
        }
      });
  }

  // New conversation.
  newMessage() {
    this.app.getRootNav().push(NewMessagePage);
  }

  // Open chat with friend.
  message(userId, idConversation) {
    console.log(
      "psgIds",
      userId,
      "idConvv",
      this.mainIdConversation.conversationId
    );
    console.log("finise?", this.hasFinished);
    this.app.getRootNav().push(MessagePage, {
      userId: userId,
      psgId: this.profilePsg.userId,
      idConversation: idConversation,
      stopConversation: this.hasFinished
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