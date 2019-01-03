webpackJsonp([0],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    // LoginPage
    // This is the page where the user can register and login to our app.
    // It's important to initialize the loginProvider here and setNavController as it will direct the routes of our app.
    function LoginPage(navCtrl, loginProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.loginProvider = loginProvider;
        this.formBuilder = formBuilder;
        // It's important to hook the navController to our loginProvider.
        this.loginProvider.setNavController(this.navCtrl);
        // Create our forms and their validators based on validators set on validator.ts.
        this.emailPasswordForm = formBuilder.group({
            email: __WEBPACK_IMPORTED_MODULE_4__validator__["a" /* Validator */].emailValidator,
            password: __WEBPACK_IMPORTED_MODULE_4__validator__["a" /* Validator */].passwordValidator,
        });
        this.emailForm = formBuilder.group({
            email: __WEBPACK_IMPORTED_MODULE_4__validator__["a" /* Validator */].emailValidator
        });
        this.masks = {
            phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        // Set view mode to main.
        this.mode = 'main';
    };
    // Call loginProvider and login the user with email and password.
    // You may be wondering where the login function for Facebook and Google are.
    // They are called directly from the html markup via loginProvider.facebookLogin() and loginProvider.googleLogin().
    LoginPage.prototype.login = function () {
        this.loginProvider.emailLogin(this.emailPasswordForm.value["email"], this.emailPasswordForm.value["password"]);
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    // Call loginProvider and send a password reset email.
    LoginPage.prototype.forgotPassword = function () {
        this.loginProvider.sendPasswordReset(this.emailForm.value["email"]);
        this.clearForms();
    };
    // Clear the forms.
    LoginPage.prototype.clearForms = function () {
        this.emailPasswordForm.reset();
        this.emailForm.reset();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\login\login.html"*/'<ion-content>\n\n  <div class="backCss">\n\n  <div class="top">\n\n      <img src="assets/images/SocioEmpathy_Blue.png" />  \n\n  </div>\n\n  <!-- Social Login Buttons -->\n\n  <div class="bottom">\n\n    <div class="wew">\n\n    <div class="buttons" *ngIf="mode == \'main\'">\n\n      <div>\n\n          <div class="form">\n\n              <!-- <button class="clear" ion-button icon-only tappable (click)="mode = \'main\'"><ion-icon name="md-close"></ion-icon></button> -->\n\n              <form [formGroup]="emailPasswordForm">\n\n                  <ion-list>\n\n                    <ion-item>\n\n                      <ion-label color="theblues" stacked>Email Client</ion-label>\n\n                      <ion-input color="theblues" type="email" formControlName="email" placeholder="Enter your Email"></ion-input>\n\n                    </ion-item>\n\n                  \n\n                    <ion-item>\n\n                      <ion-label color="theblues" stacked>Password</ion-label>\n\n                      <ion-input color="theblues" type="password" formControlName="password" placeholder="Enter your Password"></ion-input>\n\n                    </ion-item>                    \n\n                  </ion-list>\n\n                <button ion-button color="primary" tappable (click)="login()" [disabled]="!emailPasswordForm.valid">LOGIN</button>\n\n              </form>\n\n              <p tappable (click)="clearForms(); mode = \'forgotPassword\'" style="color:#fff;">Forgot your Password?</p>\n\n              <button ion-button color="light" tappable (click)="signUp()">SIGN UP</button>\n\n            </div>\n\n<!--    <button ion-button icon-left class="facebook" tappable (click)="loginProvider.facebookLogin()"><ion-icon name="logo-facebook"></ion-icon>Continue with Facebook</button>\n\n        <button ion-button icon-left class="google" tappable (click)="loginProvider.googleLogin()"><ion-icon name="logo-google"></ion-icon>Continue with Google</button>\n\n        <button ion-button icon-left class="secondary" tappable (click)="loginProvider.guestLogin()"><ion-icon name="happy"></ion-icon>Continue as Guest</button> -->\n\n        <!-- <button ion-button icon-left class="dark" tappable (click)="clearForms(); mode = \'register\'"><ion-icon name="md-mail-open"></ion-icon>Signup with Email</button> -->\n\n        <p class="dark" tappable (click)="clearForms(); mode = \'register\'" style="color:#fff;">Don\'t have an account? <b>Sign Up</b></p>\n\n      </div>\n\n    </div>\n\n    </div>\n\n    <!-- Login Form -->\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginProvider = /** @class */ (function () {
    function LoginProvider(loadingProvider, alertProvider, zone) {
        var _this = this;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.zone = zone;
        // Detect changes on the Firebase user and redirects the view depending on the user's status.
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            //console.log("firebase auth : ");
            if (user) {
                if (__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */].emailVerification) {
                    if (1) {
                        //Goto Home Page.
                        _this.zone.run(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */].homePage, { animate: false });
                        });
                        //Since we're using a TabsPage an NgZone is required.
                    }
                    else {
                        //Goto Verification Page.
                        _this.navCtrl.setRoot(Login.verificationPage, { animate: false });
                    }
                }
                else {
                    //Goto Home Page.
                    _this.zone.run(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */].homePage, { animate: false });
                    });
                    //Since we're using a TabsPage an NgZone is required.
                }
            }
            //last block
        });
    }
    // Hook this provider up with the navigationController.
    // This is important, so the provider can redirect the app to the views depending
    // on the status of the Firebase user.
    LoginProvider.prototype.setNavController = function (navCtrl) {
        this.navCtrl = navCtrl;
    };
    // Login on Firebase given the email and password.
    LoginProvider.prototype.emailLogin = function (email, password) {
        var _this = this;
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (success) {
            localStorage.setItem('uid_client', __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid);
            localStorage.setItem('email_client', __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email);
            _this.loadingProvider.hide();
        })
            .catch(function (error) {
            _this.loadingProvider.hide();
            var code = error["code"];
            _this.alertProvider.showErrorMessage(code);
        });
    };
    // Register user on Firebase given the email and password.
    LoginProvider.prototype.register = function (displayName, email, password, role, phoneNumber, gender) {
        var _this = this;
        this.loadingProvider.show();
        localStorage.setItem('registerRole', role);
        localStorage.setItem('gender', gender);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem("displayName", displayName);
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (success) {
            _this.loadingProvider.hide();
        })
            .catch(function (error) {
            _this.loadingProvider.hide();
            var code = error["code"];
            _this.alertProvider.showErrorMessage(code);
        });
    };
    // Send Password Reset Email to the user.
    LoginProvider.prototype.sendPasswordReset = function (email) {
        var _this = this;
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().sendPasswordResetEmail(email)
            .then(function (success) {
            _this.loadingProvider.hide();
            _this.alertProvider.showPasswordResetMessage(email);
        })
            .catch(function (error) {
            _this.loadingProvider.hide();
            var code = error["code"];
            _this.alertProvider.showErrorMessage(code);
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4__alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_message__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MessagesPage = /** @class */ (function () {
    // MessagesPage
    // This is the page where the user can see their current conversations with their friends.
    // The user can also start a new conversation.
    function MessagesPage(actionSheetCtrl, navCtrl, navParams, angularfireDatabase, loadingProvider, app, dataProvider, firebaseProvider, alertCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.app = app;
        this.dataProvider = dataProvider;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.profilePsg = [];
        this.inputSeconds = [];
        this.remainingTime = [];
        this.displayTime = [];
        this.currentUser = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid;
        this.iterate = 0;
        this.increment = 0;
        // conversation: any;
        this.conversations = [];
        this.roles = localStorage.getItem("registerRole");
        this.phones = localStorage.getItem("phoneNumber");
    }
    MessagesPage.prototype.i = function (arg0) {
        throw new Error("Method not implemented.");
    };
    // close timer countdown
    MessagesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Create userData on the database if it doesn't exist yet.
        this.createUserData();
        this.devicesTokenUpdate();
        this.searchFriend = "";
        this.loadingProvider.show();
        // Get info of conversations of current logged in user.
        this.dataProvider.getConversations().subscribe(function (conversations) {
            if (conversations.length > 0) {
                conversations.forEach(function (conversation) {
                    console.log("conversation", conversation.key);
                    _this.dataProvider.getPsgAvailable(conversation.key).subscribe(function (psgProfile) {
                        _this.profilePsg.push(psgProfile);
                    });
                    if (conversation.key) {
                        // Get conversation partner info.
                        _this.dataProvider.getConversationbyCurrentUser(conversation.key).subscribe(function (listConv) {
                            // Get conversation info.
                            listConv.forEach(function (listConversations) {
                                listConversations.key = conversation.key;
                                _this.mainIdConversation = listConversations;
                                _this.dataProvider.getConversation(listConversations.conversationId).subscribe(function (obj) {
                                    // console.log("obj", obj);
                                    // Get last message of conversation.
                                    _this.bookingDay = obj.scheduleId;
                                    _this.bookSession = obj.sessionke;
                                    _this.countdown(obj.scheduleId, obj.sessionke, _this.increment);
                                    _this.increment++;
                                    // console.log("bookingday", this.bookingDay);
                                    // console.log("bookSession", this.bookSession);
                                    var lastMessage = obj.messages[obj.messages.length - 1];
                                    listConversations.date = lastMessage.date;
                                    listConversations.sender = lastMessage.sender;
                                    // Set unreadMessagesCount
                                    listConversations.unreadMessagesCount =
                                        obj.messages.length - listConversations.messagesRead;
                                    // Process last message depending on messageType.
                                    if (lastMessage.type == "text") {
                                        if (lastMessage.sender == __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid) {
                                            listConversations.message =
                                                "You: " + lastMessage.message;
                                        }
                                        else {
                                            listConversations.message = lastMessage.message;
                                        }
                                    }
                                    else {
                                        if (lastMessage.sender == __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid) {
                                            listConversations.message =
                                                "You sent a photo message.";
                                        }
                                        else {
                                            listConversations.message =
                                                "has sent you a photo message.";
                                        }
                                    }
                                    // Add or update listConversations.
                                    _this.addOrUpdateConversation(listConversations);
                                });
                            });
                        });
                    }
                });
                _this.loadingProvider.hide();
            }
            else {
                _this.conversations = [];
                _this.loadingProvider.hide();
            }
        });
        // Update conversations' last active date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.conversations) {
                    that.conversations.forEach(function (conversation) {
                        var date = conversation.date;
                        conversation.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    MessagesPage.prototype.countdown = function (date, time, index) {
        var _this = this;
        var b = __WEBPACK_IMPORTED_MODULE_8_moment__(date + ' ' + time);
        setInterval(function () {
            var a = __WEBPACK_IMPORTED_MODULE_8_moment__();
            _this.timeInSeconds = Math.round(b.diff(a) / 1000);
            _this.displayTime[index] = _this.getSecondsAsDigitalClock(_this.timeInSeconds);
            console.log("this.displayTime[index]", index); //just uncoment to show countdown in console	
        }, 1000);
    };
    MessagesPage.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = inputSeconds; // don't forget the second param	
        if (sec_num < 0) {
            return 'timeover';
        }
        else {
            console.log("milisecond", sec_num); //just uncoment to show countdown in console	
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
            }
            else {
                return (daysString + "days " + hoursString + ":" + minutesString + ":" + secondsString);
            }
        }
    };
    MessagesPage.prototype.devicesTokenUpdate = function () {
        this.dataProvider.updateDevicesToken(localStorage.getItem("devices_token"))
            .update({
            userId: __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid
        });
        this.dataProvider.updateCurrentUser()
            .update({
            devices_token: localStorage.getItem("devices_token")
        });
    };
    // delete personal message
    MessagesPage.prototype.deleteConversation = function (conversation) {
        // realtime load data
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        this.dataProvider.deleteConversations().remove(conversation);
    };
    // Add or update conversation for real-time sync based on our observer, sort by active date.
    MessagesPage.prototype.addOrUpdateConversation = function (conversation) {
        if (!this.conversations) {
            this.conversations = [conversation];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.conversations.length; i++) {
                if (this.conversations[i].key == conversation.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.conversations[index] = conversation;
            }
            else {
                this.conversations.push(conversation);
            }
            // Sort by last active date.
            this.conversations.sort(function (a, b) {
                var date1 = new Date(a.date);
                var date2 = new Date(b.date);
                if (date1 > date2) {
                    return -1;
                }
                else if (date1 < date2) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    };
    // Create userData on the database if it doesn't exist yet.
    MessagesPage.prototype.createUserData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_firebase_app__["database"]()
            .ref("/users/" + __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid)
            .once("value")
            .then(function (account) {
            // No database data yet, create user data on database
            if (!account.val()) {
                // this.loadingProvider.show();
                var user = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser;
                // declare
                var userId, name, provider, img, email;
                var providerData = user.providerData[0];
                userId = user.uid;
                // Get name from Firebase user.
                if (user.displayName || providerData.displayName) {
                    name = user.displayName;
                    name = providerData.displayName;
                }
                else {
                    name = "New User";
                }
                // Set default username based on name and userId.
                var username = name.replace(/ /g, "") + userId.substring(0, 8);
                // Get provider from Firebase user.
                if (providerData.providerId == "password") {
                    provider = "Firebase";
                }
                else if (providerData.providerId == "facebook.com") {
                    provider = "Facebook";
                }
                else if (providerData.providerId == "google.com") {
                    provider = "Google";
                }
                // Get photoURL from Firebase user.
                if (user.photoURL || providerData.photoURL) {
                    img = user.photoURL;
                    img = providerData.photoURL;
                }
                else {
                    img = "assets/images/profile.png";
                }
                // Get email from Firebase user.
                email = user.email;
                // Set default description.
                var description = "Hello! I am a new SocioEmpathy user.";
                // set default displayName to Firebase
                // Insert data on our database using AngularFire.
                _this.angularfireDatabase
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
                    devices_token: localStorage.getItem("devices_token"),
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
                    .then(function () {
                    _this.loadingProvider.hide();
                });
            }
        });
    };
    // Open chat with friend.
    MessagesPage.prototype.message = function (psgId, idConversation, i) {
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'none';
            });
        }
        console.log("this.displayTime", this.displayTime[i]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__message_message__["a" /* MessagePage */], {
            psgId: psgId,
            isTimeover: this.displayTime[i],
            idConversation: idConversation,
            stopConversation: this.hasFinished
        });
    };
    // Return class based if conversation has unreadMessages or not.
    MessagesPage.prototype.hasUnreadMessages = function (conversation) {
        // console.log("hasunread", conversation);
        if (conversation.unreadMessagesCount > 0) {
            return "bold";
        }
        else
            return "";
    };
    // alert
    MessagesPage.prototype.showConfirm = function (i) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Hapus Obrolan?",
            message: "Setelah anda menghapus obrolan,histori akan hilang, anda yakin?",
            buttons: [
                {
                    text: "Tidak",
                    handler: function () {
                        console.log("Disagree clicked");
                    }
                },
                {
                    text: "Iya",
                    handler: function () {
                        _this.deleteConversation(i);
                    }
                }
            ]
        });
        confirm.present();
    };
    //hold button
    MessagesPage.prototype.pressEvent = function (e) {
        this.openMenu(e);
    };
    // action sheet
    // press button
    MessagesPage.prototype.openMenu = function (deleteChat) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Opsi",
            buttons: [
                {
                    text: "Delete",
                    role: "Delete",
                    handler: function () {
                        _this.showConfirm(deleteChat);
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
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-messages",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\messages\messages.html"*/'<ion-header>\n\n  <ion-navbar color="theblues">\n\n    <img class="socioCss" src="assets/images/headerSocio.png" />\n\n    <ion-buttons end>\n\n      <button ion-button icon-only tappable (click)="newMessage()">\n\n        <ion-icon name="ios-create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Fablist -->\n\n  <ion-fab right bottom>\n\n    <button color="theblues" ion-fab mini (click)="newMessage()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <!-- No conversations to show -->\n\n  <div class="empty-list" *ngIf="conversations && conversations.length <= 0">\n\n    <h1>\n\n      <ion-icon name="md-text"></ion-icon>\n\n    </h1>\n\n    <p>Booking psikologmu segera.</p>\n\n  </div>\n\n  <!-- Show conversations -->\n\n  <ion-list class="avatar-list" *ngIf="conversations && conversations.length > 0">\n\n    <!-- <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar> -->\n\n    <!-- press button di comment -->\n\n    <ion-item color="red" (press)="pressEvent(conversation.sender)" *ngFor="let conversation of conversations | conversationFilter:searchFriend; let i = index"\n\n      no-lines tappable (click)="message(conversation.key,conversation.conversationId,i)">\n\n      <ion-avatar item-left *ngIf="profilePsg">\n\n          <img src="{{profilePsg[i].img}}">\n\n        </ion-avatar>\n\n        <div [ngClass]=hasUnreadMessages(conversation)>\n\n          <h2 *ngIf="profilePsg">{{profilePsg[i].name}}</h2>\n\n          <ion-badge color="danger" *ngIf="conversation.unreadMessagesCount > 0">{{conversation.unreadMessagesCount}}</ion-badge>\n\n          <p>{{conversation.message}}</p>\n\n          <span class="date">\n\n            <br>{{conversation.date | DateFormat}} {{displayTime[i]}}</span>\n\n        </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\messages\messages.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* DataProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__providers_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_firebase__["a" /* FirebaseProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _j || Object])
    ], MessagesPage);
    return MessagesPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingController) {
        this.loadingController = loadingController;
        // Loading Provider
        // This is the provider class for most of the loading spinners screens on the app.
        // Set your spinner/loading indicator type here
        // List of Spinners: https://ionicframework.com/docs/v2/api/components/spinner/Spinner/
        this.spinner = {
            spinner: 'circles'
        };
        console.log("Initializing Loading Provider");
    }
    //Show loading
    LoadingProvider.prototype.show = function () {
        if (!this.loading) {
            this.loading = this.loadingController.create(this.spinner);
            this.loading.present();
        }
    };
    //Hide loading
    LoadingProvider.prototype.hide = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataProvider = /** @class */ (function () {
    function DataProvider(angularfireDatabase) {
        this.angularfireDatabase = angularfireDatabase;
        this.getbyquery = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        console.log("Initializing Data Provider");
    }
    // Get all users
    DataProvider.prototype.getUsers = function () {
        return this.angularfireDatabase
            .list("/users/", function (ref) { return ref.orderByChild("name"); })
            .valueChanges();
    };
    // Get user with username
    DataProvider.prototype.getUserWithUsername = function (username) {
        return this.angularfireDatabase
            .list("/users/", function (ref) { return ref.orderByChild("username").equalTo(username); })
            .valueChanges();
    };
    // Get logged in user data
    DataProvider.prototype.getCurrentUser = function () {
        this.items = this.angularfireDatabase
            .object("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid)
            .valueChanges();
        return this.items;
    };
    DataProvider.prototype.updateCurrentUser = function () {
        return this.angularfireDatabase.object("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid);
    };
    DataProvider.prototype.updateDevicesToken = function (token) {
        return this.angularfireDatabase.object("/devices_token/" + token);
    };
    // Get user by their userId
    DataProvider.prototype.getUser = function (userId) {
        this.items = this.angularfireDatabase
            .object("/users/" + userId)
            .valueChanges();
        return this.items;
    };
    // Set user by their userId
    DataProvider.prototype.setUser = function (userId) {
        return this.angularfireDatabase.object("/users/" + userId);
    };
    DataProvider.prototype.UpdateUser = function (userId) {
        return this.angularfireDatabase.object("/users/" + userId);
    };
    // Get requests given the userId.
    DataProvider.prototype.getRequestsbyCurrentUser = function () {
        this.items = this.angularfireDatabase
            .object("/requests/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid)
            .valueChanges();
        return this.items;
    };
    // Get requests given the userId.
    DataProvider.prototype.getRequests = function (userId) {
        this.items = this.angularfireDatabase
            .list("/requests/" + userId)
            .snapshotChanges();
        return this.items;
    };
    // Get friend requests given the userId.
    DataProvider.prototype.getFriendRequests = function (userId) {
        return this.angularfireDatabase
            .list("/users/", function (ref) { return ref.orderByChild("receiver").equalTo(userId); })
            .valueChanges();
    };
    DataProvider.prototype.relationFriendTimeline = function (userId) {
        this.items = this.angularfireDatabase
            .object("/users/" + userId + "/friends")
            .valueChanges();
        return this.items;
    };
    DataProvider.prototype.getCurrentFriendTimeline = function () {
        this.items = this.angularfireDatabase
            .list("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/friends")
            .snapshotChanges();
        return this.items;
    };
    // Get conversation given the conversationId.
    DataProvider.prototype.getConversation = function (convId) {
        this.items = this.angularfireDatabase.object("/conversations/" + convId).valueChanges();
        return this.items;
    };
    DataProvider.prototype.getKeyConversation = function (convId) {
        this.items = this.angularfireDatabase.list("/conversations/" + convId).snapshotChanges();
        return this.items;
    };
    // Update conversation given the conversationId.
    DataProvider.prototype.updateConversation = function (conversationId) {
        return this.angularfireDatabase.object("/conversations/" + conversationId);
    };
    //Get list of all conversation branch
    DataProvider.prototype.getAllConversation = function () {
        this.items = this.angularfireDatabase
            .object("/conversations/")
            .valueChanges();
        return this.items;
    };
    DataProvider.prototype.getConversationbyCurrentUser = function (psgId) {
        this.items = this.angularfireDatabase.list("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/conversations/" + psgId).valueChanges();
        return this.items;
    };
    // Get conversations of the current logged in user.
    DataProvider.prototype.getConversations = function () {
        this.items = this.angularfireDatabase.list("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/conversations/").snapshotChanges();
        return this.items;
    };
    DataProvider.prototype.getValueConversations = function () {
        this.items = this.angularfireDatabase.list("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/conversations/").valueChanges();
        return this.items;
    };
    DataProvider.prototype.deleteConversations = function () {
        return this.angularfireDatabase.list("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/conversations/");
    };
    // Get messages of the conversation given the Id.
    DataProvider.prototype.getConversationMessages = function (conversationId) {
        this.items = this.angularfireDatabase
            .object("/conversations/" + conversationId + "/messages")
            .valueChanges();
        return this.items;
    };
    // Get messages of the group given the Id.
    DataProvider.prototype.getGroupMessages = function (groupId) {
        this.items = this.angularfireDatabase
            .object("/groups/" + groupId + "/messages")
            .valueChanges();
        return this.items;
    };
    // Get groups of the logged in user.
    DataProvider.prototype.getGroups = function () {
        this.items = this.angularfireDatabase
            .list("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/groups")
            .snapshotChanges();
        return this.items;
    };
    // Get group info given the groupId.
    DataProvider.prototype.getGroup = function (groupId) {
        this.items = this.angularfireDatabase
            .object("/groups/" + groupId)
            .valueChanges();
        return this.items;
    };
    //Get comment timeline
    DataProvider.prototype.getCommentTimeline = function () {
        this.items = this.angularfireDatabase
            .list("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/timeLine")
            .snapshotChanges();
        return this.items;
    };
    //Get object on comment timeline
    DataProvider.prototype.getObjectCommentTimeline = function () {
        this.items = this.angularfireDatabase
            .object("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/timeLine")
            .valueChanges();
        return this.items;
    };
    //post comment timeline
    DataProvider.prototype.postCommentTimeline = function () {
        this.items = this.angularfireDatabase.list("/posts/").valueChanges();
        return this.items;
    };
    //Get user timeline
    DataProvider.prototype.getUserTimeline = function () {
        this.items = this.angularfireDatabase
            .object("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/timeLine")
            .valueChanges();
        return this.items;
    };
    //Get user timeline baseon id
    DataProvider.prototype.getUserTimeLineByID = function (ID) {
        this.items = this.angularfireDatabase
            .object("/users/" + ID + "/timeLine")
            .valueChanges();
        return this.items;
    };
    //Get user timeline baseon id for delete
    DataProvider.prototype.deleteUserTimelineByID = function () {
        return this.angularfireDatabase.list("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + "/timeLine");
    };
    //get logged in user ID
    DataProvider.prototype.getMyID = function () {
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
    };
    // Set schedule psg by their userId
    DataProvider.prototype.setScheduling = function (psychologstId) {
        return this.angularfireDatabase.object("/scheduling/" + psychologstId);
    };
    // get
    DataProvider.prototype.getScheduling = function () {
        this.items = this.angularfireDatabase
            .list("/scheduling/")
            .snapshotChanges();
        return this.items;
    };
    // get schedule by date
    DataProvider.prototype.getSchedulingByDay = function (date) {
        this.items = this.angularfireDatabase.list("/scheduling/" + date).snapshotChanges();
        return this.items;
    };
    // get key schedule by date
    DataProvider.prototype.getKeySchedulingByDay = function (date) {
        this.items = this.angularfireDatabase
            .list("/scheduling/" + date)
            .snapshotChanges();
        return this.items;
    };
    // get list schedule by
    DataProvider.prototype.getListSchedulingByDay = function (date) {
        this.items = this.angularfireDatabase
            .list("/scheduling/" + date)
            .valueChanges();
        return this.items;
    };
    DataProvider.prototype.getListPsgBySessionAndDay = function (date, sessions) {
        this.items = this.angularfireDatabase
            .list("/scheduling/" + date + "/" + sessions)
            .snapshotChanges();
        return this.items;
    };
    // get psg by date and session available
    DataProvider.prototype.getPsgAvailable = function (psgId) {
        this.items = this.angularfireDatabase.object("/psg/" + psgId).valueChanges();
        return this.items;
    };
    // Set schedule psg by their userId
    DataProvider.prototype.setBooking = function (date) {
        return this.angularfireDatabase.object("/booking/" + date);
    };
    // get psychologist that available
    DataProvider.prototype.getAvailableSession = function (psgId, session) {
        this.items = this.angularfireDatabase
            .object("/psg/" + psgId + "/schedule/" + session)
            .valueChanges();
        return this.items;
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consultation_consultation__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    // TabsPage
    // This is the page where we set our tabs.
    function TabsPage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.messages = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
        // friends: any = FriendsPage;
        this.profile = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        // timeLine: any = TimeLinePage;
        this.consultation = __WEBPACK_IMPORTED_MODULE_4__consultation_consultation__["a" /* ConsultationPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getUnreadMessagesCount();
        // Get conversations and add/update if the conversation exists, otherwise delete from list.
        this.dataProvider.getValueConversations().subscribe(function (conversationsInfo) {
            // console.log("conversationsInfo : ",conversationsInfo);
            if (conversationsInfo.length > 0) {
                _this.conversationsInfo = conversationsInfo;
                conversationsInfo.forEach(function (conversationInfo) {
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
    };
    // Add or update conversaion for real-time sync of unreadMessagesCount.
    TabsPage.prototype.addOrUpdateConversation = function (conversation) {
        if (!this.conversationList) {
            this.conversationList = [conversation];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.conversationList.length; i++) {
                if (this.conversationList[i].key == conversation.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.conversationList[index] = conversation;
            }
            else {
                this.conversationList.push(conversation);
            }
        }
        //console.log(this.conversationList);
        this.computeUnreadMessagesCount();
    };
    // Compute all conversation's unreadMessages.
    TabsPage.prototype.computeUnreadMessagesCount = function () {
        this.unreadMessagesCount = 0;
        if (this.conversationList) {
            for (var i = 0; i < this.conversationList.length; i++) {
                this.unreadMessagesCount += this.conversationList[i].messages.length - this.conversationsInfo[i].messagesRead;
                if (this.unreadMessagesCount == 0) {
                    this.unreadMessagesCount = null;
                }
            }
        }
    };
    TabsPage.prototype.getUnreadMessagesCount = function () {
        if (this.unreadMessagesCount) {
            if (this.unreadMessagesCount > 0) {
                return this.unreadMessagesCount;
            }
        }
        return null;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\tabs\tabs.html"*/'<ion-tabs show="false" small selectedIndex="0">\n\n  <ion-tab [root]="messages" tabIcon="chatboxes" tabBadgeStyle="danger" tabBadge="{{getUnreadMessagesCount()}}"></ion-tab>\n\n  <!-- <ion-tab [root]="timeLine" tabIcon="time" tabBadgeStyle="danger"></ion-tab> -->\n\n  <ion-tab [root]="consultation" tabIcon="md-star-outline" tabBadgeStyle="danger"></ion-tab>\n\n  <!-- <ion-tab [root]="friends" tabIcon="md-people" tabBadgeStyle="danger" tabBadge="{{friendRequestCount}}"></ion-tab> -->\n\n  <ion-tab [root]="profile" tabIcon="md-settings" ></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* DataProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the DocverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DocverPage = /** @class */ (function () {
    function DocverPage(dataProvider, navCtrl, navParams, formBuilder, alertCtrl, angularfireDatabase, loadingProvider, view, camera, zone, app) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.view = view;
        this.camera = camera;
        this.zone = zone;
        this.app = app;
        this.ijazahPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.KTMPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.KTPPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.verifyForm = formBuilder.group({
            address: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            time: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        });
    }
    DocverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocverPage');
    };
    // Function to convert dataURI to Blob needed by Firebase
    DocverPage.prototype.imgURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    };
    //Get Ijazah
    DocverPage.prototype.getIjazah = function (sourceType) {
        var _this = this;
        this.ijazahPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.ijazahPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            _this.imgBlobIjazah = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            _this.metadataIjazah = {
                'contentType': _this.imgBlobIjazah.type
            };
        }, function (err) {
            console.log(err);
        });
        this.loadingProvider.hide();
    };
    //Get KTP
    DocverPage.prototype.getKTP = function (sourceType) {
        var _this = this;
        this.KTPPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.KTPPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            _this.imgBlobKTP = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            _this.metadataKTP = {
                'contentType': _this.imgBlobKTP.type
            };
        });
        this.loadingProvider.hide();
    };
    DocverPage.prototype.uploadPsyCard = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Upload Psychologist ',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.getIjazah(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.getIjazah(_this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    DocverPage.prototype.uploadKTP = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Upload KTP',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.getKTP(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.getKTP(_this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    // Generate a random filename of length for the image to be uploaded
    DocverPage.prototype.generateFilename = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    };
    //Push Ijazah and KTP
    DocverPage.prototype.pushDocPhysicologist = function () {
        var _this = this;
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe(function (params) {
            _this.user = params;
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + _this.user.userId + '/' + _this.generateFilename()).put(_this.imgBlobIjazah, _this.metadataIjazah).then(function (snapshot) {
                var url = snapshot.metadata.downloadURLs[0];
                // Update User Data on Database.
                _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                    PsyCard: url
                }).then(function (success) {
                    console.log("Psychologist Card updated");
                    //KTP section start
                    // Generate filename and upload to Firebase Storage.
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + _this.user.userId + '/' + _this.generateFilename()).put(_this.imgBlobKTP, _this.metadataKTP).then(function (snapshot) {
                        var url = snapshot.metadata.downloadURLs[0];
                        // Update User Data on Database.
                        _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                            KTP: url,
                            name: _this.name,
                            address: _this.address,
                            start: _this.start,
                            finish: _this.finish,
                            docStatus: "true"
                        }).then(function (success) {
                            console.log("KTP succesfully updated");
                            _this.alert = _this.alertCtrl.create({
                                title: "Congratulation...",
                                subTitle: "File has been submitted, verification process will take 24 Hours",
                                buttons: ['OK']
                            }).present();
                            _this.view.dismiss();
                            _this.loadingProvider.hide();
                        }).catch(function (error) {
                            console.log("KTP error");
                            _this.loadingProvider.hide();
                        });
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                        _this.alertCtrl.create({
                            title: "Error",
                            subTitle: "Something went wrong",
                            buttons: ['OK']
                        }).present();
                    });
                    //KTP section end
                }).catch(function (error) {
                    console.log("Psychologist Card error");
                    _this.loadingProvider.hide();
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
                _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "Something went wrong",
                    buttons: ['OK']
                }).present();
            });
        });
    };
    DocverPage.prototype.submit = function () {
        //Push to realtime database
        this.pushDocPhysicologist();
    };
    DocverPage.prototype.back = function () {
        this.view.dismiss();
        console.log("modal dismissed");
    };
    DocverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-docver',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\docver\docver.html"*/'<!--\n\n  Generated template for the DocverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons>\n\n          <button ion-button tappable (click)="back()">Back</button>\n\n        </ion-buttons>\n\n    <ion-title>Document Verification</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n        <ion-label>Full Name</ion-label> \n\n        <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Upload Psychologist Card</ion-label> \n\n        <button ion-button item-content (click)="uploadPsyCard()">Upload</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Upload KTP</ion-label> \n\n        <button ion-button item-content (click)="uploadKTP()">Upload</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Practical Address</ion-label> \n\n        <ion-input type="text" [(ngModel)]="address"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Availability Start</ion-label> \n\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="start"></ion-datetime>\n\n    </ion-item> \n\n\n\n    <ion-item>\n\n        <ion-label>Availability Finish</ion-label> \n\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="finish"></ion-datetime>\n\n    </ion-item> \n\n    <br>\n\n    <button ion-button block color="primary" (click)="submit()">Submit</button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\docver\docver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */]])
    ], DocverPage);
    return DocverPage;
}());

