import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFVEtYASaE7j69hwnQMtIhpfIJcpQcBtE",
    authDomain: "calgaryhacks2022-9fb82.firebaseapp.com",
    databaseURL: "https://calgaryhacks2022-9fb82-default-rtdb.firebaseio.com",
    projectId: "calgaryhacks2022-9fb82",
    storageBucket: "calgaryhacks2022-9fb82.appspot.com",
    messagingSenderId: "539990013465",
    appId: "1:539990013465:web:0d679eaaca24a76a8fdc88"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)