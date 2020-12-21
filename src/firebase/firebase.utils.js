import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import "firebase/firebase-firestore"
// import "firebase/firebase-auth"

const config = {
    apiKey: "AIzaSyCN1jeal49rk4-MmeUvjOgpSBPLIEUNNnU",
    authDomain: "crwn-db-69472.firebaseapp.com",
    projectId: "crwn-db-69472",
    storageBucket: "crwn-db-69472.appspot.com",
    messagingSenderId: "1027577310817",
    appId: "1:1027577310817:web:1e8f4cb944b6bea2c74420",
    measurementId: "G-BVWV1SQ9N3"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get()
      
      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createAt = new Date();

          try {
              await userRef.set({
                  displayName,
                  email,
                  createAt,
                  ...additionalData
              })
          } catch (error) {
              console.log("error creating user", error.message);
          }
      }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;