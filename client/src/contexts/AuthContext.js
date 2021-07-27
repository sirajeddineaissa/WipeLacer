import React, { useState, useEffect } from 'react'

import { createContext, useContext } from "react";
import { auth, db } from '../firebase';

const AuthContext = createContext();


export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setcurrentUser] = useState();
    const [loading, setLoading] = useState(false);


    function setUserSettings(settings) {
        if (!currentUser) return;
        db.collection('users').doc(currentUser.uid).set({ settings })
    }

    async function findUserCollection() {
        if (!currentUser) return;
        const userCollection = await db.collection('users').doc(currentUser.uid).get();
        return userCollection.data()
    }

    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            db.collection('users').doc(cred.user.uid).set({
                settings: [
                    { name: 'punctuation', on: true },
                    { name: 'music', on: true },
                ]
            })
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentUser(user);
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        setLoading,
        logout,
        login,
        findUserCollection,
        setUserSettings
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
