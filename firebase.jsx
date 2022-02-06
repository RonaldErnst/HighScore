import { clientCredentials } from './config';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(clientCredentials);

const fireauth = getAuth(app);
const firestore = getFirestore(app);

// TODO login, createUser, changePW