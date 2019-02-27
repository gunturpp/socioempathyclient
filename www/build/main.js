webpackJsonp([0],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_people_search_people__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_info_user_info__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requests_requests__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(29);
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









let FriendsPage = class FriendsPage {
    // FriendsPage
    // This is the page where the user can search, view, and initiate a chat with their friends.
    constructor(actionSheetCtrl, navCtrl, navParams, app, dataProvider, loadingProvider) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
    }
    ionViewDidLoad() {
        // Initialize
        this.searchFriend = '';
        this.loadingProvider.show();
        // Get friendRequests to show friendRequests count.
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid).subscribe((requests) => {
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
            }
            else {
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
    }
    // Proceed to searchPeople page.
    searchPeople() {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__search_people_search_people__["a" /* SearchPeoplePage */]);
    }
    // Proceed to requests page.
    manageRequests() {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__requests_requests__["a" /* RequestsPage */]);
    }
    // Proceed to userInfo page.
    viewUser(userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    }
    // Proceed to chat page.
    message(userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__message_message__["a" /* MessagePage */], { userId: userId });
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
                }, {
                    text: 'Block',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                }, {
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
};
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-friends',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\friends\friends.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img class="socioCss" src="assets/images/headerSocio.png" />\n\n    <ion-buttons end>\n\n      <button ion-button icon-only tappable (click)="manageRequests()">\n\n        <ion-icon name="md-filing"></ion-icon>\n\n        <ion-badge color="danger" *ngIf="friendRequests">{{friendRequests}}</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button style="margin-left:15px" ion-button icon-only tappable (click)="searchPeople()">\n\n        <ion-icon name="md-person-add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friends to show -->\n\n  <!-- <div class="empty-list" *ngIf="friends && friends.length == 0"> -->\n\n  <div *ngIf="friends && friends.length == 0">\n\n    <!-- <h1>\n\n      <ion-icon name="md-contacts"></ion-icon>\n\n    </h1>\n\n    <p>Uh-oh! You have not added any friends right now.</p>\n\n    <button ion-button icon-left tappable (click)="searchPeople()"> -->\n\n    <!-- <ion-icon name="md-search"></ion-icon>Search People</button> -->\n\n    <ion-list>\n\n      <ion-list-header>Regular Users</ion-list-header>\n\n      <ion-item>\n\n        <p style="text-align:center;font-size:24px"><b>Oops!</b></p>\n\n        <p style="text-align:center">You have no users added as a friend.\n\n          <br>Tap the\n\n          <ion-icon name="md-person-add"></ion-icon>\n\n          icon on the right corer to add new.\n\n        </p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <ion-list>\n\n      <ion-list-header>Psychologist Student</ion-list-header>\n\n      <ion-item>\n\n        <p style="text-align:center;font-size:24px"><b>Oops!</b></p>\n\n        <p style="text-align:center">You have no psychologist student added as a friend\n\n          <br>Tap the\n\n          <ion-icon name="md-person-add"></ion-icon>\n\n          icon on the right corer to add new.\n\n        </p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <ion-list>\n\n      <ion-list-header>Psychologist\n\n        <p class="premiumCss" item-end>\n\n          <ion-icon name="star"></ion-icon>PREMIUM FEATURE\n\n        </p>\n\n      </ion-list-header>\n\n\n\n      <ion-item>\n\n        <p style="text-align:center;font-size:24px"><b>Oops!</b></p>\n\n        <p style="text-align:center">You have no psychologist added as a friend\n\n          <br>Tap the\n\n          <ion-icon name="md-person-add"></ion-icon>\n\n          icon on the right corer to add new.\n\n        </p>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n  <!-- CLOSE No friends to show -->\n\n\n\n\n\n  <!-- Show list of friends -->\n\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item (press)="pressEvent($event)" *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="viewUser(friend)">\n\n      <ion-fab middle right>\n\n        <button ion-fab mini tappable (click)="message(friend.$key); $event.stopPropagation();">\n\n          <ion-icon name="md-text" class="success"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{friend.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friend.name}}</h2>\n\n      <p>@{{friend.username}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\friends\friends.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_loading__["a" /* LoadingProvider */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_people_search_people__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let NewMessagePage = class NewMessagePage {
    // NewMessagePage
    // This is the page where the user are asked to select a friend whom they want to start a conversation with.
    constructor(navCtrl, navParams, app, dataProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
    }
    ionViewDidLoad() {
        // Initialize
        this.searchFriend = '';
        this.loadingProvider.show();
        // Get user's friends.
        this.dataProvider.getCurrentUser().subscribe((account) => {
            if (account.friends) {
                for (var i = 0; i < account.friends.length; i++) {
                    this.dataProvider.getUser(account.friends[i]).subscribe((friend) => {
                        this.addOrUpdateFriend(friend);
                    });
                }
            }
            else {
                this.friends = [];
            }
            this.loadingProvider.hide();
        });
    }
    // Back
    back() {
        this.navCtrl.pop();
    }
    // Add or update friend for real-time sync.
    addOrUpdateFriend(friend) {
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
    }
    // Search people.
    searchPeople() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_people_search_people__["a" /* SearchPeoplePage */]);
    }
    // Open chat with this user.
    message(userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { userId: userId });
    }
};
NewMessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-new-message',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\new-message\new-message.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>New Message</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friends yet to start a conversation with -->\n\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n\n    <h1><ion-icon name="md-contacts"></ion-icon></h1>\n\n    <p>Uh-oh! You have not added any friends yet.</p>\n\n    <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search People</button>\n\n  </div>\n\n  <!-- Show friends to start a conversation with -->\n\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="message(friend.userId)">\n\n      <ion-avatar item-left>\n\n        <img src="{{friend.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friend.name}}</h2>\n\n      <p>@{{friend.username}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\new-message\new-message.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */]])
], NewMessagePage);

//# sourceMappingURL=new-message.js.map

/***/ }),

/***/ 1043:
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


let PayDetailPage = class PayDetailPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PayDetailPage');
    }
};
PayDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pay-detail',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\pay-detail\pay-detail.html"*/'<!--\n\n  Generated template for the PayDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>pay-detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\pay-detail\pay-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PayDetailPage);

//# sourceMappingURL=pay-detail.js.map

/***/ }),

/***/ 1044:
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


let PaySuccessPage = class PaySuccessPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PaySuccessPage');
    }
};
PaySuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pay-success',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\pay-success\pay-success.html"*/'<!--\n\n  Generated template for the PaySuccessPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>pay-success</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\pay-success\pay-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PaySuccessPage);

//# sourceMappingURL=pay-success.js.map

/***/ }),

/***/ 1045:
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


let BuyPremiumPage = class BuyPremiumPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // pop up pertama kali doang
        this.popUp = true;
    }
    ionViewDidLoad() {
    }
    closeBtn() {
        this.popUp = false;
    }
};
BuyPremiumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-buy-premium',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\buy-premium\buy-premium.html"*/'<!--\n\n  Generated template for the BuyPremiumPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Buy Premium</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card class="cardCss">\n\n    <h1 class="middleCss pinkCss">\n\n      <b>LOVE POINTS</b>\n\n    </h1>\n\n    <div class="imgCss">\n\n      <img src="assets/images/lovepoints.png" />\n\n    </div>\n\n\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col>\n\n        <p class="marginCss">Your Balance :</p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p class="marginCss" style="text-align:right;color:#eb5487">100 Loves</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <!-- UN COMMENT UNTUK LIAT POP UP -->\n\n\n\n  <!-- <div class="container">\n\n    <h1 class="middleCss pinkCss">\n\n      <b>APA ITU LOVEPOINTS</b>\n\n    </h1>\n\n\n\n    <div class="imgCss">\n\n      <img src="assets/images/lovepoints.png" />\n\n    </div>\n\n\n\n    <p class="middleCss">LovePoints adalah credits yang kamu gunakan untuk berkonsultasi dengan psikolog per\n\n      <i>session</i>-nya.</p>\n\n    <p class="middleCss">Dengan berkonsultasi ke psikolog, masalahmu akan ditangani oleh tenaga ahli yang sudah pengalaman dan kompeten.</p>\n\n    <p class="middleCss">Pembelian LovePoints dapat dilakukan melalui transfer ATM, BNI, BRI, BCA, Mandiri, dan CIMB.</p>\n\n    <p class="closeButton" (click)="closeBtn()">CLOSE</p>\n\n  </div> -->\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-navbar>\n\n    <button ion-button medium full>\n\n      BUY LOVEPOINTS\n\n    </button>\n\n  </ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\buy-premium\buy-premium.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BuyPremiumPage);

//# sourceMappingURL=buy-premium.js.map

/***/ }),

/***/ 1046:
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


let Payment1Page = class Payment1Page {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad Payment1Page');
    }
    takePhoto() {
    }
    fromGallery() {
    }
};
Payment1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment1',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment1\payment1.html"*/'<!--\n\n  Generated template for the Payment1Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<p>Unggah Bukti Pembayaran</p>\n\n<img src="../assets/images/lovepoints.png">\n\n<div class="buttons">\n\n  <button ion-button (click)="takePhoto()">TAKE PHOTO</button>\n\n  <button ion-button (click)="fromGallery()">FROM GALLERY</button>\n\n</div>\n\n\n\n<h4>Catatan</h4>\n\n<p>Jika terjadi masalah dalam pengunggahan bukti pembayaran, Anda dapat mengunggah bukti pembayaran melalui <a href="#">Official Account Line Socioempathy.</a></p>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-navbar>\n\n    <button ion-button full (click)="next()">NEXT</button>\n\n  </ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment1\payment1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], Payment1Page);

//# sourceMappingURL=payment1.js.map

/***/ }),

/***/ 1047:
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


let Payment2Page = class Payment2Page {
    constructor(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    imageUpload() {
        this.alert = this.alertCtrl.create({
            title: 'Upload bukti transfer',
            message: 'Harap bukti transfer yang diupload benar.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        // this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        // this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad Payment2Page');
    }
};
Payment2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment2',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment2\payment2.html"*/'<!--\n\n  Generated template for the Payment2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>payment2</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-label>\n\n      Upload Bukti Pembayaran      \n\n  </ion-label>\n\n\n\n  <div class="imgCss">\n\n    <img (click)="imageUpload()" src="assets/images/upload.png" />\n\n  </div>\n\n  <br>\n\n  <p style="text-align:center">\n\n    Silahkan upload foto bukti transfer Anda.\n\n  </p>\n\n\n\n  <img style="margin-top:170px;" src="assets/images/statusbar2.png"/>\n\n  \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button full small block>PREVIOUS\n\n          </button>          \n\n      </ion-col>\n\n      <ion-col>\n\n          <button ion-button  full small block>NEXT\n\n            </button>              \n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment2\payment2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], Payment2Page);

//# sourceMappingURL=payment2.js.map

/***/ }),

/***/ 1048:
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


let Payment3Page = class Payment3Page {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad Payment3Page');
    }
};
Payment3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment3',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment3\payment3.html"*/'<!--\n\n  Generated template for the Payment3Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>payment3</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-label>\n\n        Status Pembayaran      \n\n    </ion-label>\n\n  \n\n    <div class="imgCss">\n\n      <img src="assets/images/done.png" />\n\n    </div>\n\n    <br>\n\n    <h3 style="text-align:center">\n\n      <b>Pembayaran Selesai!</b>\n\n    </h3>\n\n    <br>\n\n    <p style="text-align:center;font-size:12px;">Terimakasih telah melakukan transaksi di SocioEmpathy.<br><br>\n\n    Silahkan menunuggu email verifikasi transaksi dari kami maksimal dalam 1x24 jam.<br><br>\n\n    LovePoints akan ditambahkan segera setelah tim kami memverifikasi.</p>\n\n  \n\n    <img style="margin-top:40px;" src="assets/images/statusbar3.png"/>\n\n    \n\n  </ion-content>\n\n  \n\n  <ion-footer>\n\n    <ion-navbar>\n\n            <button ion-button  full small block>OK\n\n              </button>              \n\n  \n\n    </ion-navbar>\n\n  </ion-footer>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment3\payment3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], Payment3Page);

//# sourceMappingURL=payment3.js.map

/***/ }),

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermofconditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let TermofconditionPage = class TermofconditionPage {
    constructor(alertCtrl, dataProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad TermofconditionPagee');
    }
    agree() {
        this.dataProvider.updateCurrentUser().update({
            termofcondition: "setuju",
        }).then((success) => {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            this.thankyou();
        }).catch((error) => {
            console.log("gagal accept termofcondition");
        });
    }
    thankyou() {
        let confirm = this.alertCtrl.create({
            title: "Halo, Selamat datang di SocioEmpathy",
            message: "Curahkan isi hatimu dengan orang yang tepat dapat membantu meringankan pikiran kamu loh!. Silahkan klik tabs ditengah untuk konsultasi dengan konselor",
            buttons: [
                {
                    text: "Okey",
                    handler: () => {
                        console.log("Disagree clicked");
                    }
                }
            ]
        });
        confirm.present();
    }
};
TermofconditionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-termofcondition',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\termofcondition\termofcondition.html"*/'<ion-content padding>\n\n  <div class="term-service">\n\n    <h2>Syarat dan Ketentuan</h2>\n\n     1. Sesi konsultasi dilakukan selama 60 menit<br><br>\n\n     2. Konsultasi dilakukan oleh psikolog profesional yang sudah memiliki lisensi psikolog<br><br>\n\n     3. Rekapitulasi akan diberikan setelah sesi konsultasi berakhir<br><br>\n\n     4. Data akan dijaga kerahasiaannya mengacu pada kode etik psikolog<br><br>\n\n     5. 15 menit sebelum sesi berakhir, akan ada pemberitahuan dari sistem<br><br>\n\n     6. Jika sesi telah habis, sesi selanjutnya dapat dilakukan di hari yang berbeda<br><br>\n\n   </div>\n\n   <div class="btn-agree" (click)="agree()">\n\n     Setuju\n\n   </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\termofcondition\termofcondition.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TermofconditionPage);

//# sourceMappingURL=termofcondition.js.map

/***/ }),

/***/ 1050:
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
let DynamiclinkPage = class DynamiclinkPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    gunturLinked() {
        window.open('https://sbs7a.app.goo.gl/bVbA', '_system');
    }
    yogaLinked() {
        window.open('https://sbs7a.app.goo.gl/Lr7u', '_system');
    }
    nizarLinked() {
        window.open('https://sbs7a.app.goo.gl/rY6Y', '_system');
    }
};
DynamiclinkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dynamiclink',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\dynamiclink\dynamiclink.html"*/'<!--\n\n  Generated template for the DynamiclinkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>About Us</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <img src="assets/images/88637.png">\n\n\n\n  <h2><b>Co Founder </b></h2>\n\n    <div class="profile">\n\n      <img (click)="gunturLinked()" src="assets/images/guntur.jpg">\n\n    </div>\n\n    <p (click)="gunturLinked()" style="text-align: center">Guntur Putra Pratama <b>Hustler</b></p>\n\n    <div class="profile">\n\n      <img (click)="yogaLinked()"  src="assets/images/yoga.jpg">\n\n    </div>\n\n    <p (click)="yogaLinked()" style="text-align: center">Dwi Yoga Wibawa <b>Hacker</b></p>\n\n    <div class="profile">\n\n      <img (click)="nizarLinked()" src="assets/images/nizar.jpg">\n\n    </div>\n\n    <p (click)="nizarLinked()" style="text-align: center">Nizar Maulana Azhari <b>Hipster</b></p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\dynamiclink\dynamiclink.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DynamiclinkPage);

//# sourceMappingURL=dynamiclink.js.map

/***/ }),

/***/ 1061:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1068:
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

let FriendPipe = class FriendPipe {
    // FriendPipe
    // Filter friend by name or username.
    transform(friends, search) {
        if (!friends) {
            return;
        }
        else if (!search) {
            return friends;
        }
        else {
            let term = search.toLowerCase();
            return friends.filter(friend => friend.name.toLowerCase().indexOf(term) > -1 || friend.username.toLowerCase().indexOf(term) > -1);
        }
    }
};
FriendPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'friendFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FriendPipe);

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 1069:
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

let SearchPipe = class SearchPipe {
    // SearchPipe
    // Filter user search results for name or username excluding the excludedIds.
    transform(accounts, data) {
        let excludedIds = data[0];
        var term = data[1];
        if (!accounts) {
            return;
        }
        else if (!excludedIds) {
            return accounts;
        }
        else if (excludedIds && !term) {
            return accounts.filter((account => excludedIds.indexOf(account.userId) == -1));
        }
        else {
            term = term.toLowerCase();
            return accounts.filter((account => excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1)));
        }
    }
};
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SearchPipe);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 1070:
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

let ConversationPipe = class ConversationPipe {
    // ConversationPipe
    // Filter conversation based on friend's name or username.
    transform(conversations, search) {
        if (!conversations) {
            return;
        }
        else if (!search) {
            return conversations;
        }
        else {
            let term = search.toLowerCase();
            return conversations.filter(conversation => conversation.friend.name.toLowerCase().indexOf(term) > -1 || conversation.friend.username.toLowerCase().indexOf(term) > -1);
        }
    }
};
ConversationPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'conversationFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ConversationPipe);

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let DateFormatPipe = class DateFormatPipe {
    // DateFormatPipe
    // Show moment.js dateFormat for time elapsed.
    transform(date, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(new Date(date)).fromNow();
    }
};
DateFormatPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'DateFormat'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DateFormatPipe);

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 1072:
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
let DocverPlusPage = class DocverPlusPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad DocverPlusPage');
    }
};
DocverPlusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-docver-plus',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\docver-plus\docver-plus.html"*/'<!--\n\n  Generated template for the DocverPlusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>docverPlus</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\docver-plus\docver-plus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DocverPlusPage);

//# sourceMappingURL=docver-plus.js.map

/***/ }),

/***/ 1073:
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


let TestajaPage = class TestajaPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad TestajaPage');
    }
};
TestajaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-testaja',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\testaja\testaja.html"*/'<!--\n\n  Generated template for the TestajaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>testaja</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\testaja\testaja.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TestajaPage);

//# sourceMappingURL=testaja.js.map

/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(127);
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






let AddSchedulePage = class AddSchedulePage {
    constructor(loadingProvider, dataProvider, navCtrl, navParams, viewCtrl) {
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
        let preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get("selectedDay")).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    // this.dataProvider.getCurrentUser().subscribe((user) => {
    //   this.loadingProvider.hide();
    //   this.user = user;
    //   console.log("usernya",this.user);
    // });
    ionViewDidLoad() {
        this.createScheduling();
        this.loadingProvider.show();
        this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid).subscribe(user => {
            this.loadingProvider.hide();
            this.user = user;
            this.userId = this.user.userId;
            console.log("userScheduling", this.user);
        });
    }
    createScheduling() {
        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]()
            .ref("/scheduling/" + __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid)
            .once("value")
            .then(account => {
            //console.log(account.val());
            // No database data yet, create user data on database
            if (!account.val()) {
                // this.loadingProvider.show();
                // Insert data on our database using AngularFire.
                this.dataProvider
                    .setScheduling(this.user.userId)
                    .set({
                    userId: this.userId,
                    scheduling: "dnksdjcnsdkjcnsdkc",
                    date: "10 januari 2018",
                    session: '1',
                    switchStatus: true
                })
                    .then(() => {
                    console.log("sukses buat schedule");
                });
            }
        });
    }
    cancel() {
        this.viewCtrl.dismiss();
    }
    save() {
        this.viewCtrl.dismiss(this.event);
        console.log("udah ke save", this.event);
    }
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

//# sourceMappingURL=add-schedule.js.map

/***/ }),

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LovepointStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_transaction__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topup_topup__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LovepointStorePage = class LovepointStorePage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = false;
    }
    ionViewDidLoad() {
        console.log("ionViewDidLoad LovepointStorePage");
    }
    pop() {
        this.navCtrl.pop();
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.transform = 'translateY(0)';
            });
        } // end if
    }
    informationLovepoints() {
        this.status = true;
    }
    close() {
        this.status = false;
    }
    menuTopUp() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topup_topup__["a" /* TopupPage */]);
    }
    menuTransactions() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transaction_transaction__["a" /* TransactionPage */]);
    }
};
LovepointStorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-lovepoint-store",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\lovepoint-store\lovepoint-store.html"*/'<!--\n\n  Generated template for the LovepointStorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton color="primary">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="pop()">\n\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Lovepoints Store</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only tappable (click)="informationLovepoints()">\n\n        <ion-icon name="ios-information-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  \n\n  <div *ngIf="status" class="alertInformation">\n\n    <div class="inAlert">\n\n      <p class="alertTitle">Apa itu Lovepoints</p>\n\n      <img class="icon-info" src="../assets/images/lovepoints.png" />\n\n      <p>Credits yang kamu dapat gunakan untuk berkonsultasi dengan para psikolog persesinya. Masalahmu akan diberikan jalan\n\n        oleh yang sudah berpengalaman dan kompeten di bidangnya.\n\n      </p>\n\n      <div class="close" (click)="close()">OK</div>\n\n    </div>\n\n  </div>\n\n  <div class="saldoDov">\n\n    <div class="saldoLP">Saldo Lovepoints</div>\n\n    <div class="saldoValue">0</div>\n\n  </div>\n\n  <!-- Top Up -->\n\n  <ion-row class="menu1" (click)="menuTopUp()">\n\n    <ion-col col-4>\n\n      <img class="icon" src="../assets/images/lovepoints.png" />\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-icon name="ios-arrow-forward" class="right-icon"></ion-icon>\n\n      <h4>Top Up</h4>\n\n      <span>Belum punya Lovepoints?</span>\n\n      <br>\n\n      <span>Lovepoints kamu habis?</span>\n\n      <br>\n\n      <span>Isi ulang lovepoints kamu sekarang juga!</span>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- Transactions -->\n\n  <ion-row class="menu2" (click)="menuTransactions()">\n\n    <ion-col col-4>\n\n      <img class="icon" src="../assets/images/lovepoints.png" />\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-icon name="ios-arrow-forward" class="right-icon"></ion-icon>\n\n      <h4>Transactions</h4>\n\n      <span>Riwayat pembelian dan pengeluaran</span>\n\n      <br>\n\n      <span>dari saldo Lovepoints kamu</span>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\lovepoint-store\lovepoint-store.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LovepointStorePage);

