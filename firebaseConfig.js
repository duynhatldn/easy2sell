import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB-4RSeXzoAk_GpNAz7o_lK_8qdQp3vd9M",
  authDomain: "easy2sell-2381a.firebaseapp.com",
  projectId: "easy2sell-2381a",
  storageBucket: "easy2sell-2381a.appspot.com",
  messagingSenderId: "841920210241",
  appId: "1:841920210241:web:e453cc0194b248c522edc0",
  measurementId: "G-QDJNCJ3FWL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);