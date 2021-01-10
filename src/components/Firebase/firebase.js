import app from "firebase/app";
import 'firebase/auth';

const config = {
    apiKey: process.env.GATSBY_API_KEY,
    authDomain: process.env.GATSBY_AUTH_DOMAIN,
    projectId: process.env.GATSBY_PROJECT_ID,
    storageBucket: process.env.GATSBY_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_APP_ID,
    measurementId: process.env.GATSBY_MEASUREMENT_ID
}

class Firebase {
    constructor() {
      app.initializeApp(config);
   
      this.auth = app.auth();
    }
   
    // *** Auth API ***
   
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
   
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
   
    doSignOut = () => this.auth.signOut();
   
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
   
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
   
  export default Firebase;