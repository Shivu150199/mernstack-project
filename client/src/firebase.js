// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'shreeestate-249c0.firebaseapp.com',
  projectId: 'shreeestate-249c0',
  storageBucket: 'shreeestate-249c0.appspot.com',
  messagingSenderId: '162479172409',
  appId: '1:162479172409:web:7f2710def1cb09656dd6e8',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
