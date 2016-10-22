var firebase = require("firebase");

function config($provide) {
  $provide.value('firebase',
    firebase.initializeApp({
      apiKey: "AIzaSyAkuoVsyeKXX_wKuLrBig6H3pCRB5hgSh8",
      authDomain: "sheltersafe-acc35.firebaseapp.com",
      databaseURL: "https://sheltersafe-acc35.firebaseio.com",
      storageBucket: "sheltersafe-acc35.appspot.com",
      messagingSenderId: "1040089097255"
    })
  )
}

export default config;

