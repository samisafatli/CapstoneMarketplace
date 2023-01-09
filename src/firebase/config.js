import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc, getDoc, setDoc
} from 'firebase/firestore'

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDL_j82S60P52Pg8ts_GcOSCxhM2_6YsYk",
  authDomain: "crown-marketplace-db.firebaseapp.com",
  projectId: "crown-marketplace-db",
  storageBucket: "crown-marketplace-db.appspot.com",
  messagingSenderId: "895574147630",
  appId: "1:895574147630:web:47815e060496c8a0d295bf"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, formData = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...formData
      })
    } catch (error) {
      console.log('Error creating the user', error.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};