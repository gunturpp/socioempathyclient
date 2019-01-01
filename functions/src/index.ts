import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

exports.clientChatNotification = functions.database
  .ref("/conversations/{conversationId}/messages/{messageId}")
  .onWrite((change, context) => {
    const db = admin.database();

    const messageData = change.after.val();
    const psgId = messageData.sender; //sender id
    // Notification content
    const payload = {
      notification: {
        title: `${psgId} chat you!`,
        body: `${messageData.message}`,
        icon: `${messageData.avatar}`,
        sound: `default`
      }
    };
    const options = {
      priority: "high"
    }

    // // ref to the device collection for the user
    const tokens = [];
    // send a notification to each device token
    db.ref("/devices_token").orderByChild('userId').equalTo('3rdVsQMhMWYbNLI8k171Dp6hQ703')
    .on('child_added',function(snap) {
      console.log(`snapshot4`,snap.key);
      
      tokens.push(snap.key);
        });
        
        console.log(`tokens2`,tokens);
    return admin.messaging().sendToDevice(tokens, payload, options)
    .then(function(response) {
      // See the MessagingDevicesResponse reference documentation for
      // the contents of response.
      console.log('Successfully sent message:', response);
    })
    .catch(function(error) {
      console.log('Error sending message:', error);
    });
  });