//# sourceMappingURL=lovepoint-store.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DataProvider = class DataProvider {
    constructor(angularfireDatabase) {
        this.angularfireDatabase = angularfireDatabase;
        this.CLIENTUID = localStorage.getItem("uid_client");
        this.getbyquery = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        console.log("Initializing Dataa Provider", this.CLIENTUID);
    }
    appVersion() {
        this.items = this.angularfireDatabase.object("appVersion_client").valueChanges();
        return this.items;
    }
    // Get all users
    getUsers() {
        return this.angularfireDatabase
            .list("/users/", ref => ref.orderByChild("name"))
            .valueChanges();
    }
    // Get user with username
    getUserWithUsername(username) {
        return this.angularfireDatabase
            .list("/users/", ref => ref.orderByChild("username").equalTo(username))
            .valueChanges();
    }
    // Get logged in user data
    getCurrentUser() {
        this.items = this.angularfireDatabase.object("/users/" + this.CLIENTUID).valueChanges();
        return this.items;
    }
    updateCurrentUser() {
        return this.angularfireDatabase.object("/users/" + this.CLIENTUID);
    }
    updateDevicesToken(token) {
        return this.angularfireDatabase.object("/devices_token/" + token);
    }
    // Get user by their userId
    getUser(userId) {
        this.items = this.angularfireDatabase.object("/users/" + userId).valueChanges();
        return this.items;
    }
    // Set user by their userId
    setUser(userId) {
        return this.angularfireDatabase.object("/users/" + userId);
    }
    setFeedback() {
        return this.angularfireDatabase.object("/feedbacks/" + this.CLIENTUID + '/' + __WEBPACK_IMPORTED_MODULE_4_moment__().format('MMM-DD-YYYY-h:mm:ss-a'));
    }
    setVoucher(userId) {
        return this.angularfireDatabase.object("/vouchers/" + userId);
    }
    getVoucherByCode(code) {
        this.items = this.angularfireDatabase.object("/vouchers/" + code).valueChanges();
        return this.items;
    }
    getVoucherByUser(code) {
        this.items = this.angularfireDatabase.object("/users/" + this.CLIENTUID + "/vouchers/" + code).valueChanges();
        return this.items;
    }
    getInvoiceByUser() {
        this.items = this.angularfireDatabase.list("/invoice/" + this.CLIENTUID).valueChanges();
        return this.items;
    }
    UpdateUser(userId) {
        return this.angularfireDatabase.object("/users/" + userId);
    }
    // Get requests given the userId.
    getRequestsbyCurrentUser() {
        this.items = this.angularfireDatabase
            .object("/requests/" + this.CLIENTUID)
            .valueChanges();
        return this.items;
    }
    // Get requests given the userId.
    getRequests(userId) {
        this.items = this.angularfireDatabase
            .list("/requests/" + userId)
            .snapshotChanges();
        return this.items;
    }
    // Get friend requests given the userId.
    getFriendRequests(userId) {
        return this.angularfireDatabase
            .list("/users/", ref => ref.orderByChild("receiver").equalTo(userId))
            .valueChanges();
    }
    relationFriendTimeline(userId) {
        this.items = this.angularfireDatabase
            .object("/users/" + userId + "/friends")
            .valueChanges();
        return this.items;
    }
    getCurrentFriendTimeline() {
        this.items = this.angularfireDatabase
            .list("/users/" + this.CLIENTUID + "/friends")
            .snapshotChanges();
        return this.items;
    }
    // Get conversation given the conversationId.
    getConversation(convId) {
        this.items = this.angularfireDatabase.object("/conversations/" + convId).valueChanges();
        return this.items;
    }
    getKeyConversation(convId) {
        this.items = this.angularfireDatabase.list("/conversations/" + convId).snapshotChanges();
        return this.items;
    }
    // Update conversation given the conversationId.
    updateConversation(conversationId) {
        return this.angularfireDatabase.object("/conversations/" + conversationId);
    }
    //Get list of all conversation branch
    getAllConversation() {
        this.items = this.angularfireDatabase
            .object("/conversations/")
            .valueChanges();
        return this.items;
    }
    getConversationbyCurrentUser(psgId) {
        this.items = this.angularfireDatabase.list("/users/" + this.CLIENTUID + "/conversations/" + psgId).valueChanges();
        return this.items;
    }
    getTickets() {
        this.items = this.angularfireDatabase.object("/tickets/" + this.CLIENTUID).valueChanges();
        return this.items;
    }
    updateTicket() {
        return this.angularfireDatabase.object("/tickets/" + this.CLIENTUID);
    }
    // Get conversations of the current logged in user.
    getConversations() {
        this.items = this.angularfireDatabase.list("/users/" + this.CLIENTUID + "/conversations/").snapshotChanges();
        return this.items;
    }
    getValueConversations() {
        this.items = this.angularfireDatabase.list("/users/" + this.CLIENTUID + "/conversations/").valueChanges();
        return this.items;
    }
    deleteConversations() {
        return this.angularfireDatabase.list("/users/" + this.CLIENTUID + "/conversations/");
    }
    // Get messages of the conversation given the Id.
    getConversationMessages(conversationId) {
        this.items = this.angularfireDatabase
            .object("/conversations/" + conversationId + "/messages")
            .valueChanges();
        return this.items;
    }
    getListConversation(conversationId) {
        this.items = this.angularfireDatabase
            .list("/conversations/" + conversationId)
            .valueChanges();
        return this.items;
    }
    // Get messages of the group given the Id.
    getGroupMessages(groupId) {
        this.items = this.angularfireDatabase
            .object("/groups/" + groupId + "/messages")
            .valueChanges();
        return this.items;
    }
    // Get groups of the logged in user.
    getGroups() {
        this.items = this.angularfireDatabase
            .list("/users/" + this.CLIENTUID + "/groups")
            .snapshotChanges();
        return this.items;
    }
    // Get group info given the groupId.
    getGroup(groupId) {
        this.items = this.angularfireDatabase
            .object("/groups/" + groupId)
            .valueChanges();
        return this.items;
    }
    //Get comment timeline
    getCommentTimeline() {
        this.items = this.angularfireDatabase
            .list("/users/" + this.CLIENTUID + "/timeLine")
            .snapshotChanges();
        return this.items;
    }
    //Get object on comment timeline
    getObjectCommentTimeline() {
        this.items = this.angularfireDatabase
            .object("/users/" + this.CLIENTUID + "/timeLine")
            .valueChanges();
        return this.items;
    }
    //post comment timeline
    postCommentTimeline() {
        this.items = this.angularfireDatabase.list("/posts/").valueChanges();
        return this.items;
    }
    //Get user timeline
    getUserTimeline() {
        this.items = this.angularfireDatabase
            .object("/users/" + this.CLIENTUID + "/timeLine")
            .valueChanges();
        return this.items;
    }
    //Get user timeline baseon id
    getUserTimeLineByID(ID) {
        this.items = this.angularfireDatabase
            .object("/users/" + ID + "/timeLine")
            .valueChanges();
        return this.items;
    }
    //Get user timeline baseon id for delete
    deleteUserTimelineByID() {
        return this.angularfireDatabase.list("/users/" + this.CLIENTUID + "/timeLine");
    }
    //get logged in user ID
    getMyID() {
        return this.CLIENTUID;
    }
    // Set schedule psg by their userId
    setScheduling(psychologstId) {
        return this.angularfireDatabase.object("/scheduling/" + psychologstId);
    }
    // get
    getScheduling() {
        this.items = this.angularfireDatabase
            .list("/scheduling/")
            .snapshotChanges();
        return this.items;
    }
    // get schedule by date
    getSchedulingByDay(date) {
        this.items = this.angularfireDatabase.list("/scheduling/" + date).snapshotChanges();
        return this.items;
    }
    // get key schedule by date
    getKeySchedulingByDay(date) {
        this.items = this.angularfireDatabase
            .list("/scheduling/" + date)
            .snapshotChanges();
        return this.items;
    }
    // get list schedule by
    getListSchedulingByDay(date) {
        this.items = this.angularfireDatabase
            .list("/scheduling/" + date)
            .valueChanges();
        return this.items;
    }
    getListPsgBySessionAndDay(date, sessions) {
        this.items = this.angularfireDatabase
            .list("/scheduling/" + date + "/" + sessions)
            .snapshotChanges();
        return this.items;
    }
    // get psg by date and session available
    getPsgAvailable(psgId) {
        this.items = this.angularfireDatabase.object("/psg/" + psgId).valueChanges();
        return this.items;
    }
    // Set schedule psg by their userId
    setBooking(date) {
        return this.angularfireDatabase.object("/booking/" + date);
    }
    // get psychologist that available
    getAvailableSession(psgId, session) {
        this.items = this.angularfireDatabase
            .object("/psg/" + psgId + "/schedule/" + session)
            .valueChanges();
        return this.items;
    }
};
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let LoginProvider = class LoginProvider {
    constructor(angularfireDatabase, dataProvider, loadingProvider, alertProvider, zone) {
        this.angularfireDatabase = angularfireDatabase;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.zone = zone;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged((user) => {
            if (user) {
                if (__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */].emailVerification) {
                    if (user["emailVerified"]) {
                        //Goto Home Page.
                        this.zone.run(() => {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */].homePage, { animate: false });
                        });
                        //Since we're using a TabsPage an NgZone is required.
                    }
                    else {
                        //Goto Verification Page.
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */].verificationPage, { animate: false });
                    }
                }
                else {
                    //Goto Home Page.
                    this.zone.run(() => {
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */].homePage, { animate: false });
                    });
                    //Since we're using a TabsPage an NgZone is required.
                }
            }
        });
    }
    // Hook this provider up with the navigationController.
    // This is important, so the provider can redirect the app to the views depending
    // on the status of the Firebase user.
    setNavController(navCtrl) {
        this.navCtrl = navCtrl;
    }
    // Login on Firebase given the email and password.
    emailLogin(email, password) {
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then((success) => {
            this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid).subscribe(user => {
                console.log("user success2", success);
                if (user.role == "client") {
                    localStorage.setItem('uid_client', __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid);
                    localStorage.setItem('email_client', __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email);
                    this.loadingProvider.hide();
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                    localStorage.clear();
                    localStorage.setItem("toggle", "true");
                    this.alertProvider.showErrorMessage("auth/not-client");
                    this.loadingProvider.hide();
                }
            });
        })
            .catch((error) => {
            this.loadingProvider.hide();
            let code = error["code"];
            this.alertProvider.showErrorMessage(code);
        });
    }
    // Register user on Firebase given the email and password.
    register(displayName, email, password, phoneNumber, gender) {
        this.loadingProvider.show();
        localStorage.setItem('gender', gender);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem("displayName", displayName);
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .then((success) => {
            this.loadingProvider.hide();
        })
            .catch((error) => {
            this.loadingProvider.hide();
            let code = error["code"];
            this.alertProvider.showErrorMessage(code);
        });
    }
    // Send Password Reset Email to the user.
    sendPasswordReset(email) {
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().sendPasswordResetEmail(email)
            .then((success) => {
            this.loadingProvider.hide();
            this.alertProvider.showPasswordResetMessage(email);
        })
            .catch((error) => {
            this.loadingProvider.hide();
            let code = error["code"];
            this.alertProvider.showErrorMessage(code);
        });
    }
};
LoginProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4__alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], LoginProvider);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consultation_consultation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let TabsPage = class TabsPage {
    // TabsPage
    // This is the page where we set our tabs.
    constructor(toastCtrl, navCtrl, navParams, dataProvider) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.messages = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
        // friends: any = FriendsPage;
        this.profile = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        // timeLine: any = TimeLinePage;
        this.consultation = __WEBPACK_IMPORTED_MODULE_4__consultation_consultation__["a" /* ConsultationPage */];
    }
    ionViewDidLoad() {
        // this.dataProvider.getCurrentUser().subscribe(currentUser => {
        //   if(currentUser.termofcondition == 0) {
        //     this.navCtrl.setRoot(TermofconditionPage)
        //   }
        // })
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
        let ticket;
        const today = __WEBPACK_IMPORTED_MODULE_6_moment__().format('YYYY-MM-DD');
        this.dataProvider.getTickets().subscribe(value => {
            ticket = value;
            if (today > __WEBPACK_IMPORTED_MODULE_6_moment__(ticket.expiredDate).format('YYYY-MM-DD')) {
                this.dataProvider.updateTicket().update({
                    isExpired: true,
                    ticketTotal: 0
                }).then((success) => {
                    this.alertExpired();
                });
            }
        });
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
};
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\tabs\tabs.html"*/'<ion-tabs show="false" small selectedIndex="0">\n\n    <ion-tab [root]="messages" tabIcon="text" tabBadgeStyle="danger" tabBadge="{{getUnreadMessagesCount()}}"></ion-tab>\n\n  <!-- <ion-tab [root]="timeLine" tabIcon="time" tabBadgeStyle="danger"></ion-tab> -->\n\n  <ion-tab [root]="consultation" tabIcon="psi" tabBadgeStyle="danger"></ion-tab>\n\n  <!-- <ion-tab [root]="friends" tabIcon="md-people" tabBadgeStyle="danger" tabBadge="{{friendRequestCount}}"></ion-tab> -->\n\n  <ion-tab [root]="profile" tabIcon="settings" ></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* DataProvider */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 15:
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


let LoadingProvider = class LoadingProvider {
    constructor(loadingController) {
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
    show() {
        if (!this.loading) {
            this.loading = this.loadingController.create(this.spinner);
            this.loading.present();
        }
    }
    //Hide loading
    hide() {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    }
};
LoadingProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LoadingProvider);

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docver_reg_docver_reg__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__docver_docver__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_image__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__feedback_feedback__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















let HomePage = class HomePage {
    // HomePage
    // This is the page where the user is directed after successful login and email is confirmed.
    // A couple of profile management function is available for the user in this page such as:
    // Change name, profile pic, email, and password
    // The user can also opt for the deletion of their account, and finally logout.
    constructor(navCtrl, modalCtrl, view, alertCtrl, navParams, app, logoutProvider, loadingProvider, imageProvider, angularfireDatabase, alertProvider, dataProvider, camera) {
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
    ionViewDidLoad() {
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe((user) => {
            this.loadingProvider.hide();
            this.user = user;
            console.log("current usernya", this.user);
        });
    }
    // ini debug userid lifecycle dari ionViewDidLoad atas
    ionViewDidLeave() {
        //set anonymouse flag
        this.dataProvider.getUser(this.user.userId).subscribe(userData => {
            if (userData != null) {
                console.log("anonyms status", userData.anonymouse);
                if (userData.anonymouse == "false") {
                    this.anonymouseFlag = false;
                }
                else {
                    this.anonymouseFlag = true;
                }
            }
        });
    }
    openFeedback() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__feedback_feedback__["a" /* FeedbackPage */], {
            userId: this.user.userId
        });
    }
    underconstruction() {
        this.alert = this.alertCtrl.create({
            title: 'Ooops..',
            subTitle: 'Sorry, this feature under maintenance.',
            buttons: ['Ok']
        }).present();
    }
    about() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__about_about__["a" /* AboutPage */]);
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
                            if (name.length >= __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileNameValidator.minLength) {
                                // Check if name contains characters and numbers only.
                                if (__WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileNameValidator.pattern.test(name)) {
                                    this.loadingProvider.show();
                                    let profile = {
                                        displayName: name,
                                        photoURL: this.user.photoURL
                                    };
                                    // Update profile on Firebase
                                    __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.updateProfile(profile)
                                        .then((success) => {
                                        // Update userData on Database.
                                        this.angularfireDatabase.object('/users/' + this.user.userId).update({
                                            realName: name,
                                            name: name
                                        }).then((success) => {
                                            __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileNameValidator.pattern.test(name); //Refresh validator
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
                                }
                                else {
                                    this.alertProvider.showErrorMessage('profile/invalid-chars-name');
                                }
                            }
                            else {
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
                                }
                                else {
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
                            if (__WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                this.loadingProvider.show();
                                // Update email on Firebase.
                                __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then((success) => {
                                    // Update userData on Database.
                                    this.angularfireDatabase.object('/users/' + this.user.userId).update({
                                        email: email
                                    }).then((success) => {
                                        __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                        // Check if emailVerification is enabled, if it is go to verificationPage.
                                        if (__WEBPACK_IMPORTED_MODULE_11__login__["a" /* Login */].emailVerification) {
                                            if (!__WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.emailVerified) {
                                                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__login__["a" /* Login */].verificationPage);
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
                            }
                            else {
                                this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                }
            ]
        }).present();
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
                        let credential = __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"].EmailAuthProvider.credential(this.user.email, currentPassword);
                        // Check if currentPassword entered is correct
                        this.loadingProvider.show();
                        __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.reauthenticateWithCredential(credential)
                            .then((success) => {
                            let password = data["password"];
                            // Check if entered password is not the same as the currentPassword
                            if (password != currentPassword) {
                                if (password.length >= __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profilePasswordValidator.minLength) {
                                    if (__WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password)) {
                                        if (password == data["confirmPassword"]) {
                                            // Update password on Firebase.
                                            __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.updatePassword(password)
                                                .then((success) => {
                                                this.loadingProvider.hide();
                                                __WEBPACK_IMPORTED_MODULE_10__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password);
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
                                        }
                                        else {
                                            this.alertProvider.showErrorMessage('profile/passwords-do-not-match');
                                        }
                                    }
                                    else {
                                        this.alertProvider.showErrorMessage('profile/invalid-chars-password');
                                    }
                                }
                                else {
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
    // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
    // If you added some other info or traces for the account, make sure to account for them when deleting the account.
    deleteAccount() {
        this.alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete your account? This cannot be undone.',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    handler: data => {
                        this.loadingProvider.show();
                        // Delete Firebase user
                        __WEBPACK_IMPORTED_MODULE_12_firebase__["auth"]().currentUser.delete()
                            .then((success) => {
                            // Delete profilePic of user on Firebase storage
                            this.imageProvider.deleteUserImageFile(this.user);
                            // Delete user data on Database
                            this.angularfireDatabase.object('/users/' + this.user.userId).remove().then(() => {
                                this.loadingProvider.hide();
                                this.alertProvider.showAccountDeletedMessage();
                                this.logoutProvider.logout();
                            });
                        })
                            .catch((error) => {
                            this.loadingProvider.hide();
                            let code = error["code"];
                            this.alertProvider.showErrorMessage(code);
                            if (code == 'auth/requires-recent-login') {
                                this.logoutProvider.logout();
                            }
                        });
                    }
                }
            ]
        }).present();
    }
    // Log the user out.
    logout() {
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: data => { this.logoutProvider.logout(); }
                }
            ]
        }).present();
    }
    anonymouseMode() {
        console.log("mode changed");
        this.items = this.angularfireDatabase.object('/users/' + this.user.userId).snapshotChanges();
        this.items.subscribe(userData => {
            if (userData != null) {
                if (userData.anonymouse == "false") {
                    this.angularfireDatabase.object('/users/' + this.user.userId).update({
                        anonymouse: "true",
                        name: "anonymous"
                    }).then((success) => {
                        this.alertProvider.showProfileUpdatedMessage();
                    }).catch((error) => {
                        this.alertProvider.showErrorMessage('profile/error-update-profile');
                    });
                }
                else {
                    this.angularfireDatabase.object('/users/' + this.user.userId).update({
                        anonymouse: "false",
                        name: userData.realName
                    }).then((success) => {
                        this.alertProvider.showProfileUpdatedMessage();
                    }).catch((error) => {
                        this.alertProvider.showErrorMessage('profile/error-update-profile');
                    });
                }
            }
        });
    }
    verify() {
        const mymodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__docver_docver__["a" /* DocverPage */]);
        mymodal.present();
    }
    verifyReg() {
        const mymodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__docver_reg_docver_reg__["a" /* DocverRegPage */]);
        mymodal.present();
    }
    // open ProfilePage
    profile() {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_14__profile_profile__["a" /* ProfilePage */]);
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="theblues">\n\n      <img class="socioCss" src="assets/images/headerSocio.png" />\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="background" *ngIf="user">\n\n    <div class="profile">\n\n      <img src="{{user.img}}" tappable (click)="setPhoto()" />\n\n    </div>\n\n    <!-- Show icon of logged in provider -->\n\n    <h4>\n\n      <!-- <span tappable (click)="setName()"><ion-icon name="male"></ion-icon>{{user.name}} </span> -->\n\n      <span tappable (click)="setName()" class="name">{{user.name}} </span>\n\n        <!-- <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon> -->\n\n    </h4>\n\n    <!-- <p tappable (click)="setUsername()" class="username">@{{user.username}}</p> -->\n\n    <!-- <p tappable (click)="setDescription()" class="gender">{{user.description}}</p> -->\n\n    <p tappable class="gender">{{user.gender}}</p>\n\n    <!-- Profile Menu -->\n\n    <ion-list>\n\n      <ion-item>\n\n          <ion-label>Akun</ion-label>\n\n      </ion-item>\n\n      \n\n    <ion-item no-lines tappable (click)="profile()">\n\n        <ion-icon color="theblues" name="person" item-left></ion-icon>\n\n        <ion-label>Profil</ion-label>\n\n    </ion-item>\n\n\n\n      <!-- <ion-item no-lines tappable>\n\n          <ion-icon color="theblues" name="eye" item-left></ion-icon>\n\n          <ion-label>Anonymous Mode</ion-label>\n\n          <ion-toggle [checked]="anonymouseFlag" (ionChange)="anonymouseMode()"></ion-toggle>\n\n      </ion-item>\n\n   -->\n\n      <!-- <ion-item no-lines tappable (click)="setName()">\n\n        <ion-icon color="theblues" name="md-contact" item-left></ion-icon>\n\n        Edit Name\n\n      </ion-item> -->\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="setUsername()">\n\n        <ion-icon name="md-at" item-right></ion-icon>\n\n        Set Username\n\n      </ion-item> -->\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="verify()" *ngIf="user.role == \'Junior Psychologist\' || user.role == \'Senior Psychologist\'">\n\n        <ion-icon name="md-checkmark-circle" item-right></ion-icon>\n\n        Document Verification\n\n      </ion-item> -->\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="setDescription()">\n\n        <ion-icon name="md-clipboard" item-right></ion-icon>\n\n        Set Description\n\n      </ion-item> -->\n\n<!--   \n\n      <ion-item no-lines tappable (click)="setPhoto()">\n\n        <ion-icon name="ios-camera" item-right></ion-icon>\n\n        Set Profile Photo\n\n      </ion-item> -->\n\n  \n\n      <!-- <ion-item no-lines tappable (click)="setEmail()">\n\n        <ion-icon name="md-mail-open" item-right></ion-icon>\n\n        Change Email Address\n\n      </ion-item> -->\n\n  \n\n      <ion-item no-lines tappable (click)="setPassword()" *ngIf="user && user.provider == \'Firebase\'">\n\n        <ion-icon color="theblues" name="md-key" item-left></ion-icon>\n\n        Ubah Password\n\n      </ion-item>\n\n      <!-- <ion-item no-lines tappable (click)="deleteAccount()">\n\n        Delete Account\n\n        <ion-icon name="md-trash" item-right></ion-icon>\n\n      </ion-item> -->\n\n      <ion-item no-lines tappable (click)="logout()">\n\n        <ion-icon color="danger" name="md-log-out" item-left></ion-icon>\n\n        <span style="color:#f53d3d">Logout</span>\n\n      </ion-item>\n\n  \n\n      <ion-item no-lines tappable (click)="openFeedback()">\n\n        <ion-icon color="theblues" name="information" item-left></ion-icon>\n\n        Tanggapanmu\n\n      </ion-item>\n\n    \n\n      <ion-item no-lines tappable (click)="about()">\n\n        <ion-icon color="theblues" name="information-circle" item-left></ion-icon>\n\n        Tentang\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data__ = __webpack_require__(13);
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
let DocverPage = class DocverPage {
    constructor(dataProvider, navCtrl, navParams, formBuilder, alertCtrl, angularfireDatabase, loadingProvider, view, camera, zone, app) {
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
    ionViewDidLoad() {
        console.log('ionViewDidLoad DocverPage');
    }
    // Function to convert dataURI to Blob needed by Firebase
    imgURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }
    //Get Ijazah
    getIjazah(sourceType) {
        this.ijazahPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.ijazahPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            this.imgBlobIjazah = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            this.metadataIjazah = {
                'contentType': this.imgBlobIjazah.type
            };
        }, (err) => {
            console.log(err);
        });
        this.loadingProvider.hide();
    }
    //Get KTP
    getKTP(sourceType) {
        this.KTPPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.KTPPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            this.imgBlobKTP = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            this.metadataKTP = {
                'contentType': this.imgBlobKTP.type
            };
        });
        this.loadingProvider.hide();
    }
    uploadPsyCard() {
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Upload Psychologist ',
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
                        this.getIjazah(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.getIjazah(this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    }
    uploadKTP() {
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Upload KTP',
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
                        this.getKTP(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.getKTP(this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    }
    // Generate a random filename of length for the image to be uploaded
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
    //Push Ijazah and KTP
    pushDocPhysicologist() {
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe((params) => {
            this.user = params;
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + this.user.userId + '/' + this.generateFilename()).put(this.imgBlobIjazah, this.metadataIjazah).then((snapshot) => {
                let url = snapshot.metadata.downloadURLs[0];
                // Update User Data on Database.
                this.angularfireDatabase.object('/users/' + this.user.userId).update({
                    PsyCard: url
                }).then((success) => {
                    console.log("Psychologist Card updated");
                    //KTP section start
                    // Generate filename and upload to Firebase Storage.
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + this.user.userId + '/' + this.generateFilename()).put(this.imgBlobKTP, this.metadataKTP).then((snapshot) => {
                        let url = snapshot.metadata.downloadURLs[0];
                        // Update User Data on Database.
                        this.angularfireDatabase.object('/users/' + this.user.userId).update({
                            KTP: url,
                            name: this.name,
                            address: this.address,
                            start: this.start,
                            finish: this.finish,
                            docStatus: "true"
                        }).then((success) => {
                            console.log("KTP succesfully updated");
                            this.alert = this.alertCtrl.create({
                                title: "Congratulation...",
                                subTitle: "File has been submitted, verification process will take 24 Hours",
                                buttons: ['OK']
                            }).present();
                            this.view.dismiss();
                            this.loadingProvider.hide();
                        }).catch((error) => {
                            console.log("KTP error");
                            this.loadingProvider.hide();
                        });
                    }).catch((error) => {
                        this.loadingProvider.hide();
                        this.alertCtrl.create({
                            title: "Error",
                            subTitle: "Something went wrong",
                            buttons: ['OK']
                        }).present();
                    });
                    //KTP section end
                }).catch((error) => {
                    console.log("Psychologist Card error");
                    this.loadingProvider.hide();
                });
            }).catch((error) => {
                this.loadingProvider.hide();
                this.alertCtrl.create({
                    title: "Error",
                    subTitle: "Something went wrong",
                    buttons: ['OK']
                }).present();
            });
        });
    }
    submit() {
        //Push to realtime database
        this.pushDocPhysicologist();
    }
    back() {
        this.view.dismiss();
        console.log("modal dismissed");
    }
};
DocverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-docver',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\docver\docver.html"*/'<!--\n\n  Generated template for the DocverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons>\n\n          <button ion-button tappable (click)="back()">Back</button>\n\n        </ion-buttons>\n\n    <ion-title>Document Verification</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n        <ion-label>Full Name</ion-label> \n\n        <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Upload Psychologist Card</ion-label> \n\n        <button ion-button item-content (click)="uploadPsyCard()">Upload</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Upload KTP</ion-label> \n\n        <button ion-button item-content (click)="uploadKTP()">Upload</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Practical Address</ion-label> \n\n        <ion-input type="text" [(ngModel)]="address"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Availability Start</ion-label> \n\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="start"></ion-datetime>\n\n    </ion-item> \n\n\n\n    <ion-item>\n\n        <ion-label>Availability Finish</ion-label> \n\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="finish"></ion-datetime>\n\n    </ion-item> \n\n    <br>\n\n    <button ion-button block color="primary" (click)="submit()">Submit</button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\docver\docver.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_6__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */]])
], DocverPage);

//# sourceMappingURL=docver.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
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









