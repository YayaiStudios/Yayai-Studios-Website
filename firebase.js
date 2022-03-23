import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCC8oXWhabuiDSde_GQ_aKSijPMSK2s-Og",
    authDomain: "yayai-studios-website.firebaseapp.com",
    databaseURL: "https://yayai-studios-website-default-rtdb.firebaseio.com",
    projectId: "yayai-studios-website",
    storageBucket: "yayai-studios-website.appspot.com",
    messagingSenderId: "322097810992",
    appId: "1:322097810992:web:a8523fa26c568d8155a7f5",
    measurementId: "G-Z9EE14BNWR"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: " + docRef.id);
} catch(e) {
    console.error("Error adding document: " + e);
}

try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  