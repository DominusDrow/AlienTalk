// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

const provider = new GoogleAuthProvider()

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCS3tTZFVJSNAxHk_l8c1rh6_-WPZCS64Q',
  authDomain: 'alientalk-app.firebaseapp.com',
  projectId: 'alientalk-app',
  storageBucket: 'alientalk-app.appspot.com',
  messagingSenderId: '580270181432',
  appId: '1:580270181432:web:c178baf39aad068b87eacd',
  measurementId: 'G-KB8NT36JZV'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


signInWithRedirect(auth, provider)

export { auth }
