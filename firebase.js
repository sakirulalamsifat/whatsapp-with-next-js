import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD01sOT-7fAe866BsbAlERIqAOBH7QwK6Q',
  authDomain: 'whatsapp2-ab702.firebaseapp.com',
  projectId: 'whatsapp2-ab702',
  storageBucket: 'whatsapp2-ab702.appspot.com',
  messagingSenderId: '469907110242',
  appId: '1:469907110242:web:f5f59fd38114cc9dfe143b',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

  const db= app.firestore();
  const auth=app.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}