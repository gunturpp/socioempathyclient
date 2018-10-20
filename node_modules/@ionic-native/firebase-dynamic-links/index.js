var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @beta
 * @name Firebase Dynamic Links
 * @description
 * Cordova plugin for Firebase Dynamic Links
 *
 * Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
 * Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.
 *
 * Preferences:
 *
 * Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
 * You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).
 *
 * config.xml:
 * ```xml
 * <platform name="ios">
 *     <preference name="GoogleIOSClientId" value="..." />
 * </platform>
 * <platform name="android">
 *     <preference name="GoogleAndroidClientId" value="..." />
 * </platform>
 * ```
 * @usage
 * ```typescript
 * import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
 *
 *
 * constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }
 *
 * ...
 * // Handle the logic here after opening the app with the Dynamic link
 * this.firebaseDynamicLinks.onDynamicLink()
 *   .subscribe((res: any) => console.log(res), (error:any) => console.log(error));
 * ```
 *
 * @interfaces
 * DynamicLinksOptions
 */
var FirebaseDynamicLinks = (function (_super) {
    __extends(FirebaseDynamicLinks, _super);
    function FirebaseDynamicLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers callback that is triggered on each dynamic link click.
     * @return {Observable<IDynamicLink>} Returns an observable
     */
    /**
       * Registers callback that is triggered on each dynamic link click.
       * @return {Observable<IDynamicLink>} Returns an observable
       */
    FirebaseDynamicLinks.prototype.onDynamicLink = /**
       * Registers callback that is triggered on each dynamic link click.
       * @return {Observable<IDynamicLink>} Returns an observable
       */
    function () { return; };
    FirebaseDynamicLinks.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            observable: true,
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], FirebaseDynamicLinks.prototype, "onDynamicLink", null);
    /**
     * @beta
     * @name Firebase Dynamic Links
     * @description
     * Cordova plugin for Firebase Dynamic Links
     *
     * Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
     * Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.
     *
     * Preferences:
     *
     * Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
     * You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).
     *
     * config.xml:
     * ```xml
     * <platform name="ios">
     *     <preference name="GoogleIOSClientId" value="..." />
     * </platform>
     * <platform name="android">
     *     <preference name="GoogleAndroidClientId" value="..." />
     * </platform>
     * ```
     * @usage
     * ```typescript
     * import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
     *
     *
     * constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }
     *
     * ...
     * // Handle the logic here after opening the app with the Dynamic link
     * this.firebaseDynamicLinks.onDynamicLink()
     *   .subscribe((res: any) => console.log(res), (error:any) => console.log(error));
     * ```
     *
     * @interfaces
     * DynamicLinksOptions
     */
    FirebaseDynamicLinks = __decorate([
        Plugin({
            pluginName: 'FirebaseDynamicLinks',
            plugin: ' cordova-plugin-firebase-dynamiclinks',
            pluginRef: 'cordova.plugins.firebase.dynamiclinks',
            repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks',
            install: 'ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"',
            installVariables: ['APP_DOMAIN', 'APP_PATH'],
            platforms: ['Android', 'iOS']
        })
    ], FirebaseDynamicLinks);
    return FirebaseDynamicLinks;
}(IonicNativePlugin));
export { FirebaseDynamicLinks };
//# sourceMappingURL=index.js.map