//# sourceMappingURL=docver.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageModalPage = /** @class */ (function () {
    function ImageModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImageModalPage.prototype.ionViewDidLoad = function () {
        this.image = this.navParams.get('img');
    };
    ImageModalPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    ImageModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-image-modal',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\image-modal\image-modal.html"*/'<ion-content>\n\n  <div class="content" (click)="close()" tappable>\n\n    <img src={{image}}/>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\image-modal\image-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ImageModalPage);
    return ImageModalPage;
}());

//# sourceMappingURL=image-modal.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPeoplePage = /** @class */ (function () {
    // SearchPeoplePage
    // This is the page where the user can search for other users and send a friend request.
    function SearchPeoplePage(navCtrl, navParams, dataProvider, loadingProvider, alertCtrl, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
    }
    SearchPeoplePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.loadingProvider.show();
        this.searchUser = '';
        // Get all users.
        this.dataProvider.getUsers().subscribe(function (accounts) {
            _this.loadingProvider.hide();
            _this.accounts = accounts;
            _this.accLength = _this.accounts.length;
            // console.log("friend length", accounts);
            console.log("friendlist profile", _this.accounts);
            _this.dataProvider.getCurrentUser().subscribe(function (account) {
                // Add own userId as exludedIds.
                _this.excludedIds = [];
                _this.exclude = _this.excludedIds.length;
                console.log("excludeids : ", _this.excludedIds);
                console.log("exclude : ", _this.exclude);
                _this.account = account;
                if (_this.excludedIds.indexOf(account.key) == -1) {
                    _this.excludedIds.push(account.key);
                }
                // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
                // console.log("Account : "+JSON.stringify(account));
                if (account.friends) {
                    account.friends.forEach(function (friend) {
                        switch (friend.role) {
                            case "Client":
                                if (_this.excludedIds.indexOf(friend) == -1) {
                                    _this.excludedIds.push(friend);
                                }
                                break;
                        }
                    });
                }
                // Get requests of the currentUser.
                _this.dataProvider.getRequests(account.key).subscribe(function (requests) {
                    _this.requestsSent = requests.requestsSent;
                    _this.friendRequests = requests.friendRequests;
                });
            });
        });
    };
    // Back
    SearchPeoplePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Get the status of the user in relation to the logged in user.
    SearchPeoplePage.prototype.getStatus = function (user) {
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
    };
    // Send friend request.
    SearchPeoplePage.prototype.sendFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(user.userId);
                    }
                }
            ]
        }).present();
    };
    // Cancel friend request sent.
    SearchPeoplePage.prototype.cancelFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.key);
                    }
                }
            ]
        }).present();
    };
    // Accept friend request.
    SearchPeoplePage.prototype.acceptFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Reject Request',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(user.key);
                    }
                },
                {
                    text: 'Accept Request',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(user.key);
                    }
                }
            ]
        }).present();
    };
    // View user.
    SearchPeoplePage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    SearchPeoplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-people',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\search-people\search-people.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Search People</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No other users to send friend request right now. -->\n\n  <div class="empty-list" *ngIf="accLength && ((accLength == 0) || (accLength == exclude))">\n\n    <h1><ion-icon name="md-search"></ion-icon></h1>\n\n    <p>Uh-oh! Sorry but we can\'t find other users right now. Try again later.</p>\n\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n\n  </div>\n\n  <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n\n  <ion-list class="avatar-list" *ngIf="accLength && accLength > 0">\n\n    <ion-searchbar *ngIf="accLength != exclude" [(ngModel)]="searchUser" placeholder="Search for name or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item *ngFor="let account of accounts | searchFilter: [excludedIds, searchUser]" no-lines tappable (click)="viewUser(account.key)">\n\n      <ion-fab middle right>\n\n        <!-- Show appropriate buttons depending on the status of this user in relation to the current user. -->\n\n        <!-- // Returns:\n\n        // 0 when user can be requested as friend.\n\n        // 1 when a friend request was already sent to this user.\n\n        // 2 when this user has a pending friend request. -->\n\n        <button ion-fab mini tappable (click)="sendFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 0">\n\n          <ion-icon name="md-add-circle" class="success"></ion-icon>\n\n        </button>\n\n        <button ion-fab mini tappable (click)="cancelFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 1">\n\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n\n        </button>\n\n        <button ion-fab mini tappable (click)="acceptFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 2">\n\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{account.img}}">\n\n      </ion-avatar>\n\n      <h2>{{account.name}}</h2>\n\n      <p>@{{account.username}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\search-people\search-people.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase__["a" /* FirebaseProvider */]])
    ], SearchPeoplePage);
    return SearchPeoplePage;
}());

//# sourceMappingURL=search-people.js.map

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CommentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommentPage = /** @class */ (function () {
    function CommentPage(actionSheetCtrl, toastCtrl, navCtrl, navParams, alertCtrl, formBuilder, angularfireDatabase, loadingProvider, app, dataProvider, cb, data, zone, modalCtrl, view, params) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.app = app;
        this.dataProvider = dataProvider;
        this.cb = cb;
        this.data = data;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.params = params;
        this.commentFound = false;
        //get post ID that will be commented
        this.timeLineID = params.get('timeLineID');
    }
    CommentPage.prototype.back = function () {
        this.view.dismiss();
        console.log("modal dismissed");
    };
    CommentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CommentPage');
        this.commentFound = false;
        this.dataProvider.getCommentTimeline().map(function (params) {
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var item = params_1[_i];
                if (item.timeLineID == _this.timeLineID) {
                    if (item.comments == "") {
                        _this.commentList = [];
                    }
                    _this.commentList = item.comments;
                }
            }
        });
    };
    CommentPage.prototype.postComment = function () {
        var _this = this;
        var ID_Post = this.timeLineID;
        var data;
        var data_timeline;
        var ID_User;
        var comments;
        var posts;
        var newTimeLine;
        var newTimeLine2;
        var friends;
        this.dataProvider.postCommentTimeline().subscribe(function (params) {
            console.log(params);
            for (var _i = 0, params_2 = params; _i < params_2.length; _i++) {
                data = params_2[_i];
                console.log(data.ID_User);
                console.log("data.Post_ID : " + data.ID_Post);
                console.log("ID_Post : " + ID_Post);
                if (ID_Post == data.ID_Post) {
                    ID_User = data.ID_User;
                    console.log("ID_User : " + ID_User);
                    _this.dataProvider.getUserTimeLineByID(ID_User).subscribe(function (params) {
                        console.log("timeLine : " + params);
                        newTimeLine = params;
                        for (var i = newTimeLine.length - 1; i >= 0; i--) {
                            if (newTimeLine[i].timeLineID == ID_Post) {
                                if (newTimeLine[i].comments == "") {
                                    newTimeLine[i].comments = [];
                                }
                                newTimeLine[i].comments.push({
                                    senderId: newTimeLine[i].senderId,
                                    comment: _this.newComment,
                                    img: newTimeLine[i].img,
                                    role: newTimeLine[i].role,
                                    gender: newTimeLine[i].gender,
                                    date: newTimeLine[i].date,
                                    name: newTimeLine[i].name
                                });
                                _this.angularfireDatabase.object('/users/' + ID_User).update({
                                    timeLine: newTimeLine
                                });
                                //friends (that has relation with Post_ID) timeline comment update
                                _this.dataProvider.relationFriendTimeline(ID_User).subscribe(function (params) {
                                    friends = params;
                                    var _loop_1 = function (data_user) {
                                        _this.dataProvider.getUserTimeLineByID(data_user).subscribe(function (params) {
                                            newTimeLine2 = params;
                                            for (var i_1 = newTimeLine2.length - 1; i_1 >= 0; i_1--) {
                                                if (newTimeLine2[i_1].timeLineID == ID_Post) {
                                                    if (newTimeLine2[i_1].comments == "") {
                                                        newTimeLine2[i_1].comments = [];
                                                    }
                                                    newTimeLine2[i_1].comments.push({
                                                        senderId: newTimeLine2[i_1].senderId,
                                                        comment: _this.newComment,
                                                        img: newTimeLine2[i_1].img,
                                                        role: newTimeLine2[i_1].role,
                                                        gender: newTimeLine2[i_1].gender,
                                                        date: newTimeLine2[i_1].date,
                                                        name: newTimeLine[i_1].name
                                                    });
                                                    //clean form
                                                    _this.newComment = "";
                                                    _this.angularfireDatabase.object('/users/' + data_user).update({
                                                        timeLine: newTimeLine2
                                                    });
                                                }
                                            }
                                        });
                                    };
                                    for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
                                        var data_user = friends_1[_i];
                                        _loop_1(data_user);
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comment',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\comment\comment.html"*/'<!--\n\n  Generated template for the CommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n        <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Comment</ion-title>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list *ngFor="let item of commentList">\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="{{item.img}}">\n\n            </ion-avatar>\n\n            <h3 *ngIf="item.senderId != loggedInID" class="userName">{{item.name}}</h3>\n\n            <h4 *ngIf="item.senderId == loggedInID" class="userName">Me</h4>\n\n            <ion-icon class="line" name="male">&nbsp;<h4>{{item.role}}</h4></ion-icon>\n\n            <h4>{{item.comment}}</h4>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <div class="bottom_bar_custom">\n\n      <ion-input type="text" [(ngModel)]="newComment" placeholder="Type your message"></ion-input>\n\n      <ion-fab middle right>\n\n        <button ion-fab mini (click)="postComment()" tappable><ion-icon name="md-send"></ion-icon></button>\n\n      </ion-fab>\n\n    </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\comment\comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 257;

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocverRegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the DocverRegPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DocverRegPage = /** @class */ (function () {
    function DocverRegPage(dataProvider, navCtrl, navParams, formBuilder, alertCtrl, angularfireDatabase, loadingProvider, view, camera, zone, app) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.view = view;
        this.camera = camera;
        this.zone = zone;
        this.app = app;
        this.KTMPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.verifyForm = formBuilder.group({
            address: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            time: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        });
    }
    DocverRegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocverPage');
    };
    // Function to convert dataURI to Blob needed by Firebase
    DocverRegPage.prototype.imgURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    };
    //Get KTM
    DocverRegPage.prototype.getKTM = function (sourceType) {
        var _this = this;
        this.KTMPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.KTMPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            _this.imgBlobKTM = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            _this.metadataKTM = {
                'contentType': _this.imgBlobKTM.type
            };
        }, function (err) {
            console.log(err);
        });
        this.loadingProvider.hide();
    };
    DocverRegPage.prototype.uploadKTM = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Upload KTM/KTP',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.getKTM(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.getKTM(_this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    // Generate a random filename of length for the image to be uploaded
    DocverRegPage.prototype.generateFilename = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    };
    //Push KTM
    DocverRegPage.prototype.pushDocPhysicolStudent = function () {
        var _this = this;
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe(function (params) {
            _this.user = params;
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + _this.user.userId + '/' + _this.generateFilename()).put(_this.imgBlobKTM, _this.metadataKTM).then(function (snapshot) {
                var url = snapshot.metadata.downloadURLs[0];
                // Update User Data on Database.
                _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                    KTM_KTP: url,
                    name: _this.name,
                    city: _this.city,
                    docStatus: "true"
                }).then(function (success) {
                    console.log("KTM/KTP succesfully updated");
                    _this.alert = _this.alertCtrl.create({
                        title: "Congratulation...",
                        subTitle: "File has been submitted, verification process will take 24 Hours",
                        buttons: ['OK']
                    }).present();
                    _this.view.dismiss();
                    _this.loadingProvider.hide();
                }).catch(function (error) {
                    console.log("KTM error");
                    _this.loadingProvider.hide();
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
                _this.alertCtrl.create({
                    title: "Error",
                    subTitle: "Something went wrong",
                    buttons: ['OK']
                }).present();
            });
        });
    };
    DocverRegPage.prototype.submit = function () {
        //Push to realtime database
        this.pushDocPhysicolStudent();
    };
    DocverRegPage.prototype.back = function () {
        this.view.dismiss();
        console.log("modal dismissed");
    };
    DocverRegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-docver-reg',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\docver-reg\docver-reg.html"*/'<!--\n\n  Generated template for the DocverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n          <ion-buttons>\n\n              <button ion-button tappable (click)="back()">Back</button>\n\n            </ion-buttons>\n\n        <ion-title>Document Verification</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    <ion-content padding>\n\n      <ion-list>\n\n  \n\n      <ion-item>\n\n          <ion-label>Full Name</ion-label> \n\n          <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>Upload KTM/KTP</ion-label> \n\n          <button ion-button item-content (click)="uploadKTM()">Upload</button>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-label>City</ion-label>\n\n          <ion-select [(ngModel)]="city">\n\n              <ion-option value="Bogor">Bogor</ion-option>\n\n              <ion-option value="Depok">Depok</ion-option>\n\n              <ion-option value="Jakarta">Jakarta</ion-option>\n\n              <ion-option value="Semarang">Semarang</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n  \n\n      <button ion-button block color="primary" (click)="submit()">Submit</button>\n\n      </ion-list>\n\n    \n\n    </ion-content>\n\n    '/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\docver-reg\docver-reg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */]])
    ], DocverRegPage);
    return DocverRegPage;
}());

//# sourceMappingURL=docver-reg.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Boarding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var BoardingPage = /** @class */ (function () {
    function BoardingPage(navCtrl, navParams, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginProvider = loginProvider;
        this.slides = [
            {
                image: "assets/images/onboarding1.jpg",
            },
            {
                image: "assets/images/onboarding2.jpg",
            },
            {
                image: "assets/images/onboarding3.jpg",
            }
        ];
    }
    BoardingPage.prototype.mulai = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        localStorage.setItem("toggle", "true");
    };
    BoardingPage.prototype.lewati = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        localStorage.setItem("toggle", "true");
    };
    BoardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-boarding',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\boarding\boarding.html"*/'\n\n<ion-content class="tutorial-page">\n\n    \n\n      <ion-slides pager>\n\n        <ion-slide *ngFor="let slide of slides">\n\n        <ion-header>\n\n          <ion-navbar color=\'primary\'>\n\n            <ion-buttons color="primary-active" end>\n\n              <button ion-button (click)="lewati()">SKIP</button>\n\n            </ion-buttons>\n\n          </ion-navbar>\n\n        </ion-header>\n\n          <img [src]="slide.image" class="slide-image"/>\n\n<!--           <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n          <p [innerHTML]="slide.description"></p> -->\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-header>\n\n            <ion-navbar color=\'primary\'>\n\n              <ion-buttons color="primary-active" end>\n\n                <button ion-button (click)="mulai()">START</button>\n\n              </ion-buttons>\n\n            </ion-navbar>\n\n          </ion-header>\n\n          <img src="assets/images/onboarding4.jpg" class="slide-image"/>\n\n          <h2 class="slide-title">Ready to Play?</h2>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\boarding\boarding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_login__["a" /* LoginProvider */]])
    ], BoardingPage);
    return BoardingPage;
}());

