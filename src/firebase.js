// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI0qmrtwmuPcFs8iXp4WEMgfj041OSmRI",
  authDomain: "visiot-27165.firebaseapp.com",
  databaseURL:
    "https://visiot-27165-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "visiot-27165",
  storageBucket: "visiot-27165.appspot.com",
  messagingSenderId: "296719056981",
  appId: "1:296719056981:web:72aa1acb3f8571f0eb54dc",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default getFirestore()
