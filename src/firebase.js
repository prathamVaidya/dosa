import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";

// temp for test
const firebaseConfig = {
  apiKey: "AIzaSyCbOoieAdFqF2ufFpRgAWhGGsboX3AlUcw",

  authDomain: "roturp-82153.firebaseapp.com",

  databaseURL: "https://roturp-82153-default-rtdb.firebaseio.com",

  projectId: "roturp-82153",

  storageBucket: "roturp-82153.appspot.com",

  messagingSenderId: "226475186902",

  appId: "1:226475186902:web:5e30d18aa5268216d2c777",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  //   try {
  //     const res = await signInWithPopup(auth, googleProvider);
  //     const user = res.user;
  //     const q = query(collection(db, "users"), where("uid", "==", user.uid));
  //     const docs = await getDocs(q);
  //     if (docs.docs.length === 0) {
  //       await addDoc(collection(db, "users"), {
  //         uid: user.uid,
  //         name: user.displayName,
  //         authProvider: "google",
  //         email: user.email,
  //       });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    return false;
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, logInWithEmailAndPassword, logout };
