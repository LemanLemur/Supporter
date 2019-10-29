import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCPqwgH1Gs5Jt1xlpvxSkpJ_haI_8tWYPM",
    authDomain: "supporter-b8001.firebaseapp.com",
    databaseURL: "https://supporter-b8001.firebaseio.com",
    projectId: "supporter-b8001",
    storageBucket: "supporter-b8001.appspot.com",
    messagingSenderId: "186299643986",
    appId: "1:186299643986:web:9674774377b22c4fd9078b"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timetampsInSnapshots: true });

export default firebase;