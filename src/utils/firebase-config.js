import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyADEUEAZQODrvCMBhtv5MkShlcZTB47XVA",
  authDomain: "react-netflix-clone-70fbb.firebaseapp.com",
  projectId: "react-netflix-clone-70fbb",
  storageBucket: "react-netflix-clone-70fbb.appspot.com",
  messagingSenderId: "633816468928",
  appId: "1:633816468928:web:65bc46db2449237ece4c25",
  measurementId: "G-2PN5JYTXZF"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);