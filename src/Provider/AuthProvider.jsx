import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext({})

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
  
  // console.log(user)
  const authInfo = {
    user,
    loading,
    setLoading,
    setUser,
    createUser,
    signOutUser,
    logInUser,
    updateUser
  }

  return <AuthContext value={authInfo}>
    {children}
  </AuthContext>;
};

export default AuthProvider;