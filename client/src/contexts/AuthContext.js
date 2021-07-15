import React,{useState, useEffect} from 'react'

import { createContext,useContext } from "react";
import { auth } from '../firebase';

const AuthContext = createContext();


export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {

    const [currentUser, setcurrentUser] = useState();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setcurrentUser(user) ;
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
