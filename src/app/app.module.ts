import { CommentPage } from './../pages/comment/comment';
import { MoodTrackerPage } from './../pages/mood-tracker/mood-tracker';
import { DocverRegPage } from './../pages/docver-reg/docver-reg';
import { BoardingPage } from './../pages/boarding/boarding';
import { AchievementPage } from './../pages/achievement/achievement';
import { DuplicateMessagePage } from './../pages/duplicate-message/duplicate-message';
import { Message2Page } from './../pages/message2/message2';
import { TimeLinePage } from './../pages/time-line/time-line';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Calendar } from '@ionic-native/calendar';
import { Camera } from '@ionic-native/camera';
import { GooglePlus } from '@ionic-native/google-plus';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Keyboard } from '@ionic-native/keyboard';
import { Firebase } from '@ionic-native/firebase';
import { AchievDetailPage } from './../pages/achiev-detail/achiev-detail';
import { TextMaskModule } from 'angular2-text-mask';
import { SignupPage } from '../pages/signup/signup';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { VerificationPage } from '../pages/verification/verification';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagesPage } from '../pages/messages/messages';
import { FriendsPage } from '../pages/friends/friends';
import { SearchPeoplePage } from '../pages/search-people/search-people';
import { RequestsPage } from '../pages/requests/requests';
import { UserInfoPage } from '../pages/user-info/user-info';
import { NewMessagePage } from '../pages/new-message/new-message';
import { MessagePage } from '../pages/message/message';
import { PaymentPage } from '../pages/payment/payment';
import { PayDetailPage } from '../pages/pay-detail/pay-detail';
import { PaySuccessPage } from '../pages/pay-success/pay-success';
import { BuyPremiumPage } from '../pages/buy-premium/buy-premium';
import { Payment1Page } from '../pages/payment1/payment1';
import { Payment2Page } from '../pages/payment2/payment2';
import { Payment3Page } from '../pages/payment3/payment3';
import { ProfilePage } from '../pages/profile/profile';
import { EditprofilePage } from '../pages/editprofile/editprofile';


// Guntur
import { DynamiclinkPage } from '../pages/dynamiclink/dynamiclink';

import { LoginProvider } from '../providers/login';
import { LogoutProvider } from '../providers/logout';
import { LoadingProvider } from '../providers/loading';
import { AlertProvider } from '../providers/alert';
import { ImageProvider } from '../providers/image';
import { DataProvider } from '../providers/data';
import { FirebaseProvider } from '../providers/firebase';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { Login } from '../login';
import { NgCalendarModule  } from 'ionic2-calendar';

import { FriendPipe } from '../pipes/friend';
import { SearchPipe } from '../pipes/search';
import { ConversationPipe } from '../pipes/conversation';
import { DateFormatPipe } from '../pipes/date';
import { GroupPipe } from '../pipes/group';
import { DocverPage } from '../pages/docver/docver';
import { DocverPlusPage } from '../pages/docver-plus/docver-plus';
import { TestajaPage } from '../pages/testaja/testaja';
import { ConsultationPage } from '../pages/consultation/consultation';
import { CalendarPage } from '../pages/calendar/calendar';
import { AddSchedulePage } from '../pages/add-schedule/add-schedule';
import { ConsulSessionPage } from '../pages/consul-session/consul-session';
import { ChoosePsgPage } from '../pages/choose-psg/choose-psg';
import { ProfilePsgPage } from '../pages/profile-psg/profile-psg';
import { BookingPage } from '../pages/booking/booking';
import { LovepointStorePage } from '../pages/lovepoint-store/lovepoint-store';
import { TopupPage } from '../pages/topup/topup';
import { TransactionPage } from '../pages/transaction/transaction';
import { PaymentStatusPage } from '../pages/payment-status/payment-status';
import { ImageModalPage } from '../pages/image-modal/image-modal';
import { FcmProvider } from '../providers/fcm/fcm';

firebase.initializeApp(Login.firebaseConfig);

@NgModule({
  declarations: [
    PaymentStatusPage,
    TopupPage,
    TransactionPage,
    LovepointStorePage,
    BookingPage,
    ProfilePsgPage,
    ChoosePsgPage,
    ConsulSessionPage,
    AddSchedulePage,
    ConsultationPage,
    TestajaPage,
    MyApp,
    LoginPage,
    HomePage,
    VerificationPage,
    TabsPage,
    MessagesPage,
    FriendsPage,
    SearchPeoplePage,
    RequestsPage,
    UserInfoPage,
    NewMessagePage,
    MessagePage,
    FriendPipe,
    ConversationPipe,
    SearchPipe,
    DateFormatPipe,
    TimeLinePage,
    DuplicateMessagePage,
    AchievementPage,
    BoardingPage,
    AchievDetailPage,
    DynamiclinkPage,
    DocverPage,
    DocverPlusPage,
    DocverRegPage,
    MoodTrackerPage,
    PayDetailPage,
    PaymentPage,
    PaySuccessPage,
    BuyPremiumPage,
    Payment1Page,
    Payment2Page,
    Payment3Page,
    CommentPage,
    SignupPage,
    ProfilePage,
    EditprofilePage,
    ImageModalPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    TextMaskModule,
    NgCalendarModule,

    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    AngularFireModule.initializeApp(Login.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PaymentStatusPage,
    TopupPage,
    TransactionPage,
    LovepointStorePage,
    BookingPage,
    ProfilePsgPage,
    ChoosePsgPage,
    ConsulSessionPage,
    AddSchedulePage,
    ConsultationPage,
    TestajaPage,
    MyApp,
    SignupPage,
    LoginPage,
    HomePage,
    VerificationPage,
    TabsPage,
    MessagesPage,
    FriendsPage,
    SearchPeoplePage,
    RequestsPage,
    UserInfoPage,
    NewMessagePage,
    MessagePage,
    TimeLinePage,
    DuplicateMessagePage,
    AchievementPage,
    BoardingPage,
    AchievDetailPage,
    DynamiclinkPage,
    DocverPage,
    DocverPlusPage,
    DocverRegPage,
    MoodTrackerPage,
    PayDetailPage,
    PaymentPage,
    PaySuccessPage,
    BuyPremiumPage,
    Payment1Page,
    Payment2Page,
    Payment3Page,
    CommentPage,
    ProfilePage,
    EditprofilePage,
    ImageModalPage,
    CalendarPage
  ],
  providers: [
    InAppBrowser,
    Firebase,
    FcmProvider,
    GooglePlus,
    Calendar,StatusBar, SplashScreen, Camera, Keyboard, { provide: ErrorHandler, useClass: IonicErrorHandler }, LoginProvider, LogoutProvider, LoadingProvider, AlertProvider, ImageProvider, DataProvider, FirebaseProvider,
    ]
})
export class AppModule { }
  