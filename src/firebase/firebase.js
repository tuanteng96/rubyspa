import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA6zOqQRaOT6ZtzueLzRziIU2BdFYHA4GY",
    authDomain: "rubyspa-e4140.firebaseapp.com",
    projectId: "rubyspa-e4140",
    storageBucket: "rubyspa-e4140.appspot.com",
    messagingSenderId: "836677634316",
    appId: "1:836677634316:web:3ccbe96a8fde5c816da129",
    measurementId: "G-DRLB2K1KKM"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };