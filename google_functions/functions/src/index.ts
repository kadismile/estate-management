import * as functions from 'firebase-functions';
import axios from 'axios';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.createUser = functions.firestore.document('EstateAdmins/{id}')
  .onWrite((event: functions.Change<functions.firestore.DocumentSnapshot>, context: functions.EventContext) => {
      console.log(event.after.data());
      axios.post('http:localhost/5000/api/v1/estate-admin', event.after.data())
       .then(function (response) {
         console.log(response);
       });
    // console.log(event.after.data())
});