let MessagesPage = class MessagesPage {
    // MessagesPage
    // This is the page where the user can see their current conversations with their friends.
    // The user can also start a new conversation.
    constructor(actionSheetCtrl, navCtrl, navParams, angularfireDatabase, loadingProvider, app, dataProvider, firebaseProvider, alertCtrl) {
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
        this.conversationId = [];
        this.currentUser = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid;
        this.iterate = 0;
        this.increment = 0;
        // conversation: any;
        this.conversations = [];
        this.bookSession = [];
        this.bookingDay = [];
        this.bookConfirmation = [];
        this.inSession = [];
        this.roles = localStorage.getItem("registerRole");
        this.phones = localStorage.getItem("phoneNumber");
    }
    tabsOn() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'flex';
            });
        }
    }
    // close timer countdown
    ionViewDidLoad() {
        this.tabsOn();
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
        this.devicesTokenUpdate();
        this.searchFriend = "";
        this.loadingProvider.show();
        // Get info of conversations of current logged in user.
        this.dataProvider.getConversations().subscribe(conversations => {
            if (conversations.length > 0) {
                conversations.forEach(conversation => {
                    console.log("conversation", conversation.key);
                    // Get conversation partner info.
                    this.dataProvider.getConversationbyCurrentUser(conversation.key).subscribe(listConv => {
                        // Get conversation info.
                        listConv.forEach(listConversations => {
                            this.dataProvider.getPsgAvailable(conversation.key).subscribe(psgProfile => {
                                listConversations.key = conversation.key;
                                listConversations.name = psgProfile.name;
                                listConversations.img = psgProfile.img;
                                this.mainIdConversation = listConversations;
                                this.conversationId.push(listConversations.conversationId);
                                this.dataProvider.getConversation(listConversations.conversationId).subscribe(obj => {
                                    // console.log("obj", obj);
                                    // Get last message of conversation.
                                    listConversations.scheduleId = obj.scheduleId;
                                    listConversations.sessionke = obj.sessionke;
                                    if (obj.confirmation) {
                                        listConversations.confirmation = obj.confirmation;
                                    }
                                    if (obj.inSession) {
                                        listConversations.inSession = obj.inSession;
                                    }
                                    listConversations.index = this.increment;
                                    this.countdown(obj.scheduleId, obj.sessionke, this.increment);
                                    this.increment++;
                                    let lastMessage = obj.messages[obj.messages.length - 1];
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
                                    console.log('listConversations', listConversations);
                                    this.addOrUpdateConversation(listConversations);
                                });
                            });
                        });
                    });
                });
                this.loadingProvider.hide();
            }
            else {
                this.conversations = [];
                this.loadingProvider.hide();
            }
        });
        // Update conversations' last active date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.conversations) {
                    that.conversations.forEach(conversation => {
                        let date = conversation.date;
                        conversation.date = new Date(date);
                    });
                }
            }, 60000);
        }
    }
    countdown(date, time, index) {
        var b = __WEBPACK_IMPORTED_MODULE_8_moment__(date + ' ' + time);
        setInterval(() => {
            var a = __WEBPACK_IMPORTED_MODULE_8_moment__();
            this.timeInSeconds = Math.round(b.diff(a) / 1000);
            this.displayTime[index] = this.getSecondsAsDigitalClock(this.timeInSeconds);
            // console.log("this.displayTime[index]", this.displayTime[index]+'/'+index); //just uncoment to show countdown in console	
        }, 1000);
    }
    getSecondsAsDigitalClock(inputSeconds) {
        var sec_num = inputSeconds; // don't forget the second param	
        if (sec_num < 0) {
            return 'timeover';
        }
        else {
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
            }
            else {
                return (daysString + " days " + hoursString + ":" + minutesString + ":" + secondsString);
            }
        }
    }
    devicesTokenUpdate() {
        this.dataProvider.updateDevicesToken(localStorage.getItem("devices_token"))
            .update({
            userId: __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid
        });
        this.dataProvider.updateCurrentUser()
            .update({
            devices_token: localStorage.getItem("devices_token")
        });
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
        }
        else {
            var index = -1;
            for (var i = 0; i < this.conversations.length; i++) {
                // console.log("this.conversations[i]", this.conversations[i].key + "/" + conversation.key)
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
            this.conversations.sort((a, b) => {
                let date1 = new Date(a.date);
                let date2 = new Date(b.date);
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
    }
    // Create userData on the database if it doesn't exist yet.
    // Open chat with friend.
    message(conversation) {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'none';
            });
        }
        console.log("conversation message()", conversation);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__message_message__["a" /* MessagePage */], {
            idConversation: conversation.conversationId,
            session: conversation.sessionke,
            day: conversation.scheduleId,
            confirmation: conversation.confirmation,
            inSession: conversation.inSession,
            sender: conversation.key,
            name: conversation.name,
        });
    }
    // Return class based if conversation has unreadMessages or not.
    hasUnreadMessages(conversation) {
        // console.log("hasunread", conversation);
        if (conversation.unreadMessagesCount > 0) {
            return "bold";
        }
        else
            return "";
    }
    // alert
    showConfirm(i) {
        let confirm = this.alertCtrl.create({
            title: "Hapus Obrolan?",
            message: "Setelah anda menghapus obrolan,histori akan hilang, anda yakin?",
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
};
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "page-messages",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\messages\messages.html"*/'<ion-header>\n\n  <ion-navbar color="theblues">\n\n    <img class="socioCss" src="assets/images/headerSocio.png" />\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No conversations to show -->\n\n  <div class="empty-list" *ngIf="conversations && conversations.length <= 0">\n\n    <h1>\n\n      <ion-icon name="md-text"></ion-icon>\n\n    </h1>\n\n    <p>Booking psikologmu segera.</p>\n\n      \n\n  </div>\n\n  <!-- Show conversations -->\n\n  <ion-list class="avatar-list" *ngIf="conversations && conversations.length > 0">\n\n    <!-- <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar> -->\n\n    <!-- press button di comment -->\n\n    <!-- <ion-item color="red" (press)="pressEvent(conversation.sender)" *ngFor="let conversation of conversations | conversationFilter:searchFriend; let i = index" -->\n\n    <ion-item color="red" *ngFor="let conversation of conversations | conversationFilter:searchFriend; let i = index"\n\n      no-lines tappable (click)="message(conversation)">\n\n      <ion-avatar item-left>\n\n          <img src="{{conversation.img}}">\n\n        </ion-avatar>\n\n        <div [ngClass]=hasUnreadMessages(conversation)>\n\n          <h2>{{conversation.name}}</h2>\n\n          <ion-badge color="danger" *ngIf="conversation.unreadMessagesCount > 0">{{conversation.unreadMessagesCount}}</ion-badge>\n\n          <p>{{conversation.message}}</p>\n\n          <span class="date">{{displayTime[conversation.index]}}\n\n            <br>{{conversation.date | DateFormat}}</span>\n\n        </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\messages\messages.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase__["a" /* FirebaseProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], MessagesPage);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 219:
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


let ImageModalPage = class ImageModalPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        this.image = this.navParams.get('img');
    }
    close() {
        this.navCtrl.pop();
    }
};
ImageModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-image-modal',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\image-modal\image-modal.html"*/'<ion-content>\n\n  <div class="content" (click)="close()" tappable>\n\n    <img src={{image}}/>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\image-modal\image-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ImageModalPage);

//# sourceMappingURL=image-modal.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buy_packet_buy_packet__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoice_list_invoice_list__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
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









let ConsultationPage = class ConsultationPage {
    constructor(angularfireDatabase, loadingProvider, navCtrl, alertCtrl, dataProvider, navParams) {
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataProvider = dataProvider;
        this.navParams = navParams;
        this.packets = [];
        this.priceAfterDiscount = [];
        this.today = __WEBPACK_IMPORTED_MODULE_8_moment__();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ConsultationPage');
        this.loadingProvider.show();
        this.getTicket();
        this.callPacket();
    }
    invoicePage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__invoice_list_invoice_list__["a" /* InvoiceListPage */]);
        this.tabsNone();
    }
    buyPacket(packet) {
        this.tabsNone();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__buy_packet_buy_packet__["a" /* BuyPacketPage */], {
            packet: packet
        });
    }
    callPacket() {
        this.packets = [{
                packets_name: "Paket Salam Kenal",
                ticket: 1,
                price: '100.000',
                discount: "50%",
                priceAfterDiscount: '50.000',
                session_time: "1 Jam",
                expired_date: 7,
                code: "PSK"
            }, {
                packets_name: "Paket Santai",
                ticket: 4,
                price: '400.000',
                discount: "60%",
                priceAfterDiscount: '160.000',
                session_time: "1 Jam",
                expired_date: 30,
                code: "PS"
            }, {
                packets_name: "Paket Ketenangan",
                ticket: 8,
                price: '800.000',
                discount: "70%",
                priceAfterDiscount: '240.000',
                session_time: "1 Jam",
                expired_date: 60,
                code: "PK"
            }
        ];
    }
    getTicket() {
        this.dataProvider.getTickets().subscribe(tickets => {
            this.ticket = tickets;
            console.log('ticket', this.ticket);
            if (this.ticket.isExpired == false) {
                this.checkExpired(this.ticket.expiredDate);
            }
            else {
                this.loadingProvider.hide();
            }
        });
    }
    checkExpired(date) {
        var ticketDate = __WEBPACK_IMPORTED_MODULE_8_moment__(date);
        this.expiredDate = ticketDate.diff(this.today, 'days');
        console.log('expireddd', this.expiredDate);
        this.loadingProvider.hide();
    }
    checkCalendar() {
        if (this.ticket.ticketTotal > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calendar_calendar__["a" /* CalendarPage */]);
            this.tabsNone();
        }
        else {
            this.showConfirm();
        }
    }
    // enterVoucher() {
    //   this.loadingProvider.show();
    //   // get voucher by code
    //   this.dataProvider.getVoucherByCode(this.voucher).subscribe(value => {
    //     if(value.isExpired == false) {
    //         this.dataProvider.getVoucherByUser(this.voucher).subscribe(voucher=>{
    //           console.log(voucher)
    //           if (voucher == null) {
    //             var addTiket:number;
    //             var newCountActivated:number;
    //             addTiket = this.ticket + value.ticket;
    //             newCountActivated = value.countActivated + 1;
    //             console.log('addTiket',addTiket);   
    //             this.dataProvider.setVoucher(this.voucher).update({
    //               countActivated: newCountActivated
    //             })
    //             this.dataProvider.setUser(firebase.auth().currentUser.uid).update({
    //               ticketTotal: addTiket,
    //             })
    //             this.angularfireDatabase.object("/users/"+firebase.auth().currentUser.uid+'/vouchers/'+this.voucher).set({
    //               code:this.voucher,
    //               isUsed: true,
    //               created_at: new Date().toString()
    //             })
    //             console.log("Selamat anda mendapatkan "+ value.ticket+" tiket baru.");
    //             this.loadingProvider.hide();
    //           } else if(voucher.isUsed == true){
    //             alert("Maaf voucher sudah digunakan.");    
    //             this.loadingProvider.hide();
    //           }
    //         })
    //     } else {
    //       this.loadingProvider.hide();
    //       alert("Voucher sudah tidak berlaku.");
    //     }
    //   })
    // }
    showConfirm() {
        const alert = this.alertCtrl.create({
            title: 'Beli tiket?',
            subTitle: 'Anda belum memiliki tiket. Pilih paket atau masukkan voucher pada kolom di bawah.',
            buttons: ['OK']
        });
        alert.present();
    }
    tabsNone() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'none';
            });
        }
    }
    tabsFlex() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'flex';
            });
        }
    }
};
ConsultationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-consultation',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\consultation\consultation.html"*/'<ion-header>\n\n  <ion-navbar color="theblues">\n\n    <img class="socioCss" src="assets/images/headerSocio.png" />\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="invoicePage()">\n\n        <ion-icon name="list"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="center">\n\n    <h2>Selesaikan masalahmu dengan psikolog</h2>\n\n    <img class="boardimg" src="assets/images/consult.png">\n\n    <h4 *ngIf="ticket">Tiket anda : {{ticket.ticketTotal}}<br><span *ngIf="expiredDate">masa berlaku {{expiredDate}} hari lagi</span></h4>\n\n    <p *ngIf="!ticket">Anda tidak memiliki tiket</p>\n\n    <p>Atur waktu yang kamu inginkan untuk curhat dengan psikolog</p>\n\n    <button color="theblues" ion-button (click)="checkCalendar()">ATUR JADWAL</button>\n\n  </div>\n\n  <br>\n\n  <div *ngIf="ticket && ticket.ticketTotal < 1" class="container-packets">\n\n    <div *ngFor="let packet of packets">\n\n      <div class="packets">\n\n        <h3>{{packet.packets_name}}</h3><br>\n\n        <span class="price">Rp{{packet.price}}</span><br>\n\n        <span class="discount">Diskon {{packet.discount}}</span><br>\n\n        <span class="price-discount"><b>Rp{{packet.priceAfterDiscount}}</b></span><br>\n\n        <span class="detail">{{packet.ticket}} Tiket\n\n          dengan durasi {{packet.session_time}}/Tiket<br>\n\n          (Masa berlaku paket {{packet.expired_date}} hari)</span>\n\n      </div>\n\n      <div class="choose-packet" (click)="buyPacket(packet)">Beli Paket</div>\n\n    </div>\n\n  </div>\n\n  <br>\n\n  <!-- <div class="voucher">\n\n      <ion-input type="text" placeholder="Masukkan Voucher" [(ngModel)]="voucher"></ion-input>\n\n      <button class="btn-voucher" ion-button (click)="enterVoucher()"><ion-icon name="send"></ion-icon></button>\n\n  </div> -->\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\consultation\consultation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ConsultationPage);

//# sourceMappingURL=consultation.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let SearchPeoplePage = class SearchPeoplePage {
    // SearchPeoplePage
    // This is the page where the user can search for other users and send a friend request.
    constructor(navCtrl, navParams, dataProvider, loadingProvider, alertCtrl, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
    }
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
                        switch (friend.role) {
                            case "Client":
                                if (this.excludedIds.indexOf(friend) == -1) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    }
};
SearchPeoplePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search-people',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\search-people\search-people.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Search People</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No other users to send friend request right now. -->\n\n  <div class="empty-list" *ngIf="accLength && ((accLength == 0) || (accLength == exclude))">\n\n    <h1><ion-icon name="md-search"></ion-icon></h1>\n\n    <p>Uh-oh! Sorry but we can\'t find other users right now. Try again later.</p>\n\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n\n  </div>\n\n  <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n\n  <ion-list class="avatar-list" *ngIf="accLength && accLength > 0">\n\n    <ion-searchbar *ngIf="accLength != exclude" [(ngModel)]="searchUser" placeholder="Search for name or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item *ngFor="let account of accounts | searchFilter: [excludedIds, searchUser]" no-lines tappable (click)="viewUser(account.key)">\n\n      <ion-fab middle right>\n\n        <!-- Show appropriate buttons depending on the status of this user in relation to the current user. -->\n\n        <!-- // Returns:\n\n        // 0 when user can be requested as friend.\n\n        // 1 when a friend request was already sent to this user.\n\n        // 2 when this user has a pending friend request. -->\n\n        <button ion-fab mini tappable (click)="sendFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 0">\n\n          <ion-icon name="md-add-circle" class="success"></ion-icon>\n\n        </button>\n\n        <button ion-fab mini tappable (click)="cancelFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 1">\n\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n\n        </button>\n\n        <button ion-fab mini tappable (click)="acceptFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 2">\n\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{account.img}}">\n\n      </ion-avatar>\n\n      <h2>{{account.name}}</h2>\n\n      <p>@{{account.username}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\search-people\search-people.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase__["a" /* FirebaseProvider */]])
], SearchPeoplePage);

//# sourceMappingURL=search-people.js.map

/***/ }),

