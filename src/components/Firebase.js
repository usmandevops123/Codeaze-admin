import firebase from "firebase/app";
import  "firebase/auth"
import "firebase/firestore"
import config from "../config"


firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()
var serverTimeStamp = firebase.firestore.Timestamp.fromDate( new Date() )
export {auth,db , serverTimeStamp}// 