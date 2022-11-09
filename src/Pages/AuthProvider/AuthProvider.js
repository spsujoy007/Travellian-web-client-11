import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const singupWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    };

    const signinWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Google signup 
    const signUpWithPopUp = (provider) => {
        return signInWithPopup(auth, provider)
    };

    // logout 
    const logOut = () => {
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            return unsubscribe();
        }

    } , [])

    const authInfo = {
        user, 
        singupWithEmail, 
        updateUserProfile, 
        signinWithPassword, 
        signUpWithPopUp,
        logOut
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;