//# sourceMappingURL=boarding.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docver_reg_docver_reg__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__docver_docver__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_image__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var HomePage = /** @class */ (function () {
    // HomePage
    // This is the page where the user is directed after successful login and email is confirmed.
    // A couple of profile management function is available for the user in this page such as:
    // Change name, profile pic, email, and password
    // The user can also opt for the deletion of their account, and finally logout.
    function HomePage(navCtrl, modalCtrl, view, alertCtrl, navParams, app, logoutProvider, loadingProvider, imageProvider, angularfireDatabase, alertProvider, dataProvider, camera) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.loadingProvider = loadingProvider;
        this.imageProvider = imageProvider;
        this.angularfireDatabase = angularfireDatabase;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        this.camera = camera;
        this.logoutProvider.setApp(this.app);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.loadingProvider.hide();
            _this.user = user;
            console.log("current usernya", _this.user);
        });
    };
    // ini debug userid lifecycle dari ionViewDidLoad atas
    HomePage.prototype.ionViewDidLeave = function () {
        var _this = this;
        //set anonymouse flag
        this.dataProvider.getUser(this.user.userId).subscribe(function (userData) {
            if (userData != null) {
                console.log("anonyms status", userData.anonymouse);
                if (userData.anonymouse == "false") {
                    _this.anonymouseFlag = false;
                }
                else {
                    _this.anonymouseFlag = true;
                }
            }
        });
    };
    HomePage.prototype.underconstruction = function () {
        this.alert = this.alertCtrl.create({
            title: 'Ooops..',
            subTitle: 'Sorry, this feature under maintenance.',
            buttons: ['Ok']
        }).present();
    };
    // Change user's profile photo. Uses imageProvider to process image and upload on Firebase and update userData.
    HomePage.prototype.setPhoto = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Set Profile Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    // Change user's profile name, username, and description.
    HomePage.prototype.setName = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var name = data["name"];
                        // Check if entered name is different from the current name
                        if (_this.user.name != name) {
                            // Check if name's length is more than five characters
                            if (name.length >= __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileNameValidator.minLength) {
                                // Check if name contains characters and numbers only.
                                if (__WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileNameValidator.pattern.test(name)) {
                                    _this.loadingProvider.show();
                                    var profile = {
                                        displayName: name,
                                        photoURL: _this.user.photoURL
                                    };
                                    // Update profile on Firebase
                                    __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.updateProfile(profile)
                                        .then(function (success) {
                                        // Update userData on Database.
                                        _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                            realName: name,
                                            name: name
                                        }).then(function (success) {
                                            __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileNameValidator.pattern.test(name); //Refresh validator
                                            _this.alertProvider.showProfileUpdatedMessage();
                                        }).catch(function (error) {
                                            _this.alertProvider.showErrorMessage('profile/error-update-profile');
                                        });
                                    })
                                        .catch(function (error) {
                                        // Show error
                                        _this.loadingProvider.hide();
                                        var code = error["code"];
                                        _this.alertProvider.showErrorMessage(code);
                                        if (code == 'auth/requires-recent-login') {
                                            _this.logoutProvider.logout();
                                        }
                                    });
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/invalid-chars-name');
                                }
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/name-too-short');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    //Set username
    HomePage.prototype.setUsername = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var username = data["username"];
                        // Check if entered username is different from the current username
                        if (_this.user.username != username) {
                            _this.dataProvider.getUserWithUsername(username).subscribe(function (userList) {
                                if (userList.length > 0) {
                                    _this.alertProvider.showErrorMessage('profile/error-same-username');
                                }
                                else {
                                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                        username: username
                                    }).then(function (success) {
                                        _this.alertProvider.showProfileUpdatedMessage();
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-update-profile');
                                    });
                                }
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    //Set description
    HomePage.prototype.setDescription = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var description = data["description"];
                        // Check if entered description is different from the current description
                        if (_this.user.description != description) {
                            _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                description: description
                            }).then(function (success) {
                                _this.alertProvider.showProfileUpdatedMessage();
                            }).catch(function (error) {
                                _this.alertProvider.showErrorMessage('profile/error-update-profile');
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    // Change user's email. Uses Validator.ts to validate the entered email. After, update the userData on database.
    // When the user changed their email, they have to confirm the new email address.
    HomePage.prototype.setEmail = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var email = data["email"];
                        //Check if entered email is different from the current email
                        if (_this.user.email != email) {
                            //Check if email is valid.
                            if (__WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                _this.loadingProvider.show();
                                // Update email on Firebase.
                                __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then(function (success) {
                                    // Update userData on Database.
                                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                        email: email
                                    }).then(function (success) {
                                        __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                        // Check if emailVerification is enabled, if it is go to verificationPage.
                                        if (__WEBPACK_IMPORTED_MODULE_11__login__["a" /* Login */].emailVerification) {
                                            if (!__WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.emailVerified) {
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__login__["a" /* Login */].verificationPage);
                                            }
                                        }
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-change-email');
                                    });
                                })
                                    .catch(function (error) {
                                    //Show error
                                    _this.loadingProvider.hide();
                                    var code = error["code"];
                                    _this.alertProvider.showErrorMessage(code);
                                    if (code == 'auth/requires-recent-login') {
                                        _this.logoutProvider.logout();
                                    }
                                });
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    // Change user's password, this option only shows up for users registered via Firebase.
    // The currentPassword is first checked, after which the new password should be entered twice.
    // Uses password validator from Validator.ts.
    HomePage.prototype.setPassword = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var currentPassword = data["currentPassword"];
                        var credential = __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"].EmailAuthProvider.credential(_this.user.email, currentPassword);
                        // Check if currentPassword entered is correct
                        _this.loadingProvider.show();
                        __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.reauthenticateWithCredential(credential)
                            .then(function (success) {
                            var password = data["password"];
                            // Check if entered password is not the same as the currentPassword
                            if (password != currentPassword) {
                                if (password.length >= __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profilePasswordValidator.minLength) {
                                    if (__WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password)) {
                                        if (password == data["confirmPassword"]) {
                                            // Update password on Firebase.
                                            __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.updatePassword(password)
                                                .then(function (success) {
                                                _this.loadingProvider.hide();
                                                __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password);
                                                _this.alertProvider.showPasswordChangedMessage();
                                            })
                                                .catch(function (error) {
                                                _this.loadingProvider.hide();
                                                var code = error["code"];
                                                _this.alertProvider.showErrorMessage(code);
                                                if (code == 'auth/requires-recent-login') {
                                                    _this.logoutProvider.logout();
                                                }
                                            });
                                        }
                                        else {
                                            _this.alertProvider.showErrorMessage('profile/passwords-do-not-match');
                                        }
                                    }
                                    else {
                                        _this.alertProvider.showErrorMessage('profile/invalid-chars-password');
                                    }
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/password-too-short');
                                }
                            }
                        })
                            .catch(function (error) {
                            //Show error
                            _this.loadingProvider.hide();
                            var code = error["code"];
                            _this.alertProvider.showErrorMessage(code);
                        });
                    }
                }
            ]
        }).present();
    };
    // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
    // If you added some other info or traces for the account, make sure to account for them when deleting the account.
    HomePage.prototype.deleteAccount = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete your account? This cannot be undone.',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    handler: function (data) {
                        _this.loadingProvider.show();
                        // Delete Firebase user
                        __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.delete()
                            .then(function (success) {
                            // Delete profilePic of user on Firebase storage
                            _this.imageProvider.deleteUserImageFile(_this.user);
                            // Delete user data on Database
                            _this.angularfireDatabase.object('/users/' + _this.user.userId).remove().then(function () {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showAccountDeletedMessage();
                                _this.logoutProvider.logout();
                            });
                        })
                            .catch(function (error) {
                            _this.loadingProvider.hide();
                            var code = error["code"];
                            _this.alertProvider.showErrorMessage(code);
                            if (code == 'auth/requires-recent-login') {
                                _this.logoutProvider.logout();
                            }
                        });
                    }
                }
            ]
        }).present();
    };
    // Log the user out.
    HomePage.prototype.logout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: function (data) { _this.logoutProvider.logout(); }
                }
            ]
        }).present();
    };
    HomePage.prototype.anonymouseMode = function () {
        var _this = this;
        console.log("mode changed");
        this.items = this.angularfireDatabase.object('/users/' + this.user.userId).snapshotChanges();
        this.items.subscribe(function (userData) {
            if (userData != null) {
                if (userData.anonymouse == "false") {
                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                        anonymouse: "true",
                        name: "anonymous"
                    }).then(function (success) {
                        _this.alertProvider.showProfileUpdatedMessage();
                    }).catch(function (error) {
                        _this.alertProvider.showErrorMessage('profile/error-update-profile');
                    });
                }
                else {
                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                        anonymouse: "false",
                        name: userData.realName
                    }).then(function (success) {
                        _this.alertProvider.showProfileUpdatedMessage();
                    }).catch(function (error) {
                        _this.alertProvider.showErrorMessage('profile/error-update-profile');
                    });
                }
            }
        });
    };
    HomePage.prototype.verify = function () {
        var mymodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__docver_docver__["a" /* DocverPage */]);
        mymodal.present();
    };
    HomePage.prototype.verifyReg = function () {
        var mymodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__docver_reg_docver_reg__["a" /* DocverRegPage */]);
        mymodal.present();
    };
    // open ProfilePage
    HomePage.prototype.profile = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_14__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="theblues">\n\n      <img class="socioCss" src="assets/images/headerSocio.png" />\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="background" *ngIf="user">\n\n    <div class="profile">\n\n      <img src="{{user.img}}" tappable (click)="setPhoto()" />\n\n    </div>\n\n    <!-- Show icon of logged in provider -->\n\n    <h4>\n\n      <!-- <span tappable (click)="setName()"><ion-icon name="male"></ion-icon>{{user.name}} </span> -->\n\n      <span tappable (click)="setName()" class="name">{{user.name}} </span>\n\n        <!-- <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon> -->\n\n    </h4>\n\n    <p tappable (click)="setUsername()" class="username">@{{user.username}}</p>\n\n    <!-- <p tappable (click)="setDescription()" class="gender">{{user.description}}</p> -->\n\n    <p tappable class="gender">{{user.gender}}</p>\n\n    <!-- Profile Menu -->\n\n    <ion-list>\n\n      <ion-item>\n\n          <ion-label>Account</ion-label>\n\n      </ion-item>\n\n      \n\n    <ion-item no-lines tappable (click)="profile()">\n\n        <ion-icon color="theblues" name="person" item-left></ion-icon>\n\n        <ion-label>Profile</ion-label>\n\n    </ion-item>\n\n\n\n      <ion-item no-lines tappable>\n\n          <ion-icon color="theblues" name="eye" item-left></ion-icon>\n\n          <ion-label>Anonymous Mode</ion-label>\n\n          <ion-toggle [checked]="anonymouseFlag" (ionChange)="anonymouseMode()"></ion-toggle>\n\n      </ion-item>\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="setName()">\n\n        <ion-icon color="theblues" name="md-contact" item-left></ion-icon>\n\n        Edit Name\n\n      </ion-item> -->\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="setUsername()">\n\n        <ion-icon name="md-at" item-right></ion-icon>\n\n        Set Username\n\n      </ion-item> -->\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="verify()" *ngIf="user.role == \'Junior Psychologist\' || user.role == \'Senior Psychologist\'">\n\n        <ion-icon name="md-checkmark-circle" item-right></ion-icon>\n\n        Document Verification\n\n      </ion-item> -->\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="setDescription()">\n\n        <ion-icon name="md-clipboard" item-right></ion-icon>\n\n        Set Description\n\n      </ion-item> -->\n\n<!--   \n\n      <ion-item no-lines tappable (click)="setPhoto()">\n\n        <ion-icon name="ios-camera" item-right></ion-icon>\n\n        Set Profile Photo\n\n      </ion-item> -->\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="setEmail()">\n\n        <ion-icon name="md-mail-open" item-right></ion-icon>\n\n        Change Email Address\n\n      </ion-item> -->\n\n  \n\n      <ion-item no-lines tappable (click)="setPassword()" *ngIf="user && user.provider == \'Firebase\'">\n\n        <ion-icon color="theblues" name="md-key" item-left></ion-icon>\n\n        Change Password\n\n      </ion-item>\n\n      <!-- <ion-item no-lines tappable (click)="deleteAccount()">\n\n        Delete Account\n\n        <ion-icon name="md-trash" item-right></ion-icon>\n\n      </ion-item> -->\n\n      <ion-item no-lines tappable (click)="logout()">\n\n        <ion-icon color="danger" name="md-log-out" item-left></ion-icon>\n\n        <span style="color:#f53d3d">Logout</span>\n\n      </ion-item>\n\n\n\n      <!-- details -->\n\n      <ion-item>\n\n          <ion-label>Details</ion-label>\n\n      </ion-item>\n\n  \n\n      <ion-item no-lines tappable (click)="underconstruction()">\n\n        <ion-icon color="theblues" name="information" item-left></ion-icon>\n\n        Feedback\n\n      </ion-item>\n\n    \n\n      <ion-item no-lines tappable (click)="underconstruction()">\n\n        <ion-icon color="theblues" name="information-circle" item-left></ion-icon>\n\n        About\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfilePage = /** @class */ (function () {
    // HomePage
    // This is the page where the user is directed after successful login and email is confirmed.
    // A couple of profile management function is available for the user in this page such as:
    // Change name, profile pic, email, and password
    // The user can also opt for the deletion of their account, and finally logout.
    function ProfilePage(navCtrl, modalCtrl, view, alertCtrl, navParams, app, logoutProvider, loadingProvider, imageProvider, angularfireDatabase, alertProvider, dataProvider, camera) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.loadingProvider = loadingProvider;
        this.imageProvider = imageProvider;
        this.angularfireDatabase = angularfireDatabase;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        this.camera = camera;
        this.logoutProvider.setApp(this.app);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.loadingProvider.hide();
            _this.user = user;
            console.log("usernya", _this.user);
        });
    };
    // Change user's profile photo. Uses imageProvider to process image and upload on Firebase and update userData.
    ProfilePage.prototype.setPhoto = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Set Profile Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    // go to edit profile
    ProfilePage.prototype.editProfile = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__["a" /* EditprofilePage */]);
        console.log("edit");
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <!-- <img class="socioCss" src="assets/images/headerSocio.png" /> -->\n\n      <ion-title>Profile</ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button (click)="editProfile()">\n\n            <ion-icon class="edit-icon" name="create" item-right></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="background" *ngIf="user">\n\n    <div class="profile">\n\n      <img src="{{user.img}}" tappable (click)="setPhoto()" />\n\n    </div>\n\n    <!-- Show icon of logged in provider -->\n\n    \n\n    <p tappable class="username" tappable (click)="setPhoto()">Edit Photo</p>\n\n    <!-- <p tappable class="username">Remove Photo</p> -->\n\n    <!-- <p tappable (click)="setDescription()" class="gender">{{user.description}}</p> -->\n\n    <!-- <p tappable class="gender">{{user.gender}}</p> -->\n\n    <!-- Profile Menu -->\n\n    <ion-list>\n\n      <ion-item>\n\n          <ion-label>Personal Information</ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Name </h5>\n\n          <h2 class="name">{{user.name}} </h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Username </h5>\n\n          <h2 class="username">@{{user.username}} </h2>\n\n        </ion-item>\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Email </h5>\n\n          <h2 class="email">{{user.email}} </h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Phone number </h5>\n\n          <h2 class="phone">{{user.phoneNumber}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> City </h5>\n\n          <h2 class="city">{{user.city}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Profession </h5>\n\n          <h2 class="profession">{{user.profession}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Status </h5>\n\n          <h2 class="status">{{user.status}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Date of Birth </h5>\n\n          <h2 class="birth">{{user.birth}}</h2>\n\n      </ion-item>\n\n      \n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EditprofilePage = /** @class */ (function () {
    // HomePage
    // This is the page where the user is directed after successful login and email is confirmed.
    // A couple of profile management function is available for the user in this page such as:
    // Change name, profile pic, email, and password
    // The user can also opt for the deletion of their account, and finally logout.
    function EditprofilePage(toastCtrl, navCtrl, modalCtrl, view, alertCtrl, navParams, app, logoutProvider, loadingProvider, imageProvider, angularfireDatabase, alertProvider, dataProvider) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.loadingProvider = loadingProvider;
        this.imageProvider = imageProvider;
        this.angularfireDatabase = angularfireDatabase;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        this.logoutProvider.setApp(this.app);
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.loadingProvider.hide();
            _this.user = user;
            console.log("usernya", _this.user);
        });
    };
    // Change user's profile name, username, and description.
    EditprofilePage.prototype.setName = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var name = data["name"];
                        // Check if entered name is different from the current name
                        if (_this.user.name != name) {
                            // Check if name's length is more than five characters
                            if (name.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.minLength) {
                                // Check if name contains characters and numbers only.
                                if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.pattern.test(name)) {
                                    _this.loadingProvider.show();
                                    var profile = {
                                        displayName: name,
                                        photoURL: _this.user.photoURL
                                    };
                                    // Update profile on Firebase
                                    __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updateProfile(profile)
                                        .then(function (success) {
                                        // Update userData on Database.
                                        _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                            realName: name,
                                            name: name
                                        }).then(function (success) {
                                            __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.pattern.test(name); //Refresh validator
                                            _this.alertProvider.showProfileUpdatedMessage();
                                        }).catch(function (error) {
                                            _this.alertProvider.showErrorMessage('profile/error-update-profile');
                                        });
                                    })
                                        .catch(function (error) {
                                        // Show error
                                        _this.loadingProvider.hide();
                                        var code = error["code"];
                                        _this.alertProvider.showErrorMessage(code);
                                        if (code == 'auth/requires-recent-login') {
                                            _this.logoutProvider.logout();
                                        }
                                    });
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/invalid-chars-name');
                                }
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/name-too-short');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    //Set username
    EditprofilePage.prototype.setUsername = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var username = data["username"];
                        // Check if entered username is different from the current username
                        if (_this.user.username != username) {
                            _this.dataProvider.getUserWithUsername(username).subscribe(function (userList) {
                                if (userList.length > 0) {
                                    _this.alertProvider.showErrorMessage('profile/error-same-username');
                                }
                                else {
                                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                        username: username
                                    }).then(function (success) {
                                        _this.alertProvider.showProfileUpdatedMessage();
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-update-profile');
                                    });
                                }
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    //Set description
    EditprofilePage.prototype.setDescription = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var description = data["description"];
                        // Check if entered description is different from the current description
                        if (_this.user.description != description) {
                            _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                description: description
                            }).then(function (success) {
                                _this.alertProvider.showProfileUpdatedMessage();
                            }).catch(function (error) {
                                _this.alertProvider.showErrorMessage('profile/error-update-profile');
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    // Change user's email. Uses Validator.ts to validate the entered email. After, update the userData on database.
    // When the user changed their email, they have to confirm the new email address.
    EditprofilePage.prototype.setEmail = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var email = data["email"];
                        //Check if entered email is different from the current email
                        if (_this.user.email != email) {
                            //Check if email is valid.
                            if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                _this.loadingProvider.show();
                                // Update email on Firebase.
                                __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then(function (success) {
                                    // Update userData on Database.
                                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                        email: email
                                    }).then(function (success) {
                                        __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                        // Check if emailVerification is enabled, if it is go to verificationPage.
                                        if (__WEBPACK_IMPORTED_MODULE_9__login__["a" /* Login */].emailVerification) {
                                            if (!__WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.emailVerified) {
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login__["a" /* Login */].verificationPage);
                                            }
                                        }
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-change-email');
                                    });
                                })
                                    .catch(function (error) {
                                    //Show error
                                    _this.loadingProvider.hide();
                                    var code = error["code"];
                                    _this.alertProvider.showErrorMessage(code);
                                    if (code == 'auth/requires-recent-login') {
                                        _this.logoutProvider.logout();
                                    }
                                });
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    // Change user's phoneNumber
    EditprofilePage.prototype.setPhone = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var phoneNumber = data["phoneNumber"];
                        if (_this.user.phoneNumber != phoneNumber) {
                            console.log("nomer telpon", phoneNumber);
                            // Check if number's length is more than 13 characters
                            if (phoneNumber.length <= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNumberValidator.maxLength && phoneNumber.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNumberValidator.minLength) {
                                // Check if name contains characters and numbers only.
                                if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNumberValidator.pattern.test(phoneNumber)) {
                                    _this.loadingProvider.show();
                                    var profile = {
                                        phoneNumber: phoneNumber,
                                    };
                                    // hasil dari comment10 baris dibawah
                                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                        phoneNumber: phoneNumber
                                    }).then(function (success) {
                                        __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNumberValidator.pattern.test(phoneNumber); //Refresh validator
                                        _this.alertProvider.showphoneUpdatedMessage();
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-update-number');
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
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/invalid-chars-number');
                                }
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/number-too-short');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    // Change user's City
    EditprofilePage.prototype.setCity = function () {
    };
    // Change user's Profession
    EditprofilePage.prototype.setProfession = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var profession = data["profession"];
                        if (_this.user.profession != profession) {
                            // Check if profession length is more than 25 characters and less than 2 characters
                            if (profession.length <= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileProfessionValidator.maxLength && profession.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileProfessionValidator.minLength) {
                                // Check if profession contains characters.
                                if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileProfessionValidator.pattern.test(profession)) {
                                    _this.loadingProvider.show();
                                    var profile = {
                                        profession: profession,
                                    };
                                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                                        profession: profession
                                    }).then(function (success) {
                                        __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileProfessionValidator.pattern.test(profession); //Refresh validator
                                        _this.alertProvider.showprofessionUpdatedMessage();
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-update-profession');
                                    });
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/invalid-chars-number');
                                }
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/number-too-short');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    // Change user's Status
    EditprofilePage.prototype.setStatus = function () {
        var _this = this;
        this.alert = this.alertCtrl.create();
        this.alert.setTitle('Select Status');
        this.alert.addInput({ type: 'radio', label: 'Single', value: 'Single', checked: true });
        this.alert.addInput({ type: 'radio', label: 'Married', value: 'Married' });
        this.alert.addButton('Cancel');
        this.alert.addButton({
            text: 'Save',
            handler: function (data) {
                var status = data["status"];
                if (_this.user.phoneNumber != status) {
                    console.log(data);
                    var status_1 = data;
                    _this.loadingProvider.show();
                    var profile = {
                        status: status_1,
                    };
                    _this.angularfireDatabase.object('/users/' + _this.user.userId).update({
                        status: status_1
                    }).then(function (success) {
                        _this.alertProvider.showstatusUpdatedMessage();
                    }).catch(function (error) {
                        _this.alertProvider.showErrorMessage('profile/error-update-status');
                    });
                }
            }
        }).present();
    };
    EditprofilePage.prototype.saveProfile = function () {
        // trigger birth update
        this.setBirth();
        var toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
        this.navCtrl.last();
    };
    // Change user's Birthdate
    EditprofilePage.prototype.setBirth = function () {
        var _this = this;
        var birth = this.birth;
        if (this.user.birth != birth) {
            this.loadingProvider.show();
            var profile = {
                birth: this.birth,
            };
            this.angularfireDatabase.object('/users/' + this.user.userId).update({
                birth: this.birth
            }).then(function (success) {
                // this.alertProvider.showbirthUpdatedMessage();
                console.log("update birth success");
            }).catch(function (error) {
                _this.alertProvider.showErrorMessage('profile/error-update-birth');
            });
        }
    };
    // Change user's password, this option only shows up for users registered via Firebase.
    // The currentPassword is first checked, after which the new password should be entered twice.
    // Uses password validator from Validator.ts.
    EditprofilePage.prototype.setPassword = function () {
        var _this = this;
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
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var currentPassword = data["currentPassword"];
                        var credential = __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"].EmailAuthProvider.credential(_this.user.email, currentPassword);
                        // Check if currentPassword entered is correct
                        _this.loadingProvider.show();
                        __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.reauthenticateWithCredential(credential)
                            .then(function (success) {
                            var password = data["password"];
                            // Check if entered password is not the same as the currentPassword
                            if (password != currentPassword) {
                                if (password.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.minLength) {
                                    if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password)) {
                                        if (password == data["confirmPassword"]) {
                                            // Update password on Firebase.
                                            __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updatePassword(password)
                                                .then(function (success) {
                                                _this.loadingProvider.hide();
                                                __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password);
                                                _this.alertProvider.showPasswordChangedMessage();
                                            })
                                                .catch(function (error) {
                                                _this.loadingProvider.hide();
                                                var code = error["code"];
                                                _this.alertProvider.showErrorMessage(code);
                                                if (code == 'auth/requires-recent-login') {
                                                    _this.logoutProvider.logout();
                                                }
                                            });
                                        }
                                        else {
                                            _this.alertProvider.showErrorMessage('profile/passwords-do-not-match');
                                        }
                                    }
                                    else {
                                        _this.alertProvider.showErrorMessage('profile/invalid-chars-password');
                                    }
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/password-too-short');
                                }
                            }
                        })
                            .catch(function (error) {
                            //Show error
                            _this.loadingProvider.hide();
                            var code = error["code"];
                            _this.alertProvider.showErrorMessage(code);
                        });
                    }
                }
            ]
        }).present();
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editprofile',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\editprofile\editprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <!-- <img class="socioCss" src="assets/images/headerSocio.png" /> -->\n\n      <ion-title>Edit Profile</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="saveProfile()" >\n\n          <ion-icon class="edit-icon" name="checkmark" item-right></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="background" *ngIf="user">\n\n     <ion-list>\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Name </h5>\n\n          <h2 tappable (click)="setName()" class="name">{{user.name}} </h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Username </h5>\n\n          <h2 tappable (click)="setUsername()" class="username">@{{user.username}} </h2>\n\n        </ion-item>\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Email </h5>\n\n          <h2 class="email">{{user.email}} </h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Phone number </h5>\n\n          <h2 tappable (click)="setPhone()" class="phoneNumber">{{user.phoneNumber}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> City </h5>\n\n          <h2 tappable (click)="setCity()" class="city">{{user.city}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Profession </h5>\n\n          <h2 tappable (click)="setProfession()" class="profession">{{user.profession}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Status </h5>\n\n          <h2 tappable (click)="setStatus()" class="status">{{user.status}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <ion-label style="margin-bottom: 8px; color:#549AD4"> Date of Birth </ion-label>\n\n          <ion-datetime displayFormat="D/M/YYYY" min="1940" pickerFormat="D M YY" placeholder="{{user.birth}}" [(ngModel)]="birth"></ion-datetime>\n\n      </ion-item>\n\n      \n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsultationPage = /** @class */ (function () {
    function ConsultationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConsultationPage.prototype.checkCalendar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calendar_calendar__["a" /* CalendarPage */]);
        var tabs = document.querySelectorAll('.show-tabbar');
        console.log('ionViewDidLoad', tabs);
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'none';
            });
        }
    };
    ConsultationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultationPage');
    };
    ConsultationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consultation',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\consultation\consultation.html"*/'<ion-header>\n\n  <ion-navbar color="theblues">\n\n    <img class="socioCss" src="assets/images/headerSocio.png" />\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="center">\n\n    <h2>Selesaikan masalahmu dengan psikolog</h2>\n\n    <img class="boardimg" src="assets/images/consult.png">\n\n    <p>Atur waktu yang kamu inginkan untuk curhat dengan psikolog</p>\n\n    <button color="theblues" ion-button (click)="checkCalendar()">ATUR JADWAL</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\consultation\consultation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ConsultationPage);
    return ConsultationPage;
}());

