import React,{useState, useEffect} from 'react'

import { createContext,useContext } from "react";
import { auth } from '../firebase';

const AuthContext = createContext();


export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {

    const [currentUser, setcurrentUser] = useState();
    const [loading, setLoading] = useState(false);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email,password)
    }

    function logout(){
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            console.log(user)
            setcurrentUser(user) ;
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        setLoading,
        logout,
        login
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
