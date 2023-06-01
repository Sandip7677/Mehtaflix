import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE2Ekn_RloDVKZ-VjQm5ZzyB_cbs5oTmc",
  authDomain: "mehtaflix.firebaseapp.com",
  projectId: "mehtaflix",
  storageBucket: "mehtaflix.appspot.com",
  messagingSenderId: "922861360924",
  appId: "1:922861360924:web:5f742c47dfc92062c34cd9",
};

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
