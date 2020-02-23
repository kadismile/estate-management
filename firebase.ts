const admin = require('firebase-admin');
import firestoreConfig from "./firestoreConfig";
export default admin.initializeApp({
    credential: admin.credential.cert(firestoreConfig),
    databaseURL: "https://estate-managers.firebaseio.com"
});