//# sourceMappingURL=consultation.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__choose_psg_choose_psg__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, alertCtrl, dataProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.eventz = { startTime: new Date(), endTime: new Date(), allDay: false };
        this.temp = [];
        this.date = [];
        this.temp2 = [];
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: "month",
            currentDate: new Date()
        };
    }
    CalendarPage.prototype.ionViewWillLeave = function () {
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'flex';
            });
        }
    };
    CalendarPage.prototype.ionViewDidLoad = function () {
        this.loadingProvider.show();
        this.getSchedule();
    };
    // go to session consultation by date choosen
    CalendarPage.prototype.sessionByDate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__choose_psg_choose_psg__["a" /* ChoosePsgPage */], {
            selectedDay: this.selectedDay
        });
    };
    CalendarPage.prototype.getSchedule = function () {
        var _this = this;
        this.dataProvider.getScheduling().subscribe(function (schedules) {
            _this.index = 0;
            var temp = 1;
            schedules.forEach(function (schedule) {
                var date = __WEBPACK_IMPORTED_MODULE_2_moment__(schedule.key);
                var today = __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY-MM-DD");
                // calendar must be before expired date
                if (date.isAfter(today)) {
                    _this.sessionStart = schedule.key + "T08:00:00";
                    _this.sessionEnd = schedule.key + "T24:00:00";
                    _this.eventSource.push({
                        title: schedule.key,
                        startTime: new Date(_this.sessionStart),
                        endTime: new Date(_this.sessionEnd),
                        allDay: true,
                    });
                    _this.index++;
                    temp += 1;
                }
                else {
                    console.log("past");
                }
            });
            if (_this.index < temp) {
                _this.refreshData();
            }
            _this.loadingProvider.hide();
        });
    };
    CalendarPage.prototype.refreshData = function () {
        var _this = this;
        var eventData = this.eventz;
        eventData.startTime = new Date(12 - 2 - 1997);
        eventData.endTime = new Date(12 - 2 - 1997);
        var events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(function () {
            _this.eventSource = events;
            console.log("EVa: ", _this.eventSource);
        });
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format("LLLL");
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format("LLLL");
        var alert = this.alertCtrl.create({
            title: "" + "Detail",
            subTitle: "From: " + start + "<br>To: " + end,
            buttons: ["OK"]
        });
        alert.present();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-calendar",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\calendar\calendar.html"*/'<ion-header>\n\n  <!-- <ion-navbar hideBackButton color="primary"> -->\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Pilih Tanggal\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <div class="footer">\n\n  </div> -->\n\n  <h4 text-center>{{viewTitle}}</h4>\n\n  <calendar \n\n  [eventSource]="eventSource" \n\n  [calendarMode]="calendar.mode" \n\n  [currentDate]="calendar.currentDate" \n\n  (onEventSelected)="onEventSelected($event)"\n\n  (onRangeChanged)="reloadSource(startTime, endTime)"\n\n  (onTitleChanged)="onViewTitleChanged($event)" \n\n  (onTimeSelected)="onTimeSelected($event)" \n\n  step="30" class="calendar">\n\n</calendar>\n\n</ion-content>\n\n<ion-footer>\n\n    <button class="btn-pilih" ion-button (click)="sessionByDate()">Pilih</button>\n\n</ion-footer>\n\n<!-- KETERANGAN DI ATAS\n\neventSource: The data we feed to the calendar view\n\ncurrentDate: Needed to mark “today”\n\nonEventSelected: Handle a tap on a single event\n\nonTitleChanged: Happens when we swipe to a new month\n\nonTimeSelected: Happens when we select a day or time\n\nstep: Used for accuracy of a day or week view\n\n -->'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\calendar\calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var errorMessages = {
    // Alert Provider
    // This is the provider class for most of the success and error messages in the app.
    // If you added your own messages don't forget to make a function for them or add them in the showErrorMessage switch block.
    // Firebase Error Messages
    accountExistsWithDifferentCredential: { title: 'Account Exists!', subTitle: 'An account with the same credential already exists.' },
    invalidCredential: { title: 'Invalid Credential!', subTitle: 'An error occured logging in with this credential.' },
    operationNotAllowed: { title: 'Login Failed!', subTitle: 'Logging in with this provider is not allowed! Please contact support.' },
    userDisabled: { title: 'Account Disabled!', subTitle: 'Sorry! But this account has been suspended! Please contact support.' },
    userNotFound: { title: 'Account Not Found!', subTitle: 'Sorry, but an account with this credential could not be found.' },
    wrongPassword: { title: 'Incorrect Password!', subTitle: 'Sorry, but the password you have entered is incorrect.' },
    invalidEmail: { title: 'Invalid Email!', subTitle: 'Sorry, but you have entered an invalid email address.' },
    emailAlreadyInUse: { title: 'Email Not Available!', subTitle: 'Sorry, but this email is already in use.' },
    weakPassword: { title: 'Weak Password!', subTitle: 'Sorry, but you have entered a weak password.' },
    requiresRecentLogin: { title: 'Credential Expired!', subTitle: 'Sorry, but this credential has expired! Please login again.' },
    userMismatch: { title: 'User Mismatch!', subTitle: 'Sorry, but this credential is for another user!' },
    providerAlreadyLinked: { title: 'Already Linked!', subTitle: 'Sorry, but your account is already linked to this credential.' },
    credentialAlreadyInUse: { title: 'Credential Not Available!', subTitle: 'Sorry, but this credential is already used by another user.' },
    // Profile Error Messages
    changeName: { title: 'Change Name Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your name.' },
    invalidCharsName: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNameValidator.patternError,
    invalidCharsNumber: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNumberValidator.patternError,
    nameTooShort: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNameValidator.lengthError,
    numberTooShort: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNumberValidator.lengthError,
    changeEmail: { title: 'Change Email Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your email address.' },
    invalidProfileEmail: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileEmailValidator.patternError,
    changePhoto: { title: 'Change Photo Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your photo.' },
    passwordTooShort: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profilePasswordValidator.lengthError,
    invalidCharsPassword: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profilePasswordValidator.patternError,
    passwordsDoNotMatch: { title: 'Change Password Failed!', subTitle: 'Sorry, but the passwords you entered do not match.' },
    updateProfile: { title: 'Update Profile Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your profile.' },
    updateProfession: { title: 'Update Profession Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your Profession.' },
    updateCity: { title: 'Update City Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your City.' },
    updateStatus: { title: 'Update Status Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your Status.' },
    updateBirth: { title: 'Update Birth Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your Birth.' },
    updateNumber: { title: 'Update Number Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your Number.' },
    usernameExists: { title: 'Username Already Exists!', subTitle: 'Sorry, but this username is already taken by another user.' },
    // Image Error Messages
    imageUpload: { title: 'Image Upload Failed!', subTitle: 'Sorry but we\'ve encountered an error uploading selected image.' },
    // Group Error Messages
    groupUpdate: { title: 'Update Group Failed!', subTitle: 'Sorry, but we\'ve encountered an error updating this group.' },
    groupLeave: { title: 'Leave Group Failed!', subTitle: 'Sorry, but you\'ve encountered an error leaving this group.' },
    groupDelete: { title: 'Delete Group Failed!', subTitle: 'Sorry, but we\'ve encountered an error deleting this group.' }
};
var successMessages = {
    passwordResetSent: { title: 'Password Reset Sent!', subTitle: 'A password reset email has been sent to: ' },
    profileUpdated: { title: 'Profile Updated!', subTitle: 'Your profile has been successfully updated!' },
    numberUpdated: { title: 'Phone Number Updated!', subTitle: 'Your Phone Number has been successfully updated!' },
    professionUpdated: { title: 'Profession Updated!', subTitle: 'Your Profession has been successfully updated!' },
    cityUpdated: { title: 'City Updated!', subTitle: 'Your City has been successfully updated!' },
    birthUpdated: { title: 'Birthdate Updated!', subTitle: 'Your Birthdate has been successfully updated!' },
    statusUpdated: { title: 'Status Updated!', subTitle: 'Your Status has been successfully updated!' },
    emailVerified: { title: 'Email Confirmed!', subTitle: 'Congratulations! Your email has been confirmed!' },
    emailVerificationSent: { title: 'Email Confirmation Sent!', subTitle: 'An email confirmation has been sent to: ' },
    accountDeleted: { title: 'Account Deleted!', subTitle: 'Your account has been successfully deleted.' },
    passwordChanged: { title: 'Password Changed!', subTitle: 'Your password has been successfully changed.' },
    friendRequestSent: { title: 'Friend Request Sent!', subTitle: 'Your friend request has been successfully sent!' },
    friendRequestRemoved: { title: 'Friend Request Deleted!', subTitle: 'Your friend request has been successfully deleted.' },
    groupUpdated: { title: 'Group Updated!', subTitle: 'This group has been successfully updated!' },
    groupLeft: { title: 'Leave Group', subTitle: 'You have successfully left this group.' }
};
var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, logoutProvider) {
        this.alertCtrl = alertCtrl;
        this.logoutProvider = logoutProvider;
        console.log("Initializing Alert Provider");
    }
    // Show profile updated
    AlertProvider.prototype.showProfileUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.profileUpdated["title"],
            subTitle: successMessages.profileUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show phone updated
    AlertProvider.prototype.showphoneUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.numberUpdated["title"],
            subTitle: successMessages.numberUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show Profession updated
    AlertProvider.prototype.showprofessionUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.professionUpdated["title"],
            subTitle: successMessages.professionUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show city updated
    AlertProvider.prototype.showcityUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.cityUpdated["title"],
            subTitle: successMessages.cityUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show status updated
    AlertProvider.prototype.showstatusUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.statusUpdated["title"],
            subTitle: successMessages.statusUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show birthdate updated
    AlertProvider.prototype.showbirthUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.birthUpdated["title"],
            subTitle: successMessages.birthUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show password reset sent
    AlertProvider.prototype.showPasswordResetMessage = function (email) {
        this.alert = this.alertCtrl.create({
            title: successMessages.passwordResetSent["title"],
            subTitle: successMessages.passwordResetSent["subTitle"] + email,
            buttons: ['OK']
        }).present();
    };
    // Show email verified and redirect to homePage
    AlertProvider.prototype.showEmailVerifiedMessageAndRedirect = function (navCtrl) {
        this.alert = this.alertCtrl.create({
            title: successMessages.emailVerified["title"],
            subTitle: successMessages.emailVerified["subTitle"],
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* Login */].homePage);
                    }
                }]
        }).present();
    };
    // Show email verification sent
    AlertProvider.prototype.showEmailVerificationSentMessage = function (email) {
        this.alert = this.alertCtrl.create({
            title: successMessages.emailVerificationSent["title"],
            subTitle: successMessages.emailVerificationSent["subTitle"] + email,
            buttons: ['OK']
        }).present();
    };
    // Show account deleted
    AlertProvider.prototype.showAccountDeletedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.accountDeleted["title"],
            subTitle: successMessages.accountDeleted["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show password changed
    AlertProvider.prototype.showPasswordChangedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.passwordChanged["title"],
            subTitle: successMessages.passwordChanged["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show friend request sent
    AlertProvider.prototype.showFriendRequestSent = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.friendRequestSent["title"],
            subTitle: successMessages.friendRequestSent["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show friend request removed
    AlertProvider.prototype.showFriendRequestRemoved = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.friendRequestRemoved["title"],
            subTitle: successMessages.friendRequestRemoved["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show group updated.
    AlertProvider.prototype.showGroupUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.groupUpdated["title"],
            subTitle: successMessages.groupUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show error messages depending on the code
    // If you added custom error codes on top, make sure to add a case block for it.
    AlertProvider.prototype.showErrorMessage = function (code) {
        switch (code) {
            // Firebase Error Messages
            case 'auth/account-exists-with-different-credential':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.accountExistsWithDifferentCredential["title"],
                    subTitle: errorMessages.accountExistsWithDifferentCredential["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/invalid-credential':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCredential["title"],
                    subTitle: errorMessages.invalidCredential["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/operation-not-allowed':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.operationNotAllowed["title"],
                    subTitle: errorMessages.operationNotAllowed["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/user-disabled':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userDisabled["title"],
                    subTitle: errorMessages.userDisabled["subTitle"],
                    buttons: ['OK']
                });
                this.alert.present();
                break;
            case 'auth/user-not-found':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userNotFound["title"],
                    subTitle: errorMessages.userNotFound["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/wrong-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.wrongPassword["title"],
                    subTitle: errorMessages.wrongPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/invalid-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidEmail["title"],
                    subTitle: errorMessages.invalidEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/email-already-in-use':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.emailAlreadyInUse["title"],
                    subTitle: errorMessages.emailAlreadyInUse["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/weak-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.weakPassword["title"],
                    subTitle: errorMessages.weakPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/requires-recent-login':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.requiresRecentLogin["title"],
                    subTitle: errorMessages.requiresRecentLogin["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/user-mismatch':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userMismatch["title"],
                    subTitle: errorMessages.userMismatch["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/provider-already-linked':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.providerAlreadyLinked["title"],
                    subTitle: errorMessages.providerAlreadyLinked["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/credential-already-in-use':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.credentialAlreadyInUse["title"],
                    subTitle: errorMessages.credentialAlreadyInUse["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            // Profile Error Messages
            case 'profile/error-change-name':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changeName["title"],
                    subTitle: errorMessages.changeName["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-chars-name':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCharsName["title"],
                    subTitle: errorMessages.invalidCharsName["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/name-too-short':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.nameTooShort["title"],
                    subTitle: errorMessages.nameTooShort["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-chars-number':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCharsNumber["title"],
                    subTitle: errorMessages.invalidCharsNumber["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/number-too-short':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.numberTooShort["title"],
                    subTitle: errorMessages.numberTooShort["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-change-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changeEmail["title"],
                    subTitle: errorMessages.changeEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidProfileEmail["title"],
                    subTitle: errorMessages.invalidProfileEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-change-photo':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changePhoto["title"],
                    subTitle: errorMessages.changePhoto["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/password-too-short':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.passwordTooShort["title"],
                    subTitle: errorMessages.passwordTooShort["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-chars-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCharsPassword["title"],
                    subTitle: errorMessages.invalidCharsPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/passwords-do-not-match':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.passwordsDoNotMatch["title"],
                    subTitle: errorMessages.passwordsDoNotMatch["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-update-profile':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateProfile["title"],
                    subTitle: errorMessages.updateProfile["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-update-number':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateNumber["title"],
                    subTitle: errorMessages.updateNumber["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-update-profession':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateProfession["title"],
                    subTitle: errorMessages.updateProfession["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-update-city':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateCity["title"],
                    subTitle: errorMessages.updateCity["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-update-status':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateStatus["title"],
                    subTitle: errorMessages.updateStatus["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-update-birth':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateBirth["title"],
                    subTitle: errorMessages.updateBirth["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-same-username':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.usernameExists["title"],
                    subTitle: errorMessages.usernameExists["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            //Phone Error Messages
            case 'profile/error-update-profile':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateProfile["title"],
                    subTitle: errorMessages.updateProfile["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            //Image Error Messages
            case 'image/error-image-upload':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.imageUpload["title"],
                    subTitle: errorMessages.imageUpload["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            // Group Error MEssages
            case 'group/error-update-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupUpdate["title"],
                    subTitle: errorMessages.groupUpdate["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'group/error-leave-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupLeave["title"],
                    subTitle: errorMessages.groupLeave["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'group/error-delete-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupDelete["title"],
                    subTitle: errorMessages.groupDelete["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
        }
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__logout__["a" /* LogoutProvider */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePsgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_psg_profile_psg__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChoosePsgPage = /** @class */ (function () {
    function ChoosePsgPage(alertCtrl, loadingProvider, dataProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.psgAva = [];
        this.sessionByDay = __WEBPACK_IMPORTED_MODULE_5_moment__(this.navParams.get("selectedDay")).format('YYYY-MM-DD');
        this.session = "noSession";
        this.allSession = [];
        this.psgAvailable = [];
        this.testRadioOpen = false;
    }
    ChoosePsgPage.prototype.ionViewWillEnter = function () {
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'none';
            });
        }
    };
    ChoosePsgPage.prototype.ionViewDidLoad = function () {
        this.loadingProvider.show();
        this.getKeySchedulingByDay();
        // display psychologist by available session
        if (this.session == "noSession") {
            this.warning = "Pilih Sesi";
            this.loadingProvider.hide();
        }
        else {
            this.refreshList();
        }
    };
    ChoosePsgPage.prototype.refreshList = function () {
        var _this = this;
        this.dataProvider.getListPsgBySessionAndDay(this.sessionByDay, this.session).subscribe(function (listpsg) {
            _this.jumlahpsg = listpsg.length;
            var _loop_1 = function (i) {
                _this.psgAvailable[i] = listpsg[i].key;
                _this.dataProvider.getPsgAvailable(_this.psgAvailable[i]).subscribe(function (list) {
                    console.log("list", list);
                    _this.psgAva[i] = list;
                    _this.psgAva[i].old = __WEBPACK_IMPORTED_MODULE_5_moment__(list.born).toNow(true);
                    _this.loadingProvider.hide();
                });
            };
            for (var i = 0; i < listpsg.length; i++) {
                _loop_1(i);
            }
        });
        console.log("psgAva", this.psgAva);
    };
    ChoosePsgPage.prototype.getKeySchedulingByDay = function () {
        var _this = this;
        this.dataProvider.getKeySchedulingByDay(this.sessionByDay).subscribe(function (sessions) {
            console.log("key sesinya di session", sessions);
            _this.allSession = sessions;
            _this.loadingProvider.hide();
        });
    };
    // view detail psg
    ChoosePsgPage.prototype.viewPsg = function (psgId, old) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_psg_profile_psg__["a" /* ProfilePsgPage */], {
            psgId: psgId,
            old: old
        });
        console.log("psg by id", psgId);
    };
    ChoosePsgPage.prototype.showSession = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Pilih Sesi');
        this.allSession.forEach(function (session) {
            alert.addInput({ type: 'radio', label: session.key, value: session.key });
        });
        alert.addButton('Kembali');
        alert.addButton({
            text: 'Pilih',
            handler: function (data) {
                _this.loadingProvider.show();
                _this.psgAva = [];
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                _this.session = data;
                localStorage.setItem("sessionke", data);
                console.log('Radio data:', _this.session);
                _this.refreshList();
            }
        });
        alert.present();
    };
    ChoosePsgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-choose-psg',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\choose-psg\choose-psg.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Pilih Psikolog</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <span>{{ sessionByDay }}</span>\n\n    </ion-col>\n\n    <ion-col class="right" col-6>\n\n      <ion-icon name="md-people"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col class="btn-session" col-6>\n\n      <span (click)="showSession()" *ngIf="session == \'noSession\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;{{warning}} <ion-icon name="arrow-down"></ion-icon></span>    \n\n      <span (click)="showSession()" *ngIf="session == \'session1\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;08:00-09:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session2\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;09:00-10:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session3\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;10:00-11:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session4\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;11:00-12:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session5\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;12:00-13:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session7\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;13:00-14:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session8\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;14:00-15:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session9\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;15:00-16:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session10\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;16:00-17:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session11\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;17:00-18:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session12\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;18:00-19:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session13\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;19:00-20:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session14\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;20:00-21:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session15\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;21:00-22:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session16\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;22:00-23:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session17\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;23:00-24:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n                    \n\n      </ion-col>\n\n    <ion-col *ngIf="session == \'noSession\'" class="right" col-6>\n\n      <span>-</span>\n\n    </ion-col>\n\n    \n\n    <ion-col *ngIf="session !== \'noSession\'"class="right" col-6>\n\n        <span>{{jumlahpsg}}</span>\n\n    </ion-col>\n\n  \n\n  </ion-row>\n\n  <ion-list class="avatar-list">\n\n    <ion-item detail-push  *ngFor="let psg of psgAva" (click)="viewPsg(psg.userId,psg.old)">\n\n      <ion-avatar item-left><img src="{{ psg.img }}"></ion-avatar>\n\n      <h2>{{psg.name}}</h2>\n\n      <h6 *ngIf="psg.gender === \'Male\' "> <ion-icon name="male"  class="gender"></ion-icon> {{psg.old}}</h6>\n\n      <h6 *ngIf="psg.gender === \'Female\' "> <ion-icon name="female" class="gender"></ion-icon> {{psg.old}}</h6>    \n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\choose-psg\choose-psg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ChoosePsgPage);
    return ChoosePsgPage;
}());

//# sourceMappingURL=choose-psg.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePsgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_booking__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePsgPage = /** @class */ (function () {
    function ProfilePsgPage(loadingProvider, dataProvider, navCtrl, navParams) {
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.psychologist = [];
        this.psgId = this.navParams.get("psgId");
        this.old = this.navParams.get("old");
    }
    ProfilePsgPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingProvider.show();
        // get psg profile
        this.dataProvider.getPsgAvailable(this.psgId).subscribe(function (psychologist) {
            _this.loadingProvider.hide();
            _this.psychologist = psychologist;
            console.log('ionViewDidLoad ProfilePsgPage', _this.psychologist);
        });
    };
    ProfilePsgPage.prototype.bookingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__booking_booking__["a" /* BookingPage */], {
            psgProfile: this.psychologist
        });
    };
    ProfilePsgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-psg',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\profile-psg\profile-psg.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profil Psikolog</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="bookingPage()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="background" *ngIf="psychologist">\n\n    <div class="profile">\n\n      <img src="{{psychologist.img}}" />\n\n    </div>\n\n    <!-- Show icon of logged in provider -->\n\n    <h4>\n\n      <span class="name">{{psychologist.name}} </span>\n\n    </h4>\n\n    <h6 *ngIf="psychologist.gender === \'Male\' "> <ion-icon name="male"  class="gender"></ion-icon>{{old}}</h6>\n\n    <h6 *ngIf="psychologist.gender === \'Female\' "> <ion-icon name="female" class="gender"></ion-icon>{{old}}</h6>\n\n    <!-- Profile Menu -->\n\n    <ion-list *ngIf="psychologist">\n\n      <ion-item>\n\n        <ion-label>Informasi</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h3>Pengalaman</h3>\n\n        <p>{{psychologist.description}}</p>\n\n        <br>\n\n        <h3>Email</h3>\n\n        <p>{{psychologist.email}}</p>\n\n        <br>\n\n        <h3>Kota</h3>\n\n        <p>{{psychologist.city}}</p>\n\n        <br>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\profile-psg\profile-psg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProfilePsgPage);
    return ProfilePsgPage;
}());

//# sourceMappingURL=profile-psg.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookingPage = /** @class */ (function () {
    function BookingPage(alertCtrl, loadingProvider, angularfireDatabase, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.angularfireDatabase = angularfireDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.problem = "";
        this.psgProfile = this.navParams.get("psgProfile");
        this.bookingDate = new Date();
        this.createdAt = __WEBPACK_IMPORTED_MODULE_5_moment__(this.bookingDate).format();
        this.sessionke = localStorage.getItem("sessionke");
        this.scheduleId = __WEBPACK_IMPORTED_MODULE_5_moment__(this.navParams.get("selectedDay")).format('YYYY-MM-DD');
    }
    BookingPage.prototype.ionViewDidLoad = function () {
        console.log("IonViewDidLoad BookingPage", this.psgProfile);
        this.consultationTime();
    };
    BookingPage.prototype.consultationTime = function () {
        switch (this.sessionke) {
            case "session1":
                this.consultation_time = "08:00 - 09:00";
                break;
            case "session2":
                this.consultation_time = "09:00 - 10:00";
                break;
            case "session3":
                this.consultation_time = "10:00 - 11:00";
                break;
            case "session4":
                this.consultation_time = "11:00 - 12:00";
                break;
            case "session5":
                this.consultation_time = "12:00 - 13:00";
                break;
            case "session6":
                this.consultation_time = "13:00 - 14:00";
                break;
            case "session7":
                this.consultation_time = "14:00 - 15:00";
                break;
            case "session8":
                this.consultation_time = "15:00 - 16:00";
                break;
            case "session9":
                this.consultation_time = "16:00 - 17:00";
                break;
            case "session10":
                this.consultation_time = "17:00 - 18:00";
                break;
            case "session11":
                this.consultation_time = "18:00 - 19:00";
                break;
            case "session12":
                this.consultation_time = "19:00 - 20:00";
                break;
            case "session13":
                this.consultation_time = "20:00 - 21:00";
                break;
            case "session14":
                this.consultation_time = "21:00 - 22:00";
                break;
            case "session16":
                this.consultation_time = "22:00 - 23:00";
                break;
            case "session17":
                this.consultation_time = "23:00 - 24:00";
                break;
            default:
                return 0;
        }
    };
    BookingPage.prototype.showConfirmBooking = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Yakin booking sekarang?',
            message: 'Jadwal konsultasi akan dibuat dengan psikolog yang bersangkutan',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Booking',
                    handler: function () {
                        _this.createBookingData();
                    }
                }
            ]
        });
        confirm.present();
    };
    BookingPage.prototype.createBookingData = function () {
        var _this = this;
        this.loadingProvider.show();
        // create data in table booking
        this.angularfireDatabase.object('/booking/' + this.createdAt)
            .set({
            sessionke: this.sessionke,
            userId: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid,
            psgId: this.psgProfile.userId,
            createdAt: this.createdAt,
            scheduleId: this.scheduleId,
            problem: this.problem,
            confirmation: "waiting"
        })
            .then(function () {
            console.log("sukses buat booking");
        });
        // create data booking inside psg table as attribut "booking"
        this.angularfireDatabase.object('psg/' + this.psgProfile.userId + '/booking/' + this.createdAt)
            .update({
            seesionke: localStorage.getItem("sessionke"),
            id: this.createdAt
        })
            .then(function () {
            _this.loadingProvider.hide();
            //  show tabs
            // let tabs = document.querySelectorAll('.show-tabbar');
            // if (tabs !== null) {
            //   Object.keys(tabs).map((key) => {
            //       tabs[key].style.display = 'flex';
            //   });
            // }
            _this.successAlert();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
            console.log("sukses update attribut booking di psg");
        });
    };
    BookingPage.prototype.successAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Berhasil booking psikolog',
            subTitle: 'Harap tunggu booking anda diterima oleh psikolog.',
            buttons: ['Ok']
        });
        alert.present();
    };
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-booking',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\booking\booking.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cek Kembali</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="footer">\n\n     \n\n    <button disabled *ngIf="problem == \'\'" class="btn-pilih" ion-button (click)="showConfirmBooking()">BUAT JADWAL</button>\n\n    <button *ngIf="problem !== \'\'" class="btn-pilih" ion-button (click)="showConfirmBooking()">BUAT JADWAL</button>\n\n  </div>\n\n\n\n  <ion-list *ngIf="psgProfile">\n\n    <ion-item>\n\n      <ion-label stacked>Nama psikolog</ion-label>\n\n      <ion-input disabled value="{{psgProfile.name}}" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Tanggal Konsultasi</ion-label>\n\n      <ion-input disabled value="{{scheduleId}}" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Waktu Konsultasi</ion-label>\n\n      <ion-input  disabled value="{{consultation_time}}" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Masalah Anda <span class="mandatory">*</span> </ion-label>\n\n      <ion-textarea rows="3" ng-trim="false" ng-show="problem.trim()" [(ngModel)]="problem" type="text" placeholder="Cerita singkat tentang masalah anda"></ion-textarea>\n\n    </ion-item>\n\n    <p class="right">{{50 - problem.length}}</p>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\booking\booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl, alertCtrl, navParams, app, logoutProvider, loadingProvider, angularfireDatabase, alertProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.loadingProvider = loadingProvider;
        this.angularfireDatabase = angularfireDatabase;
        this.alertProvider = alertProvider;
        // Hook our logout provider with the app.
        this.logoutProvider.setApp(this.app);
    }
    VerificationPage.prototype.ionViewDidLoad = function () {
        // Set our routeGuard variables to false, to not allow rereouting.
        this.emailVerified = false;
        this.isLoggingOut = false;
        // Get user data and send an email verification automatically.
        this.getUserData();
        this.sendEmailVerification();
        // Create the emailVerification checker.
        var that = this;
        that.checkVerified = setInterval(function () {
            console.log("Interval checked");
            __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.reload();
            if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.emailVerified) {
                clearInterval(that.checkVerified);
                that.emailVerified = true;
                that.alertProvider.showEmailVerifiedMessageAndRedirect(that.navCtrl);
            }
        }, 1000);
    };
    VerificationPage.prototype.ionViewCanLeave = function () {
        // routeGuard to prevent from leaving this view unless email is verified, or user is logging out.
        if (this.emailVerified || this.isLoggingOut) {
            return true;
        }
        else {
            return false;
        }
    };
    // Get user data from the logged in Firebase user to show on html markup.
    VerificationPage.prototype.getUserData = function () {
        var user = __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser;
        var userId, name, provider, img, email;
        var providerData = user.providerData[0];
        userId = user.uid;
        // Retrieve name from Firebase user
        if (user.displayName || providerData.displayName) {
            name = user.displayName;
            name = providerData.displayName;
        }
        else {
            name = "SocioEmpathy User";
        }
        // Retrieve provider from Firebase user
        if (providerData.providerId == 'password') {
            provider = "Firebase";
        }
        else if (providerData.providerId == 'facebook.com') {
            provider = "Facebook";
        }
        else if (providerData.providerId == 'google.com') {
            provider = "Google";
        }
        // Retrieve photoURL from Firebase user
        if (user.photoURL || providerData.photoURL) {
            img = user.photoURL;
            img = providerData.photoURL;
        }
        else {
            img = "assets/images/profile.png";
        }
        // Retrieve email from Firebase user
        email = user.email;
        // Set to user variable for our markup html
        this.user = {
            userId: userId,
            name: name,
            provider: provider,
            img: img,
            email: email
        };
    };
    // Send an email verification to the user's email.
    VerificationPage.prototype.sendEmailVerification = function () {
        var _this = this;
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.sendEmailVerification()
            .then(function (success) {
            _this.alertProvider.showEmailVerificationSentMessage(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email);
            _this.loadingProvider.hide();
        });
    };
    // Set the user email
    VerificationPage.prototype.setEmail = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Email Address',
            message: "Please enter a new email address.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your Email Address',
                    value: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var email = data["email"];
                        // Check if entered email is different from the current email
                        if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email != email) {
                            // Check if email is valid.
                            if (__WEBPACK_IMPORTED_MODULE_6__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                _this.loadingProvider.show();
                                // Update email on Firebase
                                __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then(function (success) {
                                    __WEBPACK_IMPORTED_MODULE_6__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                    _this.loadingProvider.hide();
                                    // Clear the existing interval because when we call ionViewDidLoad, another interval will be created.
                                    clearInterval(_this.checkVerified);
                                    // Call ionViewDidLoad again to update user on the markup and automatically send verification mail.
                                    _this.ionViewDidLoad();
                                    // Update the user data on the database if it exists.
                                    __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('accounts/' + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).once('value')
                                        .then(function (account) {
                                        if (account.val()) {
                                            _this.angularfireDatabase.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).update({
                                                email: email
                                            });
                                        }
                                    });
                                })
                                    .catch(function (error) {
                                    //Show error
                                    _this.loadingProvider.hide();
                                    var code = error["code"];
                                    _this.alertProvider.showErrorMessage(code);
                                    if (code == 'auth/requires-recent-login') {
                                        _this.logoutProvider.logout();
                                    }
                                });
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    // Clear the interval, and log the user out.
    VerificationPage.prototype.logout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: function (data) {
                        // Clear the verification check interval.
                        clearInterval(_this.checkVerified);
                        // Set our routeGuard to true, to enable changing views.
                        _this.isLoggingOut = true;
                        // Log the user out.
                        _this.logoutProvider.logout();
                    }
                }
            ]
        }).present();
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verification',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\verification\verification.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Verify Account</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="user">\n\n    <div class="profile">\n\n      <img src="{{user.img}}" tappable (click)="setPhoto()" />\n\n    </div>\n\n    <!-- Show icon of logged in provider -->\n\n    <h4>\n\n      <span style="color: #000000">{{user.name}} </span>\n\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n\n    </h4>\n\n    <div class="divider"></div>\n\n    <p>An email confirmation has been sent to: <span>{{user.email}}</span>.</p>\n\n    <!-- Verification Menu -->\n\n    <ion-list>\n\n      <ion-item no-lines tappable (click)="sendEmailVerification()">\n\n        Resend Confirmation Email\n\n        <ion-icon name="md-contact" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item no-lines tappable (click)="setEmail()">\n\n        Change Email Address\n\n        <ion-icon name="md-mail-open" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item no-lines tappable (click)="logout()">\n\n        Logout\n\n        <ion-icon name="md-log-out" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\verification\verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = /** @class */ (function () {
    function SignupPage(loginProvider, formBuilder, navCtrl, navParams) {
        this.loginProvider = loginProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.phoneNumber = "";
        // It's important to hook the navController to our loginProvider.
        this.loginProvider.setNavController(this.navCtrl);
        // Create our forms and their validators based on validators set on validator.ts.
        this.emailPasswordForm = formBuilder.group({
            email: __WEBPACK_IMPORTED_MODULE_3__validator__["a" /* Validator */].emailValidator,
            password: __WEBPACK_IMPORTED_MODULE_3__validator__["a" /* Validator */].passwordValidator,
            displayName: "New User",
            role: "Client",
            phoneNumber: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            gender: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
        });
        this.emailForm = formBuilder.group({
            email: __WEBPACK_IMPORTED_MODULE_3__validator__["a" /* Validator */].emailValidator
        });
        this.masks = {
            phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.register = function () {
        var unmaskedData = {
            phoneNumber: this.phoneNumber.replace(/\D+/g, '')
        };
        // console.log("phoneNumber number",unmaskedData);
        this.loginProvider.register(this.emailPasswordForm.value["displayName"], this.emailPasswordForm.value["email"], this.emailPasswordForm.value["password"], this.emailPasswordForm.value["role"], this.emailPasswordForm.value["phoneNumber"], this.emailPasswordForm.value["gender"]);
    };
    SignupPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar class="navbar">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="backCss">\n\n    <div class="top">\n\n      <img src="assets/images/SocioEmpathy_Blue.png" />\n\n    </div>\n\n    <div class="bottom">\n\n      <div class="buttons">\n\n        <div class="form">\n\n          <form [formGroup]="emailPasswordForm">\n\n            <ion-list>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">Email</ion-label>\n\n                <ion-input type="email" formControlName="email" placeholder="Your Email Address"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">Password</ion-label>\n\n                <ion-input type="password" formControlName="password" placeholder="Create A Password"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">Phone</ion-label>\n\n                <ion-input type="number" [(ngModel)]="phoneNumber" formControlName="phoneNumber" placeholder="Enter your Phone Number" [textMask]="{mask: masks.phoneNumber}"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">Gender</ion-label>\n\n                <ion-select formControlName="gender" placeholder="Select Your Role" style="margin-right:27%; color:black">\n\n                  <ion-option style="margin-right:80%; color:#549AD4" value="Male">Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-option>\n\n                  <ion-option style="margin-right:80%; color:#549AD4" value="Female">Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n\n\n              <!-- <ion-item>\n\n                <ion-label stacked color="theblues">Role</ion-label>\n\n                <ion-select formControlName="role" placeholder="Select Your Role" style="margin-right:27%; color:black">\n\n                  <ion-option style="margin-right:80%; color:#549AD4" value="Regular User">Regular User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-option>\n\n                  <ion-option style="margin-right:80%; color:#549AD4" value="Psychology Student">Psychology Student&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-option>\n\n                  <ion-option style="margin-right:80%; color:#549AD4" value="Junior Psychologist">Junior Psychologist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-option>\n\n                  <ion-option style="margin-right:80%; color:#549AD4" value="Senior Psychologist">Senior Psychologist&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-option>\n\n                </ion-select>\n\n              </ion-item> -->\n\n\n\n            </ion-list>\n\n            <button ion-button tappable (click)="register()" [disabled]="!emailPasswordForm.valid">SIGN UP</button>\n\n          </form>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AchievDetailPage = /** @class */ (function () {
    function AchievDetailPage(navCtrl, navParams, platform, changeDetectorRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.changeDetectorRef = changeDetectorRef;
        this.isRecording = false;
        this.ID = navParams.get("ID");
        switch (this.ID) {
            case "1": {
                this.task = "Task 1";
                this.info =
                    "\n          Pertama, \n          ";
                break;
            }
            case "2": {
                this.task = "Task 2";
                this.info =
                    "Istirahat \n          ";
                break;
            }
            case "3": {
                this.task = "Task 3";
                this.info =
                    "Lihatlah\n          ";
                break;
            }
            case "4": {
                this.task = "Task 4";
                this.info =
                    "Jika\n          ";
                break;
            }
            default: {
                this.info =
                    "Teruslah\n          ";
                break;
            }
        }
    }
    AchievDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-achiev-detail',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\achiev-detail\achiev-detail.html"*/'<!--\n\n  Generated template for the AchievDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar [color]="isRecording ? \'danger\' : \'primary\'">\n\n    <ion-title>{{task}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>Ceritakan masalahmu hari ini</p>\n\n\n\n  <button ion-button (click)="getPermissions()">Get Permission</button>\n\n  <button ion-button (click)="startListening()">Start listening</button>\n\n  <button ion-button (click)="stopListening()" *ngIf="isIos()">Stop Listening</button>\n\n\n\n  <ion-card>\n\n    <ion-card-header>This is wath you say... </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item *ngFor="let match of matches">\n\n          {{ match }}\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\achiev-detail\achiev-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], AchievDetailPage);
    return AchievDetailPage;
}());

//# sourceMappingURL=achiev-detail.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FcmProvider = /** @class */ (function () {
    function FcmProvider(afd, fcmNative, toastCtrl) {
        this.afd = afd;
        this.fcmNative = fcmNative;
        this.toastCtrl = toastCtrl;
    }
    // Get permission from the user
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.fcmNative.getToken().then(function (token) {
                    console.log("token", token);
                    return _this.saveTokenToDatabaseRealtime(token);
                });
                return [2 /*return*/];
            });
        });
    };
    // Save the token to DatabaseRealtime 
    FcmProvider.prototype.saveTokenToDatabaseRealtime = function (token) {
        if (!token)
            return;
        // create db Notifications( devices_token
        var devicesRef = this.afd.object("/devices_token/" + token);
        localStorage.setItem('devices_token', token);
        var docData = {
            token: token,
            userId: "uid_client",
        };
        return devicesRef.set(docData);
    };
    // Listen to incoming FCM messages
    FcmProvider.prototype.listenToNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fcmNative.onNotification().subscribe(function (data) {
                        if (data.wasTapped) {
                            console.log("Received in background");
                            console.log(data);
                        }
                        else {
                            _this.presentToast(data.body);
                        }
                        ;
                    })];
            });
        });
    };
    FcmProvider.prototype.presentToast = function (body) {
        var toast = this.toastCtrl.create({
            message: 'New Message ' + body,
            duration: 3000
        });
        toast.present();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestsPage = /** @class */ (function () {
    // RequestsPage
    // This is the page where the user can see their friend requests sent and received.
    function RequestsPage(navCtrl, navParams, dataProvider, alertCtrl, loadingProvider, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
    }
    RequestsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingProvider.show();
        // Get user info
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            _this.account = account;
            console.log("para account", _this.account);
            // Get friendRequests and requestsSent of the user.
            _this.dataProvider.getRequests(_this.account.userId).subscribe(function (requests) {
                // friendRequests.
                console.log("para request", requests);
                if (requests) {
                    _this.friendRequests = [];
                    requests.forEach(function (userId) {
                        _this.dataProvider.getUser(userId).subscribe(function (sender) {
                            _this.addOrUpdateFriendRequest(sender);
                        });
                    });
                }
                else {
                    _this.friendRequests = [];
                }
                // requestsSent.
                if (requests.requestsSent) {
                    _this.requestsSent = [];
                    requests.forEach(function (userId) {
                        _this.dataProvider.getUser(userId).subscribe(function (receiver) {
                            _this.addOrUpdateRequestSent(receiver);
                        });
                    });
                }
                else {
                    _this.requestsSent = [];
                }
                _this.loadingProvider.hide();
            });
        });
    };
    // Add or update friend request only if not yet friends.
    RequestsPage.prototype.addOrUpdateFriendRequest = function (sender) {
        if (!this.friendRequests) {
            this.friendRequests = [sender];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friendRequests.length; i++) {
                if (this.friendRequests[i].userId == sender.userId) {
                    index = i;
                }
            }
            if (index > -1) {
                if (!this.isFriends(sender.userId))
                    this.friendRequests[index] = sender;
            }
            else {
                if (!this.isFriends(sender.userId))
                    this.friendRequests.push(sender);
            }
        }
    };
    // Add or update requests sent only if the user is not yet a friend.
    RequestsPage.prototype.addOrUpdateRequestSent = function (receiver) {
        if (!this.requestsSent) {
            this.requestsSent = [receiver];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.requestsSent.length; i++) {
                if (this.requestsSent[i].userId == receiver.userId) {
                    index = i;
                }
            }
            if (index > -1) {
                if (!this.isFriends(receiver.userId))
                    this.requestsSent[index] = receiver;
            }
            else {
                if (!this.isFriends(receiver.userId))
                    this.requestsSent.push(receiver);
            }
        }
    };
    // Back
    RequestsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Accept Friend Request.
    RequestsPage.prototype.acceptFriendRequest = function (user) {
        var _this = this;
        console.log('usernya', user);
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Reject Request',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(user.userId);
                    }
                },
                {
                    text: 'Accept Request',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(user.userId);
                    }
                }
            ]
        }).present();
    };
    // Cancel Friend Request sent.
    RequestsPage.prototype.cancelFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.userId);
                    }
                }
            ]
        }).present();
    };
    // Checks if user is already friends with this user.
    RequestsPage.prototype.isFriends = function (userId) {
        if (this.account.friends) {
            if (this.account.friends.indexOf(userId) == -1) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    // View user.
    RequestsPage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    RequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-requests',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\requests\requests.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Friend Requests</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friend requests sent or received. -->\n\n  <div class="empty-list" *ngIf="(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)">\n\n    <h1><ion-icon name="md-filing"></ion-icon></h1>\n\n    <p>Uh-oh! There are no pending friend requests right now.</p>\n\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n\n  </div>\n\n  <!-- Show friend requests received. -->\n\n  <ion-list class="avatar-list" *ngIf="friendRequests && friendRequests.length > 0">\n\n    <ion-item *ngFor="let friendRequest of friendRequests" no-lines tappable (click)="viewUser(friendRequest.$key)">\n\n      <ion-fab middle right>\n\n        <button ion-fab mini tappable (click)="acceptFriendRequest(friendRequest); $event.stopPropagation();">\n\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{friendRequest.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friendRequest.name}}</h2>\n\n      <p>has sent you a friend request.</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- Show friend requests sent. -->\n\n  <ion-list class="avatar-list" *ngIf="requestsSent && requestsSent.length > 0">\n\n    <ion-item *ngFor="let requestSent of requestsSent" no-lines tappable (click)="viewUser(requestSent.$key)">\n\n      <ion-fab middle right>\n\n        <button ion-fab mini tappable (click)="cancelFriendRequest(requestSent); $event.stopPropagation();">\n\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{requestSent.img}}">\n\n      </ion-avatar>\n\n      <h2>{{requestSent.name}}</h2>\n\n      <p>friend request sent.</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\requests\requests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase__["a" /* FirebaseProvider */]])
    ], RequestsPage);
    return RequestsPage;
}());

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_status_payment_status__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.next = function () {
        // this.navCtrl.push(Payment1Page);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_status_payment_status__["a" /* PaymentStatusPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment\payment.html"*/'<!--\n\n  Generated template for the PaymentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="footer">\n\n    <button class="btn-pilih" ion-button (click)="next()">LANJUT</button>\n\n  </div>\n\n\n\n\n\n  <!-- detail pembayaran -->\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Detail Pembayaran\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Jenis Produk</ion-col>\n\n        <ion-col col-6 class="right-side">Lovepoints</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Nominal Lovepoints</ion-col>\n\n        <ion-col col-6 class="right-side">100</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Harga</ion-col>\n\n        <ion-col col-6 class="right-side">Rp100.000,00</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>No. Invoice</ion-col>\n\n        <ion-col col-6 class="right-side">#20319312931209</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- Petunjuk -->\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Petunjuk Pembayaran\n\n    </ion-list-header>\n\n\n\n    <div class="petunjuk">\n\n\n\n      <ion-row>\n\n        <ion-col col-1>1.</ion-col>\n\n        <ion-col col-11>Lakukan pembayaran tepat sesuai dengan nominal yang ditagihkan.</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-1>2.</ion-col>\n\n        <ion-col col-11>Lakukan transfer ke salah satu nomor rekening yang tertera di bawah ini.</ion-col>\n\n        <ion-row>\n\n          <ion-col class="imgBank" col-5>\n\n            <img src="../assets/images/bni.png">\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <span>a.n atas nama siapa</span>\n\n            <br>\n\n            <span>212893183891</span>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col class="imgBank" col-5>\n\n            <img src="../assets/images/bri.png">\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <span>a.n atas nama siapa</span>\n\n            <br>\n\n            <span>212893183891</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-1>3.</ion-col>\n\n        <ion-col col-11>Masukkan nomor Invoice di berita transfer.</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-1>4.</ion-col>\n\n        <ion-col col-11>Setelah transfer, segera lakukan konfirmasi pembayaran dengan cara mengirimkan/mengunggah bukti transfer pada proses\n\n          selanjutnya.</ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentStatusPage = /** @class */ (function () {
    function PaymentStatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentStatusPage');
    };
    PaymentStatusPage.prototype.finish = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(0)';
            });
        } // end if
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__messages_messages__["a" /* MessagesPage */]);
    };
    PaymentStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment-status',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment-status\payment-status.html"*/'<!--\n\n  Generated template for the PaymentStatusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <div class="footer">\n\n        <button class="btn-pilih" ion-button (click)="finish()">SELESAI</button>\n\n      </div>\n\n\n\n\n\n  <ion-navbar>\n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="center">\n\n  <img src="../assets/images/lovepoints.png">\n\n  <h3>Pembayaran Berhasil</h3>\n\n  <p>Terima kasih telah melakukan transaksi di SocioEmpathy</p>\n\n  <p class="justify"> \n\n      Silahkan menunggu email verifikasi transaksi dari kami maksdimal \n\n      dalam 1x24 jam. Lovepoints akan bertambah secara otomatis setelah di verifikasi.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment-status\payment-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PaymentStatusPage);
    return PaymentStatusPage;
}());

