import React, { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import app from '../firebase/firebase.config';
import { useEffect } from 'react';
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const  auth =getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('current user',currentUser)
            setLoading(false);
            if(currentUser && currentUser.email){
                const loggedUser ={
                    email:currentUser.email
                }
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log('jwt responce',data)
                    // local storage is not best option..this is second best
                    localStorage.setItem('car-accress-token',data.token);
                   
                })

            }
            else{
                localStorage.removeItem('car-accress-token')
            }
        });
        return ()=>{
            return unsubscribe();
        }
        },[])
   
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }
    return (
      <AuthContext.Provider value ={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;