/***/ 241:
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
webpackEmptyAsyncContext.id = 241;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(126);
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
let CommentPage = class CommentPage {
    constructor(actionSheetCtrl, toastCtrl, navCtrl, navParams, alertCtrl, formBuilder, angularfireDatabase, loadingProvider, app, dataProvider, cb, data, zone, modalCtrl, view, params) {
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
    back() {
        this.view.dismiss();
        console.log("modal dismissed");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CommentPage');
        this.commentFound = false;
        this.dataProvider.getCommentTimeline().map(params => {
            for (let item of params) {
                if (item.timeLineID == this.timeLineID) {
                    if (item.comments == "") {
                        this.commentList = [];
                    }
                    this.commentList = item.comments;
                }
            }
        });
    }
    postComment() {
        let ID_Post = this.timeLineID;
        let data;
        let data_timeline;
        let ID_User;
        let comments;
        let posts;
        let newTimeLine;
        let newTimeLine2;
        let friends;
        this.dataProvider.postCommentTimeline().subscribe(params => {
            console.log(params);
            for (data of params) {
                console.log(data.ID_User);
                console.log("data.Post_ID : " + data.ID_Post);
                console.log("ID_Post : " + ID_Post);
                if (ID_Post == data.ID_Post) {
                    ID_User = data.ID_User;
                    console.log("ID_User : " + ID_User);
                    this.dataProvider.getUserTimeLineByID(ID_User).subscribe(params => {
                        console.log("timeLine : " + params);
                        newTimeLine = params;
                        for (let i = newTimeLine.length - 1; i >= 0; i--) {
                            if (newTimeLine[i].timeLineID == ID_Post) {
                                if (newTimeLine[i].comments == "") {
                                    newTimeLine[i].comments = [];
                                }
                                newTimeLine[i].comments.push({
                                    senderId: newTimeLine[i].senderId,
                                    comment: this.newComment,
                                    img: newTimeLine[i].img,
                                    role: newTimeLine[i].role,
                                    gender: newTimeLine[i].gender,
                                    date: newTimeLine[i].date,
                                    name: newTimeLine[i].name
                                });
                                this.angularfireDatabase.object('/users/' + ID_User).update({
                                    timeLine: newTimeLine
                                });
                                //friends (that has relation with Post_ID) timeline comment update
                                this.dataProvider.relationFriendTimeline(ID_User).subscribe(params => {
                                    friends = params;
                                    for (let data_user of friends) {
                                        this.dataProvider.getUserTimeLineByID(data_user).subscribe(params => {
                                            newTimeLine2 = params;
                                            for (let i = newTimeLine2.length - 1; i >= 0; i--) {
                                                if (newTimeLine2[i].timeLineID == ID_Post) {
                                                    if (newTimeLine2[i].comments == "") {
                                                        newTimeLine2[i].comments = [];
                                                    }
                                                    newTimeLine2[i].comments.push({
                                                        senderId: newTimeLine2[i].senderId,
                                                        comment: this.newComment,
                                                        img: newTimeLine2[i].img,
                                                        role: newTimeLine2[i].role,
                                                        gender: newTimeLine2[i].gender,
                                                        date: newTimeLine2[i].date,
                                                        name: newTimeLine[i].name
                                                    });
                                                    //clean form
                                                    this.newComment = "";
                                                    this.angularfireDatabase.object('/users/' + data_user).update({
                                                        timeLine: newTimeLine2
                                                    });
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
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

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 287:
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
webpackEmptyAsyncContext.id = 287;

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(96);
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





const errorMessages = {
    // Alert Provider
    // This is the provider class for most of the success and error messages in the app.
    // If you added your own messages don't forget to make a function for them or add them in the showErrorMessage switch block.
    // Firebase Error Messages
    accountExistsWithDifferentCredential: { title: 'Akun Telah digunakan!', subTitle: 'Silahkan coba lagi menggunakan akun lain. Terima kasih.' },
    failFeedback: { title: 'Gagal mengirim tanggapan', subTitle: 'Silahkan ketik ulang untuk mengirim tanggapan.' },
    notClient: { title: 'Tidak Dapat Masuk.', subTitle: 'Gunakan akun lain dan login kembali.' },
    invalidCredential: { title: 'Invalid Credential!', subTitle: 'An error occured logging in with this credential.' },
    operationNotAllowed: { title: 'Login Gagal!', subTitle: 'Login ditolah, silahkan hubungi tim kami. Terima kasih.' },
    userDisabled: { title: 'Account Disabled!', subTitle: 'Sorry! But this account has been suspended! Please contact support.' },
    userNotFound: { title: 'Akun Tidak Ditemukan!', subTitle: 'Silahkan daftar terlebih dahulu.' },
    wrongPassword: { title: 'Password Salah!', subTitle: 'Maaf, password yang anda masukkan salah.' },
    invalidEmail: { title: 'Email Salah!', subTitle: 'Maaf, email yang anda masukkan salah' },
    emailAlreadyInUse: { title: 'Email Tidak Tersedia', subTitle: 'Maaf, email telah digunakan.' },
    weakPassword: { title: 'Weak Password!', subTitle: 'Sorry, but you have entered a weak password.' },
    requiresRecentLogin: { title: 'Credential Expired!', subTitle: 'Sorry, but this credential has expired! Please login again.' },
    userMismatch: { title: 'User Mismatch!', subTitle: 'Sorry, but this credential is for another user!' },
    providerAlreadyLinked: { title: 'Already Linked!', subTitle: 'Sorry, but your account is already linked to this credential.' },
    credentialAlreadyInUse: { title: 'Credential Not Available!', subTitle: 'Sorry, but this credential is already used by another user.' },
    // Profile Error Messages
    changeName: { title: 'Gagal Mengganti Nama!', subTitle: 'Maaf, terjadi kesalahan saat mengganti nama. Silahkan coba lagi.' },
    invalidCharsName: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNameValidator.patternError,
    invalidCharsNumber: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNumberValidator.patternError,
    nameTooShort: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNameValidator.lengthError,
    numberTooShort: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNumberValidator.lengthError,
    changeEmail: { title: 'Gagal Mengganti Email!', subTitle: 'Maaf,  terjadi kesalahan saat mengganti email. Silahkan coba lagi.' },
    invalidProfileEmail: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileEmailValidator.patternError,
    changePhoto: { title: 'Gagal Mengganti Foto!', subTitle: ' terjadi kesalahan saat mengganti foto. Silahkan coba lagi.' },
    changeInvoice: { title: 'Invoice Gagal dibuat!', subTitle: 'Silahkan pilih paket kembali.' },
    passwordTooShort: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profilePasswordValidator.lengthError,
    invalidCharsPassword: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profilePasswordValidator.patternError,
    passwordsDoNotMatch: { title: 'Gagal Mengganti Password!', subTitle: 'Maaf, password yang anda masukkan tidak sesuai.' },
    updateProfile: { title: 'Gagal Mengubah Profil', subTitle: 'Maaf, terjadi kesalahan saat mengganti Profil. Silahkan coba lagi.' },
    updateProfession: { title: 'Gagal Mengubah Profesi', subTitle: 'Maaf, terjadi kesalahan saat mengganti Profesi. Silahkan coba lagi.' },
    updateCity: { title: 'Gagal Mengubah Kota', subTitle: 'Maaf, terjadi kesalahan saat mengganti Kota. Silahkan coba lagi.' },
    updateStatus: { title: 'Gagal Mengubah Status', subTitle: 'Maaf, terjadi kesalahan saat mengganti Status. Silahkan coba lagi.' },
    updateBirth: { title: 'Gagal Mengubah Tanggal Lahir', subTitle: 'Maaf, terjadi kesalahan saat mengganti Tanggal Lahir. Silahkan coba lagi.' },
    updateNumber: { title: 'Gagal Mengubah Nomer', subTitle: 'Maaf, terjadi kesalahan saat mengganti Nomer. Silahkan coba lagi.' },
    usernameExists: { title: 'Username Telah Digunakan!', subTitle: 'Maaf, username telah digunakan oleh pengguna lain.' },
    // Image Error Messages
    imageUpload: { title: 'Gagal Mengunggah Gambar!', subTitle: 'Maaf but we\'ve encountered an error uploading selected image.' },
    // Group Error Messages
    groupUpdate: { title: 'Update Group Failed!', subTitle: 'Maaf, but we\'ve encountered an error updating this group.' },
    groupLeave: { title: 'Leave Group Failed!', subTitle: 'Maaf, but you\'ve encountered an error leaving this group.' },
    groupDelete: { title: 'Delete Group Failed!', subTitle: 'Maaf, but we\'ve encountered an error deleting this group.' }
};
const successMessages = {
    feedbackSubmit: { title: 'Berhasil mengirim tanggapan', subTitle: 'Terimakasih, tanggapanmu sangat berarti bagi evaluasi kami,' },
    passwordResetSent: { title: 'Reset Password Telah Dikirim!', subTitle: 'reset password telah dikirim ke email: ' },
    profileUpdated: { title: 'Berhasil Mengganti Profil!', subTitle: 'Terima kasih!' },
    numberUpdated: { title: 'Berhasil Mengganti Nomer Handphone!', subTitle: 'Terima kasih!' },
    invoiceUpdated: { title: 'Berhasil Membeli Paket!', subTitle: 'Kami akan cek invoice 2x24 jam, silahkan periksa status invoice anda. Terima kasih.' },
    professionUpdated: { title: 'Berhasil Mengganti Profession!', subTitle: 'Terima kasih!' },
    cityUpdated: { title: 'Berhasil Mengganti Kota!', subTitle: 'Terima kasih!' },
    birthUpdated: { title: 'Berhasil Mengganti Tanggal Lahir!', subTitle: 'Terima kasih!' },
    statusUpdated: { title: 'Berhasil Mengganti Status!', subTitle: 'Terima kasih!' },
    emailVerified: { title: 'Email Telah Dikonfirmasi!', subTitle: 'Selamat! email anda berhasil dikonfirmasi' },
    emailVerificationSent: { title: 'Konfirmasi Email Telah dikirim', subTitle: 'Periksa email anda: ' },
    accountDeleted: { title: 'Account Deleted!', subTitle: 'Your account has been successfully deleted.' },
    passwordChanged: { title: 'Berhasil Mengganti Password!', subTitle: 'Password anda berhasil diganti.' },
    friendRequestSent: { title: 'Friend Request Sent!', subTitle: 'Your friend request has been successfully sent!' },
    friendRequestRemoved: { title: 'Friend Request Deleted!', subTitle: 'Your friend request has been successfully deleted.' },
    groupUpdated: { title: 'Group Updated!', subTitle: 'This group has been successfully updated!' },
    groupLeft: { title: 'Leave Group', subTitle: 'You have successfully left this group.' }
};
let AlertProvider = class AlertProvider {
    constructor(alertCtrl, logoutProvider) {
        this.alertCtrl = alertCtrl;
        this.logoutProvider = logoutProvider;
        console.log("Initializing Alert Provider");
    }
    // Show profile updated
    showProfileUpdatedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.profileUpdated["title"],
            subTitle: successMessages.profileUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    }
    showInvoiceUpdatedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.invoiceUpdated["title"],
            subTitle: successMessages.invoiceUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    }
    showFeedbackSubmitMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.feedbackSubmit["title"],
            subTitle: successMessages.feedbackSubmit["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show phone updated
    showphoneUpdatedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.numberUpdated["title"],
            subTitle: successMessages.numberUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show Profession updated
    showprofessionUpdatedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.professionUpdated["title"],
            subTitle: successMessages.professionUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show city updated
    showcityUpdatedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.cityUpdated["title"],
            subTitle: successMessages.cityUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show status updated
    showstatusUpdatedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.statusUpdated["title"],
            subTitle: successMessages.statusUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show birthdate updated
    showbirthUpdatedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.birthUpdated["title"],
            subTitle: successMessages.birthUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show password reset sent
    showPasswordResetMessage(email) {
        this.alert = this.alertCtrl.create({
            title: successMessages.passwordResetSent["title"],
            subTitle: successMessages.passwordResetSent["subTitle"] + email,
            buttons: ['OK']
        }).present();
    }
    // Show email verified and redirect to homePage
    showEmailVerifiedMessageAndRedirect(navCtrl) {
        this.alert = this.alertCtrl.create({
            title: successMessages.emailVerified["title"],
            subTitle: successMessages.emailVerified["subTitle"],
            buttons: [{
                    text: 'OK',
                    handler: () => {
                        navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* Login */].homePage);
                    }
                }]
        }).present();
    }
    // Show email verification sent
    showEmailVerificationSentMessage(email) {
        this.alert = this.alertCtrl.create({
            title: successMessages.emailVerificationSent["title"],
            subTitle: successMessages.emailVerificationSent["subTitle"] + email,
            buttons: ['OK']
        }).present();
    }
    // Show account deleted
    showAccountDeletedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.accountDeleted["title"],
            subTitle: successMessages.accountDeleted["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show password changed
    showPasswordChangedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.passwordChanged["title"],
            subTitle: successMessages.passwordChanged["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show friend request sent
    showFriendRequestSent() {
        this.alert = this.alertCtrl.create({
            title: successMessages.friendRequestSent["title"],
            subTitle: successMessages.friendRequestSent["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show friend request removed
    showFriendRequestRemoved() {
        this.alert = this.alertCtrl.create({
            title: successMessages.friendRequestRemoved["title"],
            subTitle: successMessages.friendRequestRemoved["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show group updated.
    showGroupUpdatedMessage() {
        this.alert = this.alertCtrl.create({
            title: successMessages.groupUpdated["title"],
            subTitle: successMessages.groupUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    }
    // Show error messages depending on the code
    // If you added custom error codes on top, make sure to add a case block for it.
    showErrorMessage(code) {
        switch (code) {
            // Firebase Error Messages
            case 'auth/account-exists-with-different-credential':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.accountExistsWithDifferentCredential["title"],
                    subTitle: errorMessages.accountExistsWithDifferentCredential["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/not-client':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.notClient["title"],
                    subTitle: errorMessages.notClient["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'fail-feedback':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.failFeedback["title"],
                    subTitle: errorMessages.failFeedback["subTitle"],
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
            case 'invoice/error-change-photo':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changeInvoice["title"],
                    subTitle: errorMessages.changeInvoice["subTitle"],
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
    }
};
AlertProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__logout__["a" /* LogoutProvider */]])
], AlertProvider);

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocverRegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__(126);
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
let DocverRegPage = class DocverRegPage {
    constructor(dataProvider, navCtrl, navParams, formBuilder, alertCtrl, angularfireDatabase, loadingProvider, view, camera, zone, app) {
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
    ionViewDidLoad() {
        console.log('ionViewDidLoad DocverPage');
    }
    // Function to convert dataURI to Blob needed by Firebase
    imgURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }
    //Get KTM
    getKTM(sourceType) {
        this.KTMPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.KTMPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            this.imgBlobKTM = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            this.metadataKTM = {
                'contentType': this.imgBlobKTM.type
            };
        }, (err) => {
            console.log(err);
        });
        this.loadingProvider.hide();
    }
    uploadKTM() {
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Upload KTM/KTP',
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
                        this.getKTM(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.getKTM(this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    }
    // Generate a random filename of length for the image to be uploaded
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
    //Push KTM
    pushDocPhysicolStudent() {
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe((params) => {
            this.user = params;
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + this.user.userId + '/' + this.generateFilename()).put(this.imgBlobKTM, this.metadataKTM).then((snapshot) => {
                let url = snapshot.metadata.downloadURLs[0];
                // Update User Data on Database.
                this.angularfireDatabase.object('/users/' + this.user.userId).update({
                    KTM_KTP: url,
                    name: this.name,
                    city: this.city,
                    docStatus: "true"
                }).then((success) => {
                    console.log("KTM/KTP succesfully updated");
                    this.alert = this.alertCtrl.create({
                        title: "Congratulation...",
                        subTitle: "File has been submitted, verification process will take 24 Hours",
                        buttons: ['OK']
                    }).present();
                    this.view.dismiss();
                    this.loadingProvider.hide();
                }).catch((error) => {
                    console.log("KTM error");
                    this.loadingProvider.hide();
                });
            }).catch((error) => {
                this.loadingProvider.hide();
                this.alertCtrl.create({
                    title: "Error",
                    subTitle: "Something went wrong",
                    buttons: ['OK']
                }).present();
            });
        });
    }
    submit() {
        //Push to realtime database
        this.pushDocPhysicolStudent();
    }
    back() {
        this.view.dismiss();
        console.log("modal dismissed");
    }
};
DocverRegPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-docver-reg',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\docver-reg\docver-reg.html"*/'<!--\n\n  Generated template for the DocverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n          <ion-buttons>\n\n              <button ion-button tappable (click)="back()">Back</button>\n\n            </ion-buttons>\n\n        <ion-title>Document Verification</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    <ion-content padding>\n\n      <ion-list>\n\n  \n\n      <ion-item>\n\n          <ion-label>Full Name</ion-label> \n\n          <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>Upload KTM/KTP</ion-label> \n\n          <button ion-button item-content (click)="uploadKTM()">Upload</button>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-label>City</ion-label>\n\n          <ion-select [(ngModel)]="city">\n\n              <ion-option value="Bogor">Bogor</ion-option>\n\n              <ion-option value="Depok">Depok</ion-option>\n\n              <ion-option value="Jakarta">Jakarta</ion-option>\n\n              <ion-option value="Semarang">Semarang</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n  \n\n      <button ion-button block color="primary" (click)="submit()">Submit</button>\n\n      </ion-list>\n\n    \n\n    </ion-content>\n\n    '/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\docver-reg\docver-reg.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_6__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */]])
], DocverRegPage);

//# sourceMappingURL=docver-reg.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login__ = __webpack_require__(130);
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
let BoardingPage = class BoardingPage {
    constructor(navCtrl, navParams, loginProvider) {
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
    mulai() {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        localStorage.setItem("toggle", "true");
    }
    lewati() {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        localStorage.setItem("toggle", "true");
    }
};
BoardingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-boarding',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\boarding\boarding.html"*/'\n\n<ion-content class="tutorial-page">\n\n    \n\n      <ion-slides pager>\n\n        <ion-slide *ngFor="let slide of slides">\n\n        <ion-header>\n\n          <ion-navbar color=\'primary\'>\n\n            <ion-buttons color="primary-active" end>\n\n              <button ion-button (click)="lewati()">SKIP</button>\n\n            </ion-buttons>\n\n          </ion-navbar>\n\n        </ion-header>\n\n          <img [src]="slide.image" class="slide-image"/>\n\n<!--           <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n          <p [innerHTML]="slide.description"></p> -->\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <ion-header>\n\n            <ion-navbar color=\'primary\'>\n\n              <ion-buttons color="primary-active" end>\n\n                <button ion-button (click)="mulai()">START</button>\n\n              </ion-buttons>\n\n            </ion-navbar>\n\n          </ion-header>\n\n          <img src="assets/images/onboarding4.jpg" class="slide-image"/>\n\n          <h2 class="slide-title">Ready to Play?</h2>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\boarding\boarding.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_login__["a" /* LoginProvider */]])
], BoardingPage);

//# sourceMappingURL=boarding.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let ProfilePage = class ProfilePage {
    // HomePage
    // This is the page where the user is directed after successful login and email is confirmed.
    // A couple of profile management function is available for the user in this page such as:
    // Change name, profile pic, email, and password
    // The user can also opt for the deletion of their account, and finally logout.
    constructor(navCtrl, modalCtrl, view, alertCtrl, navParams, app, logoutProvider, loadingProvider, imageProvider, angularfireDatabase, alertProvider, dataProvider, camera) {
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
    ionViewDidLoad() {
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe((user) => {
            this.loadingProvider.hide();
            this.user = user;
            console.log("usernya", this.user);
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
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__pages_editprofile_editprofile__["a" /* EditprofilePage */]);
        console.log("edit");
    }
};
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <!-- <img class="socioCss" src="assets/images/headerSocio.png" /> -->\n\n      <ion-title>Profile</ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button (click)="editProfile()">\n\n            <ion-icon class="edit-icon" name="create" item-right></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="background" *ngIf="user">\n\n    <div class="profile">\n\n      <img src="{{user.img}}" tappable (click)="setPhoto()" />\n\n    </div>\n\n    <!-- Show icon of logged in provider -->\n\n    \n\n    <p tappable class="username" tappable (click)="setPhoto()">Edit Photo</p>\n\n    <!-- <p tappable class="username">Remove Photo</p> -->\n\n    <!-- <p tappable (click)="setDescription()" class="gender">{{user.description}}</p> -->\n\n    <!-- <p tappable class="gender">{{user.gender}}</p> -->\n\n    <!-- Profile Menu -->\n\n    <ion-list>\n\n      <ion-item>\n\n          <ion-label>Personal Information</ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Name </h5>\n\n          <h2 class="name">{{user.name}} </h2>\n\n      </ion-item>\n\n<!-- \n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Username </h5>\n\n          <h2 class="username">@{{user.username}} </h2>\n\n        </ion-item> -->\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Email </h5>\n\n          <h2 class="email">{{user.email}} </h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Phone number </h5>\n\n          <h2 class="phone">{{user.phoneNumber}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> City </h5>\n\n          <h2 class="city">{{user.city}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Profession </h5>\n\n          <h2 class="profession">{{user.profession}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Status </h5>\n\n          <h2 class="status">{{user.status}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Date of Birth </h5>\n\n          <h2 class="birth">{{user.birth}}</h2>\n\n      </ion-item>\n\n      \n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(29);
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












let EditprofilePage = class EditprofilePage {
    // HomePage
    // This is the page where the user is directed after successful login and email is confirmed.
    // A couple of profile management function is available for the user in this page such as:
    // Change name, profile pic, email, and password
    // The user can also opt for the deletion of their account, and finally logout.
    constructor(toastCtrl, navCtrl, modalCtrl, view, alertCtrl, navParams, app, logoutProvider, loadingProvider, imageProvider, angularfireDatabase, alertProvider, dataProvider) {
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
    ionViewDidLoad() {
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe((user) => {
            this.loadingProvider.hide();
            this.user = user;
            console.log("usernya", this.user);
            this.birth = this.user.birth;
        });
        console.log("birthhh", this.birth);
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
                            if (name.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.minLength) {
                                // Check if name contains characters and numbers only.
                                if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.pattern.test(name)) {
                                    this.loadingProvider.show();
                                    let profile = {
                                        displayName: name,
                                        photoURL: this.user.photoURL
                                    };
                                    // Update profile on Firebase
                                    __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updateProfile(profile)
                                        .then((success) => {
                                        // Update userData on Database.
                                        this.angularfireDatabase.object('/users/' + this.user.userId).update({
                                            realName: name,
                                            name: name
                                        }).then((success) => {
                                            __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.pattern.test(name); //Refresh validator
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
                                }
                                else {
                                    this.alertProvider.showErrorMessage('profile/invalid-chars-name');
                                }
                            }
                            else {
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
                                }
                                else {
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
                            if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                this.loadingProvider.show();
                                // Update email on Firebase.
                                __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then((success) => {
                                    // Update userData on Database.
                                    this.angularfireDatabase.object('/users/' + this.user.userId).update({
                                        email: email
                                    }).then((success) => {
                                        __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                        // Check if emailVerification is enabled, if it is go to verificationPage.
                                        if (__WEBPACK_IMPORTED_MODULE_9__login__["a" /* Login */].emailVerification) {
                                            if (!__WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.emailVerified) {
                                                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login__["a" /* Login */].verificationPage);
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
                            }
                            else {
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
                            console.log("nomer telpon", phoneNumber);
                            // Check if number's length is more than 13 characters
                            if (phoneNumber.length <= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNumberValidator.maxLength && phoneNumber.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNumberValidator.minLength) {
                                // Check if name contains characters and numbers only.
                                if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNumberValidator.pattern.test(phoneNumber)) {
                                    this.loadingProvider.show();
                                    let profile = {
                                        phoneNumber: phoneNumber,
                                    };
                                    // hasil dari comment10 baris dibawah
                                    this.angularfireDatabase.object('/users/' + this.user.userId).update({
                                        phoneNumber: phoneNumber
                                    }).then((success) => {
                                        __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNumberValidator.pattern.test(phoneNumber); //Refresh validator
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
                                }
                                else {
                                    this.alertProvider.showErrorMessage('profile/invalid-chars-number');
                                }
                            }
                            else {
                                this.alertProvider.showErrorMessage('profile/number-too-short');
                            }
                        }
                    }
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
                            if (profession.length <= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileProfessionValidator.maxLength && profession.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileProfessionValidator.minLength) {
                                // Check if profession contains characters.
                                if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileProfessionValidator.pattern.test(profession)) {
                                    this.loadingProvider.show();
                                    let profile = {
                                        profession: profession,
                                    };
                                    this.angularfireDatabase.object('/users/' + this.user.userId).update({
                                        profession: profession
                                    }).then((success) => {
                                        __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileProfessionValidator.pattern.test(profession); //Refresh validator
                                        this.alertProvider.showprofessionUpdatedMessage();
                                    }).catch((error) => {
                                        this.alertProvider.showErrorMessage('profile/error-update-profession');
                                    });
                                }
                                else {
                                    this.alertProvider.showErrorMessage('profile/invalid-chars-number');
                                }
                            }
                            else {
                                this.alertProvider.showErrorMessage('profile/number-too-short');
                            }
                        }
                    }
                }
            ]
        }).present();
    }
    // Change user's Status
    setStatus() {
        this.alert = this.alertCtrl.create();
        this.alert.setTitle('Select Status');
        this.alert.addInput({ type: 'radio', label: 'Single', value: 'Single', checked: true });
        this.alert.addInput({ type: 'radio', label: 'Married', value: 'Married' });
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
    saveProfile() {
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
                        let credential = __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"].EmailAuthProvider.credential(this.user.email, currentPassword);
                        // Check if currentPassword entered is correct
                        this.loadingProvider.show();
                        __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.reauthenticateWithCredential(credential)
                            .then((success) => {
                            let password = data["password"];
                            // Check if entered password is not the same as the currentPassword
                            if (password != currentPassword) {
                                if (password.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.minLength) {
                                    if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password)) {
                                        if (password == data["confirmPassword"]) {
                                            // Update password on Firebase.
                                            __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updatePassword(password)
                                                .then((success) => {
                                                this.loadingProvider.hide();
                                                __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password);
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
                                        }
                                        else {
                                            this.alertProvider.showErrorMessage('profile/passwords-do-not-match');
                                        }
                                    }
                                    else {
                                        this.alertProvider.showErrorMessage('profile/invalid-chars-password');
                                    }
                                }
                                else {
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
};
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editprofile',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\editprofile\editprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <!-- <img class="socioCss" src="assets/images/headerSocio.png" /> -->\n\n      <ion-title>Edit Profile</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="saveProfile()" >\n\n          <ion-icon class="edit-icon" name="checkmark" item-right></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="background" *ngIf="user">\n\n     <ion-list>\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Name </h5>\n\n          <h2 tappable (click)="setName()" class="name">{{user.name}} </h2>\n\n      </ion-item>\n\n\n\n      <!-- <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Username </h5>\n\n          <h2 tappable (click)="setUsername()" class="username">@{{user.username}} </h2>\n\n        </ion-item> -->\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Email </h5>\n\n          <h2 class="email">{{user.email}} </h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Phone number </h5>\n\n          <h2 tappable (click)="setPhone()" class="phoneNumber">{{user.phoneNumber}}</h2>\n\n      </ion-item>\n\n\n\n      <!-- <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> City </h5>\n\n          <h2 tappable (click)="setCity()" class="city">{{user.city}}</h2>\n\n      </ion-item> -->\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Profession </h5>\n\n          <h2 tappable (click)="setProfession()" class="profession">{{user.profession}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <h5 style="margin-bottom: 8px;"> Status </h5>\n\n          <h2 tappable (click)="setStatus()" class="status">{{user.status}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          <ion-label style="margin-bottom: 8px; color:#549AD4"> Date of Birth </ion-label>\n\n          <ion-datetime displayFormat="D/M/YYYY" min="1940" pickerFormat="D M YY" placeholder="{{user.birth}}" [(ngModel)]="birth"></ion-datetime>\n\n      </ion-item>\n\n      \n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\editprofile\editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
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






let FeedbackPage = class FeedbackPage {
    constructor(loadingProvider, alertProvider, dataProvider, navCtrl, navParams) {
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userId = this.navParams.get("userId");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad FeedbackPage');
    }
    sendFeedback() {
        this.loadingProvider.show();
        this.dataProvider.setFeedback().set({
            pesan: this.feedback,
            userId: this.userId,
            createdAt: __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMM-DD-YYYY-h:mm:ss-a')
        }).then(success => {
            this.alertProvider.showFeedbackSubmitMessage();
            this.loadingProvider.hide();
        }).catch(err => {
            this.alertProvider.showErrorMessage("fail-feedback");
            this.loadingProvider.hide();
        });
    }
};
FeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-feedback',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\feedback\feedback.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Komentar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h4>Setiap masukan darimu sangat berharga bagi kami. Baik kendala, error, atau saran setelah menggunakan aplikasi.</h4>\n\n  <ion-item>\n\n    <ion-textarea [(ngModel)]="feedback" class="textarea" rows="6" placeholder="Bagaimana pendapatmu tentang kami?"></ion-textarea>\n\n  </ion-item>\n\n  <button ion-button full color="primary" (click)="sendFeedback()" [disabled]="!feedback">Kirim</button>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\feedback\feedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


let AboutPage = class AboutPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutPage');
    }
};
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tentang</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>SocioEmpathy adalah aplikasi yang menghubungkan orang yang mengalami gangguan psikis dengan konselor dan psikolog profesional.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__choose_psg_choose_psg__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let CalendarPage = class CalendarPage {
    constructor(navCtrl, alertCtrl, dataProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.eventz = { startTime: new Date(), endTime: new Date(), allDay: false };
        this.temp = [];
        this.date = [];
        this.temp2 = [];
        this.eventSource = [];
        this.calendar = {
            mode: "month",
            currentDate: new Date()
        };
    }
    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'flex';
            });
        }
    }
    ionViewDidLoad() {
        this.loadingProvider.show();
        this.getSchedule();
    }
    // go to session consultation by date choosen
    sessionByDate() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__choose_psg_choose_psg__["a" /* ChoosePsgPage */], {
            selectedDay: this.selectedDay
        });
    }
    getSchedule() {
        this.dataProvider.getScheduling().subscribe(schedules => {
            this.index = 0;
            var temp = 1;
            schedules.forEach(schedule => {
                const date = __WEBPACK_IMPORTED_MODULE_2_moment__(schedule.key);
                const today = __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY-MM-DD");
                // calendar must be before expired date
                if (date.isAfter(today)) {
                    this.sessionStart = schedule.key + "T08:00:00";
                    this.sessionEnd = schedule.key + "T24:00:00";
                    this.eventSource.push({
                        title: schedule.key,
                        startTime: new Date(this.sessionStart),
                        endTime: new Date(this.sessionEnd),
                        allDay: false,
                    });
                    this.index++;
                    temp += 1;
                }
                else {
                    console.log("past");
                }
            });
            if (this.index < temp) {
                this.refreshData();
            }
            this.loadingProvider.hide();
        });
    }
    markDisabled(date) {
        var current = new Date();
        current.setDate(current.getDate() + 0);
        console.log('current', current);
        console.log('datedatedate', date);
        return date < current;
    }
    refreshData() {
        let eventData = this.eventz;
        eventData.startTime = new Date(12 - 2 - 1997);
        eventData.endTime = new Date(12 - 2 - 1997);
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
            this.eventSource = events;
            console.log("EVa: ", this.eventSource);
        });
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        let start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format("LLLL");
        let end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format("LLLL");
        let alert = this.alertCtrl.create({
            title: "" + "Detail",
            subTitle: "From: " + start + "<br>To: " + end,
            buttons: ["OK"]
        });
        alert.present();
    }
    onTimeSelected(ev) {
        var current = new Date();
        current.setDate(current.getDate() + 0);
        this.selectedDay = ev.selectedTime;
        this.isButtonActive = this.selectedDay > current;
        console.log("selectedDay: ", this.selectedDay);
    }
};
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-calendar",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\calendar\calendar.html"*/'<ion-header>\n\n  <!-- <ion-navbar hideBackButton color="primary"> -->\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Pilih Tanggal\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <div class="footer">\n\n  </div> -->\n\n  <h4 text-center>{{viewTitle}}</h4>\n\n  <calendar\n\n  [markDisabled]="markDisabled"\n\n  [eventSource]="eventSource" \n\n  [calendarMode]="calendar.mode" \n\n  [currentDate]="calendar.currentDate" \n\n  (onEventSelected)="onEventSelected($event)"\n\n  (onRangeChanged)="reloadSource(startTime, endTime)"\n\n  (onTitleChanged)="onViewTitleChanged($event)" \n\n  (onTimeSelected)="onTimeSelected($event)" \n\n  step="30" class="calendar">\n\n</calendar>\n\n</ion-content>\n\n<ion-footer>\n\n    <button *ngIf="isButtonActive == true" class="btn-pilih" ion-button (click)="sessionByDate()">Pilih</button>\n\n</ion-footer>\n\n<!-- KETERANGAN DI ATAS\n\neventSource: The data we feed to the calendar view\n\ncurrentDate: Needed to mark “today”\n\nonEventSelected: Handle a tap on a single event\n\nonTitleChanged: Happens when we swipe to a new month\n\nonTimeSelected: Happens when we select a day or time\n\nstep: Used for accuracy of a day or week view\n\n -->'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\calendar\calendar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePsgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_psg_profile_psg__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
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






let ChoosePsgPage = class ChoosePsgPage {
    constructor(alertCtrl, loadingProvider, dataProvider, navCtrl, navParams) {
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
    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'none';
            });
        }
    }
    ionViewDidLoad() {
        this.loadingProvider.show();
        setTimeout(() => {
            this.getKeySchedulingByDay();
        }, 1500);
        // display psychologist by available session
        if (this.session == "noSession") {
            this.warning = "Pilih Sesi";
        }
        else {
            this.refreshList();
        }
    }
    refreshList() {
        this.dataProvider.getListPsgBySessionAndDay(this.sessionByDay, this.session).subscribe(listpsg => {
            this.jumlahpsg = listpsg.length;
            for (let i = 0; i < listpsg.length; i++) {
                this.psgAvailable[i] = listpsg[i].key;
                this.dataProvider.getPsgAvailable(this.psgAvailable[i]).subscribe(list => {
                    console.log("list", list);
                    this.psgAva[i] = list;
                    this.psgAva[i].old = __WEBPACK_IMPORTED_MODULE_5_moment__(list.birth).toNow(true);
                    this.loadingProvider.hide();
                });
            }
        });
        console.log("psgAva", this.psgAva);
    }
    getKeySchedulingByDay() {
        this.dataProvider.getKeySchedulingByDay(this.sessionByDay).subscribe(sessions => {
            console.log("key sesinya di session", sessions);
            if (sessions.length > 0) {
                sessions.forEach(sesi => {
                    this.generateSessionToTime(sesi);
                    this.loadingProvider.hide();
                });
            }
            else {
                this.allSession = null;
                this.loadingProvider.hide();
            }
        });
    }
    generateSessionToTime(sesi) {
        switch (sesi.key) {
            case "session8":
                sesi.time = "08:00 - 09:00";
                this.allSession.push(sesi);
                break;
            case "session9":
                sesi.time = "09:00 - 10:00";
                this.allSession.push(sesi);
                break;
            case "session10":
                sesi.time = "10:00 - 11:00";
                this.allSession.push(sesi);
                break;
            case "session11":
                sesi.time = "11:00 - 12:00";
                this.allSession.push(sesi);
                break;
            case "session12":
                sesi.time = "12:00 - 13:00";
                this.allSession.push(sesi);
                break;
            case "session13":
                sesi.time = "13:00 - 14:00";
                this.allSession.push(sesi);
                break;
            case "session14":
                sesi.time = "14:00 - 15:00";
                this.allSession.push(sesi);
                break;
            case "session15":
                sesi.time = "15:00 - 16:00";
                this.allSession.push(sesi);
                break;
            case "session16":
                sesi.time = "16:00 - 17:00";
                this.allSession.push(sesi);
                break;
            case "session17":
                sesi.time = "17:00 - 18:00";
                this.allSession.push(sesi);
                break;
            case "session18":
                sesi.time = "18:00 - 19:00";
                this.allSession.push(sesi);
                break;
            case "session19":
                sesi.time = "19:00 - 20:00";
                this.allSession.push(sesi);
                break;
            case "session20":
                sesi.time = "20:00 - 21:00";
                this.allSession.push(sesi);
                break;
            case "session21":
                sesi.time = "21:00 - 22:00";
                this.allSession.push(sesi);
                break;
            case "session22":
                sesi.time = "22:00 - 23:00";
                this.allSession.push(sesi);
                break;
            case "session23":
                sesi.time = "23:00 - 24:00";
                this.allSession.push(sesi);
                break;
            default:
                return 0;
        }
    }
    // view detail psg
    viewPsg(psgId, old) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_psg_profile_psg__["a" /* ProfilePsgPage */], {
            psgId: psgId,
            old: old,
            selectedDay: this.sessionByDay
        });
        console.log("psg by id", psgId);
    }
    showSession() {
        console.log("sesssi alert", this.allSession);
        let alert = this.alertCtrl.create();
        alert.setTitle('Pilih Sesi');
        this.allSession.forEach(session => {
            alert.addInput({ type: 'radio', label: session.time, value: session.key });
        });
        alert.addButton('Kembali');
        alert.addButton({
            text: 'Pilih',
            handler: (data) => {
                this.loadingProvider.show();
                this.psgAva = [];
                this.testRadioOpen = false;
                this.testRadioResult = data;
                this.session = data;
                localStorage.setItem("sessionke", data);
                console.log('Radio data:', this.session);
                this.refreshList();
            }
        });
        alert.present();
    }
};
ChoosePsgPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-choose-psg',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\choose-psg\choose-psg.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Pilih Psikolog</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content  padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <span>{{ sessionByDay }}</span>\n\n    </ion-col>\n\n    <ion-col class="right" col-6>\n\n      <ion-icon name="md-people"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row *ngIf="allSession != null">\n\n    <ion-col class="btn-session" col-6>\n\n      <span (click)="showSession()" *ngIf="session == \'noSession\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;{{warning}} <ion-icon name="arrow-down"></ion-icon></span>    \n\n      <span (click)="showSession()" *ngIf="session == \'session8\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;08:00-09:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session9\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;09:00-10:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session10\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;10:00-11:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session11\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;11:00-12:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session12\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;12:00-13:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session13\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;13:00-14:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session14\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;14:00-15:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session15\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;15:00-16:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session16\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;16:00-17:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session17\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;17:00-18:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session18\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;18:00-19:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session19\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;19:00-20:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session20\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;20:00-21:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session21\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;21:00-22:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session22\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;22:00-23:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n      <span (click)="showSession()" *ngIf="session == \'session23\'">\n\n        <ion-icon name="ios-time-outline"></ion-icon>&nbsp;23:00-24:00 <ion-icon name="arrow-down"></ion-icon></span>\n\n                    \n\n      </ion-col>\n\n    <ion-col *ngIf="session == \'noSession\'" class="right" col-6>\n\n      <span>-</span>\n\n    </ion-col>\n\n    \n\n    <ion-col *ngIf="session !== \'noSession\'"class="right" col-6>\n\n        <span>{{jumlahpsg}}</span>\n\n    </ion-col>\n\n  \n\n  </ion-row>\n\n  <ion-list class="avatar-list">\n\n    <ion-item detail-push  *ngFor="let psg of psgAva" (click)="viewPsg(psg.userId,psg.old)">\n\n      <ion-avatar item-left><img src="{{ psg.img }}"></ion-avatar>\n\n      <h2>{{psg.name}}</h2>\n\n      <h6 *ngIf="psg.gender === \'Male\' "> <ion-icon name="male"  class= "gender"></ion-icon> {{psg.old}}</h6>\n\n      <h6 *ngIf="psg.gender === \'Female\' "> <ion-icon name="female" class="gender"></ion-icon> {{psg.old}}</h6>    \n\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="allSession == null" class="empty-list">\n\n    Tidak ada sesi tersedia. Pilih tanggal lain untuk mendapatkan sesi.\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\choose-psg\choose-psg.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ChoosePsgPage);

//# sourceMappingURL=choose-psg.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePsgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_booking__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
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






let ProfilePsgPage = class ProfilePsgPage {
    constructor(loadingProvider, dataProvider, navCtrl, navParams) {
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.psychologist = [];
        this.psgId = this.navParams.get("psgId");
        this.old = this.navParams.get("old");
        this.sessionByDay = __WEBPACK_IMPORTED_MODULE_5_moment__(this.navParams.get("selectedDay")).format('YYYY-MM-DD');
    }
    ionViewDidLoad() {
        this.loadingProvider.show();
        // get psg profile
        this.dataProvider.getPsgAvailable(this.psgId).subscribe((psychologist) => {
            this.loadingProvider.hide();
            this.psychologist = psychologist;
            console.log('ionViewDidLoad ProfilePsgPage', this.psychologist);
        });
    }
    bookingPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__booking_booking__["a" /* BookingPage */], {
            psgProfile: this.psychologist,
            selectedDay: this.sessionByDay
        });
    }
};
ProfilePsgPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile-psg',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\profile-psg\profile-psg.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profil Psikolog</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="bookingPage()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="background" *ngIf="psychologist">\n\n    <div class="profile">\n\n      <img src="{{psychologist.img}}" />\n\n    </div>\n\n    <!-- Show icon of logged in provider -->\n\n    <h4>\n\n      <span class="name">{{psychologist.name}} </span>\n\n    </h4>\n\n    <h6 *ngIf="psychologist.gender === \'Male\' "> <ion-icon name="male"  class="gender"></ion-icon>{{old}}</h6>\n\n    <h6 *ngIf="psychologist.gender === \'Female\' "> <ion-icon name="female" class="gender"></ion-icon>{{old}}</h6>\n\n    <!-- Profile Menu -->\n\n    <ion-list *ngIf="psychologist">\n\n      <ion-item>\n\n        <ion-label>Informasi</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h3>Pengalaman</h3>\n\n        <p>{{psychologist.description}}</p>\n\n        <br>\n\n        <h3>Email</h3>\n\n        <p>{{psychologist.email}}</p>\n\n        <br>\n\n        <h3>Domisili</h3>\n\n        <p>{{psychologist.province}}</p>\n\n        <br>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\profile-psg\profile-psg.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ProfilePsgPage);

//# sourceMappingURL=profile-psg.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let BookingPage = class BookingPage {
    constructor(dataProvider, alertCtrl, loadingProvider, angularfireDatabase, navCtrl, navParams) {
        this.dataProvider = dataProvider;
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
    ionViewDidLoad() {
        console.log('this.scheduleId', this.scheduleId);
        this.consultationTime();
        this.ticketUser();
    }
    ticketUser() {
        this.dataProvider.getTickets().subscribe(tickets => {
            this.tickets = tickets;
            console.log("ticketstickets", this.tickets);
        });
    }
    consultationTime() {
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
    }
    showConfirmBooking() {
        const confirm = this.alertCtrl.create({
            title: 'Yakin booking sekarang?',
            message: 'Jadwal konsultasi akan dibuat dengan psikolog yang bersangkutan',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Booking',
                    handler: () => {
                        this.createBookingData();
                    }
                }
            ]
        });
        confirm.present();
    }
    createBookingData() {
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
            .then(() => {
            console.log("sukses buat booking");
            var newTicket;
            newTicket = this.tickets.ticketTotal - 1;
            this.angularfireDatabase.object("/tickets/" + __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid).update({
                ticketTotal: newTicket
            });
        });
        // create data booking inside psg table as attribut "booking"
        this.angularfireDatabase.object('psg/' + this.psgProfile.userId + '/booking/' + this.createdAt)
            .update({
            seesionke: localStorage.getItem("sessionke"),
            id: this.createdAt
        })
            .then(() => {
            this.loadingProvider.hide();
            this.successAlert();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
            console.log("sukses update attribut booking di psg");
        });
    }
    successAlert() {
        let alert = this.alertCtrl.create({
            title: 'Berhasil booking psikolog',
            subTitle: 'Harap tunggu booking anda diterima oleh psikolog.',
            buttons: ['Ok']
        });
        alert.present();
    }
};
BookingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-booking',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\booking\booking.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cek Kembali</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="footer">\n\n     \n\n    <button disabled *ngIf="problem == \'\'" class="btn-pilih" ion-button (click)="showConfirmBooking()">BUAT JADWAL</button>\n\n    <button *ngIf="problem !== \'\'" class="btn-pilih" ion-button (click)="showConfirmBooking()">BUAT JADWAL</button>\n\n  </div>\n\n\n\n  <ion-list *ngIf="psgProfile">\n\n    <ion-item>\n\n      <ion-label stacked>Nama psikolog</ion-label>\n\n      <ion-input disabled value="{{psgProfile.name}}" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Tanggal Konsultasi</ion-label>\n\n      <ion-input disabled value="{{scheduleId}}" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Waktu Konsultasi</ion-label>\n\n      <ion-input  disabled value="{{consultation_time}}" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Masalah Anda <span class="mandatory">*</span> </ion-label>\n\n      <ion-textarea rows="3" ng-trim="false" ng-show="problem.trim()" [(ngModel)]="problem" type="text" placeholder="Cerita singkat tentang masalah anda"></ion-textarea>\n\n    </ion-item>\n\n    <p class="right">{{100 - problem.length}}</p>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\booking\booking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BookingPage);

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPacketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__consultation_consultation__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let BuyPacketPage = class BuyPacketPage {
    constructor(camera, loadingProvider, dataProvider, imageProvider, alertCtrl, navCtrl, navParams) {
        this.camera = camera;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        this.imageProvider = imageProvider;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.packet = this.navParams.get("packet");
        this.today = __WEBPACK_IMPORTED_MODULE_2_moment__().format('D MMM YYYY');
        this.day = __WEBPACK_IMPORTED_MODULE_2_moment__().format('HHmmssDDMMYYYY');
        this.isPopup = false;
    }
    ionViewDidLoad() {
        this.loadingProvider.show();
        this.generateInvoice();
        this.dataProvider.getCurrentUser().subscribe((user) => {
            this.loadingProvider.hide();
            this.user = user;
        });
    }
    ionViewWillLeave() {
        this.tabsOn();
    }
    btnCancel() {
        this.isPopup = false;
    }
    generateInvoice() {
        //string = SOCIO + Fractional Second minute second hour
        const time = __WEBPACK_IMPORTED_MODULE_2_moment__().format('SSSmmssHH');
        this.invoice = 'SOCIO' + time;
    }
    uploadNota() {
        // this.isPopup = true;
        this.goUpload();
    }
    finish() {
        this.isFinishPayment = true;
    }
    goUpload() {
        this.newInvoice = {
            userId: this.user.userId,
            invoice: this.invoice,
            code: this.packet.code,
            dateCreated: new Date().toString(),
            confirmationAdmin: 'waiting'
        };
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Unggah bukti transfer',
            message: 'ingin unggah foto dari galeri?',
            buttons: [
                {
                    text: 'Ambil foto',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.imageProvider.setNotaPhoto(this.newInvoice, this.camera.PictureSourceType.CAMERA);
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__consultation_consultation__["a" /* ConsultationPage */]);
                        this.tabsOn();
                    }
                }, {
                    text: 'Ambil dari Galeri',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.imageProvider.setNotaPhoto(this.newInvoice, this.camera.PictureSourceType.PHOTOLIBRARY);
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__consultation_consultation__["a" /* ConsultationPage */]);
                        this.tabsOn();
                    }
                }, {
                    text: 'Kembali',
                    handler: data => { }
                },
            ]
        }).present();
    }
    tabsOn() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'flex';
            });
        }
    }
};
BuyPacketPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-buy-packet',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\buy-packet\buy-packet.html"*/'<ion-header>\n\n  <ion-navbar> <ion-title>Cara Pembayaran</ion-title> </ion-navbar>\n\n</ion-header>\n\n<!-- content nota -->\n\n<ion-content padding *ngIf="isPopup == true">\n\n  <div class="nota">\n\n    <div class="cancel" (click)="btnCancel()">X</div>\n\n    <p class="nota-unggah" (click)="goUpload()" >Unggah nota</p>\n\n    <img class="nota-img" src="">\n\n    <div class="btn-upload">\n\n      Unggah nota\n\n    </div>\n\n  </div>\n\n  </ion-content>\n\n<!-- close content nota -->\n\n\n\n  <ion-content padding  *ngIf="isPopup == false">\n\n    <ion-list radio-group>\n\n    <ion-list-header> Detil Paket </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Nama Paket</ion-col>\n\n        <ion-col col-6 class="right-side">: {{ packet.packets_name }}</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Jumlah tiket</ion-col>\n\n        <ion-col col-6 class="right-side"\n\n          >: {{ packet.ticket }} (berlaku\n\n          {{ packet.expired_date }} hari)</ion-col\n\n        >\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Invoice</ion-col>\n\n        <ion-col col-6 class="right-side">: {{ invoice }}</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Tanggal</ion-col>\n\n        <ion-col col-6 class="right-side">: {{ today }}</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n    <ion-item class="price">\n\n      <ion-row>\n\n        <ion-col col-6>Harga</ion-col>\n\n        <ion-col col-6 class="right-side"\n\n          >: Rp{{ packet.priceAfterDiscount }}</ion-col\n\n        >\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- Petunjuk -->\n\n  <ion-list radio-group>\n\n    <ion-list-header> Petunjuk Pembayaran </ion-list-header>\n\n\n\n    <div class="petunjuk">\n\n      <ion-row>\n\n        <ion-col col-1>1.</ion-col>\n\n        <ion-col col-11>Lakukan pembayaran tepat sesuai dengan nominal yang ditagihkan.</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-1>2.</ion-col>\n\n        <ion-col col-11>Lakukan transfer ke nomor rekening yang tertera di bawah ini.</ion-col>\n\n        <ion-row>\n\n          <ion-col class="imgBank" col-5>\n\n            <img src="assets/images/bni.png"/>\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <br>\n\n            <b>\n\n              <span>0324001359</span><br/>\n\n              <span>Guntur Putra Pratama</span><br/>\n\n            </b>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-1>3.</ion-col>\n\n        <ion-col col-11>Setelah transfer, segera lakukan konfirmasi pembayaran dengan cara\n\n          mengirimkan/mengunggah bukti transfer pada proses selanjutnya.</ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer *ngIf="isPopup == false">\n\n    <button class="btn-pilih" ion-button (click)="uploadNota()">Unggah bukti transfer</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\buy-packet\buy-packet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BuyPacketPage);

//# sourceMappingURL=buy-packet.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let InvoiceListPage = class InvoiceListPage {
    constructor(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invoices = [];
        this.date = [];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad InvoiceListPage');
        this.getLisInvoicetByUser();
    }
    getLisInvoicetByUser() {
        let i = 0;
        this.dataProvider.getInvoiceByUser().subscribe(invoice => {
            this.invoices = invoice;
            invoice.forEach(getdate => {
                this.date[i] = __WEBPACK_IMPORTED_MODULE_3_moment__(getdate.dateCreated).format('D MMM YYYY HH:mm');
                console.log("this.date[i]", this.date[i]);
                i += 1;
            });
            console.log("invoices", this.invoices);
        });
    }
    ionViewWillLeave() {
        this.tabsFlex();
    }
    tabsFlex() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'flex';
            });
        }
    }
};
InvoiceListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-invoice-list',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\invoice-list\invoice-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Invoice</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      <ion-item *ngFor="let invoice of invoices;let i = index ">\n\n        <ion-avatar item-end>\n\n          <img src="{{invoice.nota_url}}">\n\n        </ion-avatar>\n\n        <h2>No. Invoice: <b>{{invoice.invoice}}</b></h2>\n\n        <p *ngIf="invoice.confirmationAdmin == \'waiting\'">Dibuat {{date[i]}} | <span class="waiting">{{invoice.confirmationAdmin}}</span></p>\n\n        <p *ngIf="invoice.confirmationAdmin == \'accept\'">{{date[i]}} | <span class="accept" >{{invoice.confirmationAdmin}}</span></p>\n\n        <p *ngIf="invoice.confirmationAdmin == \'reject\'">{{date[i]}} | <span class="reject" >{{invoice.confirmationAdmin}}</span></p>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\invoice-list\invoice-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], InvoiceListPage);

