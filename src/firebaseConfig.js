import firebase from 'firebase';
import 'firebase/firestore';
import secrets from './secrets';
// firebase init goes here
const config = secrets;
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const { currentUser } = auth;

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true,
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection('users');
const requestsCollection = db.collection('requests');

export default {
  db,
  auth,
  currentUser,
  usersCollection,
  requestsCollection,
};