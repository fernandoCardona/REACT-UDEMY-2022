//9.1-Hacemos la configuracione de la aplicacion en firebase.com


// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByhOVYOshlQWIRjprDdpo0uo2UU_dF_S4",
  authDomain: "journalapp-2022.firebaseapp.com",
  projectId: "journalapp-2022",
  storageBucket: "journalapp-2022.appspot.com",
  messagingSenderId: "598261984816",
  appId: "1:598261984816:web:58bc117685af3202fb47f5"
};

// Initialize Firebase
//9.2-Exportamos los objetos de firebase k necesitaremos para el Auth de la aplicacion
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDB = getFirestore( firebaseApp );