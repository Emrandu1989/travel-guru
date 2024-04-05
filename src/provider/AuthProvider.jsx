import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
          return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email, password) =>{
         return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
         return signOut(auth)
    }

    const handleGoogleSignIn = () =>{
         return signInWithPopup(auth, googleProvider)
          
    }

    useEffect(()=>{
         const unsubscribed =   onAuthStateChanged(auth, currentUser=>{
              console.log('current user from useEffect', currentUser)  
            setUser(currentUser)
           })
           return () =>{
                unsubscribed()
           }
    },[])
    const authInfo = {
               user,
               createUser,
               login,
               logOut,
               handleGoogleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
     children: PropTypes.node
}