//# sourceMappingURL=invoice-list.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
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









let VerificationPage = class VerificationPage {
    constructor(navCtrl, alertCtrl, navParams, app, logoutProvider, loadingProvider, angularfireDatabase, alertProvider) {
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
    ionViewDidLoad() {
        // Set our routeGuard variables to false, to not allow rereouting.
        this.emailVerified = false;
        this.isLoggingOut = false;
        // Get user data and send an email verification automatically.
        this.createUserData();
        //this.getUserData();
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
    }
    ionViewCanLeave() {
        // routeGuard to prevent from leaving this view unless email is verified, or user is logging out.
        if (this.emailVerified || this.isLoggingOut) {
            return true;
        }
        else {
            return false;
        }
    }
    // Get user data from the logged in Firebase user to show on html markup.
    // getUserData() {
    //   let user = firebase.auth().currentUser;
    //   var userId, name, provider, img, email;
    //   let providerData = user.providerData[0];
    //   userId = user.uid;
    //   console.log(user.displayName + providerData.displayName)
    //   // Retrieve name from Firebase user
    //   if (user.displayName || providerData.displayName) {
    //     name = user.displayName;
    //     name = providerData.displayName;
    //   } else {
    //     name = "Pengguna Baru";
    //   }
    //   // Retrieve provider from Firebase user
    //   if (providerData.providerId == 'password') {
    //     provider = "Firebase";
    //   } else if (providerData.providerId == 'facebook.com') {
    //     provider = "Facebook";
    //   } else if (providerData.providerId == 'google.com') {
    //     provider = "Google";
    //   }
    //   // Retrieve photoURL from Firebase user
    //   if (user.photoURL || providerData.photoURL) {
    //     img = user.photoURL;
    //     img = providerData.photoURL;
    //   } else {
    //     img = "assets/images/profile.png";
    //   }
    //   // Retrieve email from Firebase user
    //   email = user.email;
    //   // Set to user variable for our markup html
    //   this.user = {
    //     userId: userId,
    //     name: name,
    //     provider: provider,
    //     img: img,
    //     email: email
    //   };
    // }
    // Send an email verification to the user's email.
    sendEmailVerification() {
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.sendEmailVerification()
            .then((success) => {
            this.alertProvider.showEmailVerificationSentMessage(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email);
            this.loadingProvider.hide();
        });
    }
    // Set the user email
    setEmail() {
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
                    handler: data => { }
                },
                {
                    text: 'Save',
                    handler: data => {
                        let email = data["email"];
                        // Check if entered email is different from the current email
                        if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email != email) {
                            // Check if email is valid.
                            if (__WEBPACK_IMPORTED_MODULE_6__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                this.loadingProvider.show();
                                // Update email on Firebase
                                __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then((success) => {
                                    __WEBPACK_IMPORTED_MODULE_6__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                    this.loadingProvider.hide();
                                    // Clear the existing interval because when we call ionViewDidLoad, another interval will be created.
                                    clearInterval(this.checkVerified);
                                    // Call ionViewDidLoad again to update user on the markup and automatically send verification mail.
                                    this.ionViewDidLoad();
                                    // Update the user data on the database if it exists.
                                    __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('users/' + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).once('value')
                                        .then((account) => {
                                        if (account.val()) {
                                            this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).update({
                                                email: email
                                            });
                                        }
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
                            }
                            else {
                                this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                }
            ]
        }).present();
    }
    // Clear the interval, and log the user out.
    logout() {
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: data => {
                        // Clear the verification check interval.
                        clearInterval(this.checkVerified);
                        // Set our routeGuard to true, to enable changing views.
                        this.isLoggingOut = true;
                        // Log the user out.
                        this.logoutProvider.logout();
                    }
                }
            ]
        }).present();
    }
    createUserData() {
        __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]()
            .ref("/users/" + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid)
            .once("value")
            .then(account => {
            // No database data yet, create user data on database
            if (!account.val()) {
                // this.loadingProvider.show();
                let user = __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser;
                // declare
                var userId, name, provider, img, email;
                let providerData = user.providerData[0];
                userId = user.uid;
                // Get name from Firebase user.
                if (user.displayName || providerData.displayName) {
                    name = user.displayName;
                    name = providerData.displayName;
                }
                else {
                    name = localStorage.getItem("displayName");
                }
                // Set default username based on name and userId.
                let username = name.replace(/ /g, "") + userId.substring(0, 8);
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
                this.user = {
                    userId: userId,
                    name: name,
                    provider: provider,
                    img: img,
                    email: email
                };
                // Set default description.
                let description = "Hello! I am a new SocioEmpathy user.";
                // set default displayName to Firebase
                // Insert data on our database using AngularFire.
                this.angularfireDatabase
                    .object("/users/" + userId)
                    .set({
                    userId: userId,
                    displayName: localStorage.getItem("displayName"),
                    name: name,
                    username: username,
                    anonymouse: "false",
                    realName: name,
                    provider: provider,
                    img: img,
                    devices_token: "",
                    gender: localStorage.getItem("gender"),
                    email: email,
                    phoneNumber: localStorage.getItem("phoneNumber"),
                    description: description,
                    dateCreated: new Date().toString(),
                    city: "None",
                    status: "None",
                    birth: "None",
                    profession: "None",
                    role: "client",
                    termofcondition: "setuju"
                })
                    .then(() => {
                    this.loadingProvider.hide();
                });
                this.angularfireDatabase
                    .object("/tickets/" + userId)
                    .set({
                    userId: userId,
                    ticketTotal: 3,
                    code: '',
                    expiredDate: __WEBPACK_IMPORTED_MODULE_8_moment__().add(14, 'days').toString(),
                    isExpired: false
                })
                    .then(() => {
                    this.loadingProvider.hide();
                });
            }
        });
    }
};
VerificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-verification',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\verification\verification.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Verifikasi email anda</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="user">\n\n    <div class="profile">\n\n      <img src="{{user.img}}" tappable (click)="setPhoto()" />\n\n    </div>\n\n    <!-- Show icon of logged in provider -->\n\n    <h4>\n\n      <span style="color: #000000">{{user.name}} </span>\n\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n\n    </h4>\n\n    <div class="divider"></div>\n\n    <p>Email verifikasi dikirim ke: <span>{{user.email}}</span>.</p>\n\n    <!-- Verification Menu -->\n\n    <ion-list>\n\n      <ion-item no-lines tappable (click)="sendEmailVerification()">\n\n        Kirim Ulang Email Konfirmasi\n\n        <ion-icon name="md-contact" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item no-lines tappable (click)="setEmail()">\n\n        Ganti Alamat Email\n\n        <ion-icon name="md-mail-open" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item no-lines tappable (click)="logout()">\n\n        Keluar\n\n        <ion-icon name="md-log-out" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\verification\verification.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */]])
], VerificationPage);

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let SignupPage = class SignupPage {
    constructor(loginProvider, formBuilder, navCtrl, navParams) {
        this.loginProvider = loginProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.phoneNumber = "";
        // It's important to hook the navController to our loginProvider.
        this.loginProvider.setNavController(this.navCtrl);
        // Create our forms and their validators based on validators set on validator.ts.
        this.emailPasswordForm = formBuilder.group({
            displayName: __WEBPACK_IMPORTED_MODULE_3__validator__["a" /* Validator */].displayNameValidator,
            email: __WEBPACK_IMPORTED_MODULE_3__validator__["a" /* Validator */].emailValidator,
            password: __WEBPACK_IMPORTED_MODULE_3__validator__["a" /* Validator */].passwordValidator,
            phoneNumber: __WEBPACK_IMPORTED_MODULE_3__validator__["a" /* Validator */].phoneValidator,
            gender: __WEBPACK_IMPORTED_MODULE_3__validator__["a" /* Validator */].genderValidator
        });
        this.masks = {
            phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }
    register() {
        let unmaskedData = {
            phoneNumber: this.phoneNumber.replace(/\D+/g, '')
        };
        console.log("this.emailPasswordForm.valuegender", this.emailPasswordForm.value["phoneNumber"]);
        this.loginProvider.register(this.emailPasswordForm.value["displayName"], this.emailPasswordForm.value["email"], this.emailPasswordForm.value["password"], this.emailPasswordForm.value["phoneNumber"], this.emailPasswordForm.value["gender"]);
    }
    back() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    }
};
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar class="navbar">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="backCss">\n\n    <div class="top">\n\n      <img src="assets/images/SocioEmpathy_Blue.png" />\n\n    </div>\n\n    <div class="bottom">\n\n      <div class="buttons">\n\n        <div class="form">\n\n          <form [formGroup]="emailPasswordForm">\n\n            <ion-list>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">Nama</ion-label>\n\n                <ion-input type="text" formControlName="displayName" placeholder="Masukkan Nama Alias"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">Email</ion-label>\n\n                <ion-input type="email" formControlName="email" placeholder="Masukkan Email"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">Password</ion-label>\n\n                <ion-input type="password" formControlName="password" placeholder="Masukkan Password"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">No. Handphone</ion-label>\n\n                <ion-input type="number" [(ngModel)]="phoneNumber" formControlName="phoneNumber" placeholder="Masukkan Nomer Handphone" [textMask]="{mask: masks.phoneNumber}"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked color="theblues">Jenis Kelamin</ion-label>\n\n                <ion-select formControlName="gender" placeholder="Pilih Gender" style="margin-right:27%; color:black">\n\n                  <ion-option style="margin-right:80%; color:#549AD4" value="Male">Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-option>\n\n                  <ion-option style="margin-right:80%; color:#549AD4" value="Female">Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n\n\n            </ion-list>\n\n            <button ion-button tappable (click)="register()" [disabled]="!emailPasswordForm.valid">SIGN UP</button>\n\n          </form>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 528:
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


