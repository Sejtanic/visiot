import db from "../../firebase"
import axios from "axios"
import { collection, onSnapshot } from "firebase/firestore"

const instance = axios.create({
  baseURL: process.env.REACT_APP_QUIZ_DATA,
})

export const getData = async () => {
  try {
    const data = await instance.get("/")

    //FIREBASE REALTIME DATABASE
    // const response = await fetch(
    //   "https://visiot-27165-default-rtdb.europe-west1.firebasedatabase.app/questions.json"
    // )
    // const data1 = await response.json()
    // console.log(data1)

    // FIREBASE FIRESTORE DATABASE SNAPSHOT
    // onSnapshot(collection(db, "questions"), (snapshot) => {
    //   console.log(snapshot.docs.map((doc) => doc.data()))
    // })

    return data.data
  } catch (error) {
    console.log(error)
  }
}
