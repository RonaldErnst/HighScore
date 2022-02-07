import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { fireauth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function registerUser(username, email, password) {
    return createUserWithEmailAndPassword(fireauth, email, password).then(userCredential => {
      updateProfile(userCredential.user, {
        displayName: username
      });
  
      return userCredential;
    });
  }
  
  function loginUser(email, password) {
    return signInWithEmailAndPassword(fireauth, email, password);
  }
  
  function logoutUser() {
    return signOut(fireauth);
  }

  function resetPassword(email) {
    // TODO
  }

  function updateEmail(email) {
    // TODO
  }

  function updatePassword(password) {
    // TODO
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireauth, user => {
      setCurrentUser(user)
      setLoading(false)
    });

    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser,
    logoutUser,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}