let AchievDetailPage = class AchievDetailPage {
    constructor(navCtrl, navParams, platform, changeDetectorRef) {
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
                    `
          Pertama, 
          `;
                break;
            }
            case "2": {
                this.task = "Task 2";
                this.info =
                    `Istirahat 
          `;
                break;
            }
            case "3": {
                this.task = "Task 3";
                this.info =
                    `Lihatlah
          `;
                break;
            }
            case "4": {
                this.task = "Task 4";
                this.info =
                    `Jika
          `;
                break;
            }
            default: {
                this.info =
                    `Teruslah
          `;
                break;
            }
        }
    }
};
AchievDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-achiev-detail',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\achiev-detail\achiev-detail.html"*/'<!--\n\n  Generated template for the AchievDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar [color]="isRecording ? \'danger\' : \'primary\'">\n\n    <ion-title>{{task}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>Ceritakan masalahmu hari ini</p>\n\n\n\n  <button ion-button (click)="getPermissions()">Get Permission</button>\n\n  <button ion-button (click)="startListening()">Start listening</button>\n\n  <button ion-button (click)="stopListening()" *ngIf="isIos()">Stop Listening</button>\n\n\n\n  <ion-card>\n\n    <ion-card-header>This is wath you say... </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item *ngFor="let match of matches">\n\n          {{ match }}\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\achiev-detail\achiev-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], AchievDetailPage);

//# sourceMappingURL=achiev-detail.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__ = __webpack_require__(532);
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




let FcmProvider = class FcmProvider {
    constructor(afd, fcmNative, toastCtrl) {
        this.afd = afd;
        this.fcmNative = fcmNative;
        this.toastCtrl = toastCtrl;
    }
    // Get permission from the user
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            this.fcmNative.getToken().then(token => {
                console.log("token", token);
                return this.saveTokenToDatabaseRealtime(token);
            });
        });
    }
    // Save the token to DatabaseRealtime 
    saveTokenToDatabaseRealtime(token) {
        if (!token)
            return;
        // create db Notifications( devices_token
        const devicesRef = this.afd.object("/devices_token/" + token);
        localStorage.setItem('devices_token', token);
        const docData = {
            token,
            userId: "uid_client",
        };
        return devicesRef.set(docData);
    }
    // Listen to incoming FCM messages
    listenToNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fcmNative.onNotification().subscribe(data => {
                if (data.wasTapped) {
                    console.log("Received in background");
                    console.log(data);
                }
                else {
                    this.presentToast(data.body);
                }
                ;
            });
        });
    }
    presentToast(body) {
        const toast = this.toastCtrl.create({
            message: 'New Message ' + body,
            duration: 3000
        });
        toast.present();
    }
};
FcmProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]])
], FcmProvider);

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let RequestsPage = class RequestsPage {
    // RequestsPage
    // This is the page where the user can see their friend requests sent and received.
    constructor(navCtrl, navParams, dataProvider, alertCtrl, loadingProvider, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
    }
    ionViewDidLoad() {
        this.loadingProvider.show();
        // Get user info
        this.dataProvider.getCurrentUser().subscribe((account) => {
            this.account = account;
            console.log("para account", this.account);
            // Get friendRequests and requestsSent of the user.
            this.dataProvider.getRequests(this.account.userId).subscribe((requests) => {
                // friendRequests.
                console.log("para request", requests);
                if (requests) {
                    this.friendRequests = [];
                    requests.forEach((userId) => {
                        this.dataProvider.getUser(userId).subscribe((sender) => {
                            this.addOrUpdateFriendRequest(sender);
                        });
                    });
                }
                else {
                    this.friendRequests = [];
                }
                // requestsSent.
                if (requests.requestsSent) {
                    this.requestsSent = [];
                    requests.forEach((userId) => {
                        this.dataProvider.getUser(userId).subscribe((receiver) => {
                            this.addOrUpdateRequestSent(receiver);
                        });
                    });
                }
                else {
                    this.requestsSent = [];
                }
                this.loadingProvider.hide();
            });
        });
    }
    // Add or update friend request only if not yet friends.
    addOrUpdateFriendRequest(sender) {
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
    }
    // Add or update requests sent only if the user is not yet a friend.
    addOrUpdateRequestSent(receiver) {
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
    }
    // Back
    back() {
        this.navCtrl.pop();
    }
    // Accept Friend Request.
    acceptFriendRequest(user) {
        console.log('usernya', user);
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
                        this.firebaseProvider.deleteFriendRequest(user.userId);
                    }
                },
                {
                    text: 'Accept Request',
                    handler: () => {
                        this.firebaseProvider.acceptFriendRequest(user.userId);
                    }
                }
            ]
        }).present();
    }
    // Cancel Friend Request sent.
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
                        this.firebaseProvider.cancelFriendRequest(user.userId);
                    }
                }
            ]
        }).present();
    }
    // Checks if user is already friends with this user.
    isFriends(userId) {
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
    }
    // View user.
    viewUser(userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    }
};
RequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-requests',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\requests\requests.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Friend Requests</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friend requests sent or received. -->\n\n  <div class="empty-list" *ngIf="(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)">\n\n    <h1><ion-icon name="md-filing"></ion-icon></h1>\n\n    <p>Uh-oh! There are no pending friend requests right now.</p>\n\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n\n  </div>\n\n  <!-- Show friend requests received. -->\n\n  <ion-list class="avatar-list" *ngIf="friendRequests && friendRequests.length > 0">\n\n    <ion-item *ngFor="let friendRequest of friendRequests" no-lines tappable (click)="viewUser(friendRequest.$key)">\n\n      <ion-fab middle right>\n\n        <button ion-fab mini tappable (click)="acceptFriendRequest(friendRequest); $event.stopPropagation();">\n\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{friendRequest.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friendRequest.name}}</h2>\n\n      <p>has sent you a friend request.</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- Show friend requests sent. -->\n\n  <ion-list class="avatar-list" *ngIf="requestsSent && requestsSent.length > 0">\n\n    <ion-item *ngFor="let requestSent of requestsSent" no-lines tappable (click)="viewUser(requestSent.$key)">\n\n      <ion-fab middle right>\n\n        <button ion-fab mini tappable (click)="cancelFriendRequest(requestSent); $event.stopPropagation();">\n\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{requestSent.img}}">\n\n      </ion-avatar>\n\n      <h2>{{requestSent.name}}</h2>\n\n      <p>friend request sent.</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\requests\requests.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase__["a" /* FirebaseProvider */]])
], RequestsPage);

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_status_payment_status__ = __webpack_require__(622);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PaymentPage = class PaymentPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PaymentPage');
    }
    next() {
        // this.navCtrl.push(Payment1Page);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_status_payment_status__["a" /* PaymentStatusPage */]);
    }
};
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment\payment.html"*/'<!--\n\n  Generated template for the PaymentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="footer">\n\n    <button class="btn-pilih" ion-button (click)="next()">LANJUT</button>\n\n  </div>\n\n\n\n\n\n  <!-- detail pembayaran -->\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Detail Pembayaran\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Jenis Produk</ion-col>\n\n        <ion-col col-6 class="right-side">Lovepoints</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Nominal Lovepoints</ion-col>\n\n        <ion-col col-6 class="right-side">100</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Harga</ion-col>\n\n        <ion-col col-6 class="right-side">Rp100.000,00</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>No. Invoice</ion-col>\n\n        <ion-col col-6 class="right-side">#20319312931209</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- Petunjuk -->\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Petunjuk Pembayaran\n\n    </ion-list-header>\n\n\n\n    <div class="petunjuk">\n\n\n\n      <ion-row>\n\n        <ion-col col-1>1.</ion-col>\n\n        <ion-col col-11>Lakukan pembayaran tepat sesuai dengan nominal yang ditagihkan.</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-1>2.</ion-col>\n\n        <ion-col col-11>Lakukan transfer ke salah satu nomor rekening yang tertera di bawah ini.</ion-col>\n\n        <ion-row>\n\n          <ion-col class="imgBank" col-5>\n\n            <img src="../assets/images/bni.png">\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <span>a.n atas nama siapa</span>\n\n            <br>\n\n            <span>212893183891</span>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col class="imgBank" col-5>\n\n            <img src="../assets/images/bri.png">\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <span>a.n atas nama siapa</span>\n\n            <br>\n\n            <span>212893183891</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-1>3.</ion-col>\n\n        <ion-col col-11>Masukkan nomor Invoice di berita transfer.</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-1>4.</ion-col>\n\n        <ion-col col-11>Setelah transfer, segera lakukan konfirmasi pembayaran dengan cara mengirimkan/mengunggah bukti transfer pada proses\n\n          selanjutnya.</ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PaymentStatusPage = class PaymentStatusPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PaymentStatusPage');
    }
    finish() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.transform = 'translateY(0)';
            });
        } // end if
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__messages_messages__["a" /* MessagesPage */]);
    }
};
PaymentStatusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment-status',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\payment-status\payment-status.html"*/'<!--\n\n  Generated template for the PaymentStatusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <div class="footer">\n\n        <button class="btn-pilih" ion-button (click)="finish()">SELESAI</button>\n\n      </div>\n\n\n\n\n\n  <ion-navbar>\n\n    <ion-title>Payment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="center">\n\n  <img src="../assets/images/lovepoints.png">\n\n  <h3>Pembayaran Berhasil</h3>\n\n  <p>Terima kasih telah melakukan transaksi di SocioEmpathy</p>\n\n  <p class="justify"> \n\n      Silahkan menunggu email verifikasi transaksi dari kami maksdimal \n\n      dalam 1x24 jam. Lovepoints akan bertambah secara otomatis setelah di verifikasi.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\payment-status\payment-status.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PaymentStatusPage);

//# sourceMappingURL=payment-status.js.map

/***/ }),

/***/ 628:
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


let TransactionPage = class TransactionPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad TransactionPage');
    }
};
TransactionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transaction',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\transaction\transaction.html"*/'<!--\n\n  Generated template for the TransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Transaction</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Top Up\n\n    </ion-list-header>\n\n    \n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-6>Nominal Lovepoints</ion-col>\n\n        <ion-col col-6 class="right-side">100</ion-col>\n\n      </ion-row>     \n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-row>\n\n          <ion-col col-6>Harga</ion-col>\n\n          <ion-col col-6 class="right-side">Rp100.000,00</ion-col>\n\n        </ion-row>     \n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-row>\n\n            <ion-col col-6>No. Invoice</ion-col>\n\n            <ion-col col-6 class="right-side">#91232389138</ion-col>\n\n          </ion-row>     \n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-row>\n\n              <ion-col col-6>Tanggal</ion-col>\n\n              <ion-col col-6 class="right-side">21 Maret 2018</ion-col>\n\n            </ion-row>     \n\n          </ion-item>\n\n      \n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\transaction\transaction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TransactionPage);

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(621);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TopupPage = class TopupPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad TopupPage');
    }
    next() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    }
};
TopupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-topup',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\topup\topup.html"*/'<!--\n\n  Generated template for the TopupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Top Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="footer">\n\n    <button class="btn-pilih" ion-button (click)="next()">LANJUT</button>\n\n  </div>\n\n\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Nominal Lovepoints\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left checked="true" value="100"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        100 Lovepoints\n\n        <span class="price">Rp100.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left value="200"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        200 Lovepoints\n\n        <span class="price">Rp200.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left value="300"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        300 Lovepoints\n\n        <span class="price">Rp300.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left value="400"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        400 Lovepoints\n\n        <span class="price">Rp400.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-radio item-left value="500"></ion-radio>\n\n      <ion-label>\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        500 Lovepoints\n\n        <span class="price">Rp500.000,00</span>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\topup\topup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TopupPage);

//# sourceMappingURL=topup.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(635);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_comment_comment__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_mood_tracker_mood_tracker__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_docver_reg_docver_reg__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_boarding_boarding__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_achievement_achievement__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_duplicate_message_duplicate_message__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_time_line_time_line__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_calendar__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_firebase__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_achiev_detail_achiev_detail__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_verification_verification__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_messages_messages__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_friends_friends__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_search_people_search_people__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_requests_requests__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_user_info_user_info__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_new_message_new_message__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_message_message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_payment_payment__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_pay_detail_pay_detail__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_pay_success_pay_success__ = __webpack_require__(1044);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_buy_premium_buy_premium__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_payment1_payment1__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_payment2_payment2__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_payment3_payment3__ = __webpack_require__(1048);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_profile_profile__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_editprofile_editprofile__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_termofcondition_termofcondition__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_dynamiclink_dynamiclink__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_logout__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_image__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_firebase__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_fcm_fcm__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_angularfire2__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angularfire2_auth__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_angularfire2_storage__ = __webpack_require__(1054);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_ionic2_calendar__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pipes_friend__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pipes_search__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pipes_conversation__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pipes_date__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_docver_docver__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_docver_plus_docver_plus__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_testaja_testaja__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_consultation_consultation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_calendar_calendar__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_add_schedule_add_schedule__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_choose_psg_choose_psg__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_profile_psg_profile_psg__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_booking_booking__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_lovepoint_store_lovepoint_store__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_topup_topup__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_transaction_transaction__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_payment_status_payment_status__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_image_modal_image_modal__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_buy_packet_buy_packet__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_invoice_list_invoice_list__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__node_modules_ionic_native_app_update__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__node_modules_ionic_native_app_version__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__node_modules_ionic_native_in_app_browser_ngx__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_feedback_feedback__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_about_about__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































// Guntur









































__WEBPACK_IMPORTED_MODULE_52_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_57__login__["a" /* Login */].firebaseConfig);
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_83__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_82__pages_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_termofcondition_termofcondition__["a" /* TermofconditionPage */],
            __WEBPACK_IMPORTED_MODULE_78__pages_invoice_list_invoice_list__["a" /* InvoiceListPage */],
            __WEBPACK_IMPORTED_MODULE_77__pages_buy_packet_buy_packet__["a" /* BuyPacketPage */],
            __WEBPACK_IMPORTED_MODULE_75__pages_payment_status_payment_status__["a" /* PaymentStatusPage */],
            __WEBPACK_IMPORTED_MODULE_73__pages_topup_topup__["a" /* TopupPage */],
            __WEBPACK_IMPORTED_MODULE_74__pages_transaction_transaction__["a" /* TransactionPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_lovepoint_store_lovepoint_store__["a" /* LovepointStorePage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_booking_booking__["a" /* BookingPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_profile_psg_profile_psg__["a" /* ProfilePsgPage */],
            __WEBPACK_IMPORTED_MODULE_69__pages_choose_psg_choose_psg__["a" /* ChoosePsgPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_add_schedule_add_schedule__["a" /* AddSchedulePage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_consultation_consultation__["a" /* ConsultationPage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_testaja_testaja__["a" /* TestajaPage */],
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
            __WEBPACK_IMPORTED_MODULE_59__pipes_friend__["a" /* FriendPipe */],
            __WEBPACK_IMPORTED_MODULE_61__pipes_conversation__["a" /* ConversationPipe */],
            __WEBPACK_IMPORTED_MODULE_60__pipes_search__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_62__pipes_date__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_6__pages_time_line_time_line__["a" /* TimeLinePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_duplicate_message_duplicate_message__["a" /* DuplicateMessagePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_achievement_achievement__["a" /* AchievementPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_boarding_boarding__["a" /* BoardingPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_achiev_detail_achiev_detail__["a" /* AchievDetailPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_dynamiclink_dynamiclink__["a" /* DynamiclinkPage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_docver_docver__["a" /* DocverPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_docver_plus_docver_plus__["a" /* DocverPlusPage */],
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
            __WEBPACK_IMPORTED_MODULE_76__pages_image_modal_image_modal__["a" /* ImageModalPage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_calendar_calendar__["a" /* CalendarPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_58_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */], {
                scrollAssist: false,
                autoFocusAssist: false
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_53_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_57__login__["a" /* Login */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_55_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_54_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_56_angularfire2_storage__["a" /* AngularFireStorageModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_83__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_82__pages_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_termofcondition_termofcondition__["a" /* TermofconditionPage */],
            __WEBPACK_IMPORTED_MODULE_78__pages_invoice_list_invoice_list__["a" /* InvoiceListPage */],
            __WEBPACK_IMPORTED_MODULE_77__pages_buy_packet_buy_packet__["a" /* BuyPacketPage */],
            __WEBPACK_IMPORTED_MODULE_75__pages_payment_status_payment_status__["a" /* PaymentStatusPage */],
            __WEBPACK_IMPORTED_MODULE_73__pages_topup_topup__["a" /* TopupPage */],
            __WEBPACK_IMPORTED_MODULE_74__pages_transaction_transaction__["a" /* TransactionPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_lovepoint_store_lovepoint_store__["a" /* LovepointStorePage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_booking_booking__["a" /* BookingPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_profile_psg_profile_psg__["a" /* ProfilePsgPage */],
            __WEBPACK_IMPORTED_MODULE_69__pages_choose_psg_choose_psg__["a" /* ChoosePsgPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_add_schedule_add_schedule__["a" /* AddSchedulePage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_consultation_consultation__["a" /* ConsultationPage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_testaja_testaja__["a" /* TestajaPage */],
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
            __WEBPACK_IMPORTED_MODULE_43__pages_dynamiclink_dynamiclink__["a" /* DynamiclinkPage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_docver_docver__["a" /* DocverPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_docver_plus_docver_plus__["a" /* DocverPlusPage */],
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
            __WEBPACK_IMPORTED_MODULE_76__pages_image_modal_image_modal__["a" /* ImageModalPage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_calendar_calendar__["a" /* CalendarPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_79__node_modules_ionic_native_app_update__["a" /* AppUpdate */],
            __WEBPACK_IMPORTED_MODULE_80__node_modules_ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_81__node_modules_ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_51__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */], { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_44__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_45__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_46__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_47__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_48__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_49__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_50__providers_firebase__["a" /* FirebaseProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(29);
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





let LogoutProvider = class LogoutProvider {
    constructor(app, loadingProvider, dataProvider) {
        this.app = app;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        console.log("Initializing Logout Provider");
        this.nav = app.getActiveNavs();
    }
    // Hooks the app to this provider, this is needed to clear the navigation views when logging out.
    setApp(app) {
        this.app = app;
    }
    // Logs the user out on Firebase, and clear navigation stacks.
    // It's important to call setApp(app) on the constructor of the controller that calls this function.
    logout() {
        this.loadingProvider.show();
        // Sign the user out on Firebase
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut().then((success) => {
            localStorage.clear();
            localStorage.setItem("toggle", "true");
            // Clear navigation stacks
            this.app.getRootNav().popToRoot().then(() => {
                this.loadingProvider.hide();
                //this.nav.setRoot(LoginPage);
                // Restart the entire app
                document.location.href = 'index.html';
            });
        });
    }
};
LogoutProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__data__["a" /* DataProvider */]])
], LogoutProvider);

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(22);
// Validators
// This file contains all your validators for the formGroups and for inputPrompts.
// Patterns can be tested by using a RegEx validator such as http://www.regexpal.com, https://regex101.com, among others.

var Validator;
(function (Validator) {
    // Set your validators here, don't forget to import and use them in the appropriate class that uses formGroups.
    // In this example, they are used on LoginPage where a formGroup for email and passwords is used.
    Validator.displayNameValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(3),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^[a-zA-Z ]*$')
        ]
    ];
    Validator.emailValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(5),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]
    ];
    Validator.passwordValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(5),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].maxLength(20),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern('^[a-zA-Z0-9!@#$%^&*()_+-=]*$')
        ]
    ];
    Validator.phoneValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(9),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].maxLength(13),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required
        ]
    ];
    Validator.genderValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ImageProvider = class ImageProvider {
    // All files to be uploaded on Firebase must have DATA_URL as the destination type.
    // This will return the imageURI which can then be processed and uploaded to Firebase.
    // For the list of cameraOptions, please refer to: https://github.com/apache/cordova-plugin-camera#module_camera.CameraOptions
    constructor(angularfireDatabase, alertProvider, loadingProvider, camera, app) {
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
    imgURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }
    // Generate a random filename of length for the image to be uploaded
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
    //Get Ijazah
    getIjazah(sourceTypeIjazah) {
        this.ijazahPhotoOptions.sourceType = sourceTypeIjazah;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.ijazahPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            this.imgBlobIjazah = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            this.metadataIjazah = {
                'contentType': this.imgBlobIjazah.type
            };
        });
        this.loadingProvider.hide();
    }
    //Get KTM
    getKTM(sourceTypeKTM) {
        this.KTMPhotoOptions.sourceType = sourceTypeKTM;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.KTMPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            this.imgBlobKTM = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            this.metadataKTM = {
                'contentType': this.imgBlobKTM.type
            };
        });
        this.loadingProvider.hide();
    }
    //Get KTP
    getKTP(sourceTypeKTP) {
        this.KTPPhotoOptions.sourceType = sourceTypeKTP;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.KTPPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            this.imgBlobKTP = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            this.metadataKTP = {
                'contentType': this.imgBlobKTP.type
            };
        });
        this.loadingProvider.hide();
    }
    //Push Ijazah and KTP
    pushDocPhysicologist(user) {
        this.loadingProvider.show();
        // Generate filename and upload to Firebase Storage.
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + this.generateFilename()).put(this.imgBlobIjazah, this.metadataIjazah).then((snapshot) => {
            let url = snapshot.metadata.downloadURLs[0];
            // Update User Data on Database.
            this.angularfireDatabase.object('/users/' + user.userId).update({
                Ijazah: url
            }).then((success) => {
                console.log("Ijazah succesfully updated");
                //KTP section start
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + this.generateFilename()).put(this.imgBlobKTP, this.metadataKTP).then((snapshot) => {
                    let url = snapshot.metadata.downloadURLs[0];
                    // Update User Data on Database.
                    this.angularfireDatabase.object('/users/' + user.userId).update({
                        KTP: url
                    }).then((success) => {
                        console.log("KTP succesfully updated");
                        this.loadingProvider.hide();
                    }).catch((error) => {
                        console.log("KTP error");
                        this.loadingProvider.hide();
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.alertProvider.showErrorMessage('image/error-image-upload');
                });
                //KTP section end
            }).catch((error) => {
                console.log("Ijazah error");
                this.loadingProvider.hide();
            });
        }).catch((error) => {
            this.loadingProvider.hide();
            this.alertProvider.showErrorMessage('image/error-image-upload');
        });
    }
    //push KTM and KTP
    pushDocStudPsy(user) {
        this.loadingProvider.show();
        // Generate filename and upload to Firebase Storage.
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + this.generateFilename()).put(this.imgBlobKTM, this.metadataKTM).then((snapshot) => {
            let url = snapshot.metadata.downloadURLs[0];
            // Update User Data on Database.
            this.angularfireDatabase.object('/users/' + user.userId).update({
                KTM: url
            }).then((success) => {
                console.log("KTM succesfully updated");
                //KTP section start
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + this.generateFilename()).put(this.imgBlobKTP, this.metadataKTP).then((snapshot) => {
                    let url = snapshot.metadata.downloadURLs[0];
                    // Update User Data on Database.
                    this.angularfireDatabase.object('/users/' + user.userId).update({
                        KTP: url
                    }).then((success) => {
                        console.log("KTP succesfully updated");
                        this.loadingProvider.hide();
                    }).catch((error) => {
                        console.log("KTP error");
                        this.loadingProvider.hide();
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.alertProvider.showErrorMessage('image/error-image-upload');
                });
                //KTP section end
            }).catch((error) => {
                console.log("KTM error");
                this.loadingProvider.hide();
            });
        }).catch((error) => {
            this.loadingProvider.hide();
            this.alertProvider.showErrorMessage('image/error-image-upload');
        });
    }
    setNotaPhoto(newInvoice, sourceType) {
        this.profilePhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.profilePhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
                'contentType': imgBlob.type
            };
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('invoice/' + newInvoice.userId + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
                // URL of the uploaded image!
                let url = snapshot.metadata.downloadURLs[0];
                // Update User Data on Database.
                this.angularfireDatabase.object('/invoice/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + newInvoice.invoice).set({
                    userId: newInvoice.userId,
                    code: newInvoice.code,
                    dateCreated: newInvoice.dateCreated,
                    invoice: newInvoice.invoice,
                    nota_url: url,
                    confirmationAdmin: "waiting"
                }).then((success) => {
                    this.loadingProvider.hide();
                    this.alertProvider.showInvoiceUpdatedMessage();
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.alertProvider.showErrorMessage('invoice/error-change-photo');
                });
            }).catch((error) => {
                this.loadingProvider.hide();
                this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch((error) => {
            this.loadingProvider.hide();
        });
    }
    // Set ProfilePhoto given the user and the cameraSourceType.
    // This function processes the imageURI returned and uploads the file on Firebase,
    // Finally the user data on the database is updated.
    setProfilePhoto(user, sourceType) {
        this.profilePhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.profilePhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
                'contentType': imgBlob.type
            };
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
                // Delete previous profile photo on Storage if it exists.
                this.deleteImageFile(user.img);
                // URL of the uploaded image!
                let url = snapshot.metadata.downloadURLs[0];
                let profile = {
                    displayName: user.name,
                    photoURL: url
                };
                // Update Firebase User.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.updateProfile(profile)
                    .then((success) => {
                    // Update User Data on Database.
                    this.angularfireDatabase.object('/users/' + user.userId).update({
                        img: url
                    }).then((success) => {
                        this.loadingProvider.hide();
                        this.alertProvider.showProfileUpdatedMessage();
                    }).catch((error) => {
                        this.loadingProvider.hide();
                        this.alertProvider.showErrorMessage('profile/error-change-photo');
                    });
                })
                    .catch((error) => {
                    this.loadingProvider.hide();
                    this.alertProvider.showErrorMessage('profile/error-change-photo');
                });
            }).catch((error) => {
                this.loadingProvider.hide();
                this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch((error) => {
            this.loadingProvider.hide();
        });
    }
    // Upload and set the group object's image.
    setGroupPhoto(group, sourceType) {
        this.groupPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.groupPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
                'contentType': imgBlob.type
            };
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
                this.deleteImageFile(group.img);
                // URL of the uploaded image!
                let url = snapshot.metadata.downloadURLs[0];
                group.img = url;
                this.loadingProvider.hide();
            }).catch((error) => {
                this.loadingProvider.hide();
                this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch((error) => {
            this.loadingProvider.hide();
        });
    }
    // Set group photo and return the group object as promise.
    setGroupPhotoPromise(group, sourceType) {
        return new Promise(resolve => {
            this.groupPhotoOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.groupPhotoOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
                    this.deleteImageFile(group.img);
                    // URL of the uploaded image!
                    let url = snapshot.metadata.downloadURLs[0];
                    group.img = url;
                    this.loadingProvider.hide();
                    resolve(group);
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    //Delete the image given the url.
    deleteImageFile(path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + fileName).delete().then(() => { }).catch((error) => { });
    }
    //Delete the user.img given the user.
    deleteUserImageFile(user) {
        var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(() => { }).catch((error) => { });
    }
    // Delete group image file on group storage reference.
    deleteGroupImageFile(groupId, path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(() => { }).catch((error) => { });
    }
    // Upload photo message and return the url as promise.
    uploadPhotoMessage(conversationId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + conversationId + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    let url = snapshot.metadata.downloadURLs[0];
                    this.loadingProvider.hide();
                    resolve(url);
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    // Upload group photo message and return a promise as url.
    uploadGroupPhotoMessage(groupId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + groupId + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    let url = snapshot.metadata.downloadURLs[0];
                    this.loadingProvider.hide();
                    resolve(url);
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
};
ImageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_3__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* App */]])
], ImageProvider);

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(126);
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







