import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/firebase.config

const AuthContext = createContext(auth)
const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;