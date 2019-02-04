import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MessagesPage } from '../messages/messages';
import { ConsultationPage } from '../consultation/consultation';
import { DataProvider } from '../../providers/data';
import * as moment from "moment";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  messages: any = MessagesPage;
  // friends: any = FriendsPage;
  profile: any = HomePage;
  // timeLine: any = TimeLinePage;
  consultation: any = ConsultationPage;
  private unreadMessagesCount: any;
  private conversationList: any;
  private conversationsInfo: any;
  // TabsPage
  // This is the page where we set our tabs.
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) { 
   
  }

  ionViewDidLoad() {
    this.getUnreadMessagesCount();
    // Get conversations and add/update if the conversation exists, otherwise delete from list.
    this.dataProvider.getValueConversations().subscribe((conversationsInfo) => {
      // console.log("conversationsInfo : ",conversationsInfo);
      if (conversationsInfo.length > 0) {
        this.conversationsInfo = conversationsInfo;
        conversationsInfo.forEach(conversationInfo => {
          // console.log("in tabsthis.conversationsInfo",conversationInfo);
          // this.dataProvider.getKeyConversation(conversationInfo.conversationId).subscribe(conversation => {
          //   console.log("in tabs",conversation);
          //   if (conversation) {
          //     this.addOrUpdateConversation(conversation);
          //   }
          // });
        });
      }
    });

  }
  checkExpiredTicket() {
    let ticket
    const today = moment().format('YYYY-MM-DD')
    this.dataProvider.getTickets().subscribe(value => {
    ticket = value
      if(today > moment(ticket.expiredDate).format('YYYY-MM-DD')) {
        this.dataProvider.updateTicket().update({
          isExpired: true,
          ticketTotal:0
        }).then((success) => {
            this.alertExpired();
        })
      }
    })
  }
  alertExpired() {
      const toast = this.toastCtrl.create({
        message: 'Tiket anda expired. Silahkan pilih paket kembali untuk dapat berkonsultasi',
        duration: 2000
      });
      toast.present();
  }
  // Add or update conversaion for real-time sync of unreadMessagesCount.
  addOrUpdateConversation(conversation) {
    if (!this.conversationList) {
      this.conversationList = [conversation];
    } else {
      var index = -1;
      for (var i = 0; i < this.conversationList.length; i++) {
        if (this.conversationList[i].key == conversation.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.conversationList[index] = conversation;
      } else {
        this.conversationList.push(conversation);
      }
    }
    //console.log(this.conversationList);
    this.computeUnreadMessagesCount();
  }

  // Compute all conversation's unreadMessages.
  computeUnreadMessagesCount() {
    this.unreadMessagesCount = 0;
    if (this.conversationList) {
      for (var i = 0; i < this.conversationList.length; i++) {
        this.unreadMessagesCount += this.conversationList[i].messages.length - this.conversationsInfo[i].messagesRead;
        if (this.unreadMessagesCount == 0) {
          this.unreadMessagesCount = null;
        }
      }
    }
  }

  getUnreadMessagesCount() {
    if (this.unreadMessagesCount) {
      if (this.unreadMessagesCount > 0) {
        return this.unreadMessagesCount;
      }
    }
    return null;
  }

}
