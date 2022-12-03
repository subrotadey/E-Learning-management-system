import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase.init";


  const provider = new GoogleAuthProvider();
  const useFirebase = () => {
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  useState( () => {
    onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  } , [])

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  return { user, handleGoogleSignIn, handleGoogleSignOut};
};

export default useFirebase;
