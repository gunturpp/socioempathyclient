"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.newChatNotification = functions.database
    .ref("/conversations/{conversationId}/messages/{messageId}")
    .onWrite((change, context) => {
    const conversationId = context.params;
    const messageData = change.after.val();
    console.log('params', conversationId);
    console.log('messageData2', messageData);
    const psgId = messageData.sender; //sender id
    console.log(`message`, messageData.message);
    // Notification content
    const payload = {
        notification: {
            title: `${messageData.message}`,
            body: `${psgId} chat you!`,
            icon: `${messageData.avatar}`,
            sound: `default`
        }
    };
    const options = {
        priority: "high"
    };
    // // ref to the device collection for the user
    const db = admin.database();
    // admin.database().ref('/users').child('pushToken').orderByChild('deviceUid').equalTo(deviceUID).once('value');
    const tokens = [];
    // send a notification to each device token
    db.ref("/devices_token").orderByChild('userId').equalTo('3rdVsQMhMWYbNLI8k171Dp6hQ703')
        .on('child_added', function (snap) {
        console.log(`snapshot4`, snap.key);
        tokens.push(snap.key);
    });
    console.log(`tokens2`, tokens);
    return admin.messaging().sendToDevice(tokens, payload, options)
        .then(function (response) {
        // See the MessagingDevicesResponse reference documentation for
        // the contents of response.
        console.log('Successfully sent message:', response);
    })
        .catch(function (error) {
        console.log('Error sending message:', error);
    });
});
//# sourceMappingURL=index.js.map