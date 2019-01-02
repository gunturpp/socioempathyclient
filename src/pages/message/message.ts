import { FirebaseProvider } from "./../../providers/firebase";
import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  NavParams,
  Content,
  AlertController,
  ModalController
} from "ionic-angular";
import { DataProvider } from "../../providers/data";
import { LoadingProvider } from "../../providers/loading";
import { ImageProvider } from "../../providers/image";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase";
import { UserInfoPage } from "../user-info/user-info";
import { ImageModalPage } from "../image-modal/image-modal";
import { Camera } from "@ionic-native/camera";
import { Keyboard } from "@ionic-native/keyboard";

@Component({
  selector: "page-message",
  templateUrl: "message.html"
})
export class MessagePage {
  allMessage: any;
  @ViewChild(Content) content: Content;
  psgId: any;
  idConversation: any;
  stopConversation: any;
  private userId: any;
  private title: any;
  private message: any;
  private conversationId: any;
  private messages: any;
  private alert: any;
  private updateDateTime: any;
  private messagesToShow: any;
  private startIndex: any = -1;
  private scrollDirection: any = "bottom";
  // Set number of messages to show.
  private numberOfMessages = 10;

  // MessagePage
  // This is the page where the user can chat with a friend.
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider,
    public angularfireDatabase: AngularFireDatabase,
    public loadingProvider: LoadingProvider,
    public firebaseProvider: FirebaseProvider,
    public imageProvider: ImageProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public camera: Camera,
    public keyboard: Keyboard
  ) {}
  ionViewDidLoad() {
    this.userId = localStorage.getItem("uid_client")
    this.psgId = this.navParams.get("psgId");
    this.idConversation = this.navParams.get("idConversation");
    this.stopConversation = this.navParams.get("stopConversation");
    // Get psychology details.
    console.log("psgId", this.psgId);
    this.dataProvider.getPsgAvailable(this.psgId).subscribe(user => {
      this.title = user.name;
    });
    // Get conversation
    this.dataProvider.getConversationMessages(this.idConversation).subscribe(messages => {
        // console.log("msg messages", messages);
        this.allMessage = messages;
        if (this.messages) {
          // Just append newly added messages to the bottom of the view.
          if (messages.length > this.messages.length) {
            let message = messages[messages.length - 1];
            if (firebase.auth().currentUser.uid == message.sender) {
              this.dataProvider.getUser(message.sender).subscribe(user => {
                message.avatar = user.img;
              });
            } else {
              this.dataProvider
                .getPsgAvailable(message.sender)
                .subscribe(user => {
                  message.avatar = user.img;
                });
            }
            this.messages.push(message);
            // Also append to messagesToShow.
            this.messagesToShow.push(message);
            // Reset scrollDirection to bottom.
            this.scrollDirection = "bottom";
          }
        } else {
          // Get all messages, this will be used as reference object for messagesToShow.
          this.messages = [];
          messages.forEach(message => {
            if (firebase.auth().currentUser.uid == message.sender) {
              this.dataProvider.getUser(message.sender).subscribe(user => {
                message.avatar = user.img;
              });
            } else {
              this.dataProvider
                .getPsgAvailable(message.sender)
                .subscribe(user => {
                  message.avatar = user.img;
                });
            }
            this.messages.push(message);
          });
          // Load messages in relation to numOfMessages.
          if (this.startIndex == -1) {
            // Get initial index for numberOfMessages to show.
            if (this.messages.length - this.numberOfMessages > 0) {
              this.startIndex = this.messages.length - this.numberOfMessages;
            } else {
              this.startIndex = 0;
            }
          }
          if (!this.messagesToShow) {
            this.messagesToShow = [];
          }
          // Set messagesToShow
          for (var i = this.startIndex; i < this.messages.length; i++) {
            this.messagesToShow.push(this.messages[i]);
          }
          this.loadingProvider.hide();
        }
      });

    // Update messages' date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function() {
        if (that.messages) {
          that.messages.forEach(message => {
            let date = message.date;
            message.date = new Date(date);
          });
        }
      }, 60000);
    }
  }

  // Load previous messages in relation to numberOfMessages.
  loadPreviousMessages() {
    var that = this;
    // Show loading.
    this.loadingProvider.show();
    setTimeout(function() {
      // Set startIndex to load more messages.
      console.log("that.startIndex : " + that.startIndex);
      console.log("that.numberOfMessages : " + that.numberOfMessages);
      if (that.startIndex - that.numberOfMessages > -1) {
        that.startIndex -= that.numberOfMessages;
      } else {
        that.startIndex = 0;
      }
      // Refresh our messages list.
      that.messages = null;
      that.messagesToShow = null;
      // Set scroll direction to top.
      that.scrollDirection = "top";
      // Populate list again.
      that.ionViewDidLoad();
    }, 1000);
  }
  ionViewDidEnter(){
    this.setMessagesRead(this.allMessage.length);  
   console.log('read',this.allMessage);
  }
  // Update messagesRead when user lefts this page.
  ionViewWillLeave() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'flex';
        });
    }
    if (this.allMessage) console.log("leave msg", this.allMessage);
    this.setMessagesRead(this.allMessage.length);
  }

  // Check if currentPage is active, then update user's messagesRead.
  setMessagesRead(totalMessagesCount) {
    if (this.navCtrl.getActive().instance instanceof MessagePage) {
      this.angularfireDatabase.object("/users/" + firebase.auth().currentUser.uid +"/conversations/" + this.psgId + "/" + this.idConversation).update({messagesRead: totalMessagesCount});
    }
  }

  // Check if 'return' button is pressed and send the message.
  onType(keyCode) {
    if (keyCode == 1) {
      this.keyboard.close();
      this.send();
    }
  }

  // Scroll to bottom of page after a short delay.
  scrollBottom() {
    var that = this;
    setTimeout(function() {
      that.content.scrollToBottom();
    }, 300);
  }

  // Scroll to top of the page after a short delay.
  scrollTop() {
    var that = this;
    setTimeout(function() {
      that.content.scrollToTop();
    }, 300);
  }

  // Scroll depending on the direction.
  doScroll() {
    if (this.scrollDirection == "bottom") {
      this.scrollBottom();
    } else if (this.scrollDirection == "top") {
      this.scrollTop();
    }
  }

  // Check if the user is the sender of the message.
  isSender(message) {
    if (message.sender == firebase.auth().currentUser.uid) {
      return true;
    } else {
      return false;
    }
  }

  // finish session
  finishSession() {
    this.alert = this.alertCtrl
      .create({
        title: "Akhiri konsultasi sekarang juga?",
        message:
          "Konsultasi masih berlangsung, jika anda sudah menemukan solusi dan merasa puas, silahkan tekan tombol OK. Sesi akan ditutup dan tidak dapat konsultasi kembali.",
        buttons: [
          {
            text: "CANCEL",
            handler: data => {}
          },
          {
            text: "OK",
            handler: () => {
              console.log("finish session");
            }
          }
        ]
      })
      .present();
  }

  // Send message, if there's no conversation yet, create a new conversation.
  send() {
    if (this.message) {
      // User entered a text on messagebox
      // get from param
      console.log("msg idc", this.idConversation);
      if (this.idConversation) {
        // Add Message to the existing conversation
        // Clone an instance of messages object so it will not directly be updated.
        // The messages object should be updated by our observer declared on ionViewDidLoad.
        let messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
          date: new Date().toString(),
          sender: firebase.auth().currentUser.uid,
          receiver: this.psgId,
          type: "text",
          message: this.message
        });
        // Update conversation on database.
        console.log("msg ar", messages);
        this.dataProvider.updateConversation(this.idConversation).update({
          messages: messages
        });
        // Clear messagebox.
        this.message = "";
      } else {
        // New Conversation with friend.
        var messages = [];
        messages.push({
          date: new Date().toString(),
          sender: firebase.auth().currentUser.uid,
          receiver: this.psgId,
          type: "text",
          message: this.message
        });
        // Add conversation.
        this.angularfireDatabase
          .list("conversations" + this.idConversation)
          .push({
            dateCreated: new Date().toString(),
            messages: messages,
          })
          .then(success => {
            let conversationId = success;
            this.message = "";
            // Add conversation reference to the users.
            this.angularfireDatabase.object("/users/" + firebase.auth().currentUser.uid + "/conversations/" +this.userId).update({
                conversationId: conversationId,
                messagesRead: 1
              });
            this.angularfireDatabase.object("/psg/" + this.userId + "/conversations/" + firebase.auth().currentUser.uid).update({
                conversationId: conversationId,
                messagesRead: 0
              });
          });
      }
    }
  }

  // View user info
  viewUser(userId) {
    this.navCtrl.push(UserInfoPage, { userId: userId });
  }

  // Send photoMessage.
  sendPhoto() {
    this.alert = this.alertCtrl
      .create({
        title: "Send Photo Message",
        message:
          "Do you want to take a photo or choose from your photo gallery?",
        buttons: [
          {
            text: "Cancel",
            handler: data => {}
          },
          {
            text: "Choose from Gallery",
            handler: () => {
              // Upload image then return the url.
              this.imageProvider
                .uploadPhotoMessage(
                  this.idConversation,
                  this.camera.PictureSourceType.PHOTOLIBRARY
                )
                .then(url => {
                  // Process image message.
                  this.sendPhotoMessage(url);
                });
            }
          },
          {
            text: "Take Photo",
            handler: () => {
              // Upload image then return the url.
              this.imageProvider
                .uploadPhotoMessage(
                  this.idConversation,
                  this.camera.PictureSourceType.CAMERA
                )
                .then(url => {
                  // Process image message.
                  this.sendPhotoMessage(url);
                });
            }
          }
        ]
      })
      .present();
  }

  // Process photoMessage on database.
  sendPhotoMessage(url) {
    if (this.idConversation) {
      // Add image message to existing conversation.
      let messages = JSON.parse(JSON.stringify(this.messages));
      messages.push({
        date: new Date().toString(),
        sender: firebase.auth().currentUser.uid,
        type: "image",
        url: url
      });
      // Update conversation on database.
      this.dataProvider.updateConversation(this.idConversation).update({
        messages: messages
      });
    } else {
      // Create new conversation.
      var messages = [];
      messages.push({
        date: new Date().toString(),
        sender: firebase.auth().currentUser.uid,
        type: "image",
        url: url
      });
      var users = [];
      users.push(firebase.auth().currentUser.uid);
      users.push(this.userId);
      // Add conversation.
      this.angularfireDatabase
        .list("conversations")
        .push({
          dateCreated: new Date().toString(),
          messages: messages,
          users: users
        })
        .then(success => {
          let conversationId = success.key;
          // Add conversation references to users.
          this.angularfireDatabase
            .object(
              "/users/" +
                firebase.auth().currentUser.uid +
                "/conversations/" +
                this.userId
            )
            .update({
              conversationId: conversationId,
              messagesRead: 1
            });
          this.angularfireDatabase
            .object(
              "/psg/" +
                this.userId +
                "/conversations/" +
                firebase.auth().currentUser.uid
            )
            .update({
              conversationId: conversationId,
              messagesRead: 0
            });
        });
    }
  }

  // Enlarge image messages.
  enlargeImage(img) {
    let imageModal = this.modalCtrl.create(ImageModalPage, { img: img });
    imageModal.present();
  }
}
