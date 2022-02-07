import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { fireauth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    // TODO
  }

  function login(email, password) {
    // TODO
  }

  function logout() {
    // TODO
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
    login,
    signup,
    logout,
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