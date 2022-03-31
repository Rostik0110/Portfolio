import Firebase from "firebase";

const initializeFirebase = () =>{

    const firebaseConfig = {
    apiKey: "AIzaSyCSBDmvt-v44xCvs0DMi2mnqPul6_CY9aA",
    authDomain: "portfolio-f1fd9.firebaseapp.com",
    databaseURL: "https://portfolio-f1fd9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-f1fd9",
    storageBucket: "portfolio-f1fd9.appspot.com",
    messagingSenderId: "620044988109",
    appId: "1:620044988109:web:5241419bc9a2969cfe8384",
    measurementId: "G-BV4DM44C1Y"
    };

    if (!Firebase.apps.length) {
        Firebase.initializeApp(firebaseConfig);
    }
   
};


export default {initializeFirebase} ;