//# sourceMappingURL=payment-status.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionPage = /** @class */ (function () {
    function TransactionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionPage');
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\transaction\transaction.html"*/'<!--\n\n  Generated template for the TransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Transaction</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Top Up\n\n    </ion-list-header>\n\n    \n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Nominal Lovepoints</ion-col>\n\n        <ion-col col-6 class="right-side">100</ion-col>\n\n      </ion-row>     \n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-row>\n\n          <ion-col col-6>Harga</ion-col>\n\n          <ion-col col-6 class="right-side">Rp100.000,00</ion-col>\n\n        </ion-row>     \n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-row>\n\n            <ion-col col-6>No. Invoice</ion-col>\n\n            <ion-col col-6 class="right-side">#91232389138</ion-col>\n\n          </ion-row>     \n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-row>\n\n              <ion-col col-6>Tanggal</ion-col>\n\n              <ion-col col-6 class="right-side">21 Maret 2018</ion-col>\n\n            </ion-row>     \n\n          </ion-item>\n\n      \n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\transaction\transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopupPage = /** @class */ (function () {
    function TopupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopupPage');
    };
    TopupPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    TopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-topup',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\topup\topup.html"*/'<!--\n\n  Generated template for the TopupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Top Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="footer">\n\n    <button class="btn-pilih" ion-button (click)="next()">LANJUT</button>\n\n  </div>\n\n\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Nominal Lovepoints\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left checked="true" value="100"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        100 Lovepoints\n\n        <span class="price">Rp100.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left value="200"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        200 Lovepoints\n\n        <span class="price">Rp200.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left value="300"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        300 Lovepoints\n\n        <span class="price">Rp300.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left value="400"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        400 Lovepoints\n\n        <span class="price">Rp400.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left value="500"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        500 Lovepoints\n\n        <span class="price">Rp500.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\topup\topup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TopupPage);
    return TopupPage;
}());

//# sourceMappingURL=topup.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(533);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_comment_comment__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_mood_tracker_mood_tracker__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_docver_reg_docver_reg__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_boarding_boarding__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_achievement_achievement__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_duplicate_message_duplicate_message__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_time_line_time_line__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_calendar__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_firebase__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_achiev_detail_achiev_detail__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_verification_verification__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_messages_messages__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_friends_friends__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_search_people_search_people__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_requests_requests__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_user_info_user_info__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_new_message_new_message__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_message_message__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_payment_payment__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_pay_detail_pay_detail__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_pay_success_pay_success__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_buy_premium_buy_premium__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_payment1_payment1__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_payment2_payment2__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_payment3_payment3__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_profile_profile__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_editprofile_editprofile__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_dynamiclink_dynamiclink__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_image__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_fcm_fcm__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_angularfire2_auth__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_angularfire2_storage__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_ionic2_calendar__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pipes_friend__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pipes_search__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pipes_conversation__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pipes_date__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_docver_docver__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_docver_plus_docver_plus__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_testaja_testaja__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_consultation_consultation__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_calendar_calendar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_add_schedule_add_schedule__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_choose_psg_choose_psg__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_profile_psg_profile_psg__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_booking_booking__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_lovepoint_store_lovepoint_store__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_topup_topup__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_transaction_transaction__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_payment_status_payment_status__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_image_modal_image_modal__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































// Guntur


































__WEBPACK_IMPORTED_MODULE_51_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_56__login__["a" /* Login */].firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_74__pages_payment_status_payment_status__["a" /* PaymentStatusPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_topup_topup__["a" /* TopupPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_lovepoint_store_lovepoint_store__["a" /* LovepointStorePage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_profile_psg_profile_psg__["a" /* ProfilePsgPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_choose_psg_choose_psg__["a" /* ChoosePsgPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_add_schedule_add_schedule__["a" /* AddSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_consultation_consultation__["a" /* ConsultationPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_testaja_testaja__["a" /* TestajaPage */],
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_search_people_search_people__["a" /* SearchPeoplePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_requests_requests__["a" /* RequestsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_new_message_new_message__["a" /* NewMessagePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_58__pipes_friend__["a" /* FriendPipe */],
                __WEBPACK_IMPORTED_MODULE_60__pipes_conversation__["a" /* ConversationPipe */],
                __WEBPACK_IMPORTED_MODULE_59__pipes_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_61__pipes_date__["a" /* DateFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_6__pages_time_line_time_line__["a" /* TimeLinePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_duplicate_message_duplicate_message__["a" /* DuplicateMessagePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_boarding_boarding__["a" /* BoardingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_achiev_detail_achiev_detail__["a" /* AchievDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_dynamiclink_dynamiclink__["a" /* DynamiclinkPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_docver_docver__["a" /* DocverPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_docver_plus_docver_plus__["a" /* DocverPlusPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_docver_reg_docver_reg__["a" /* DocverRegPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_mood_tracker_mood_tracker__["a" /* MoodTrackerPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_pay_detail_pay_detail__["a" /* PayDetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_pay_success_pay_success__["a" /* PaySuccessPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_buy_premium_buy_premium__["a" /* BuyPremiumPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_payment1_payment1__["a" /* Payment1Page */],
                __WEBPACK_IMPORTED_MODULE_38__pages_payment2_payment2__["a" /* Payment2Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_payment3_payment3__["a" /* Payment3Page */],
                __WEBPACK_IMPORTED_MODULE_0__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_image_modal_image_modal__["a" /* ImageModalPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_calendar_calendar__["a" /* CalendarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_57_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_52_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_56__login__["a" /* Login */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_54_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_53_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_55_angularfire2_storage__["a" /* AngularFireStorageModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_74__pages_payment_status_payment_status__["a" /* PaymentStatusPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_topup_topup__["a" /* TopupPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_lovepoint_store_lovepoint_store__["a" /* LovepointStorePage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_profile_psg_profile_psg__["a" /* ProfilePsgPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_choose_psg_choose_psg__["a" /* ChoosePsgPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_add_schedule_add_schedule__["a" /* AddSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_consultation_consultation__["a" /* ConsultationPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_testaja_testaja__["a" /* TestajaPage */],
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_search_people_search_people__["a" /* SearchPeoplePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_requests_requests__["a" /* RequestsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_new_message_new_message__["a" /* NewMessagePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_time_line_time_line__["a" /* TimeLinePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_duplicate_message_duplicate_message__["a" /* DuplicateMessagePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_boarding_boarding__["a" /* BoardingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_achiev_detail_achiev_detail__["a" /* AchievDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_dynamiclink_dynamiclink__["a" /* DynamiclinkPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_docver_docver__["a" /* DocverPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_docver_plus_docver_plus__["a" /* DocverPlusPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_docver_reg_docver_reg__["a" /* DocverRegPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_mood_tracker_mood_tracker__["a" /* MoodTrackerPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_pay_detail_pay_detail__["a" /* PayDetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_pay_success_pay_success__["a" /* PaySuccessPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_buy_premium_buy_premium__["a" /* BuyPremiumPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_payment1_payment1__["a" /* Payment1Page */],
                __WEBPACK_IMPORTED_MODULE_38__pages_payment2_payment2__["a" /* Payment2Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_payment3_payment3__["a" /* Payment3Page */],
                __WEBPACK_IMPORTED_MODULE_0__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_image_modal_image_modal__["a" /* ImageModalPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_calendar_calendar__["a" /* CalendarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_50__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */], { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_43__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_44__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_45__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_46__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_47__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_48__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_49__providers_firebase__["a" /* FirebaseProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoodTrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MoodTrackerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MoodTrackerPage = /** @class */ (function () {
    function MoodTrackerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MoodTrackerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoodTrackerPage');
    };
    MoodTrackerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mood-tracker',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\mood-tracker\mood-tracker.html"*/'<!--\n\n  Generated template for the MoodTrackerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>moodTracker</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\mood-tracker\mood-tracker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MoodTrackerPage);
    return MoodTrackerPage;
}());

//# sourceMappingURL=mood-tracker.js.map

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 370,
	"./af.js": 370,
	"./ar": 371,
	"./ar-dz": 372,
	"./ar-dz.js": 372,
	"./ar-kw": 373,
	"./ar-kw.js": 373,
	"./ar-ly": 374,
	"./ar-ly.js": 374,
	"./ar-ma": 375,
	"./ar-ma.js": 375,
	"./ar-sa": 376,
	"./ar-sa.js": 376,
	"./ar-tn": 377,
	"./ar-tn.js": 377,
	"./ar.js": 371,
	"./az": 378,
	"./az.js": 378,
	"./be": 379,
	"./be.js": 379,
	"./bg": 380,
	"./bg.js": 380,
	"./bm": 381,
	"./bm.js": 381,
	"./bn": 382,
	"./bn.js": 382,
	"./bo": 383,
	"./bo.js": 383,
	"./br": 384,
	"./br.js": 384,
	"./bs": 385,
	"./bs.js": 385,
	"./ca": 386,
	"./ca.js": 386,
	"./cs": 387,
	"./cs.js": 387,
	"./cv": 388,
	"./cv.js": 388,
	"./cy": 389,
	"./cy.js": 389,
	"./da": 390,
	"./da.js": 390,
	"./de": 391,
	"./de-at": 392,
	"./de-at.js": 392,
	"./de-ch": 393,
	"./de-ch.js": 393,
	"./de.js": 391,
	"./dv": 394,
	"./dv.js": 394,
	"./el": 395,
	"./el.js": 395,
	"./en-au": 396,
	"./en-au.js": 396,
	"./en-ca": 397,
	"./en-ca.js": 397,
	"./en-gb": 398,
	"./en-gb.js": 398,
	"./en-ie": 399,
	"./en-ie.js": 399,
	"./en-il": 400,
	"./en-il.js": 400,
	"./en-nz": 401,
	"./en-nz.js": 401,
	"./eo": 402,
	"./eo.js": 402,
	"./es": 403,
	"./es-do": 404,
	"./es-do.js": 404,
	"./es-us": 405,
	"./es-us.js": 405,
	"./es.js": 403,
	"./et": 406,
	"./et.js": 406,
	"./eu": 407,
	"./eu.js": 407,
	"./fa": 408,
	"./fa.js": 408,
	"./fi": 409,
	"./fi.js": 409,
	"./fo": 410,
	"./fo.js": 410,
	"./fr": 411,
	"./fr-ca": 412,
	"./fr-ca.js": 412,
	"./fr-ch": 413,
	"./fr-ch.js": 413,
	"./fr.js": 411,
	"./fy": 414,
	"./fy.js": 414,
	"./gd": 415,
	"./gd.js": 415,
	"./gl": 416,
	"./gl.js": 416,
	"./gom-latn": 417,
	"./gom-latn.js": 417,
	"./gu": 418,
	"./gu.js": 418,
	"./he": 419,
	"./he.js": 419,
	"./hi": 420,
	"./hi.js": 420,
	"./hr": 421,
	"./hr.js": 421,
	"./hu": 422,
	"./hu.js": 422,
	"./hy-am": 423,
	"./hy-am.js": 423,
	"./id": 424,
	"./id.js": 424,
	"./is": 425,
	"./is.js": 425,
	"./it": 426,
	"./it.js": 426,
	"./ja": 427,
	"./ja.js": 427,
	"./jv": 428,
	"./jv.js": 428,
	"./ka": 429,
	"./ka.js": 429,
	"./kk": 430,
	"./kk.js": 430,
	"./km": 431,
	"./km.js": 431,
	"./kn": 432,
	"./kn.js": 432,
	"./ko": 433,
	"./ko.js": 433,
	"./ky": 434,
	"./ky.js": 434,
	"./lb": 435,
	"./lb.js": 435,
	"./lo": 436,
	"./lo.js": 436,
	"./lt": 437,
	"./lt.js": 437,
	"./lv": 438,
	"./lv.js": 438,
	"./me": 439,
	"./me.js": 439,
	"./mi": 440,
	"./mi.js": 440,
	"./mk": 441,
	"./mk.js": 441,
	"./ml": 442,
	"./ml.js": 442,
	"./mn": 443,
	"./mn.js": 443,
	"./mr": 444,
	"./mr.js": 444,
	"./ms": 445,
	"./ms-my": 446,
	"./ms-my.js": 446,
	"./ms.js": 445,
	"./mt": 447,
	"./mt.js": 447,
	"./my": 448,
	"./my.js": 448,
	"./nb": 449,
	"./nb.js": 449,
	"./ne": 450,
	"./ne.js": 450,
	"./nl": 451,
	"./nl-be": 452,
	"./nl-be.js": 452,
	"./nl.js": 451,
	"./nn": 453,
	"./nn.js": 453,
	"./pa-in": 454,
	"./pa-in.js": 454,
	"./pl": 455,
	"./pl.js": 455,
	"./pt": 456,
	"./pt-br": 457,
	"./pt-br.js": 457,
	"./pt.js": 456,
	"./ro": 458,
	"./ro.js": 458,
	"./ru": 459,
	"./ru.js": 459,
	"./sd": 460,
	"./sd.js": 460,
	"./se": 461,
	"./se.js": 461,
	"./si": 462,
	"./si.js": 462,
	"./sk": 463,
	"./sk.js": 463,
	"./sl": 464,
	"./sl.js": 464,
	"./sq": 465,
	"./sq.js": 465,
	"./sr": 466,
	"./sr-cyrl": 467,
	"./sr-cyrl.js": 467,
	"./sr.js": 466,
	"./ss": 468,
	"./ss.js": 468,
	"./sv": 469,
	"./sv.js": 469,
	"./sw": 470,
	"./sw.js": 470,
	"./ta": 471,
	"./ta.js": 471,
	"./te": 472,
	"./te.js": 472,
	"./tet": 473,
	"./tet.js": 473,
	"./tg": 474,
	"./tg.js": 474,
	"./th": 475,
	"./th.js": 475,
	"./tl-ph": 476,
	"./tl-ph.js": 476,
	"./tlh": 477,
	"./tlh.js": 477,
	"./tr": 478,
	"./tr.js": 478,
	"./tzl": 479,
	"./tzl.js": 479,
	"./tzm": 480,
	"./tzm-latn": 481,
	"./tzm-latn.js": 481,
	"./tzm.js": 480,
	"./ug-cn": 482,
	"./ug-cn.js": 482,
	"./uk": 483,
	"./uk.js": 483,
	"./ur": 484,
	"./ur.js": 484,
	"./uz": 485,
	"./uz-latn": 486,
	"./uz-latn.js": 486,
	"./uz.js": 485,
	"./vi": 487,
	"./vi.js": 487,
	"./x-pseudo": 488,
	"./x-pseudo.js": 488,
	"./yo": 489,
	"./yo.js": 489,
	"./zh-cn": 490,
	"./zh-cn.js": 490,
	"./zh-hk": 491,
	"./zh-hk.js": 491,
	"./zh-tw": 492,
	"./zh-tw.js": 492
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 685;

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__achiev_detail_achiev_detail__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AchievementPage = /** @class */ (function () {
    function AchievementPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.items = [
            {
                'title': 'Tell your sad story',
            },
            {
                'title': 'Play game',
            },
            {
                'title': 'Sleepless',
            },
            {
                'title': 'Get Sports',
            },
        ];
    }
    // show description about achievement list
    AchievementPage.prototype.showDescription = function (ID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__achiev_detail_achiev_detail__["a" /* AchievDetailPage */], { ID: ID });
        console.log("show keterangan disini");
    };
    AchievementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AchievementPage');
    };
    AchievementPage.prototype.guide = function () {
        var alert = this.alertCtrl.create({
            title: 'About this feature',
            cssClass: 'alert',
            subTitle: 'Life Achievement adalah fitur yang membimbing anda melakukan aktifitas yang positif. Semakin banyak anda menyelesaikan task tersebut, harapannya aura positif tercipta dari dalam diri anda.',
            buttons: ['Dismiss'],
        });
        alert.present();
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-achievement',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\achievement\achievement.html"*/'<!--\n\n  Generated template for the AchievementPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Life Achievement</ion-title>\n\n    <ion-buttons end>\n\n        <button (click)="guide()" ion-button>\n\n      <ion-icon name="md-book"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n <ion-list>\n\n   <ion-row>\n\n    <ion-col col-12 *ngFor="let item of items" (click)="showDescription(\'1\')">\n\n      {{item.title}}\n\n    </ion-col>\n\n   </ion-row>\n\n        <!--     <ion-item text-wrap>\n\n      <ion-label>Get closer to God</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'1\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item text-wrap>\n\n      <ion-label>Get enough rest</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'2\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item text-wrap>\n\n      <ion-label>Look for new hobbies</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'3\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item text-wrap>\n\n      <ion-label>Find a counselor</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'4\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item text-wrap>\n\n      <ion-label>Take a walk out</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'5\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item> -->\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\achievement\achievement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AchievementPage);
    return AchievementPage;
}());

