"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.clientChatNotification = functions.database
    .ref("/conversations/{conversationId}/messages/{messageId}")
    .onWrite((change, context) => {
    const db = admin.database();
    const messageData = change.after.val();
    const psgId = messageData.sender; //sender id
    const clientId = messageData.receiver; //receiver id
    const tokens = [];
    let psgName;
    // Notification content
    db.ref("/psg")
        .orderByChild("userId")
        .equalTo(psgId)
        .on("child_added", function (snap) {
        psgName = snap.val().name;
    });
    const payload = {
        notification: {
            title: `${psgName} send you message!`,
            body: `${messageData.message}`,
            icon: `${messageData.avatar}`,
            sound: `default`
        }
    };
    const options = {
        priority: "high"
    };
    // ref to the device collection for the user
    // send a notification to each device token
    db.ref("/devices_token")
        .orderByChild("userId")
        .equalTo(clientId)
        .on("child_added", function (snapshot) {
        console.log(`snapshot4`, snapshot.key);
        tokens.push(snapshot.key);
    });
    console.log(`tokens2`, tokens);
    return admin
        .messaging()
        .sendToDevice(tokens, payload, options)
        .then(function (response) {
        // See the MessagingDevicesResponse reference documentation for
        // the contents of response.
        console.log("Successfully sent message:", response);
    })
        .catch(function (error) {
        console.log("Error sending message:", error);
    });
});
//# sourceMappingURL=index.js.map