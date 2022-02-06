import firebase from "firebase";
import { firebase_config } from './config';

firebase.initializeApp(firebase_config);

export const firestore = admin.firestore()
export const fireauth = admin.auth();