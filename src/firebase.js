import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyjHaGBXvYenzjk7tca7DiH3Pv0OuEHNs",
  authDomain: "disneyplus-clone-c1cc1.firebaseapp.com",
  projectId: "disneyplus-clone-c1cc1",
  storageBucket: "disneyplus-clone-c1cc1.appspot.com",
  messagingSenderId: "824429967234",
  appId: "1:824429967234:web:d83ea6320f72294569419b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
