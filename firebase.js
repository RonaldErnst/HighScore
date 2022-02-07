import { clientCredentials } from './config';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(clientCredentials);

export const fireauth = getAuth(app);
export const firestore = getFirestore(app);

