import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext({})

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }

  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const logWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  }, [])
  
  const signOutUser = (email, password) => {
    return signOut(auth, email, password)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  
  // console.log(user)
  const authInfo = {
    user,
    loading,
    setLoading,
    setUser,
    createUser,
    signOutUser,
    logInUser,
    updateUser,
    resetPassword,
    logWithGoogle,
    logWithGithub
  }

  return <AuthContext value={authInfo}>
    {children}
  </AuthContext>;
};

export default AuthProvider;