let FirebaseProvider = class FirebaseProvider {
    // Firebase Provider
    // This is the provider class for most of the Firebase updates in the app.
    constructor(angularfireDatabase, loadingProvider, alertProvider, dataProvider) {
        this.angularfireDatabase = angularfireDatabase;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        console.log("Initializing Firebase Provider");
    }
    // Send friend request to userId.
    sendFriendRequest(userId) {
        let loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var requestsSent;
        // Use take(1) so that subscription will only trigger once.
        this.dataProvider.getRequests(loggedInUserId).subscribe((requests) => {
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
            this.angularfireDatabase.object('/requests/' + loggedInUserId).update({
                requestsSent: requestsSent
            }).then((success) => {
                var friendRequests;
                this.dataProvider.getRequests(userId).subscribe((requests) => {
                    friendRequests = requests.friendRequests;
                    if (!friendRequests) {
                        friendRequests = [loggedInUserId];
                    }
                    else {
                        if (friendRequests.indexOf(userId) == -1)
                            friendRequests.push(loggedInUserId);
                    }
                    // Add friendRequest information.
                    this.angularfireDatabase.object('/requests/' + userId).update({
                        friendRequests: friendRequests
                    }).then((success) => {
                        this.loadingProvider.hide();
                        this.alertProvider.showFriendRequestSent();
                    }).catch((error) => {
                        this.loadingProvider.hide();
                    });
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    // Cancel friend request sent to userId.
    cancelFriendRequest(userId) {
        let loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var requestsSent;
        this.dataProvider.getRequests(loggedInUserId).subscribe((requests) => {
            requestsSent = requests.requestsSent;
            requestsSent.splice(requestsSent.indexOf(userId), 1);
            // Update requestSent information.
            this.angularfireDatabase.object('/requests/' + loggedInUserId).update({
                requestsSent: requestsSent
            }).then((success) => {
                var friendRequests;
                this.dataProvider.getRequests(userId).subscribe((requests) => {
                    friendRequests = requests.friendRequests;
                    friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1);
                    // Update friendRequests information.
                    this.angularfireDatabase.object('/requests/' + userId).update({
                        friendRequests: friendRequests
                    }).then((success) => {
                        this.loadingProvider.hide();
                        this.alertProvider.showFriendRequestRemoved();
                    }).catch((error) => {
                        this.loadingProvider.hide();
                    });
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    // Delete friend request.
    deleteFriendRequest(userId) {
        let loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var friendRequests;
        this.dataProvider.getRequests(loggedInUserId).subscribe((requests) => {
            friendRequests = requests.friendRequests;
            friendRequests.splice(friendRequests.indexOf(userId), 1);
            // Update friendRequests information.
            this.angularfireDatabase.object('/requests/' + loggedInUserId).update({
                friendRequests: friendRequests
            }).then((success) => {
                var requestsSent;
                this.dataProvider.getRequests(userId).subscribe((requests) => {
                    requestsSent = requests.requestsSent;
                    requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
                    // Update requestsSent information.
                    this.angularfireDatabase.object('/requests/' + userId).update({
                        requestsSent: requestsSent
                    }).then((success) => {
                        this.loadingProvider.hide();
                    }).catch((error) => {
                        this.loadingProvider.hide();
                    });
                });
            }).catch((error) => {
                this.loadingProvider.hide();
                //TODO ERROR
            });
        });
    }
    // Accept friend request.
    acceptFriendRequest(userId) {
        let loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        // Delete friend request.
        this.deleteFriendRequest(userId);
        this.loadingProvider.show();
        this.dataProvider.getUser(loggedInUserId).subscribe((account) => {
            var friends = account.friends;
            if (!friends) {
                friends = [userId];
            }
            else {
                friends.push(userId);
            }
            // Add both users as friends.
            this.dataProvider.UpdateUser(loggedInUserId).update({
                friends: friends
            }).then((success) => {
                this.dataProvider.getUser(userId).subscribe((account) => {
                    var friends = account.friends;
                    if (!friends) {
                        friends = [loggedInUserId];
                    }
                    else {
                        friends.push(loggedInUserId);
                    }
                    this.dataProvider.UpdateUser(userId).update({
                        friends: friends
                    }).then((success) => {
                        this.loadingProvider.hide();
                    }).catch((error) => {
                        this.loadingProvider.hide();
                    });
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
};
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_4__data__["a" /* DataProvider */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 375,
	"./af.js": 375,
	"./ar": 376,
	"./ar-dz": 377,
	"./ar-dz.js": 377,
	"./ar-kw": 378,
	"./ar-kw.js": 378,
	"./ar-ly": 379,
	"./ar-ly.js": 379,
	"./ar-ma": 380,
	"./ar-ma.js": 380,
	"./ar-sa": 381,
	"./ar-sa.js": 381,
	"./ar-tn": 382,
	"./ar-tn.js": 382,
	"./ar.js": 376,
	"./az": 383,
	"./az.js": 383,
	"./be": 384,
	"./be.js": 384,
	"./bg": 385,
	"./bg.js": 385,
	"./bm": 386,
	"./bm.js": 386,
	"./bn": 387,
	"./bn.js": 387,
	"./bo": 388,
	"./bo.js": 388,
	"./br": 389,
	"./br.js": 389,
	"./bs": 390,
	"./bs.js": 390,
	"./ca": 391,
	"./ca.js": 391,
	"./cs": 392,
	"./cs.js": 392,
	"./cv": 393,
	"./cv.js": 393,
	"./cy": 394,
	"./cy.js": 394,
	"./da": 395,
	"./da.js": 395,
	"./de": 396,
	"./de-at": 397,
	"./de-at.js": 397,
	"./de-ch": 398,
	"./de-ch.js": 398,
	"./de.js": 396,
	"./dv": 399,
	"./dv.js": 399,
	"./el": 400,
	"./el.js": 400,
	"./en-au": 401,
	"./en-au.js": 401,
	"./en-ca": 402,
	"./en-ca.js": 402,
	"./en-gb": 403,
	"./en-gb.js": 403,
	"./en-ie": 404,
	"./en-ie.js": 404,
	"./en-il": 405,
	"./en-il.js": 405,
	"./en-nz": 406,
	"./en-nz.js": 406,
	"./eo": 407,
	"./eo.js": 407,
	"./es": 408,
	"./es-do": 409,
	"./es-do.js": 409,
	"./es-us": 410,
	"./es-us.js": 410,
	"./es.js": 408,
	"./et": 411,
	"./et.js": 411,
	"./eu": 412,
	"./eu.js": 412,
	"./fa": 413,
	"./fa.js": 413,
	"./fi": 414,
	"./fi.js": 414,
	"./fo": 415,
	"./fo.js": 415,
	"./fr": 416,
	"./fr-ca": 417,
	"./fr-ca.js": 417,
	"./fr-ch": 418,
	"./fr-ch.js": 418,
	"./fr.js": 416,
	"./fy": 419,
	"./fy.js": 419,
	"./gd": 420,
	"./gd.js": 420,
	"./gl": 421,
	"./gl.js": 421,
	"./gom-latn": 422,
	"./gom-latn.js": 422,
	"./gu": 423,
	"./gu.js": 423,
	"./he": 424,
	"./he.js": 424,
	"./hi": 425,
	"./hi.js": 425,
	"./hr": 426,
	"./hr.js": 426,
	"./hu": 427,
	"./hu.js": 427,
	"./hy-am": 428,
	"./hy-am.js": 428,
	"./id": 429,
	"./id.js": 429,
	"./is": 430,
	"./is.js": 430,
	"./it": 431,
	"./it.js": 431,
	"./ja": 432,
	"./ja.js": 432,
	"./jv": 433,
	"./jv.js": 433,
	"./ka": 434,
	"./ka.js": 434,
	"./kk": 435,
	"./kk.js": 435,
	"./km": 436,
	"./km.js": 436,
	"./kn": 437,
	"./kn.js": 437,
	"./ko": 438,
	"./ko.js": 438,
	"./ky": 439,
	"./ky.js": 439,
	"./lb": 440,
	"./lb.js": 440,
	"./lo": 441,
	"./lo.js": 441,
	"./lt": 442,
	"./lt.js": 442,
	"./lv": 443,
	"./lv.js": 443,
	"./me": 444,
	"./me.js": 444,
	"./mi": 445,
	"./mi.js": 445,
	"./mk": 446,
	"./mk.js": 446,
	"./ml": 447,
	"./ml.js": 447,
	"./mn": 448,
	"./mn.js": 448,
	"./mr": 449,
	"./mr.js": 449,
	"./ms": 450,
	"./ms-my": 451,
	"./ms-my.js": 451,
	"./ms.js": 450,
	"./mt": 452,
	"./mt.js": 452,
	"./my": 453,
	"./my.js": 453,
	"./nb": 454,
	"./nb.js": 454,
	"./ne": 455,
	"./ne.js": 455,
	"./nl": 456,
	"./nl-be": 457,
	"./nl-be.js": 457,
	"./nl.js": 456,
	"./nn": 458,
	"./nn.js": 458,
	"./pa-in": 459,
	"./pa-in.js": 459,
	"./pl": 460,
	"./pl.js": 460,
	"./pt": 461,
	"./pt-br": 462,
	"./pt-br.js": 462,
	"./pt.js": 461,
	"./ro": 463,
	"./ro.js": 463,
	"./ru": 464,
	"./ru.js": 464,
	"./sd": 465,
	"./sd.js": 465,
	"./se": 466,
	"./se.js": 466,
	"./si": 467,
	"./si.js": 467,
	"./sk": 468,
	"./sk.js": 468,
	"./sl": 469,
	"./sl.js": 469,
	"./sq": 470,
	"./sq.js": 470,
	"./sr": 471,
	"./sr-cyrl": 472,
	"./sr-cyrl.js": 472,
	"./sr.js": 471,
	"./ss": 473,
	"./ss.js": 473,
	"./sv": 474,
	"./sv.js": 474,
	"./sw": 475,
	"./sw.js": 475,
	"./ta": 476,
	"./ta.js": 476,
	"./te": 477,
	"./te.js": 477,
	"./tet": 478,
	"./tet.js": 478,
	"./tg": 479,
	"./tg.js": 479,
	"./th": 480,
	"./th.js": 480,
	"./tl-ph": 481,
	"./tl-ph.js": 481,
	"./tlh": 482,
	"./tlh.js": 482,
	"./tr": 483,
	"./tr.js": 483,
	"./tzl": 484,
	"./tzl.js": 484,
	"./tzm": 485,
	"./tzm-latn": 486,
	"./tzm-latn.js": 486,
	"./tzm.js": 485,
	"./ug-cn": 487,
	"./ug-cn.js": 487,
	"./uk": 488,
	"./uk.js": 488,
	"./ur": 489,
	"./ur.js": 489,
	"./uz": 490,
	"./uz-latn": 491,
	"./uz-latn.js": 491,
	"./uz.js": 490,
	"./vi": 492,
	"./vi.js": 492,
	"./x-pseudo": 493,
	"./x-pseudo.js": 493,
	"./yo": 494,
	"./yo.js": 494,
	"./zh-cn": 495,
	"./zh-cn.js": 495,
	"./zh-hk": 496,
	"./zh-hk.js": 496,
	"./zh-tw": 497,
	"./zh-tw.js": 497
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
webpackContext.id = 738;

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_info_user_info__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_modal_image_modal__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let MessagePage = MessagePage_1 = class MessagePage {
    // MessagePage
    // This is the page where the user can chat with a friend.
    constructor(navCtrl, navParams, dataProvider, angularfireDatabase, loadingProvider, firebaseProvider, imageProvider, alertCtrl, modalCtrl, camera, keyboard) {
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
        this.displayTime = '';
        this.isShow = false;
        this.calendar = {
            mode: "month",
            currentDate: new Date()
        };
    }
    ionViewDidLoad() {
        this.userId = __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser;
        this.psgId = this.navParams.get("sender");
        this.idConversation = this.navParams.get("idConversation");
        this.session = this.navParams.get("session");
        this.day = this.navParams.get("day");
        this.confirmation = this.navParams.get("confirmation");
        console.log("psgId", this.psgId);
        console.log("idConversation", this.idConversation);
        console.log("session", this.session);
        console.log("day", this.day);
        console.log("confirmation", this.confirmation);
        this.inSession = this.navParams.get("inSession");
        this.title = this.navParams.get("name");
        // Get psychology details.
        this.ticket();
        // Get conversation
        this.dataProvider.getConversationMessages(this.idConversation).subscribe(messages => {
            console.log("msg messages", messages);
            this.allMessage = messages;
            if (this.messages) {
                // Just append newly added messages to the bottom of the view.
                if (messages.length > this.messages.length) {
                    let message = messages[messages.length - 1];
                    if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid == message.sender) {
                        this.dataProvider.getUser(message.sender).subscribe(user => {
                            message.avatar = user.img;
                        });
                    }
                    else {
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
            }
            else {
                // Get all messages, this will be used as reference object for messagesToShow.
                this.messages = [];
                messages.forEach(message => {
                    if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid == message.sender) {
                        this.dataProvider.getUser(message.sender).subscribe(user => {
                            message.avatar = user.img;
                        });
                    }
                    else {
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
                    }
                    else {
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
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach(message => {
                        let date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
    }
    ionViewDidEnter() {
        this.setMessagesRead(this.messages.length);
        console.log('read', this.messages);
        this.countdown();
    }
    ticket() {
        this.dataProvider.getTickets().subscribe(tickets => {
            this.tickets = tickets;
            console.log('get ticket', this.tickets);
        });
    }
    reSession() {
        this.isShow = true;
    }
    reBooking() {
        const day = JSON.stringify(this.timeSession).slice(1, 11);
        const time = JSON.stringify(this.timeSession).slice(12, 14);
        console.log('reBooking', day + time);
        if (this.tickets.ticketTotal < 1) {
            const alert = this.alertCtrl.create({
                title: 'Tiket anda habis',
                subTitle: 'Silahkan beli paket terlebih dahulu!',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            this.bookingNow(day, time);
        }
    }
    bookingNow(day, time) {
        var newSession;
        newSession = this.inSession + 1;
        this.angularfireDatabase.object("/conversations/" + this.idConversation).update({
            sessionke: time + ":00:00",
            scheduleId: day,
            confirmation: "waiting",
            inSession: newSession
        })
            .then(() => {
            console.log("sukses buat booking");
            var newTicket;
            newTicket = this.tickets.ticketTotal - 1;
            this.angularfireDatabase.object("/tickets/" + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).update({
                ticketTotal: newTicket
            }).then(succes => {
                this.confirmation = 'waiting';
            });
        });
    }
    countdown() {
        var b = __WEBPACK_IMPORTED_MODULE_12_moment__(this.day + ' ' + this.session);
        setInterval(() => {
            var a = __WEBPACK_IMPORTED_MODULE_12_moment__();
            this.timeInSeconds = Math.round(b.diff(a) / 1000);
            // // console.log("this.timeInSeconds", this.timeInSeconds); //just uncoment to show countdown in console	
            this.displayTime = this.getSecondsAsDigitalClock(this.timeInSeconds);
        }, 1000);
    }
    timeendAlert() {
        this.reminder = "Waktu anda kurang dari 15 menit lagi.";
    }
    getSecondsAsDigitalClock(inputSeconds) {
        var sec_num = inputSeconds; // don't forget the second param	
        console.log("milisecond", sec_num); //just uncoment to show countdown in console	
        if (sec_num > 3600) {
            return 'notyetready';
        }
        else if (sec_num < 0) {
            return 'timeover';
        }
        else {
            if (sec_num < 900) {
                this.timeendAlert();
            }
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
    }
    // Load previous messages in relation to numberOfMessages.
    loadPreviousMessages() {
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
    }
    // Update messagesRead when user lefts this page.
    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'flex';
            });
        }
        if (this.allMessage)
            console.log("leave msg", this.allMessage);
        this.setMessagesRead(this.allMessage.length);
    }
    // Check if currentPage is active, then update user's messagesRead.
    setMessagesRead(totalMessagesCount) {
        if (this.navCtrl.getActive().instance instanceof MessagePage_1) {
            this.angularfireDatabase.object("/users/" + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid + "/conversations/" + this.psgId + "/" + this.idConversation).update({ messagesRead: totalMessagesCount });
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
        setTimeout(function () {
            that.content.scrollToBottom();
        }, 300);
    }
    // Scroll to top of the page after a short delay.
    scrollTop() {
        var that = this;
        setTimeout(function () {
            that.content.scrollToTop();
        }, 300);
    }
    // Scroll depending on the direction.
    doScroll() {
        if (this.scrollDirection == "bottom") {
            this.scrollBottom();
        }
        else if (this.scrollDirection == "top") {
            this.scrollTop();
        }
    }
    // Check if the user is the sender of the message.
    isSender(message) {
        if (message.sender == __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
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
                    sender: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid,
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
                    .then(success => {
                    let conversationId = success;
                    this.message = "";
                    // Add conversation reference to the users.
                    this.angularfireDatabase.object("/users/" + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid + "/conversations/" + this.userId).update({
                        conversationId: conversationId,
                        messagesRead: 1
                    });
                    this.angularfireDatabase.object("/psg/" + this.userId + "/conversations/" + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).update({
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
            }
        }
    }
    // View user info
    viewUser(userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    }
    // Send photoMessage.
    sendPhoto() {
        this.alert = this.alertCtrl
            .create({
            title: "Send Photo Message",
            message: "Do you want to take a photo or choose from your photo gallery?",
            buttons: [
                {
                    text: "Cancel",
                    handler: data => { }
                },
                {
                    text: "Choose from Gallery",
                    handler: () => {
                        // Upload image then return the url.
                        this.imageProvider
                            .uploadPhotoMessage(this.idConversation, this.camera.PictureSourceType.PHOTOLIBRARY)
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
                            .uploadPhotoMessage(this.idConversation, this.camera.PictureSourceType.CAMERA)
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
                sender: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid,
                type: "image",
                url: url
            });
            // Update conversation on database.
            this.dataProvider.updateConversation(this.idConversation).update({
                messages: messages
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
                .then(success => {
                let conversationId = success.key;
                // Add conversation references to users.
                this.angularfireDatabase
                    .object("/users/" +
                    __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid +
                    "/conversations/" +
                    this.userId)
                    .update({
                    conversationId: conversationId,
                    messagesRead: 1
                });
                this.angularfireDatabase
                    .object("/psg/" +
                    this.userId +
                    "/conversations/" +
                    __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid)
                    .update({
                    conversationId: conversationId,
                    messagesRead: 0
                });
            });
        }
    }
    // Enlarge image messages.
    enlargeImage(img) {
        let imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */])
], MessagePage.prototype, "content", void 0);
MessagePage = MessagePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "page-message",template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\message\message.html"*/'<ion-header>\n\n  <!-- <ion-navbar hideBackButton="true"> -->\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n    <!-- <ion-buttons right>\n\n      <button ion-button tappable (click)="finishSession()">\n\n        <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <!-- Problem -->\n\n  <div *ngIf="reminder" class="problems">\n\n    <span class="field-problem">{{reminder}}</span><br>\n\n  </div>    \n\n\n\n<ion-content has-footer>\n\n  <!-- rating -->\n\n  <!-- <div class="rating">\n\n    <div class="banner">\n\n      <h2>Thank You</h2>\n\n      <img src="" (load)="doScroll()"/>\n\n      <span>Rate this psychologist</span>\n\n    </div>\n\n    <button ion-button>SUBMIT</button>\n\n  </div> -->\n\n  <!-- Messages -->\n\n  <div class="messages">\n\n    <p class="center" *ngIf="startIndex > 0">\n\n      <span tappable (click)="loadPreviousMessages()">Load previous messages</span>\n\n    </p>\n\n    <ion-row *ngFor="let message of messagesToShow">\n\n      <!--  Message -->\n\n      <ion-col col-2 class="center" *ngIf="isSender(message)">\n\n        <img src="{{message.avatar}}" (load)="doScroll()" />\n\n      </ion-col>\n\n      <ion-col col-1 *ngIf="!isSender(message)">\n\n      </ion-col>\n\n      <ion-col col-9 class="sender" *ngIf="isSender(message)">\n\n        <div class="left" *ngIf="message.type == \'text\'">\n\n          <p>{{message.message}}</p>\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n        <div class="left" *ngIf="message.type == \'image\'">\n\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-9 *ngIf="!isSender(message)">\n\n        <div class="right" *ngIf="message.type == \'text\'">\n\n          <p>{{message.message}}</p>\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n        <div class="left" *ngIf="message.type == \'image\'">\n\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n\n          <span>{{message.date | DateFormat}}</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-1 *ngIf="isSender(message)">\n\n      </ion-col>\n\n      <ion-col col-2 class="center" *ngIf="!isSender(message)">\n\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()" />\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n<!-- Message Box -->\n\n<ion-footer *ngIf="displayTime  !== \'timeover\' || displayTime  !== \'notyetready\' || confirmation != \'waiting\' ">\n\n  <div class="bottom_bar">\n\n    <!-- <ion-fab middle left>\n\n      <button ion-fab mini tappable (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n\n    </ion-fab> -->\n\n    <ion-textarea type="text" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-textarea>\n\n    <ion-fab middle right>\n\n      <button ion-fab mini tappable (click)="send()" [disabled]="!message">\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div>\n\n</ion-footer>\n\n\n\n<ion-footer *ngIf="displayTime  == \'timeover\' && confirmation != \'waiting\'">\n\n  <div class="session_end">Sesi anda telah berakhir, buat sesi baru dengan konselor\n\n    <br>\n\n    <button *ngIf="isShow == false" ion-button color="primary" (click)="reSession()">Buat jadwal baru</button>\n\n    <ion-item *ngIf="isShow == true">\n\n      <ion-label>Tentukan jadwal</ion-label>\n\n      <ion-datetime placeholder="YYYY-MMM-DD HH" displayFormat="YYYY-MMM-DD HH" min="2019" max="2025-11-31" [(ngModel)]="timeSession">\n\n      </ion-datetime>\n\n    </ion-item>\n\n    <button *ngIf="isShow == true" ion-button color="primary" (click)="reBooking()">Lanjutkan</button>\n\n  </div>\n\n</ion-footer>\n\n<ion-footer *ngIf="displayTime  == \'notyetready\' && confirmation!= \'waiting\'">\n\n  <div class="session_end">Sesi anda dimulai saat durasi sudah 1 jam. </div>\n\n</ion-footer>\n\n<ion-footer *ngIf="confirmation  == \'waiting\'">\n\n  <div class="session_end">Harap menunggu konfirmasi konselor. </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\message\message.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase__["a" /* FirebaseProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__["a" /* Keyboard */]])
], MessagePage);

var MessagePage_1;
//# sourceMappingURL=message.js.map

/***/ }),

/***/ 740:
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
let MoodTrackerPage = class MoodTrackerPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MoodTrackerPage');
    }
};
MoodTrackerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mood-tracker',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\mood-tracker\mood-tracker.html"*/'<!--\n\n  Generated template for the MoodTrackerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>moodTracker</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\mood-tracker\mood-tracker.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], MoodTrackerPage);

//# sourceMappingURL=mood-tracker.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__achiev_detail_achiev_detail__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AchievementPage = class AchievementPage {
    constructor(navCtrl, navParams, alertCtrl) {
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
    showDescription(ID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__achiev_detail_achiev_detail__["a" /* AchievDetailPage */], { ID: ID });
        console.log("show keterangan disini");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AchievementPage');
    }
    guide() {
        let alert = this.alertCtrl.create({
            title: 'About this feature',
            cssClass: 'alert',
            subTitle: 'Life Achievement adalah fitur yang membimbing anda melakukan aktifitas yang positif. Semakin banyak anda menyelesaikan task tersebut, harapannya aura positif tercipta dari dalam diri anda.',
            buttons: ['Dismiss'],
        });
        alert.present();
    }
};
AchievementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-achievement',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\achievement\achievement.html"*/'<!--\n\n  Generated template for the AchievementPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Life Achievement</ion-title>\n\n    <ion-buttons end>\n\n        <button (click)="guide()" ion-button>\n\n      <ion-icon name="md-book"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n <ion-list>\n\n   <ion-row>\n\n    <ion-col col-12 *ngFor="let item of items" (click)="showDescription(\'1\')">\n\n      {{item.title}}\n\n    </ion-col>\n\n   </ion-row>\n\n        <!--     <ion-item text-wrap>\n\n      <ion-label>Get closer to God</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'1\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item text-wrap>\n\n      <ion-label>Get enough rest</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'2\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item text-wrap>\n\n      <ion-label>Look for new hobbies</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'3\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item text-wrap>\n\n      <ion-label>Find a counselor</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'4\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item text-wrap>\n\n      <ion-label>Take a walk out</ion-label>\n\n      <ion-checkbox item-right></ion-checkbox>\n\n      <button ion-button (click)="showDescription(\'5\')" clear item-right>\n\n                <ion-icon class="icon" name="information-circle"></ion-icon>\n\n            </button>\n\n    </ion-item> -->\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\achievement\achievement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AchievementPage);

//# sourceMappingURL=achievement.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuplicateMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(132);
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
let DuplicateMessagePage = DuplicateMessagePage_1 = class DuplicateMessagePage {
    // MessagePage
    // This is the page where the user can chat with a friend.
    constructor(navCtrl, navParams, dataProvider, angularfireDatabase, loadingProvider, keyboard, alertCtrl) {
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
    ionViewDidLoad() {
        this.userId = this.navParams.get('userId');
        console.log(this.userId);
        // Get friend details.
        this.dataProvider.setUser(this.userId).set((user) => {
            this.title = user.name;
        });
        // Get conversationInfo with friend.
        this.dataProvider.getConversationbyCurrentUser(__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid).subscribe((conversation) => {
            if (conversation.$exists()) {
                // User already have conversation with this friend, get conversation
                this.conversationId = conversation.conversationId;
                // Get conversation
                this.dataProvider.getConversationMessages(this.conversationId).subscribe((messages) => {
                    if (this.messages) {
                        //update messageRead
                        this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/conversations/' + this.userId).update({
                            messagesRead: messages.length
                        });
                        //console.log("messages.length :"+messages.length);
                        //console.log("this.messages.length :"+this.messages.length);
                        // Just append newly added messages to the bottom of the view.
                        if (messages.length > this.messages.length) {
                            let message = messages[messages.length - 1];
                            this.dataProvider.getUser(message.sender).subscribe((user) => {
                                message.avatar = user.img;
                            });
                            this.messages.push(message);
                            // Also append to messagesToShow.
                            this.messagesToShow.push(message);
                            // Reset scrollDirection to bottom.
                            this.scrollDirection = 'bottom';
                        }
                    }
                    else {
                        // Get all messages, this will be used as reference object for messagesToShow.
                        this.messages = [];
                        messages.forEach((message) => {
                            this.dataProvider.getUser(message.sender).subscribe((user) => {
                                message.avatar = user.img;
                            });
                            this.messages.push(message);
                        });
                        // Load messages in relation to numOfMessages.
                        if (this.startIndex == -1) {
                            // Get initial index for numberOfMessages to show.
                            if ((this.messages.length - this.numberOfMessages) > 0) {
                                this.startIndex = this.messages.length - this.numberOfMessages;
                            }
                            else {
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
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach((message) => {
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
    }
    // Update messagesRead when user lefts this page.
    ionViewWillLeave() {
        if (this.messages)
            this.setMessagesRead(this.messages);
    }
    // Check if currentPage is active, then update user's messagesRead.
    setMessagesRead(messages) {
        if (this.navCtrl.getActive().instance instanceof DuplicateMessagePage_1) {
            // Update user's messagesRead on database.
            var totalMessagesCount;
            this.dataProvider.getConversationMessages(this.conversationId).subscribe((messages) => {
                totalMessagesCount = messages.length;
            });
            this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/conversations/' + this.userId).update({
                messagesRead: totalMessagesCount
            });
        }
    }
    // Check if 'return' button is pressed and send the message.
    onType(keyCode) {
        if (keyCode == 13) {
            this.keyboard.close();
            this.send();
        }
    }
    // Scroll to bottom of page after a short delay.
    scrollBottom() {
        var that = this;
        setTimeout(function () {
            that.content.scrollToBottom();
        }, 300);
    }
    // Scroll to top of the page after a short delay.
    scrollTop() {
        var that = this;
        setTimeout(function () {
            that.content.scrollToTop();
        }, 300);
    }
    // Scroll depending on the direction.
    doScroll() {
        if (this.scrollDirection == 'bottom') {
            this.scrollBottom();
        }
        else if (this.scrollDirection == 'top') {
            this.scrollTop();
        }
    }
    // Check if the user is the sender of the message.
    isSender(message) {
        if (message.sender == __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
    }
    // Back
    back() {
        this.navCtrl.pop();
    }
    // Send message, if there's no conversation yet, create a new conversation.
    send() {
        if (this.message) {
            // User entered a text on messagebox
            if (this.conversationId) {
                // Add Message to the existing conversation
                // Clone an instance of messages object so it will not directly be updated.
                // The messages object should be updated by our observer declared on ionViewDidLoad.
                let messages = JSON.parse(JSON.stringify(this.messages));
                messages.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
                    type: 'text',
                    message: this.message
                });
                // Update conversation on database.
                console.log(messages);
                this.dataProvider.updateConversation(this.conversationId).update({
                    messages: messages
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
                }).then((success) => {
                    let conversationId = success.key;
                    this.message = '';
                    // Add conversation reference to the users.
                    this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/conversations/' + this.userId).update({
                        conversationId: conversationId,
                        messagesRead: 1
                    });
                    this.angularfireDatabase.object('/users/' + this.userId + '/conversations/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid).update({
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
            }
        }
    }
    //alert for error
    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Oops...',
            subTitle: 'Something went wrong!',
            buttons: ['OK']
        });
        alert.present();
    }
    sendPhoto() {
        this.showAlert();
    }
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

var DuplicateMessagePage_1;
//# sourceMappingURL=duplicate-message.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeLinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_comment__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__docver_docver__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(29);
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










let TimeLinePage = class TimeLinePage {
    constructor(actionSheetCtrl, toastCtrl, navCtrl, navParams, alertCtrl, formBuilder, angularfireDatabase, loadingProvider, app, dataProvider, cb, data, zone, modalCtrl) {
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
    ionViewWillEnter() {
        this.data.getCurrentUser().subscribe((params) => {
            console.log(params.role);
            console.log(params.docStatus);
            if ((params.role == "Psychologist") && (params.docStatus == "false")) {
                this.zone.run(() => {
                    this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__docver_docver__["a" /* DocverPage */]);
                });
            }
        });
    }
    // delete my status
    // checkpoint delete timeline guntur v
    deleteOwnStatus(timeLine) {
        // realtime load data
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        this.dataProvider.deleteUserTimelineByID().remove(timeLine);
    }
    openMenu(i) {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Edit',
                    role: 'Edit',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Delete',
                    handler: () => {
                        this.deleteOwnStatus(i);
                    }
                }, {
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
    ionViewDidLoad() {
        // this.loadingProvider.show();
        // this.dataProvider.deleteUserTimelineByID().subscribe((status) => {
        //   this.loadingProvider.hide();
        //   this.status = status;
        //   console.log("indexnya",this.status);
        // });
        console.log('ionViewDidLoad TimeLinePage');
        this.getRole();
        this.dataProvider.getUserTimeline().subscribe(timeLineData => {
            console.log("timeline fresh", timeLineData);
            if (timeLineData) {
                for (let singleItem of timeLineData.reverse()) {
                    // console.log("single",singleItem);
                    this.timeLine.push(singleItem);
                }
                console.log("timeline lengthnya", this.timeLine);
                this.timeLineNotNull = true;
                this.cb.detectChanges();
                this.loggedInID = this.dataProvider.getMyID();
            }
            else {
                this.timeLine = [];
                this.timeLineNotNull = false;
                this.cb.detectChanges();
            }
        });
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe((user) => {
            this.loadingProvider.hide();
            this.user = user;
            // get user from firebase
            console.log("Get current user", this.user);
        });
    }
    //mood level get update data
    getRole() {
        this.dataProvider.getCurrentUser().subscribe((params) => {
            if (params != null) {
                this.role = params.role;
                this.moodLevel = params.moodLevel;
                this.gender = params.gender;
                this.cb.detectChanges();
            }
        });
    }
    underConstruction() {
        let alert = this.alertCtrl.create({
            title: 'Ooops..',
            subTitle: 'Sorry, this feature under maintenance.',
            buttons: ['Ok']
        });
        alert.present();
    }
    moodTracker() {
        let alert = this.alertCtrl.create({
            title: 'Ooops..',
            subTitle: 'Sorry, this feature under maintenance',
            buttons: ['Ok']
        });
        alert.present();
    }
    //toast for change mood level
    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Thankyou for changed your mood.',
            duration: 2000,
            position: "middle",
        });
        toast.present();
    }
    // Refresher
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
    //change mood level based on user decision
    changeMoodLevel(newMoodLevel) {
        this.dataProvider.updateCurrentUser().update({
            moodLevel: newMoodLevel
        }).then(params => {
            this.presentToast();
        });
    }
    //alert for change mood level
    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Congratulation...',
            subTitle: 'Successfully updated!',
            buttons: ['OK']
        });
        alert.present();
    }
    // Update timeline friend.
    updateFriendTimeLine(friend, newStoryMessage, postID) {
        if (__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid != null) {
            this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).subscribe(userData => {
                if (userData != null) {
                    if (friend != null) {
                        let timeLine;
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
                            gender: this.gender,
                            likes: 0,
                            comments: ""
                        });
                        // console.log("stage 1 ");
                        // console.log(timeLine);
                        //post to user logged in friends timeline
                        this.angularfireDatabase.object('/users/' + friend.$key).update({
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
    }
    //friends timeLine
    updateTimeLine(newStoryMessage, postID) {
        let toggle = true;
        let haveFriends = false;
        this.dataProvider.getCurrentUser().subscribe((account) => {
            for (var p in account) {
                if (account.hasOwnProperty(p)) {
                    if (p == "friends") {
                        haveFriends = true;
                    }
                }
            }
            if (haveFriends) {
                let friendslength = account.friends.length;
                if (account.friends && toggle) {
                    toggle = false;
                    for (var i = 0; i < friendslength; i++) {
                        this.dataProvider.getUser(account.friends[i]).subscribe((friend) => {
                            this.updateFriendTimeLine(friend, newStoryMessage, postID);
                        });
                    }
                }
                else {
                    this.friends = [];
                }
            }
        });
    }
    //my timeLine (logged in)
    updateMyTimeLine(newStoryMessage, postID) {
        if (__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid != null) {
            this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).subscribe(userData => {
                // console.log(userData);
                if (userData != null) {
                    let timeLine = userData.timeLine;
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
                        gender: this.gender,
                        likes: 0,
                        comments: ""
                    });
                    //post to user logged in friends timeline
                    this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).update({
                        timeLine: timeLine
                    });
                    this.angularfireDatabase.object('/posts/' + this.generateFilename() + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).set({
                        ID_Post: postID,
                        ID_User: __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid
                    });
                    this.ToastForUpdate();
                }
            });
        }
    }
    //toast when update
    ToastForUpdate() {
        let toast = this.toastCtrl.create({
            message: 'Thankyou for expressed your feeling.',
            duration: 1000,
            position: "middle",
        });
        toast.present();
    }
    // Generate a random filename of length for the image to be uploaded
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    //post new story from surrent user logged in
    postNewStory() {
        // realtime load data
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        let newStoryMessage = this.storyForm.value["story"];
        this.cb.detectChanges();
        console.log(newStoryMessage);
        //generate post ID for mytimelinepost and friendstimelinepost
        let postID = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid + this.generateFilename();
        // Get user data on database and get list of friends.
        this.updateTimeLine(newStoryMessage, postID);
        this.updateMyTimeLine(newStoryMessage, postID);
        // this.storyForm.get('story').setValue("");
    }
    //Send message
    sendMessage(userTargetID) {
        console.log(userTargetID);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__message_message__["a" /* MessagePage */], { userId: userTargetID });
        // this.app.getRootNav().push(DuplicateMessagePage, {userId: userTargetID});
    }
    commentFunction(timeLineID) {
        const commentModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__comment_comment__["a" /* CommentPage */], { timeLineID: timeLineID });
        commentModal.present();
    }
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
    likes(postID) {
        let post;
        let matchPost;
        let friends;
        let matchPostBranch;
        let postMatch;
        let friend;
        let tmpTime;
        console.log("flag 1");
        //get MY timeline data
        this.dataProvider.getObjectCommentTimeline().subscribe(params => {
            this.tmpTimeLine = params;
            console.log("tmpTimeLine");
            console.log(this.tmpTimeLine);
            console.log("flag 2");
            console.log(postID);
            //search post that match with postID
            for (let i = this.tmpTimeLine.length - 1; i >= 0; i--) {
                //console.log(tmpTimeLine[i].timeLineID);
                if (this.tmpTimeLine[i].timeLineID == postID) {
                    this.tmpTimeLine[i].likes = this.tmpTimeLine[i].likes + 1;
                }
            }
            this.angularfireDatabase.object('/users/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).update({
                timeLine: this.tmpTimeLine
            });
            //update timeline view
            this.data.getUserTimeline().subscribe(params => {
                this.timeLine = [];
                this.timeLine = params;
            });
        });
        //get friend list
        this.dataProvider.getCurrentFriendTimeline().subscribe(params => {
            friends = params;
            console.log(friends);
            for (let j = friends.length - 1; j >= 0; j--) {
                this.dataProvider.relationFriendTimeline(friend[j].value).subscribe(params => {
                    this.tmpTimeLineFriend = params;
                    console.log("tmpTimeLineFriend");
                    console.log(this.tmpTimeLineFriend);
                    //search post that match with postID
                    for (let i = this.tmpTimeLineFriend.length - 1; i >= 0; i--) {
                        //console.log(tmpTimeLine[i].timeLineID);
                        console.log("PostID : " + postID);
                        console.log("timeLineID : " + this.tmpTimeLineFriend[i].timeLineID);
                        if (this.tmpTimeLineFriend[i].timeLineID == postID) {
                            console.log("tembus");
                            this.tmpTimeLineFriend[i].likes = this.tmpTimeLineFriend[i].likes + 1;
                        }
                    }
                    this.angularfireDatabase.object('/users/' + friends[j].$value).update({
                        timeLine: this.tmpTimeLineFriend
                    });
                });
            }
        });
    }
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

//# sourceMappingURL=time-line.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_boarding_boarding__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_native_in_app_browser_ngx__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_native_app_version__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(131);
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








//Pages





let MyApp = class MyApp {
    constructor(platform, fcm, statusBar, splashScreen, keyboard, alertCtrl, browser, dataProvider, appVersion) {
        this.alertCtrl = alertCtrl;
        this.browser = browser;
        this.dataProvider = dataProvider;
        this.appVersion = appVersion;
        platform.ready().then(() => {
            // comment if want to deploy
            if (localStorage.getItem("toggle") == "true") {
                if (__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser) {
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                }
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_boarding_boarding__["a" /* BoardingPage */];
            }
            this.appVersions();
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
    appVersions() {
        this.dataProvider.appVersion().subscribe(app => {
            this.versionNumber(app);
        });
    }
    versionNumber(app) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("version apps", yield this.appVersion.getVersionNumber());
            if ((yield this.appVersion.getVersionNumber()) == app) {
                if (localStorage.getItem("toggle") == "true") {
                    if (__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser) {
                        this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */];
                    }
                    else {
                        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                    }
                }
                else {
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_boarding_boarding__["a" /* BoardingPage */];
                }
            }
            else {
                this.updateApp();
            }
        });
    }
    updateApp() {
        const alert = this.alertCtrl.create({
            title: "Perbaharui aplikasi",
            message: "Update baru sudah tersedia, anda harus mengupdate aplikasi SocioEmpathy",
            buttons: [{ text: "Update", handler: () => { this.browser.create('https://play.google.com/store/apps/details?id=id.socio2.socioempathy&hl=in'); } }]
        });
        alert.present();
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"E:\Github\socioempathyclient\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__["a" /* FcmProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__["a" /* FcmProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__providers_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_data__["a" /* DataProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_native_app_version__["a" /* AppVersion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_native_app_version__["a" /* AppVersion */]) === "function" && _j || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let LoginPage = class LoginPage {
    // LoginPage
    // This is the page where the user can register and login to our app.
    // It's important to initialize the loginProvider here and setNavController as it will direct the routes of our app.
    constructor(navCtrl, loginProvider, formBuilder) {
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
    ionViewDidLoad() {
        // Set view mode to main.
        this.mode = 'main';
    }
    // Call loginProvider and login the user with email and password.
    // You may be wondering where the login function for Facebook and Google are.
    // They are called directly from the html markup via loginProvider.facebookLogin() and loginProvider.googleLogin().
    login() {
        this.loginProvider.emailLogin(this.emailPasswordForm.value["email"], this.emailPasswordForm.value["password"]);
    }
    signUp() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    }
    // Call loginProvider and send a password reset email.
    forgotPassword() {
        this.loginProvider.sendPasswordReset(this.emailForm.value["email"]);
        this.clearForms();
    }
    // Clear the forms.
    clearForms() {
        this.emailPasswordForm.reset();
        this.emailForm.reset();
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\login\login.html"*/'<ion-content>\n\n  <div class="backCss">\n\n  <div class="top">\n\n      <img src="assets/images/SocioEmpathy_Blue.png" />  \n\n  </div>\n\n  <!-- Social Login Buttons -->\n\n  <div class="bottom">\n\n    <div class="wew">\n\n    <div class="buttons" *ngIf="mode == \'main\'">\n\n      <div>\n\n        <div class="form">\n\n            <!-- <button class="clear" ion-button icon-only tappable (click)="mode = \'main\'"><ion-icon name="md-close"></ion-icon></button> -->\n\n          <form [formGroup]="emailPasswordForm">\n\n              <ion-list>\n\n                <ion-item>\n\n                  <ion-label color="theblues" stacked>Email</ion-label>\n\n                  <ion-input color="theblues" type="email" formControlName="email" placeholder="Masukkan Email"></ion-input>\n\n                </ion-item>\n\n              \n\n                <ion-item>\n\n                  <ion-label color="theblues" stacked>Password</ion-label>\n\n                  <ion-input color="theblues" type="password" formControlName="password" placeholder="Masukkan Password"></ion-input>\n\n                </ion-item>                    \n\n              </ion-list>\n\n            <button ion-button color="primary" tappable (click)="login()" [disabled]="!emailPasswordForm.valid">LOGIN</button>\n\n          </form>\n\n          <br>\n\n          <span tappable (click)="clearForms(); mode = \'forgotPassword\'" class="forgotPassword">Forgot your Password?</span>\n\n          <br>\n\n          <br>\n\n          <button ion-button class="btn-signup" tappable (click)="signUp()">SIGN UP</button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    </div>\n\n      <!-- Forgot Password Form -->\n\n    <div class="form" *ngIf="mode == \'forgotPassword\'">\n\n        <form [formGroup]="emailForm">\n\n          <ion-list>\n\n            <ion-item no-lines>\n\n              <ion-label>Email</ion-label>\n\n              <ion-input type="email" formControlName="email" placeholder="Masukkan Email"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n          <button ion-button icon-left class="dark" tappable (click)="forgotPassword()" [disabled]="!emailForm.valid"><ion-icon name="md-unlock"></ion-icon>Reset Password</button>\n\n        </form>\n\n        <p tappable (click)="clearForms(); mode = \'main\'">Ingat Password? <b>Login</b></p>\n\n      </div>\n\n  </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_verification_verification__ = __webpack_require__(526);


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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(29);
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








let UserInfoPage = class UserInfoPage {
    // UserInfoPage
    // This is the page where the user can view user information, and do appropriate actions based on their relation to the current logged in user.
    constructor(navCtrl, navParams, modalCtrl, dataProvider, loadingProvider, alertCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
    }
    ionViewDidLoad() {
        this.userId = this.navParams.get('userId');
        this.loadingProvider.show();
        // Get user info.
        this.dataProvider.getUser(this.userId).subscribe((user) => {
            this.user = user;
            this.loadingProvider.hide();
        });
        // Get friends of current logged in user.
        this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).subscribe((user) => {
            this.friends = user.friends;
        });
        // Get requests of current logged in user.
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).subscribe((requests) => {
            this.friendRequests = requests.friendRequests;
            this.requestsSent = requests.requestsSent;
        });
    }
    // Back
    back() {
        this.navCtrl.pop();
    }
    // Enlarge user's profile image.
    enlargeImage(img) {
        let imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    }
    // Accept friend request.
    acceptFriendRequest() {
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Accept',
                    handler: () => {
                        this.firebaseProvider.acceptFriendRequest(this.userId);
                    }
                }
            ]
        }).present();
    }
    // Deny friend request.
    rejectFriendRequest() {
        this.alert = this.alertCtrl.create({
            title: 'Reject Friend Request',
            message: 'Do you want to reject <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Reject',
                    handler: () => {
                        this.firebaseProvider.deleteFriendRequest(this.userId);
                    }
                }
            ]
        }).present();
    }
    // Cancel friend request sent.
    cancelFriendRequest() {
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.firebaseProvider.cancelFriendRequest(this.userId);
                    }
                }
            ]
        }).present();
    }
    // Send friend request.
    sendFriendRequest() {
        this.alert = this.alertCtrl.create({
            title: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Send',
                    handler: () => {
                        this.firebaseProvider.sendFriendRequest(this.userId);
                    }
                }
            ]
        }).present();
    }
    // Open chat with this user.
    sendMessage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* MessagePage */], { userId: this.userId });
    }
    // Check if user can be added, meaning user is not yet friends nor has sent/received any friend requests.
    canAdd() {
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
    }
};
UserInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user-info',template:/*ion-inline-start:"E:\Github\socioempathyclient\src\pages\user-info\user-info.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="user">{{user.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- User Info -->\n\n  <div *ngIf="user">\n\n    <div class="profile">\n\n      <img src="{{user.img}}" tappable (click)="enlargeImage(user.img)" />\n\n    </div>\n\n    <h4>\n\n      <span class="name">{{user.name}} </span>\n\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n\n    </h4>\n\n    <p class="username">@{{user.username}}</p>\n\n    <p class="description">{{user.description}}</p>\n\n    <div class="divider"></div>\n\n    <div class="center">\n\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\n\n      <div *ngIf="friendRequests && friendRequests.indexOf(user.$key) > -1">\n\n        <p class="info">Sent you a friend request.</p>\n\n        <button ion-button icon-only class="danger" tappable (click)="rejectFriendRequest()"><ion-icon name="md-close"></ion-icon></button>\n\n        <button ion-button icon-only class="success" tappable (click)="acceptFriendRequest()"><ion-icon name="md-checkmark"></ion-icon></button>\n\n      </div>\n\n      <div *ngIf="requestsSent && requestsSent.indexOf(user.$key) > -1">\n\n        <p class="info">Friend request sent.</p>\n\n        <button ion-button class="dark" tappable (click)="cancelFriendRequest()">Cancel Friend Request</button>\n\n      </div>\n\n      <div *ngIf="canAdd()">\n\n        <p class="info">You are not yet friends.</p>\n\n        <button ion-button class="primary" tappable (click)="sendFriendRequest()">Send Friend Request</button>\n\n      </div>\n\n      <div *ngIf="friends && friends.indexOf(user.$key) > -1">\n\n        <p class="info">You are already friends.</p>\n\n        <button ion-button class="primary" tappable (click)="sendMessage()">Send Message</button>\n\n        <button *ngIf="user.role == \'Psychologist\'" ion-button class="primary" tappable (click)="callPerson()">Phone Call</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Github\socioempathyclient\src\pages\user-info\user-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase__["a" /* FirebaseProvider */]])
], UserInfoPage);

//# sourceMappingURL=user-info.js.map

/***/ })

},[630]);
//# sourceMappingURL=main.js.map