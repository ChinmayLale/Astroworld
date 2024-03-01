import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHSrM8x5npeBstGoK2XRyfpU_zCF0x5Bk",
  authDomain: "portfolio-react-407f1.firebaseapp.com",
  projectId: "portfolio-react-407f1",
  storageBucket: "portfolio-react-407f1.appspot.com",
  messagingSenderId: "247407166265",
  appId: "1:247407166265:web:75d49413c840934e9d1ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(app){
    console.log("Firebase Connection Setup !")
}