//# sourceMappingURL=achievement.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuplicateMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DuplicateMessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DuplicateMessagePage = /** @class */ (function () {
    // MessagePage
    // This is the page where the user can chat with a friend.
    function DuplicateMessagePage(navCtrl, navParams, dataProvider, angularfireDatabase, loadingProvider, keyboard, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.keyboard = keyboard;
        this.alertCtrl = alertCtrl;
        this.startIndex = -1;
        this.scrollDirection = 'bottom';
        // Set number of messages to show.
        this.numberOfMessages = 10;
    }
    DuplicateMessagePage_1 = DuplicateMessagePage;
    DuplicateMessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userId = this.navParams.get('userId');
        console.log(this.userId);
        // Get friend details.
        this.dataProvider.setUser(this.userId).set(function (user) {
            _this.title = user.name;
        });
        // Get conversationInfo with friend.
        this.dataProvider.getConversationbyCurrentUser(__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid).subscribe(function (conversation) {
            if (conversation.$exists()) {
                // User already have conversation with this friend, get conversation
                _this.conversationId = conversation.conversationId;
                // Get conversation
                _this.dataProvider.getConversationMessages(_this.conversationId).subscribe(function (messages) {
                    if (_this.messages) {
                        //update messageRead
                        _this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/conversations/' + _this.userId).update({
                            messagesRead: messages.length
                        });
                        //console.log("messages.length :"+messages.length);
                        //console.log("this.messages.length :"+this.messages.length);
                        // Just append newly added messages to the bottom of the view.
                        if (messages.length > _this.messages.length) {
                            var message_1 = messages[messages.length - 1];
                            _this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                                message_1.avatar = user.img;
                            });
                            _this.messages.push(message_1);
                            // Also append to messagesToShow.
                            _this.messagesToShow.push(message_1);
                            // Reset scrollDirection to bottom.
                            _this.scrollDirection = 'bottom';
                        }
                    }
                    else {
                        // Get all messages, this will be used as reference object for messagesToShow.
                        _this.messages = [];
                        messages.forEach(function (message) {
                            _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                                message.avatar = user.img;
                            });
                            _this.messages.push(message);
                        });
                        // Load messages in relation to numOfMessages.
                        if (_this.startIndex == -1) {
                            // Get initial index for numberOfMessages to show.
                            if ((_this.messages.length - _this.numberOfMessages) > 0) {
                                _this.startIndex = _this.messages.length - _this.numberOfMessages;
                            }
                            else {
                                _this.startIndex = 0;
                            }
                        }
                        if (!_this.messagesToShow) {
                            _this.messagesToShow = [];
                        }
                        // Set messagesToShow
                        for (var i = _this.startIndex; i < _this.messages.length; i++) {
                            _this.messagesToShow.push(_this.messages[i]);
                        }
                        _this.loadingProvider.hide();
                    }
                });
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach(function (message) {
                        var date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Load previous messages in relation to numberOfMessages.
    DuplicateMessagePage.prototype.loadPreviousMessages = function () {
        var that = this;
        // Show loading.
        this.loadingProvider.show();
        setTimeout(function () {
            // Set startIndex to load more messages.
            console.log("that.startIndex : " + that.startIndex);
            console.log("that.numberOfMessages : " + that.numberOfMessages);
            if ((that.startIndex - that.numberOfMessages) > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            // Set scroll direction to top.
            that.scrollDirection = 'top';
            // Populate list again.
            that.ionViewDidLoad();
        }, 1000);
    };
    // Update messagesRead when user lefts this page.
    DuplicateMessagePage.prototype.ionViewWillLeave = function () {
        if (this.messages)
            this.setMessagesRead(this.messages);
    };
    // Check if currentPage is active, then update user's messagesRead.
    DuplicateMessagePage.prototype.setMessagesRead = function (messages) {
        if (this.navCtrl.getActive().instance instanceof DuplicateMessagePage_1) {
            // Update user's messagesRead on database.
            var totalMessagesCount;
            this.dataProvider.getConversationMessages(this.conversationId).subscribe(function (messages) {
                totalMessagesCount = messages.length;
            });
            this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/conversations/' + this.userId).update({
                messagesRead: totalMessagesCount
            });
        }
    };
    // Check if 'return' button is pressed and send the message.
    DuplicateMessagePage.prototype.onType = function (keyCode) {
        if (keyCode == 13) {
            this.keyboard.close();
            this.send();
        }
    };
    // Scroll to bottom of page after a short delay.
    DuplicateMessagePage.prototype.scrollBottom = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToBottom();
        }, 300);
    };
    // Scroll to top of the page after a short delay.
    DuplicateMessagePage.prototype.scrollTop = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToTop();
        }, 300);
    };
    // Scroll depending on the direction.
    DuplicateMessagePage.prototype.doScroll = function () {
        if (this.scrollDirection == 'bottom') {
            this.scrollBottom();
        }
        else if (this.scrollDirection == 'top') {
            this.scrollTop();
        }
    };
    // Check if the user is the sender of the message.
    DuplicateMessagePage.prototype.isSender = function (message) {
        if (message.sender == __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
    };
    // Back
    DuplicateMessagePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Send message, if there's no conversation yet, create a new conversation.
    DuplicateMessagePage.prototype.send = function () {
        var _this = this;
        if (this.message) {
            // User entered a text on messagebox
            if (this.conversationId) {
                // Add Message to the existing conversation
                // Clone an instance of messages object so it will not directly be updated.
                // The messages object should be updated by our observer declared on ionViewDidLoad.
                var messages_1 = JSON.parse(JSON.stringify(this.messages));
                messages_1.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
                    type: 'text',
                    message: this.message
                });
                // Update conversation on database.
                console.log(messages_1);
                this.dataProvider.updateConversation(this.conversationId).update({
                    messages: messages_1
                });
                // Clear messagebox.
                this.message = '';
            }
            else {
                // New Conversation with friend.
                var messages = [];
                messages.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
                    type: 'text',
                    message: this.message
                });
                var users = [];
                users.push(__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid);
                users.push(this.userId);
                // Add conversation.
                this.angularfireDatabase.list('conversations').push({
                    dateCreated: new Date().toString(),
                    messages: messages,
                    users: users
                }).then(function (success) {
                    var conversationId = success.key;
                    _this.message = '';
                    // Add conversation reference to the users.
                    _this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/conversations/' + _this.userId).update({
                        conversationId: conversationId,
                        messagesRead: 1
                    });
                    _this.angularfireDatabase.object('/users/' + _this.userId + '/conversations/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid).update({
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
            }
        }
    };
    //alert for error
    DuplicateMessagePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Oops...',
            subTitle: 'Something went wrong!',
            buttons: ['OK']
        });
        alert.present();
    };
    DuplicateMessagePage.prototype.sendPhoto = function () {
        this.showAlert();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], DuplicateMessagePage.prototype, "content", void 0);
    DuplicateMessagePage = DuplicateMessagePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-duplicate-message',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\duplicate-message\duplicate-message.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content has-footer>\n\n  <!-- Messages -->\n\n  <div class="messages">\n\n    <p class="center" *ngIf="startIndex > 0"><span tappable (click)="loadPreviousMessages()">Load previous messages</span></p>\n\n    <ion-row *ngFor="let message of messagesToShow">\n\n      <!--  Message -->\n\n      <ion-col col-2 class="center" *ngIf="isSender(message)">\n\n        <img src="{{message.avatar}}" (load)="doScroll()" />\n\n      </ion-col>\n\n      <ion-col col-1 *ngIf="!isSender(message)">\n\n      </ion-col>\n\n      <ion-col col-9 class="sender" *ngIf="isSender(message)">\n\n        <div class="left" *ngIf="message.type == \'text\'">\n\n          <p>{{message.message}}</p>\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n        <div class="left" *ngIf="message.type == \'image\'">\n\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-9 *ngIf="!isSender(message)">\n\n        <div class="right" *ngIf="message.type == \'text\'">\n\n          <p>{{message.message}}</p>\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n        <div class="left" *ngIf="message.type == \'image\'">\n\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-1 *ngIf="isSender(message)">\n\n      </ion-col>\n\n      <ion-col col-2 class="center" *ngIf="!isSender(message)">\n\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()" />\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n<!-- Message Box -->\n\n<ion-footer>\n\n  <div class="bottom_bar">\n\n    <ion-fab middle left>\n\n      <button ion-fab mini tappable (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n\n    </ion-fab>\n\n    <ion-input type="text" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-input>\n\n    <ion-fab middle right>\n\n      <button ion-fab mini tappable (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n\n    </ion-fab>\n\n  </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\duplicate-message\duplicate-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DuplicateMessagePage);
    return DuplicateMessagePage;
    var DuplicateMessagePage_1;
}());

//# sourceMappingURL=duplicate-message.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeLinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_comment__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__docver_docver__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_message__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TimeLinePage = /** @class */ (function () {
    function TimeLinePage(actionSheetCtrl, toastCtrl, navCtrl, navParams, alertCtrl, formBuilder, angularfireDatabase, loadingProvider, app, dataProvider, cb, data, zone, modalCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.app = app;
        this.dataProvider = dataProvider;
        this.cb = cb;
        this.data = data;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.timeLine = [];
        this.timeLineNotNull = false;
        this.storyForm = formBuilder.group({
            story: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required]
        });
        this.commentToggle = false;
    }
    TimeLinePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.data.getCurrentUser().subscribe(function (params) {
            console.log(params.role);
            console.log(params.docStatus);
            if ((params.role == "Psychologist") && (params.docStatus == "false")) {
                _this.zone.run(function () {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__docver_docver__["a" /* DocverPage */]);
                });
            }
        });
    };
    // delete my status
    // checkpoint delete timeline guntur v
    TimeLinePage.prototype.deleteOwnStatus = function (timeLine) {
        // realtime load data
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        this.dataProvider.deleteUserTimelineByID().remove(timeLine);
    };
    TimeLinePage.prototype.openMenu = function (i) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Edit',
                    role: 'Edit',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteOwnStatus(i);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TimeLinePage.prototype.ionViewDidLoad = function () {
        // this.loadingProvider.show();
        // this.dataProvider.deleteUserTimelineByID().subscribe((status) => {
        //   this.loadingProvider.hide();
        //   this.status = status;
        //   console.log("indexnya",this.status);
        var _this = this;
        // });
        console.log('ionViewDidLoad TimeLinePage');
        this.getRole();
        this.dataProvider.getUserTimeline().subscribe(function (timeLineData) {
            console.log("timeline fresh", timeLineData);
            if (timeLineData) {
                for (var _i = 0, _a = timeLineData.reverse(); _i < _a.length; _i++) {
                    var singleItem = _a[_i];
                    // console.log("single",singleItem);
                    _this.timeLine.push(singleItem);
                }
                console.log("timeline lengthnya", _this.timeLine);
                _this.timeLineNotNull = true;
                _this.cb.detectChanges();
                _this.loggedInID = _this.dataProvider.getMyID();
            }
            else {
                _this.timeLine = [];
                _this.timeLineNotNull = false;
                _this.cb.detectChanges();
            }
        });
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.loadingProvider.hide();
            _this.user = user;
            // get user from firebase
            console.log("Get current user", _this.user);
        });
    };
    //mood level get update data
    TimeLinePage.prototype.getRole = function () {
        var _this = this;
        this.dataProvider.getCurrentUser().subscribe(function (params) {
            if (params != null) {
                _this.role = params.role;
                _this.moodLevel = params.moodLevel;
                _this.gender = params.gender;
                _this.cb.detectChanges();
            }
        });
    };
    TimeLinePage.prototype.underConstruction = function () {
        var alert = this.alertCtrl.create({
            title: 'Ooops..',
            subTitle: 'Sorry, this feature under maintenance.',
            buttons: ['Ok']
        });
        alert.present();
    };
    TimeLinePage.prototype.moodTracker = function () {
        var alert = this.alertCtrl.create({
            title: 'Ooops..',
            subTitle: 'Sorry, this feature under maintenance',
            buttons: ['Ok']
        });
        alert.present();
    };
    //toast for change mood level
    TimeLinePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Thankyou for changed your mood.',
            duration: 2000,
            position: "middle",
        });
        toast.present();
    };
    // Refresher
    TimeLinePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    //change mood level based on user decision
    TimeLinePage.prototype.changeMoodLevel = function (newMoodLevel) {
        var _this = this;
        this.dataProvider.updateCurrentUser().update({
            moodLevel: newMoodLevel
        }).then(function (params) {
            _this.presentToast();
        });
    };
    //alert for change mood level
    TimeLinePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Congratulation...',
            subTitle: 'Successfully updated!',
            buttons: ['OK']
        });
        alert.present();
    };
    // Update timeline friend.
    TimeLinePage.prototype.updateFriendTimeLine = function (friend, newStoryMessage, postID) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid != null) {
            this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).subscribe(function (userData) {
                if (userData != null) {
                    if (friend != null) {
                        var timeLine = void 0;
                        if (friend.timeLine == null) {
                            timeLine = [];
                        }
                        else {
                            timeLine = friend.timeLine;
                        }
                        timeLine.push({
                            timeLineID: postID,
                            senderId: __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid,
                            story: newStoryMessage,
                            date: new Date().toString(),
                            img: userData.img,
                            name: userData.name,
                            userName: userData.username,
                            role: userData.role,
                            gender: _this.gender,
                            likes: 0,
                            comments: ""
                        });
                        // console.log("stage 1 ");
                        // console.log(timeLine);
                        //post to user logged in friends timeline
                        _this.angularfireDatabase.object('/users/' + friend.$key).update({
                            timeLine: timeLine
                        });
                        /*             //master branch post
                                    this.angularfireDatabase.object('/users/' + firebase.auth().currentUser.uid + '/posts/users/').update({
                                      ID_Post: this.postID,
                                      ID_User: firebase.auth().currentUser.uid
                                    });
                         */
                    }
                }
            });
        }
    };
    //friends timeLine
    TimeLinePage.prototype.updateTimeLine = function (newStoryMessage, postID) {
        var _this = this;
        var toggle = true;
        var haveFriends = false;
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            for (var p in account) {
                if (account.hasOwnProperty(p)) {
                    if (p == "friends") {
                        haveFriends = true;
                    }
                }
            }
            if (haveFriends) {
                var friendslength = account.friends.length;
                if (account.friends && toggle) {
                    toggle = false;
                    for (var i = 0; i < friendslength; i++) {
                        _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                            _this.updateFriendTimeLine(friend, newStoryMessage, postID);
                        });
                    }
                }
                else {
                    _this.friends = [];
                }
            }
        });
    };
    //my timeLine (logged in)
    TimeLinePage.prototype.updateMyTimeLine = function (newStoryMessage, postID) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid != null) {
            this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).subscribe(function (userData) {
                // console.log(userData);
                if (userData != null) {
                    var timeLine = userData.timeLine;
                    console.log("timeeeleen", timeLine);
                    if (timeLine == null) {
                        timeLine = [];
                    }
                    timeLine.push({
                        timeLineID: postID,
                        senderId: __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid,
                        story: newStoryMessage,
                        date: new Date().toString(),
                        img: userData.img,
                        name: userData.name,
                        userName: userData.username,
                        role: userData.role,
                        gender: _this.gender,
                        likes: 0,
                        comments: ""
                    });
                    //post to user logged in friends timeline
                    _this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).update({
                        timeLine: timeLine
                    });
                    _this.angularfireDatabase.object('/posts/' + _this.generateFilename() + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).set({
                        ID_Post: postID,
                        ID_User: __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid
                    });
                    _this.ToastForUpdate();
                }
            });
        }
    };
    //toast when update
    TimeLinePage.prototype.ToastForUpdate = function () {
        var toast = this.toastCtrl.create({
            message: 'Thankyou for expressed your feeling.',
            duration: 1000,
            position: "middle",
        });
        toast.present();
    };
    // Generate a random filename of length for the image to be uploaded
    TimeLinePage.prototype.generateFilename = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    //post new story from surrent user logged in
    TimeLinePage.prototype.postNewStory = function () {
        // realtime load data
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        var newStoryMessage = this.storyForm.value["story"];
        this.cb.detectChanges();
        console.log(newStoryMessage);
        //generate post ID for mytimelinepost and friendstimelinepost
        var postID = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid + this.generateFilename();
        // Get user data on database and get list of friends.
        this.updateTimeLine(newStoryMessage, postID);
        this.updateMyTimeLine(newStoryMessage, postID);
        // this.storyForm.get('story').setValue("");
    };
    //Send message
    TimeLinePage.prototype.sendMessage = function (userTargetID) {
        console.log(userTargetID);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__message_message__["a" /* MessagePage */], { userId: userTargetID });
        // this.app.getRootNav().push(DuplicateMessagePage, {userId: userTargetID});
    };
    TimeLinePage.prototype.commentFunction = function (timeLineID) {
        var commentModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__comment_comment__["a" /* CommentPage */], { timeLineID: timeLineID });
        commentModal.present();
    };
    /*   hugFunction() {
        this.alert = this.alertCtrl.create({
          title: 'Change Comment',
          message: "Please enter a new comment.",
          inputs: [
            {
              name: 'comment',
              placeholder: 'Your comment',
              value: this.comment
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
                let comment = data["comment"];
                console.log(comment)
          
              }
            }
          ]
        }).present();
      } */
    TimeLinePage.prototype.likes = function (postID) {
        var _this = this;
        var post;
        var matchPost;
        var friends;
        var matchPostBranch;
        var postMatch;
        var friend;
        var tmpTime;
        console.log("flag 1");
        //get MY timeline data
        this.dataProvider.getObjectCommentTimeline().subscribe(function (params) {
            _this.tmpTimeLine = params;
            console.log("tmpTimeLine");
            console.log(_this.tmpTimeLine);
            console.log("flag 2");
            console.log(postID);
            //search post that match with postID
            for (var i = _this.tmpTimeLine.length - 1; i >= 0; i--) {
                //console.log(tmpTimeLine[i].timeLineID);
                if (_this.tmpTimeLine[i].timeLineID == postID) {
                    _this.tmpTimeLine[i].likes = _this.tmpTimeLine[i].likes + 1;
                }
            }
            _this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).update({
                timeLine: _this.tmpTimeLine
            });
            //update timeline view
            _this.data.getUserTimeline().subscribe(function (params) {
                _this.timeLine = [];
                _this.timeLine = params;
            });
        });
        //get friend list
        this.dataProvider.getCurrentFriendTimeline().subscribe(function (params) {
            friends = params;
            console.log(friends);
            var _loop_1 = function (j) {
                _this.dataProvider.relationFriendTimeline(friend[j].value).subscribe(function (params) {
                    _this.tmpTimeLineFriend = params;
                    console.log("tmpTimeLineFriend");
                    console.log(_this.tmpTimeLineFriend);
                    //search post that match with postID
                    for (var i = _this.tmpTimeLineFriend.length - 1; i >= 0; i--) {
                        //console.log(tmpTimeLine[i].timeLineID);
                        console.log("PostID : " + postID);
                        console.log("timeLineID : " + _this.tmpTimeLineFriend[i].timeLineID);
                        if (_this.tmpTimeLineFriend[i].timeLineID == postID) {
                            console.log("tembus");
                            _this.tmpTimeLineFriend[i].likes = _this.tmpTimeLineFriend[i].likes + 1;
                        }
                    }
                    _this.angularfireDatabase.object('/users/' + friends[j].$value).update({
                        timeLine: _this.tmpTimeLineFriend
                    });
                });
            };
            for (var j = friends.length - 1; j >= 0; j--) {
                _loop_1(j);
            }
        });
    };
    TimeLinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-time-line',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\time-line\time-line.html"*/'<!--\n\n  Generated template for the TimeLinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <img class="socioCss" src="assets/images/headerSocio.png" />\n\n        <!-- new commented -->\n\n        <ion-buttons end>\n\n            <button (click)="goTodynamic()" ion-button>\n\n                <!-- <button (click)="underConstruction()" ion-button> -->\n\n                <img class="imageLove" src="assets/images/love.png" />\n\n            </button>\n\n            <button (click)="goTodynamic()" ion-button>\n\n                <!-- <button (click)="underConstruction()" ion-button> -->\n\n                <img class="imageLove" src="assets/images/panicButton.png" />\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<!-- GUE NGUBAH BUILD/MAIN.CSS -->\n\n\n\n<ion-content>\n\n    \n\n    <ion-card class="padding-status">\n\n        <div class="profile" *ngIf="user">\n\n            <ion-avatar item-start>\n\n                <img src="{{user.img}}" />\n\n            </ion-avatar>\n\n        </div>\n\n        <form class="rounded" [formGroup]="storyForm">\n\n            <ion-item>\n\n                <ion-textarea type="text" formControlName="story" placeholder="Express your feelings..."></ion-textarea>\n\n            </ion-item>\n\n        </form>\n\n\n\n        <button ion-button (click)="postNewStory()" clear item-right>\n\n            <ion-icon class="icon" name="md-send"></ion-icon>\n\n        </button>\n\n    </ion-card>\n\n    <ion-card *ngIf="!timeLineNotNull">\n\n        <ion-card-content>\n\n            <p class="noData">No post yet.</p>\n\n            <!-- <p class="noData">There is no data yet</p> -->\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n    <!-- container comment -->\n\n    <div *ngIf="commentToggle" class="comment-container">\n\n\n\n    </div>\n\n    <ion-card *ngFor="let item of timeLine; let i = index">\n\n            <ion-item>\n\n                <div class="rightMenu">\n\n                    <ion-icon class="moreCss" (click)="openMenu(item[i])" name="md-more"></ion-icon>\n\n                </div>\n\n                <ion-avatar style="margin-left:-10px" item-start>\n\n                    <img src="{{item.img}}">\n\n                </ion-avatar>\n\n                <h2 style="margin-top:-10px" *ngIf="item.senderId != loggedInID" class="userName">{{item.name}}</h2>\n\n                <h2 *ngIf="item.senderId == loggedInID" class="userName">Me</h2>\n\n                <ion-icon class="genderCss" name="male">&nbsp;{{item.role}}</ion-icon>\n\n            </ion-item>\n\n\n\n            <ion-card-content>\n\n                <p>{{item.story}}</p>\n\n                <br>\n\n                <div>\n\n                    <!-- new commented -->\n\n                    <img (click)="likes(item.timeLineID)" class="hugCss" src="assets/images/hug.png" />\n\n                    <img (click)="commentFunction(item.timeLineID)" class="hugCss" src="assets/images/message.png" />\n\n                    <br>\n\n                    <br>\n\n                </div>\n\n                <!-- new commented -->\n\n                <p item-start class="warna">{{item.likes}} Hugs</p>\n\n                <p class="commentCss"> 5 Comment</p>\n\n\n\n                <div class="dateRight">\n\n                    <ion-col item-end>{{item.date | DateFormat}}</ion-col>\n\n                </div>\n\n            </ion-card-content>\n\n\n\n            <!-- new commented -->\n\n            <ion-row class="leftComment">\n\n                <ion-col>\n\n                    <button *ngIf="item.senderId != loggedInID" (click)="sendMessage(item.senderId)" ion-button icon-left clear small>\n\n                        <ion-icon name="text"></ion-icon>\n\n                        <div>Send Message</div>\n\n                    </button>\n\n                    <!-- GUE NGUBAH BUILD/MAIN.CSS -->\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-content>\n\n                <ion-card>\n\n                    <ion-card-header class="headerCss">\n\n                        How\'s your mood today?\n\n                    </ion-card-header>\n\n                    <ion-card-content>\n\n                        <ion-grid>\n\n                            <ion-row class="centerin">\n\n                                <ion-col col-2>\n\n                                    <ion-row>\n\n                                        <ion-icon *ngIf="moodLevel == \'Depress\'" class="icon-checked" name="md-checkmark-circle-outline"></ion-icon>\n\n                                        <img (click)="changeMoodLevel(\'Depress\')" src="assets/images/depress.png" />\n\n                                        <p class="moodLable">Depressed</p>\n\n                                    </ion-row>\n\n                                </ion-col>\n\n\n\n                                <ion-col col-2 style="margin-left: 10px;">\n\n                                    <ion-row>\n\n                                        <ion-icon *ngIf="moodLevel == \'Pressure\'" class="icon-checked" name="md-checkmark-circle-outline"></ion-icon>\n\n                                        <img (click)="changeMoodLevel(\'Pressure\')" src="assets/images/pressure.png" />\n\n                                        <p class="moodLable">Pressured</p>\n\n                                    </ion-row>\n\n                                </ion-col>\n\n\n\n                                <ion-col col-2 style="margin-left: 10px;">\n\n                                    <ion-row>\n\n                                        <!-- <button class="circle"  (click)="changeMoodLevel(\'Normal\')" ion-button block> -->\n\n                                        <ion-icon *ngIf="moodLevel == \'Normal\'" class="icon-checked" name="md-checkmark-circle-outline"></ion-icon>\n\n                                        <img (click)="changeMoodLevel(\'Normal\')" src="assets/images/normal.png" />\n\n                                        <!-- </button> -->\n\n                                        <p class="moodLable">Normal</p>\n\n                                    </ion-row>\n\n                                </ion-col>\n\n\n\n                                <ion-col col-2 style="margin-left: 10px;">\n\n                                    <ion-row>\n\n                                        <ion-icon *ngIf="moodLevel == \'Good\'" class="icon-checked" name="md-checkmark-circle-outline"></ion-icon>\n\n                                        <img (click)="changeMoodLevel(\'Good\')" src="assets/images/good.png" />\n\n                                        <p class="moodLable">&nbsp;Good</p>\n\n                                    </ion-row>\n\n                                </ion-col>\n\n\n\n                                <ion-col col-2 style="margin-left: 10px;">\n\n                                    <ion-row>\n\n                                        <ion-icon *ngIf="moodLevel == \'Happy\'" class="icon-checked" name="md-checkmark-circle-outline"></ion-icon>\n\n                                        <img (click)="changeMoodLevel(\'Happy\')" src="assets/images/happy.png" />\n\n                                        <p class="moodLable">&nbsp;Happy</p>\n\n                                    </ion-row>\n\n                                </ion-col>\n\n\n\n                            </ion-row>\n\n                            <ion-row style="padding-top:7px;">\n\n                                <!-- <ion-col text-right> -->\n\n                                <p class="moodCss" (click)="moodTracker()">Mood Tracker >></p>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n                <form [formGroup]="storyForm" style="margin-right: 20px;">\n\n                    <ion-item class="rounded">\n\n                        <ion-textarea type="text" formControlName="story" placeholder="Express your feelings..."></ion-textarea>\n\n                        <button ion-button (click)="postNewStory()" class="publishButton" clear item-right>\n\n                            <ion-icon class="icon" name="md-send"></ion-icon>\n\n                        </button>\n\n                    </ion-item>\n\n                </form>\n\n\n\n                <ion-card *ngIf="!timeLineNotNull">\n\n                    <ion-card-content>\n\n                        <p class="noData">No post yet.</p>\n\n                        <!-- <p class="noData">There is no data yet</p> -->\n\n                    </ion-card-content>\n\n                </ion-card>\n\n                <ion-refresher (ionRefresh)="doRefresh($event)">\n\n                    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n                    </ion-refresher-content>\n\n                </ion-refresher>\n\n\n\n                <ion-card *ngFor="let item of timeLine">\n\n                    <ion-item>\n\n                        <div class="rightMenu">\n\n                            <ion-icon class="moreCss" (click)="openMenu()" name="md-more"></ion-icon>\n\n                        </div>\n\n                        <ion-avatar item-start>\n\n                            <img src="{{item.img}}">\n\n                        </ion-avatar>\n\n                        <h2 *ngIf="item.senderId != loggedInID" class="userName">{{item.name}}</h2>\n\n                        <h2 *ngIf="item.senderId == loggedInID" class="userName">Me</h2>\n\n                        <ion-icon class="genderCss" name="male"> {{item.role}}\n\n                        </ion-icon>\n\n                    </ion-item>\n\n\n\n                    <ion-card-content>\n\n                        <p>{{item.story}}</p>\n\n                        <br>\n\n                        <div>\n\n                            <img (click)="hugFunction()" class="hugCss" src="assets/images/hug.png" />\n\n                            <b>10</b>\n\n                            <img (click)="commentFunction()" class="hugCss" src="assets/images/message.png" />\n\n                            <!-- <ion-icon (click)="hugFunction()" class="hugCss" name="ios-heart-outline"></ion-icon> -->-->\n\n                            <!-- <ion-icon  class="hugCss" name="ios-text-outline"></ion-icon> -->\n\n                        </div>\n\n                        <div class="dateRight">\n\n                            <ion-col>{{item.date | DateFormat}}</ion-col>\n\n                        </div>\n\n                    </ion-card-content>\n\n\n\n                    <ion-row class="leftComment">\n\n                        <ion-col>\n\n                            <button *ngIf="item.senderId != loggedInID" (click)="sendMessage(item.senderId)" ion-button icon-left clear small>\n\n                                <ion-icon name="text"></ion-icon>\n\n                                <div>Send Message</div>\n\n                            </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                </ion-card>\n\n            </ion-content>\n\n    </ion-card>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\time-line\time-line.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]])
    ], TimeLinePage);
    return TimeLinePage;
}());

