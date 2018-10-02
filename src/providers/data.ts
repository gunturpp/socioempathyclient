import { Injectable } from "@angular/core";
import {
  AngularFireAction,
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import * as firebase from "firebase";
import { Observable } from "rxjs/Observable";
import { retry } from "rxjs/operator/retry";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/switchMap";
@Injectable()
export class DataProvider {
  // Data Provider
  // This is the provider class for most of the Firebase observables in the app.
  public getusers: AngularFireList<any>;
  public getbyquery: BehaviorSubject<string | null>;
  public listbyquery: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  public Objects: AngularFireObject<any>;
  public items: Observable<any>;

  constructor(public angularfireDatabase: AngularFireDatabase) {
    this.getbyquery = new BehaviorSubject(null);
    console.log("Initializing Data Provider");
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
    this.items = this.angularfireDatabase
      .object("/users/" + firebase.auth().currentUser.uid)
      .valueChanges();
    return this.items;
  }
  updateCurrentUser() {
    return this.angularfireDatabase.object(
      "/users/" + firebase.auth().currentUser.uid
    );
  }

  // Get user by their userId
  getUser(userId) {
    this.items = this.angularfireDatabase
      .object("/users/" + userId)
      .valueChanges();
    return this.items;
  }
  // Set user by their userId
  setUser(userId) {
    return this.angularfireDatabase.object("/users/" + userId);
  }

  UpdateUser(userId) {
    return this.angularfireDatabase.object("/users/" + userId);
  }
  // Get requests given the userId.
  getRequestsbyCurrentUser() {
    this.items = this.angularfireDatabase
      .object("/requests/" + firebase.auth().currentUser.uid)
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
      .list("/users/" + firebase.auth().currentUser.uid + "/friends")
      .snapshotChanges();
    return this.items;
  }

  // Get conversation given the conversationId.
  getConversation(convId) {
    this.items = this.angularfireDatabase
      .object("/conversations/" + convId)
      .valueChanges();
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
    this.items = this.angularfireDatabase.list("/users/" + firebase.auth().currentUser.uid + "/conversations/" + psgId).valueChanges();
    return this.items;
  }
  
  // Get conversations of the current logged in user.
  getConversations() {
    this.items = this.angularfireDatabase.list("/users/" + firebase.auth().currentUser.uid + "/conversations/").snapshotChanges();
    return this.items;
  }
  deleteConversations() {
    return this.angularfireDatabase.list(
      "/users/" + firebase.auth().currentUser.uid + "/conversations/"
    );
  }

  // Get messages of the conversation given the Id.
  getConversationMessages(conversationId) {
    this.items = this.angularfireDatabase
      .object("/conversations/" + conversationId + "/messages")
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
      .list("/users/" + firebase.auth().currentUser.uid + "/groups")
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
      .list("/users/" + firebase.auth().currentUser.uid + "/timeLine")
      .snapshotChanges();
    return this.items;
  }
  //Get object on comment timeline
  getObjectCommentTimeline() {
    this.items = this.angularfireDatabase
      .object("/users/" + firebase.auth().currentUser.uid + "/timeLine")
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
      .object("/users/" + firebase.auth().currentUser.uid + "/timeLine")
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
    return this.angularfireDatabase.list(
      "/users/" + firebase.auth().currentUser.uid + "/timeLine"
    );
  }

  //get logged in user ID
  getMyID() {
    return firebase.auth().currentUser.uid;
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
    this.items = this.angularfireDatabase
      .object("/scheduling/" + date)
      .valueChanges();
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
}
