import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  //Creating user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //User log in
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //Github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };


  //User log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  const authInfos = {
    user,
    createUser,
    logOut,
    userLogIn,
    loading,
    setLoading,
    googleLogin,
    githubLogin,
  };

  return (
    <AuthContext.Provider value={authInfos}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