//# sourceMappingURL=time-line.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_boarding_boarding__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//Pages


var MyApp = /** @class */ (function () {
    function MyApp(platform, fcm, toastCtrl, statusBar, splashScreen, keyboard) {
        if (localStorage.getItem("toggle") == "true") {
            if (__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser) {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__["a" /* MessagesPage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
            }
            // this.rootPage = LovepointStorePage;
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_boarding_boarding__["a" /* BoardingPage */];
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // access token for push Notification
            fcm.getToken();
            fcm.listenToNotifications();
            statusBar.styleDefault();
            splashScreen.hide();
            keyboard.hideKeyboardAccessoryBar(true);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"E:\Github\socioempathyclient\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_people_search_people__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_info_user_info__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requests_requests__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FriendsPage = /** @class */ (function () {
    // FriendsPage
    // This is the page where the user can search, view, and initiate a chat with their friends.
    function FriendsPage(actionSheetCtrl, navCtrl, navParams, app, dataProvider, loadingProvider) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.searchFriend = '';
        this.loadingProvider.show();
        // Get friendRequests to show friendRequests count.
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid).subscribe(function (requests) {
            _this.friendRequests = requests.length;
            // console.log("friendrequest",this.friendRequests);
        });
        // Get user data on database and get list of friends.
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            if (account.friends) {
                for (var i = 0; i < account.friends.length; i++) {
                    _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                        _this.addOrUpdateFriend(friend);
                    });
                }
            }
            else {
                _this.friends = [];
            }
            _this.loadingProvider.hide();
        });
    };
    // hold button
    FriendsPage.prototype.pressEvent = function (e) {
        this.openMenu();
    };
    // Add or update friend data for real-time sync.
    FriendsPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Proceed to searchPeople page.
    FriendsPage.prototype.searchPeople = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__search_people_search_people__["a" /* SearchPeoplePage */]);
    };
    // Proceed to requests page.
    FriendsPage.prototype.manageRequests = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__requests_requests__["a" /* RequestsPage */]);
    };
    // Proceed to userInfo page.
    FriendsPage.prototype.viewUser = function (userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    // Proceed to chat page.
    FriendsPage.prototype.message = function (userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__message_message__["a" /* MessagePage */], { userId: userId });
    };
    // action sheet
    FriendsPage.prototype.openMenu = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Delete Friend',
                    role: 'Delete',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Block',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-friends',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\friends\friends.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="socioCss" src="assets/images/headerSocio.png" />\n\n    <ion-buttons end>\n\n      <button ion-button icon-only tappable (click)="manageRequests()">\n\n        <ion-icon name="md-filing"></ion-icon>\n\n        <ion-badge color="danger" *ngIf="friendRequests">{{friendRequests}}</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button style="margin-left:15px" ion-button icon-only tappable (click)="searchPeople()">\n\n        <ion-icon name="md-person-add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friends to show -->\n\n  <!-- <div class="empty-list" *ngIf="friends && friends.length == 0"> -->\n\n  <div *ngIf="friends && friends.length == 0">\n\n    <!-- <h1>\n\n      <ion-icon name="md-contacts"></ion-icon>\n\n    </h1>\n\n    <p>Uh-oh! You have not added any friends right now.</p>\n\n    <button ion-button icon-left tappable (click)="searchPeople()"> -->\n\n    <!-- <ion-icon name="md-search"></ion-icon>Search People</button> -->\n\n    <ion-list>\n\n      <ion-list-header>Regular Users</ion-list-header>\n\n      <ion-item>\n\n        <p style="text-align:center;font-size:24px"><b>Oops!</b></p>\n\n        <p style="text-align:center">You have no users added as a friend.\n\n          <br>Tap the\n\n          <ion-icon name="md-person-add"></ion-icon>\n\n          icon on the right corer to add new.\n\n        </p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <ion-list>\n\n      <ion-list-header>Psychologist Student</ion-list-header>\n\n      <ion-item>\n\n        <p style="text-align:center;font-size:24px"><b>Oops!</b></p>\n\n        <p style="text-align:center">You have no psychologist student added as a friend\n\n          <br>Tap the\n\n          <ion-icon name="md-person-add"></ion-icon>\n\n          icon on the right corer to add new.\n\n        </p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <ion-list>\n\n      <ion-list-header>Psychologist\n\n        <p class="premiumCss" item-end>\n\n          <ion-icon name="star"></ion-icon>PREMIUM FEATURE\n\n        </p>\n\n      </ion-list-header>\n\n\n\n      <ion-item>\n\n        <p style="text-align:center;font-size:24px"><b>Oops!</b></p>\n\n        <p style="text-align:center">You have no psychologist added as a friend\n\n          <br>Tap the\n\n          <ion-icon name="md-person-add"></ion-icon>\n\n          icon on the right corer to add new.\n\n        </p>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n  <!-- CLOSE No friends to show -->\n\n\n\n\n\n  <!-- Show list of friends -->\n\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item (press)="pressEvent($event)" *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="viewUser(friend)">\n\n      <ion-fab middle right>\n\n        <button ion-fab mini tappable (click)="message(friend.$key); $event.stopPropagation();">\n\n          <ion-icon name="md-text" class="success"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{friend.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friend.name}}</h2>\n\n      <p>@{{friend.username}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\friends\friends.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading__["a" /* LoadingProvider */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_people_search_people__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewMessagePage = /** @class */ (function () {
    // NewMessagePage
    // This is the page where the user are asked to select a friend whom they want to start a conversation with.
    function NewMessagePage(navCtrl, navParams, app, dataProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
    }
    NewMessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.searchFriend = '';
        this.loadingProvider.show();
        // Get user's friends.
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            if (account.friends) {
                for (var i = 0; i < account.friends.length; i++) {
                    _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                        _this.addOrUpdateFriend(friend);
                    });
                }
            }
            else {
                _this.friends = [];
            }
            _this.loadingProvider.hide();
        });
    };
    // Back
    NewMessagePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Add or update friend for real-time sync.
    NewMessagePage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].key == friend.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Search people.
    NewMessagePage.prototype.searchPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_people_search_people__["a" /* SearchPeoplePage */]);
    };
    // Open chat with this user.
    NewMessagePage.prototype.message = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { userId: userId });
    };
    NewMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-message',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\new-message\new-message.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>New Message</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friends yet to start a conversation with -->\n\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n\n    <h1><ion-icon name="md-contacts"></ion-icon></h1>\n\n    <p>Uh-oh! You have not added any friends yet.</p>\n\n    <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search People</button>\n\n  </div>\n\n  <!-- Show friends to start a conversation with -->\n\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="message(friend.userId)">\n\n      <ion-avatar item-left>\n\n        <img src="{{friend.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friend.name}}</h2>\n\n      <p>@{{friend.username}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\new-message\new-message.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */]])
    ], NewMessagePage);
    return NewMessagePage;
}());

//# sourceMappingURL=new-message.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PayDetailPage = /** @class */ (function () {
    function PayDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PayDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayDetailPage');
    };
    PayDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pay-detail',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\pay-detail\pay-detail.html"*/'<!--\n\n  Generated template for the PayDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>pay-detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\pay-detail\pay-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PayDetailPage);
    return PayDetailPage;
}());

//# sourceMappingURL=pay-detail.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaySuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaySuccessPage = /** @class */ (function () {
    function PaySuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaySuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaySuccessPage');
    };
    PaySuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pay-success',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\pay-success\pay-success.html"*/'<!--\n\n  Generated template for the PaySuccessPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>pay-success</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\pay-success\pay-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PaySuccessPage);
    return PaySuccessPage;
}());

//# sourceMappingURL=pay-success.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPremiumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuyPremiumPage = /** @class */ (function () {
    function BuyPremiumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // pop up pertama kali doang
        this.popUp = true;
    }
    BuyPremiumPage.prototype.ionViewDidLoad = function () {
    };
    BuyPremiumPage.prototype.closeBtn = function () {
        this.popUp = false;
    };
    BuyPremiumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-buy-premium',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\buy-premium\buy-premium.html"*/'<!--\n\n  Generated template for the BuyPremiumPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Buy Premium</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card class="cardCss">\n\n    <h1 class="middleCss pinkCss">\n\n      <b>LOVE POINTS</b>\n\n    </h1>\n\n    <div class="imgCss">\n\n      <img src="assets/images/lovepoints.png" />\n\n    </div>\n\n\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col>\n\n        <p class="marginCss">Your Balance :</p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p class="marginCss" style="text-align:right;color:#eb5487">100 Loves</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <!-- UN COMMENT UNTUK LIAT POP UP -->\n\n\n\n  <!-- <div class="container">\n\n    <h1 class="middleCss pinkCss">\n\n      <b>APA ITU LOVEPOINTS</b>\n\n    </h1>\n\n\n\n    <div class="imgCss">\n\n      <img src="assets/images/lovepoints.png" />\n\n    </div>\n\n\n\n    <p class="middleCss">LovePoints adalah credits yang kamu gunakan untuk berkonsultasi dengan psikolog per\n\n      <i>session</i>-nya.</p>\n\n    <p class="middleCss">Dengan berkonsultasi ke psikolog, masalahmu akan ditangani oleh tenaga ahli yang sudah pengalaman dan kompeten.</p>\n\n    <p class="middleCss">Pembelian LovePoints dapat dilakukan melalui transfer ATM, BNI, BRI, BCA, Mandiri, dan CIMB.</p>\n\n    <p class="closeButton" (click)="closeBtn()">CLOSE</p>\n\n  </div> -->\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-navbar>\n\n    <button ion-button medium full>\n\n      BUY LOVEPOINTS\n\n    </button>\n\n  </ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\buy-premium\buy-premium.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BuyPremiumPage);
    return BuyPremiumPage;
}());

//# sourceMappingURL=buy-premium.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Payment1Page = /** @class */ (function () {
    function Payment1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Payment1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Payment1Page');
    };
    Payment1Page.prototype.takePhoto = function () {
    };
    Payment1Page.prototype.fromGallery = function () {
    };
    Payment1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment1',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment1\payment1.html"*/'<!--\n\n  Generated template for the Payment1Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<p>Unggah Bukti Pembayaran</p>\n\n<img src="../assets/images/lovepoints.png">\n\n<div class="buttons">\n\n  <button ion-button (click)="takePhoto()">TAKE PHOTO</button>\n\n  <button ion-button (click)="fromGallery()">FROM GALLERY</button>\n\n</div>\n\n\n\n<h4>Catatan</h4>\n\n<p>Jika terjadi masalah dalam pengunggahan bukti pembayaran, Anda dapat mengunggah bukti pembayaran melalui <a href="#">Official Account Line Socioempathy.</a></p>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-navbar>\n\n    <button ion-button full (click)="next()">NEXT</button>\n\n  </ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment1\payment1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Payment1Page);
    return Payment1Page;
}());

//# sourceMappingURL=payment1.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutProvider = /** @class */ (function () {
    function LogoutProvider(app, loadingProvider, dataProvider) {
        this.app = app;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        console.log("Initializing Logout Provider");
        this.nav = app.getActiveNavs();
    }
    // Hooks the app to this provider, this is needed to clear the navigation views when logging out.
    LogoutProvider.prototype.setApp = function (app) {
        this.app = app;
    };
    // Logs the user out on Firebase, and clear navigation stacks.
    // It's important to call setApp(app) on the constructor of the controller that calls this function.
    LogoutProvider.prototype.logout = function () {
        var _this = this;
        this.loadingProvider.show();
        // Sign the user out on Firebase
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut().then(function (success) {
            localStorage.removeItem('uid_client');
            // Clear navigation stacks
            _this.app.getRootNav().popToRoot().then(function () {
                _this.loadingProvider.hide();
                //this.nav.setRoot(LoginPage);
                // Restart the entire app
                document.location.href = 'index.html';
            });
        });
    };
    LogoutProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__data__["a" /* DataProvider */]])
    ], LogoutProvider);
    return LogoutProvider;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Payment2Page = /** @class */ (function () {
    function Payment2Page(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Payment2Page.prototype.imageUpload = function () {
        this.alert = this.alertCtrl.create({
            title: 'Upload bukti transfer',
            message: 'Harap bukti transfer yang diupload benar.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        // this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        // this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    Payment2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Payment2Page');
    };
    Payment2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment2',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment2\payment2.html"*/'<!--\n\n  Generated template for the Payment2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>payment2</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-label>\n\n      Upload Bukti Pembayaran      \n\n  </ion-label>\n\n\n\n  <div class="imgCss">\n\n    <img (click)="imageUpload()" src="assets/images/upload.png" />\n\n  </div>\n\n  <br>\n\n  <p style="text-align:center">\n\n    Silahkan upload foto bukti transfer Anda.\n\n  </p>\n\n\n\n  <img style="margin-top:170px;" src="assets/images/statusbar2.png"/>\n\n  \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button full small block>PREVIOUS\n\n          </button>          \n\n      </ion-col>\n\n      <ion-col>\n\n          <button ion-button  full small block>NEXT\n\n            </button>              \n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment2\payment2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Payment2Page);
    return Payment2Page;
}());

//# sourceMappingURL=payment2.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Payment3Page = /** @class */ (function () {
    function Payment3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Payment3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Payment3Page');
    };
    Payment3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment3',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment3\payment3.html"*/'<!--\n\n  Generated template for the Payment3Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>payment3</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-label>\n\n        Status Pembayaran      \n\n    </ion-label>\n\n  \n\n    <div class="imgCss">\n\n      <img src="assets/images/done.png" />\n\n    </div>\n\n    <br>\n\n    <h3 style="text-align:center">\n\n      <b>Pembayaran Selesai!</b>\n\n    </h3>\n\n    <br>\n\n    <p style="text-align:center;font-size:12px;">Terimakasih telah melakukan transaksi di SocioEmpathy.<br><br>\n\n    Silahkan menunuggu email verifikasi transaksi dari kami maksimal dalam 1x24 jam.<br><br>\n\n    LovePoints akan ditambahkan segera setelah tim kami memverifikasi.</p>\n\n  \n\n    <img style="margin-top:40px;" src="assets/images/statusbar3.png"/>\n\n    \n\n  </ion-content>\n\n  \n\n  <ion-footer>\n\n    <ion-navbar>\n\n            <button ion-button  full small block>OK\n\n              </button>              \n\n  \n\n    </ion-navbar>\n\n  </ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment3\payment3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Payment3Page);
    return Payment3Page;
}());

//# sourceMappingURL=payment3.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamiclinkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DynamiclinkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DynamiclinkPage = /** @class */ (function () {
    function DynamiclinkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DynamiclinkPage.prototype.gunturLinked = function () {
        window.open('https://sbs7a.app.goo.gl/bVbA', '_system');
    };
    DynamiclinkPage.prototype.yogaLinked = function () {
        window.open('https://sbs7a.app.goo.gl/Lr7u', '_system');
    };
    DynamiclinkPage.prototype.nizarLinked = function () {
        window.open('https://sbs7a.app.goo.gl/rY6Y', '_system');
    };
    DynamiclinkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dynamiclink',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\dynamiclink\dynamiclink.html"*/'<!--\n\n  Generated template for the DynamiclinkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>About Us</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <img src="assets/images/88637.png">\n\n\n\n  <h2><b>Co Founder </b></h2>\n\n    <div class="profile">\n\n      <img (click)="gunturLinked()" src="assets/images/guntur.jpg">\n\n    </div>\n\n    <p (click)="gunturLinked()" style="text-align: center">Guntur Putra Pratama <b>Hustler</b></p>\n\n    <div class="profile">\n\n      <img (click)="yogaLinked()"  src="assets/images/yoga.jpg">\n\n    </div>\n\n    <p (click)="yogaLinked()" style="text-align: center">Dwi Yoga Wibawa <b>Hacker</b></p>\n\n    <div class="profile">\n\n      <img (click)="nizarLinked()" src="assets/images/nizar.jpg">\n\n    </div>\n\n    <p (click)="nizarLinked()" style="text-align: center">Nizar Maulana Azhari <b>Hipster</b></p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\dynamiclink\dynamiclink.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DynamiclinkPage);
    return DynamiclinkPage;
}());

//# sourceMappingURL=dynamiclink.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(18);
// Validators
// This file contains all your validators for the formGroups and for inputPrompts.
// Patterns can be tested by using a RegEx validator such as http://www.regexpal.com, https://regex101.com, among others.

