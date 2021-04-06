import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
  apiKey: 'AIzaSyBNTMhmv5vr3cP8WxImi3LCX-sU6nMujWs',
  authDomain: 'teste-a57af.firebaseapp.com',
  databaseURL: 'https://teste-a57af.firebaseio.com',
  projectId: 'teste-a57af',
  storageBucket: 'teste-a57af.appspot.com',
  messagingSenderId: '735255497321',
  appId: '1:735255497321:web:d3df7aef10f1cf9f8470f8'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createProfile = async (userAuth, Infos) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snap = await userRef.get();

  if (!snap.exists) {
    const { displayName, email } = userAuth;
    const creationDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        creationDate,
        ...Infos
      });
    } catch (error) {
      console.log('Ops... an error occurred');
    }
  }
  return userRef;
};
export const signOut = e => {
  auth
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};
export default firebase;
