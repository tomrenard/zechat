import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDiGgTGL-ZFVsvWlmoHXbOTx-wVg5nMHso",
  authDomain: "zechat-60d3e.firebaseapp.com",
  projectId: "zechat-60d3e",
  storageBucket: "zechat-60d3e.appspot.com",
  messagingSenderId: "1077713714910",
  appId: "1:1077713714910:web:fd7a1eab07c1a798fecc4f"
}).auth();