var Validator;
(function (Validator) {
    // Set your validators here, don't forget to import and use them in the appropriate class that uses formGroups.
    // In this example, they are used on LoginPage where a formGroup for email and passwords is used.
    Validator.emailValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(5),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]
    ];
    Validator.passwordValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(5),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^[a-zA-Z0-9!@#$%^&*()_+-=]*$')
        ]
    ];
    // Set your prompt input validators here, don't forget to import and use them on the AlertController prompt.
    // In this example they are used by home.ts where the user are allowed to change their profile.
    // errorMessages are used by the AlertProvider class and is imported inside AlertProvider.errorMessages which is used by showErrorMessage().
    Validator.profileNameValidator = {
        minLength: 5,
        lengthError: { title: 'Name Too Short!', subTitle: 'Sorry, but name must be more than 4 characters.' },
        pattern: /^[a-zA-Z0-9\s]*$/g,
        patternError: { title: 'Invalid Name!', subTitle: 'Sorry, but the name you entered contains special characters.' }
    };
    Validator.profileProfessionValidator = {
        minLength: 2,
        lengthError: { title: 'Name Too Short!', subTitle: 'Sorry, but profession must be more than 2 characters.' },
        maxLength: 25,
        lengthMaxError: { title: 'Number Too Long!', subTitle: 'Sorry, but number must be less than 25 characters.' },
        pattern: /^[a-zA-Z\s]*$/g,
        patternError: { title: 'Invalid Name!', subTitle: 'Sorry, but the name you entered contains special characters.' }
    };
    Validator.profileEmailValidator = {
        pattern: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/g,
        patternError: { title: 'Invalid Email Address!', subTitle: 'Sorry, but the email you have entered is invalid.' }
    };
    Validator.profileNumberValidator = {
        minLength: 10,
        lengthError: { title: 'Number Too Short!', subTitle: 'Sorry, but number phone must be more than 10 characters.' },
        maxLength: 13,
        lengthMaxError: { title: 'Number Too Long!', subTitle: 'Sorry, but number must be less than 13 characters.' },
        pattern: /[0-9]*$/g,
        patternError: { title: 'Invalid Number Phone!', subTitle: 'Sorry, but the phone number you have entered is invalid.' }
    };
    Validator.profilePasswordValidator = {
        minLength: 5,
        lengthError: { title: 'Password Too Short!', subTitle: 'Sorry, but password must be more than 4 characters.' },
        pattern: /^[a-zA-Z0-9!@#$%^&*()_+-=]*$/g,
        patternError: { title: 'Invalid Password!', subTitle: 'Sorry, but the password you have entered contains special characters.' }
    };
    // Group Form Validators
    Validator.groupNameValidator = ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(1)]];
    Validator.groupDescriptionValidator = ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(1)]];
})(Validator || (Validator = {}));
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirebaseProvider = /** @class */ (function () {
    // Firebase Provider
    // This is the provider class for most of the Firebase updates in the app.
    function FirebaseProvider(angularfireDatabase, loadingProvider, alertProvider, dataProvider) {
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        console.log("Initializing Firebase Provider");
    }
    // Send friend request to userId.
    FirebaseProvider.prototype.sendFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var requestsSent;
        // Use take(1) so that subscription will only trigger once.
        this.dataProvider.getRequests(loggedInUserId).subscribe(function (requests) {
            console.log("requestss", requests);
            requestsSent = requests.requestsSent;
            if (!requestsSent) {
                requestsSent = [userId];
            }
            else {
                if (requestsSent.indexOf(userId) == -1)
                    requestsSent.push(userId);
            }
            // Add requestsSent information.
            _this.angularfireDatabase.object('/requests/' + loggedInUserId).update({
                requestsSent: requestsSent
            }).then(function (success) {
                var friendRequests;
                _this.dataProvider.getRequests(userId).subscribe(function (requests) {
                    friendRequests = requests.friendRequests;
                    if (!friendRequests) {
                        friendRequests = [loggedInUserId];
                    }
                    else {
                        if (friendRequests.indexOf(userId) == -1)
                            friendRequests.push(loggedInUserId);
                    }
                    // Add friendRequest information.
                    _this.angularfireDatabase.object('/requests/' + userId).update({
                        friendRequests: friendRequests
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                        _this.alertProvider.showFriendRequestSent();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // Cancel friend request sent to userId.
    FirebaseProvider.prototype.cancelFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var requestsSent;
        this.dataProvider.getRequests(loggedInUserId).subscribe(function (requests) {
            requestsSent = requests.requestsSent;
            requestsSent.splice(requestsSent.indexOf(userId), 1);
            // Update requestSent information.
            _this.angularfireDatabase.object('/requests/' + loggedInUserId).update({
                requestsSent: requestsSent
            }).then(function (success) {
                var friendRequests;
                _this.dataProvider.getRequests(userId).subscribe(function (requests) {
                    friendRequests = requests.friendRequests;
                    friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1);
                    // Update friendRequests information.
                    _this.angularfireDatabase.object('/requests/' + userId).update({
                        friendRequests: friendRequests
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                        _this.alertProvider.showFriendRequestRemoved();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // Delete friend request.
    FirebaseProvider.prototype.deleteFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var friendRequests;
        this.dataProvider.getRequests(loggedInUserId).subscribe(function (requests) {
            friendRequests = requests.friendRequests;
            friendRequests.splice(friendRequests.indexOf(userId), 1);
            // Update friendRequests information.
            _this.angularfireDatabase.object('/requests/' + loggedInUserId).update({
                friendRequests: friendRequests
            }).then(function (success) {
                var requestsSent;
                _this.dataProvider.getRequests(userId).subscribe(function (requests) {
                    requestsSent = requests.requestsSent;
                    requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
                    // Update requestsSent information.
                    _this.angularfireDatabase.object('/requests/' + userId).update({
                        requestsSent: requestsSent
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
                //TODO ERROR
            });
        });
    };
    // Accept friend request.
    FirebaseProvider.prototype.acceptFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        // Delete friend request.
        this.deleteFriendRequest(userId);
        this.loadingProvider.show();
        this.dataProvider.getUser(loggedInUserId).subscribe(function (account) {
            var friends = account.friends;
            if (!friends) {
                friends = [userId];
            }
            else {
                friends.push(userId);
            }
            // Add both users as friends.
            _this.dataProvider.UpdateUser(loggedInUserId).update({
                friends: friends
            }).then(function (success) {
                _this.dataProvider.getUser(userId).subscribe(function (account) {
                    var friends = account.friends;
                    if (!friends) {
                        friends = [loggedInUserId];
                    }
                    else {
                        friends.push(loggedInUserId);
                    }
                    _this.dataProvider.UpdateUser(userId).update({
                        friends: friends
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_4__data__["a" /* DataProvider */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_info_user_info__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_modal_image_modal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MessagePage = /** @class */ (function () {
    // MessagePage
    // This is the page where the user can chat with a friend.
    function MessagePage(navCtrl, navParams, dataProvider, angularfireDatabase, loadingProvider, firebaseProvider, imageProvider, alertCtrl, modalCtrl, camera, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.firebaseProvider = firebaseProvider;
        this.imageProvider = imageProvider;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.keyboard = keyboard;
        this.startIndex = -1;
        this.scrollDirection = "bottom";
        // Set number of messages to show.
        this.numberOfMessages = 10;
    }
    MessagePage_1 = MessagePage;
    MessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userId = localStorage.getItem("uid_client");
        this.psgId = this.navParams.get("psgId");
        this.isTimeover = this.navParams.get("isTimeover");
        this.idConversation = this.navParams.get("idConversation");
        this.stopConversation = this.navParams.get("stopConversation");
        // Get psychology details.
        console.log("psgId", this.psgId);
        this.dataProvider.getPsgAvailable(this.psgId).subscribe(function (user) {
            _this.title = user.name;
        });
        // Get conversation
        this.dataProvider.getConversationMessages(this.idConversation).subscribe(function (messages) {
            console.log("msg messages", messages);
            _this.allMessage = messages;
            if (_this.messages) {
                // Just append newly added messages to the bottom of the view.
                if (messages.length > _this.messages.length) {
                    var message_1 = messages[messages.length - 1];
                    if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid == message_1.sender) {
                        _this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                            message_1.avatar = user.img;
                        });
                    }
                    else {
                        _this.dataProvider
                            .getPsgAvailable(message_1.sender)
                            .subscribe(function (user) {
                            message_1.avatar = user.img;
                        });
                    }
                    _this.messages.push(message_1);
                    // Also append to messagesToShow.
                    _this.messagesToShow.push(message_1);
                    // Reset scrollDirection to bottom.
                    _this.scrollDirection = "bottom";
                }
            }
            else {
                // Get all messages, this will be used as reference object for messagesToShow.
                _this.messages = [];
                messages.forEach(function (message) {
                    if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid == message.sender) {
                        _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                            message.avatar = user.img;
                        });
                    }
                    else {
                        _this.dataProvider
                            .getPsgAvailable(message.sender)
                            .subscribe(function (user) {
                            message.avatar = user.img;
                        });
                    }
                    _this.messages.push(message);
                });
                // Load messages in relation to numOfMessages.
                if (_this.startIndex == -1) {
                    // Get initial index for numberOfMessages to show.
                    if (_this.messages.length - _this.numberOfMessages > 0) {
                        _this.startIndex = _this.messages.length - _this.numberOfMessages;
                    }
                    else {
                        _this.startIndex = 0;
                    }
                }
                if (!_this.messagesToShow) {
                    _this.messagesToShow = [];
                }
                // Set messagesToShow
                for (var i = _this.startIndex; i < _this.messages.length; i++) {
                    _this.messagesToShow.push(_this.messages[i]);
                }
                _this.loadingProvider.hide();
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach(function (message) {
                        var date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Load previous messages in relation to numberOfMessages.
    MessagePage.prototype.loadPreviousMessages = function () {
        var that = this;
        // Show loading.
        this.loadingProvider.show();
        setTimeout(function () {
            // Set startIndex to load more messages.
            console.log("that.startIndex : " + that.startIndex);
            console.log("that.numberOfMessages : " + that.numberOfMessages);
            if (that.startIndex - that.numberOfMessages > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
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
    };
    MessagePage.prototype.ionViewDidEnter = function () {
        this.setMessagesRead(this.allMessage.length);
        console.log('read', this.allMessage);
    };
    // Update messagesRead when user lefts this page.
    MessagePage.prototype.ionViewWillLeave = function () {
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'flex';
            });
        }
        if (this.allMessage)
            console.log("leave msg", this.allMessage);
        this.setMessagesRead(this.allMessage.length);
    };
    // Check if currentPage is active, then update user's messagesRead.
    MessagePage.prototype.setMessagesRead = function (totalMessagesCount) {
        if (this.navCtrl.getActive().instance instanceof MessagePage_1) {
            this.angularfireDatabase.object("/users/" + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid + "/conversations/" + this.psgId + "/" + this.idConversation).update({ messagesRead: totalMessagesCount });
        }
    };
    // Check if 'return' button is pressed and send the message.
    MessagePage.prototype.onType = function (keyCode) {
        if (keyCode == 1) {
            this.keyboard.close();
            this.send();
        }
    };
    // Scroll to bottom of page after a short delay.
    MessagePage.prototype.scrollBottom = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToBottom();
        }, 300);
    };
    // Scroll to top of the page after a short delay.
    MessagePage.prototype.scrollTop = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToTop();
        }, 300);
    };
    // Scroll depending on the direction.
    MessagePage.prototype.doScroll = function () {
        if (this.scrollDirection == "bottom") {
            this.scrollBottom();
        }
        else if (this.scrollDirection == "top") {
            this.scrollTop();
        }
    };
    // Check if the user is the sender of the message.
    MessagePage.prototype.isSender = function (message) {
        if (message.sender == __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
    };
    // finish session
    MessagePage.prototype.finishSession = function () {
        this.alert = this.alertCtrl
            .create({
            title: "Akhiri konsultasi sekarang juga?",
            message: "Konsultasi masih berlangsung, jika anda sudah menemukan solusi dan merasa puas, silahkan tekan tombol OK. Sesi akan ditutup dan tidak dapat konsultasi kembali.",
            buttons: [
                {
                    text: "CANCEL",
                    handler: function (data) { }
                },
                {
                    text: "OK",
                    handler: function () {
                        console.log("finish session");
                    }
                }
            ]
        })
            .present();
    };
    // Send message, if there's no conversation yet, create a new conversation.
    MessagePage.prototype.send = function () {
        var _this = this;
        if (this.message) {
            // User entered a text on messagebox
            // get from param
            console.log("msg idc", this.idConversation);
            if (this.idConversation) {
                // Add Message to the existing conversation
                // Clone an instance of messages object so it will not directly be updated.
                // The messages object should be updated by our observer declared on ionViewDidLoad.
                var messages_1 = JSON.parse(JSON.stringify(this.messages));
                messages_1.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid,
                    receiver: this.psgId,
                    type: "text",
                    message: this.message
                });
                // Update conversation on database.
                console.log("msg ar", messages_1);
                this.dataProvider.updateConversation(this.idConversation).update({
                    messages: messages_1
                });
                // Clear messagebox.
                this.message = "";
            }
            else {
                // New Conversation with friend.
                var messages = [];
                messages.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid,
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
                    .then(function (success) {
                    var conversationId = success;
                    _this.message = "";
                    // Add conversation reference to the users.
                    _this.angularfireDatabase.object("/users/" + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid + "/conversations/" + _this.userId).update({
                        conversationId: conversationId,
                        messagesRead: 1
                    });
                    _this.angularfireDatabase.object("/psg/" + _this.userId + "/conversations/" + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).update({
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
            }
        }
    };
    // View user info
    MessagePage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    // Send photoMessage.
    MessagePage.prototype.sendPhoto = function () {
        var _this = this;
        this.alert = this.alertCtrl
            .create({
            title: "Send Photo Message",
            message: "Do you want to take a photo or choose from your photo gallery?",
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) { }
                },
                {
                    text: "Choose from Gallery",
                    handler: function () {
                        // Upload image then return the url.
                        _this.imageProvider
                            .uploadPhotoMessage(_this.idConversation, _this.camera.PictureSourceType.PHOTOLIBRARY)
                            .then(function (url) {
                            // Process image message.
                            _this.sendPhotoMessage(url);
                        });
                    }
                },
                {
                    text: "Take Photo",
                    handler: function () {
                        // Upload image then return the url.
                        _this.imageProvider
                            .uploadPhotoMessage(_this.idConversation, _this.camera.PictureSourceType.CAMERA)
                            .then(function (url) {
                            // Process image message.
                            _this.sendPhotoMessage(url);
                        });
                    }
                }
            ]
        })
            .present();
    };
    // Process photoMessage on database.
    MessagePage.prototype.sendPhotoMessage = function (url) {
        var _this = this;
        if (this.idConversation) {
            // Add image message to existing conversation.
            var messages_2 = JSON.parse(JSON.stringify(this.messages));
            messages_2.push({
                date: new Date().toString(),
                sender: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid,
                type: "image",
                url: url
            });
            // Update conversation on database.
            this.dataProvider.updateConversation(this.idConversation).update({
                messages: messages_2
            });
        }
        else {
            // Create new conversation.
            var messages = [];
            messages.push({
                date: new Date().toString(),
                sender: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid,
                type: "image",
                url: url
            });
            var users = [];
            users.push(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid);
            users.push(this.userId);
            // Add conversation.
            this.angularfireDatabase
                .list("conversations")
                .push({
                dateCreated: new Date().toString(),
                messages: messages,
                users: users
            })
                .then(function (success) {
                var conversationId = success.key;
                // Add conversation references to users.
                _this.angularfireDatabase
                    .object("/users/" +
                    __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid +
                    "/conversations/" +
                    _this.userId)
                    .update({
                    conversationId: conversationId,
                    messagesRead: 1
                });
                _this.angularfireDatabase
                    .object("/psg/" +
                    _this.userId +
                    "/conversations/" +
                    __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid)
                    .update({
                    conversationId: conversationId,
                    messagesRead: 0
                });
            });
        }
    };
    // Enlarge image messages.
    MessagePage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */]) === "function" && _a || Object)
    ], MessagePage.prototype, "content", void 0);
    MessagePage = MessagePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-message",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\message\message.html"*/'<ion-header>\n\n  <!-- <ion-navbar hideBackButton="true"> -->\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button tappable (click)="finishSession()">\n\n        <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content has-footer>\n\n  <!-- Problem -->\n\n  <div class="problems">\n\n    <span class="field-problem">Keluhan :</span><br>\n\n    <span>Masalah mental ketika orangtua bercerai ingin bunuh diri</span>\n\n  </div>\n\n  <!-- rating -->\n\n  <!-- <div class="rating">\n\n    <div class="banner">\n\n      <h2>Thank You</h2>\n\n      <img src="" (load)="doScroll()"/>\n\n      <span>Rate this psychologist</span>\n\n    </div>\n\n    <button ion-button>SUBMIT</button>\n\n  </div> -->\n\n\n\n  <!-- Messages -->\n\n  <div class="messages">\n\n    <p class="center" *ngIf="startIndex > 0">\n\n      <span tappable (click)="loadPreviousMessages()">Load previous messages</span>\n\n    </p>\n\n    <ion-row *ngFor="let message of messagesToShow">\n\n      <!--  Message -->\n\n      <ion-col col-2 class="center" *ngIf="isSender(message)">\n\n        <img src="{{message.avatar}}" (load)="doScroll()" />\n\n      </ion-col>\n\n      <ion-col col-1 *ngIf="!isSender(message)">\n\n      </ion-col>\n\n      <ion-col col-9 class="sender" *ngIf="isSender(message)">\n\n        <div class="left" *ngIf="message.type == \'text\'">\n\n          <p>{{message.message}}</p>\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n        <div class="left" *ngIf="message.type == \'image\'">\n\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-9 *ngIf="!isSender(message)">\n\n        <div class="right" *ngIf="message.type == \'text\'">\n\n          <p>{{message.message}}</p>\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n        <div class="left" *ngIf="message.type == \'image\'">\n\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-1 *ngIf="isSender(message)">\n\n      </ion-col>\n\n      <ion-col col-2 class="center" *ngIf="!isSender(message)">\n\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()" />\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n<!-- Message Box -->\n\n<ion-footer *ngIf="isTimeover !== \'timeover\'">\n\n<!-- <ion-footer *ngIf="!stopConversation"> -->\n\n        <div class="bottom_bar">\n\n    <!-- <ion-fab middle left>\n\n      <button ion-fab mini tappable (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n\n    </ion-fab> -->\n\n    <ion-textarea type="text" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-textarea>\n\n    <ion-fab middle right>\n\n      <button ion-fab mini tappable (click)="send()" [disabled]="!message">\n\n        <ion-icon name="md-send"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div>\n\n</ion-footer>\n\n<ion-footer *ngIf="isTimeover == \'timeover\'">\n\n  <div class="session_end">Your session is ended, create next session with your psychologist.</div>\n\n</ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\message\message.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__providers_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_firebase__["a" /* FirebaseProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_image__["a" /* ImageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_image__["a" /* ImageProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _m || Object])
    ], MessagePage);
    return MessagePage;
    var MessagePage_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FriendPipe = /** @class */ (function () {
    function FriendPipe() {
    }
    // FriendPipe
    // Filter friend by name or username.
    FriendPipe.prototype.transform = function (friends, search) {
        if (!friends) {
            return;
        }
        else if (!search) {
            return friends;
        }
        else {
            var term_1 = search.toLowerCase();
            return friends.filter(function (friend) { return friend.name.toLowerCase().indexOf(term_1) > -1 || friend.username.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    FriendPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'friendFilter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FriendPipe);
    return FriendPipe;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    // SearchPipe
    // Filter user search results for name or username excluding the excludedIds.
    SearchPipe.prototype.transform = function (accounts, data) {
        var excludedIds = data[0];
        var term = data[1];
        if (!accounts) {
            return;
        }
        else if (!excludedIds) {
            return accounts;
        }
        else if (excludedIds && !term) {
            return accounts.filter((function (account) { return excludedIds.indexOf(account.userId) == -1; }));
        }
        else {
            term = term.toLowerCase();
            return accounts.filter((function (account) { return excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1); }));
        }
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'searchFilter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConversationPipe = /** @class */ (function () {
    function ConversationPipe() {
    }
    // ConversationPipe
    // Filter conversation based on friend's name or username.
    ConversationPipe.prototype.transform = function (conversations, search) {
        if (!conversations) {
            return;
        }
        else if (!search) {
            return conversations;
        }
        else {
            var term_1 = search.toLowerCase();
            return conversations.filter(function (conversation) { return conversation.friend.name.toLowerCase().indexOf(term_1) > -1 || conversation.friend.username.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    ConversationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'conversationFilter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ConversationPipe);
    return ConversationPipe;
}());

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    // DateFormatPipe
    // Show moment.js dateFormat for time elapsed.
    DateFormatPipe.prototype.transform = function (date, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(new Date(date)).fromNow();
    };
    DateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'DateFormat'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DateFormatPipe);
    return DateFormatPipe;
}());

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocverPlusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DocverPlusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DocverPlusPage = /** @class */ (function () {
    function DocverPlusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DocverPlusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocverPlusPage');
    };
    DocverPlusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-docver-plus',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\docver-plus\docver-plus.html"*/'<!--\n\n  Generated template for the DocverPlusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>docverPlus</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\docver-plus\docver-plus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DocverPlusPage);
    return DocverPlusPage;
}());

//# sourceMappingURL=docver-plus.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestajaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestajaPage = /** @class */ (function () {
    function TestajaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestajaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestajaPage');
    };
    TestajaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-testaja',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\testaja\testaja.html"*/'<!--\n\n  Generated template for the TestajaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>testaja</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\testaja\testaja.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TestajaPage);
    return TestajaPage;
}());

//# sourceMappingURL=testaja.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddSchedulePage = /** @class */ (function () {
    function AddSchedulePage(loadingProvider, dataProvider, navCtrl, navParams, viewCtrl) {
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = {
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get("selectedDay")).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    // this.dataProvider.getCurrentUser().subscribe((user) => {
    //   this.loadingProvider.hide();
    //   this.user = user;
    //   console.log("usernya",this.user);
    // });
    AddSchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.createScheduling();
        this.loadingProvider.show();
        this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid).subscribe(function (user) {
            _this.loadingProvider.hide();
            _this.user = user;
            _this.userId = _this.user.userId;
            console.log("userScheduling", _this.user);
        });
    };
    AddSchedulePage.prototype.createScheduling = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]()
            .ref("/scheduling/" + __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid)
            .once("value")
            .then(function (account) {
            //console.log(account.val());
            // No database data yet, create user data on database
            if (!account.val()) {
                // this.loadingProvider.show();
                // Insert data on our database using AngularFire.
                _this.dataProvider
                    .setScheduling(_this.user.userId)
                    .set({
                    userId: _this.userId,
                    scheduling: "dnksdjcnsdkjcnsdkc",
                    date: "10 januari 2018",
                    session: '1',
                    switchStatus: true
                })
                    .then(function () {
                    console.log("sukses buat schedule");
                });
            }
        });
    };
    AddSchedulePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddSchedulePage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
        console.log("udah ke save", this.event);
    };
    AddSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-add-schedule",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\add-schedule\add-schedule.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Event Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label>Start</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label>End</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label>All Day?</ion-label>\n\n      <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n \n\n  <button ion-button full icon-left (click)="save()">\n\n    <ion-icon name="checkmark"></ion-icon> Add Event\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\add-schedule\add-schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], AddSchedulePage);
    return AddSchedulePage;
}());

//# sourceMappingURL=add-schedule.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LovepointStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_transaction__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topup_topup__ = __webpack_require__(525);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LovepointStorePage = /** @class */ (function () {
    function LovepointStorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = false;
    }
    LovepointStorePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LovepointStorePage");
    };
    LovepointStorePage.prototype.pop = function () {
        this.navCtrl.pop();
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(0)';
            });
        } // end if
    };
    LovepointStorePage.prototype.informationLovepoints = function () {
        this.status = true;
    };
    LovepointStorePage.prototype.close = function () {
        this.status = false;
    };
    LovepointStorePage.prototype.menuTopUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topup_topup__["a" /* TopupPage */]);
    };
    LovepointStorePage.prototype.menuTransactions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transaction_transaction__["a" /* TransactionPage */]);
    };
    LovepointStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-lovepoint-store",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\lovepoint-store\lovepoint-store.html"*/'<!--\n\n  Generated template for the LovepointStorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton color="primary">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="pop()">\n\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Lovepoints Store</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only tappable (click)="informationLovepoints()">\n\n        <ion-icon name="ios-information-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  \n\n  <div *ngIf="status" class="alertInformation">\n\n    <div class="inAlert">\n\n      <p class="alertTitle">Apa itu Lovepoints</p>\n\n      <img class="icon-info" src="../assets/images/lovepoints.png" />\n\n      <p>Credits yang kamu dapat gunakan untuk berkonsultasi dengan para psikolog persesinya. Masalahmu akan diberikan jalan\n\n        oleh yang sudah berpengalaman dan kompeten di bidangnya.\n\n      </p>\n\n      <div class="close" (click)="close()">OK</div>\n\n    </div>\n\n  </div>\n\n  <div class="saldoDov">\n\n    <div class="saldoLP">Saldo Lovepoints</div>\n\n    <div class="saldoValue">0</div>\n\n  </div>\n\n  <!-- Top Up -->\n\n  <ion-row class="menu1" (click)="menuTopUp()">\n\n    <ion-col col-4>\n\n      <img class="icon" src="../assets/images/lovepoints.png" />\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-icon name="ios-arrow-forward" class="right-icon"></ion-icon>\n\n      <h4>Top Up</h4>\n\n      <span>Belum punya Lovepoints?</span>\n\n      <br>\n\n      <span>Lovepoints kamu habis?</span>\n\n      <br>\n\n      <span>Isi ulang lovepoints kamu sekarang juga!</span>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- Transactions -->\n\n  <ion-row class="menu2" (click)="menuTransactions()">\n\n    <ion-col col-4>\n\n      <img class="icon" src="../assets/images/lovepoints.png" />\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-icon name="ios-arrow-forward" class="right-icon"></ion-icon>\n\n      <h4>Transactions</h4>\n\n      <span>Riwayat pembelian dan pengeluaran</span>\n\n      <br>\n\n      <span>dari saldo Lovepoints kamu</span>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\lovepoint-store\lovepoint-store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LovepointStorePage);
    return LovepointStorePage;
}());

//# sourceMappingURL=lovepoint-store.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_verification_verification__ = __webpack_require__(496);


var Login;
(function (Login) {
    // Get your Firebase app's config on your Firebase console. "Add Firebase to your web app".
    Login.firebaseConfig = {
        apiKey: "AIzaSyD8dbdUCysJIUgR4m7DHtN40Gt2e-gYQb8",
        authDomain: "socioempathynew.firebaseapp.com",
        databaseURL: "https://socioempathynew.firebaseio.com",
        projectId: "socioempathynew",
        storageBucket: "socioempathynew.appspot.com",
        messagingSenderId: "605484190997"
    };
    Login.homePage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
    Login.verificationPage = __WEBPACK_IMPORTED_MODULE_1__pages_verification_verification__["a" /* VerificationPage */];
    // Set whether emailVerification is enabled or not.
    Login.emailVerification = true;
})(Login || (Login = {}));
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImageProvider = /** @class */ (function () {
    // All files to be uploaded on Firebase must have DATA_URL as the destination type.
    // This will return the imageURI which can then be processed and uploaded to Firebase.
    // For the list of cameraOptions, please refer to: https://github.com/apache/cordova-plugin-camera#module_camera.CameraOptions
    function ImageProvider(angularfireDatabase, alertProvider, loadingProvider, camera, app) {
        this.angularfireDatabase = angularfireDatabase;
        this.alertProvider = alertProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.app = app;
        console.log("Initializing Image Provider");
        this.profilePhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.photoMessageOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.groupPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
    }
    // Function to convert dataURI to Blob needed by Firebase
    ImageProvider.prototype.imgURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    };
    // Generate a random filename of length for the image to be uploaded
    ImageProvider.prototype.generateFilename = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    };
    //Get Ijazah
    ImageProvider.prototype.getIjazah = function (sourceTypeIjazah) {
        var _this = this;
        this.ijazahPhotoOptions.sourceType = sourceTypeIjazah;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.ijazahPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            _this.imgBlobIjazah = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            _this.metadataIjazah = {
                'contentType': _this.imgBlobIjazah.type
            };
        });
        this.loadingProvider.hide();
    };
    //Get KTM
    ImageProvider.prototype.getKTM = function (sourceTypeKTM) {
        var _this = this;
        this.KTMPhotoOptions.sourceType = sourceTypeKTM;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.KTMPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            _this.imgBlobKTM = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            _this.metadataKTM = {
                'contentType': _this.imgBlobKTM.type
            };
        });
        this.loadingProvider.hide();
    };
    //Get KTP
    ImageProvider.prototype.getKTP = function (sourceTypeKTP) {
        var _this = this;
        this.KTPPhotoOptions.sourceType = sourceTypeKTP;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.KTPPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            _this.imgBlobKTP = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            _this.metadataKTP = {
                'contentType': _this.imgBlobKTP.type
            };
        });
        this.loadingProvider.hide();
    };
    //Push Ijazah and KTP
    ImageProvider.prototype.pushDocPhysicologist = function (user) {
        var _this = this;
        this.loadingProvider.show();
        // Generate filename and upload to Firebase Storage.
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + this.generateFilename()).put(this.imgBlobIjazah, this.metadataIjazah).then(function (snapshot) {
            var url = snapshot.metadata.downloadURLs[0];
            // Update User Data on Database.
            _this.angularfireDatabase.object('/users/' + user.userId).update({
                Ijazah: url
            }).then(function (success) {
                console.log("Ijazah succesfully updated");
                //KTP section start
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + _this.generateFilename()).put(_this.imgBlobKTP, _this.metadataKTP).then(function (snapshot) {
                    var url = snapshot.metadata.downloadURLs[0];
                    // Update User Data on Database.
                    _this.angularfireDatabase.object('/users/' + user.userId).update({
                        KTP: url
                    }).then(function (success) {
                        console.log("KTP succesfully updated");
                        _this.loadingProvider.hide();
                    }).catch(function (error) {
                        console.log("KTP error");
                        _this.loadingProvider.hide();
                    });
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
                //KTP section end
            }).catch(function (error) {
                console.log("Ijazah error");
                _this.loadingProvider.hide();
            });
        }).catch(function (error) {
            _this.loadingProvider.hide();
            _this.alertProvider.showErrorMessage('image/error-image-upload');
        });
    };
    //push KTM and KTP
    ImageProvider.prototype.pushDocStudPsy = function (user) {
        var _this = this;
        this.loadingProvider.show();
        // Generate filename and upload to Firebase Storage.
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + this.generateFilename()).put(this.imgBlobKTM, this.metadataKTM).then(function (snapshot) {
            var url = snapshot.metadata.downloadURLs[0];
            // Update User Data on Database.
            _this.angularfireDatabase.object('/users/' + user.userId).update({
                KTM: url
            }).then(function (success) {
                console.log("KTM succesfully updated");
                //KTP section start
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + _this.generateFilename()).put(_this.imgBlobKTP, _this.metadataKTP).then(function (snapshot) {
                    var url = snapshot.metadata.downloadURLs[0];
                    // Update User Data on Database.
                    _this.angularfireDatabase.object('/users/' + user.userId).update({
                        KTP: url
                    }).then(function (success) {
                        console.log("KTP succesfully updated");
                        _this.loadingProvider.hide();
                    }).catch(function (error) {
                        console.log("KTP error");
                        _this.loadingProvider.hide();
                    });
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
                //KTP section end
            }).catch(function (error) {
                console.log("KTM error");
                _this.loadingProvider.hide();
            });
        }).catch(function (error) {
            _this.loadingProvider.hide();
            _this.alertProvider.showErrorMessage('image/error-image-upload');
        });
    };
    // Set ProfilePhoto given the user and the cameraSourceType.
    // This function processes the imageURI returned and uploads the file on Firebase,
    // Finally the user data on the database is updated.
    ImageProvider.prototype.setProfilePhoto = function (user, sourceType) {
        var _this = this;
        this.profilePhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.profilePhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                // Delete previous profile photo on Storage if it exists.
                _this.deleteImageFile(user.img);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                var profile = {
                    displayName: user.name,
                    photoURL: url
                };
                // Update Firebase User.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.updateProfile(profile)
                    .then(function (success) {
                    // Update User Data on Database.
                    _this.angularfireDatabase.object('/users/' + user.userId).update({
                        img: url
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                        _this.alertProvider.showProfileUpdatedMessage();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                        _this.alertProvider.showErrorMessage('profile/error-change-photo');
                    });
                })
                    .catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('profile/error-change-photo');
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
                _this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch(function (error) {
            _this.loadingProvider.hide();
        });
    };
    // Upload and set the group object's image.
    ImageProvider.prototype.setGroupPhoto = function (group, sourceType) {
        var _this = this;
        this.groupPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.groupPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                _this.deleteImageFile(group.img);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                group.img = url;
                _this.loadingProvider.hide();
            }).catch(function (error) {
                _this.loadingProvider.hide();
                _this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch(function (error) {
            _this.loadingProvider.hide();
        });
    };
    // Set group photo and return the group object as promise.
    ImageProvider.prototype.setGroupPhotoPromise = function (group, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.groupPhotoOptions.sourceType = sourceType;
            _this.loadingProvider.show();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.groupPhotoOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    _this.deleteImageFile(group.img);
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    group.img = url;
                    _this.loadingProvider.hide();
                    resolve(group);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    //Delete the image given the url.
    ImageProvider.prototype.deleteImageFile = function (path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    //Delete the user.img given the user.
    ImageProvider.prototype.deleteUserImageFile = function (user) {
        var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    // Delete group image file on group storage reference.
    ImageProvider.prototype.deleteGroupImageFile = function (groupId, path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    // Upload photo message and return the url as promise.
    ImageProvider.prototype.uploadPhotoMessage = function (conversationId, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.photoMessageOptions.sourceType = sourceType;
            _this.loadingProvider.show();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + conversationId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    _this.loadingProvider.hide();
                    resolve(url);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // Upload group photo message and return a promise as url.
    ImageProvider.prototype.uploadGroupPhotoMessage = function (groupId, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.photoMessageOptions.sourceType = sourceType;
            _this.loadingProvider.show();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + groupId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    _this.loadingProvider.hide();
                    resolve(url);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_3__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* App */]])
    ], ImageProvider);
    return ImageProvider;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserInfoPage = /** @class */ (function () {
    // UserInfoPage
    // This is the page where the user can view user information, and do appropriate actions based on their relation to the current logged in user.
    function UserInfoPage(navCtrl, navParams, modalCtrl, dataProvider, loadingProvider, alertCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
    }
    UserInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userId = this.navParams.get('userId');
        this.loadingProvider.show();
        // Get user info.
        this.dataProvider.getUser(this.userId).subscribe(function (user) {
            _this.user = user;
            _this.loadingProvider.hide();
        });
        // Get friends of current logged in user.
        this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).subscribe(function (user) {
            _this.friends = user.friends;
        });
        // Get requests of current logged in user.
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).subscribe(function (requests) {
            _this.friendRequests = requests.friendRequests;
            _this.requestsSent = requests.requestsSent;
        });
    };
    // Back
    UserInfoPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Enlarge user's profile image.
    UserInfoPage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    // Accept friend request.
    UserInfoPage.prototype.acceptFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Accept',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(_this.userId);
                    }
                }
            ]
        }).present();
    };
    // Deny friend request.
    UserInfoPage.prototype.rejectFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Reject Friend Request',
            message: 'Do you want to reject <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Reject',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(_this.userId);
                    }
                }
            ]
        }).present();
    };
    // Cancel friend request sent.
    UserInfoPage.prototype.cancelFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(_this.userId);
                    }
                }
            ]
        }).present();
    };
    // Send friend request.
    UserInfoPage.prototype.sendFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(_this.userId);
                    }
                }
            ]
        }).present();
    };
    // Open chat with this user.
    UserInfoPage.prototype.sendMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* MessagePage */], { userId: this.userId });
    };
    // Check if user can be added, meaning user is not yet friends nor has sent/received any friend requests.
    UserInfoPage.prototype.canAdd = function () {
        if (this.friendRequests) {
            if (this.friendRequests.indexOf(this.userId) > -1) {
                return false;
            }
        }
        if (this.requestsSent) {
            if (this.requestsSent.indexOf(this.userId) > -1) {
                return false;
            }
        }
        if (this.friends) {
            if (this.friends.indexOf(this.userId) > -1) {
                return false;
            }
        }
        return true;
    };
    UserInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-info',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\user-info\user-info.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="user">{{user.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- User Info -->\n\n  <div *ngIf="user">\n\n    <div class="profile">\n\n      <img src="{{user.img}}" tappable (click)="enlargeImage(user.img)" />\n\n    </div>\n\n    <h4>\n\n      <span class="name">{{user.name}} </span>\n\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n\n    </h4>\n\n    <p class="username">@{{user.username}}</p>\n\n    <p class="description">{{user.description}}</p>\n\n    <div class="divider"></div>\n\n    <div class="center">\n\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\n\n      <div *ngIf="friendRequests && friendRequests.indexOf(user.$key) > -1">\n\n        <p class="info">Sent you a friend request.</p>\n\n        <button ion-button icon-only class="danger" tappable (click)="rejectFriendRequest()"><ion-icon name="md-close"></ion-icon></button>\n\n        <button ion-button icon-only class="success" tappable (click)="acceptFriendRequest()"><ion-icon name="md-checkmark"></ion-icon></button>\n\n      </div>\n\n      <div *ngIf="requestsSent && requestsSent.indexOf(user.$key) > -1">\n\n        <p class="info">Friend request sent.</p>\n\n        <button ion-button class="dark" tappable (click)="cancelFriendRequest()">Cancel Friend Request</button>\n\n      </div>\n\n      <div *ngIf="canAdd()">\n\n        <p class="info">You are not yet friends.</p>\n\n        <button ion-button class="primary" tappable (click)="sendFriendRequest()">Send Friend Request</button>\n\n      </div>\n\n      <div *ngIf="friends && friends.indexOf(user.$key) > -1">\n\n        <p class="info">You are already friends.</p>\n\n        <button ion-button class="primary" tappable (click)="sendMessage()">Send Message</button>\n\n        <button *ngIf="user.role == \'Psychologist\'" ion-button class="primary" tappable (click)="callPerson()">Phone Call</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\user-info\user-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase__["a" /* FirebaseProvider */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=user-info.js.map

/***/ })

},[526]);
//# sourceMappingURL=main.js.map