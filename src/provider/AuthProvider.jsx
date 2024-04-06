import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
     const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
           setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email, password) =>{
        setLoading(true);
         return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
         return signOut(auth)
    }

    const handleGoogleSignIn = () =>{
          setLoading(true)
         return signInWithPopup(auth, googleProvider)
          
    }

    useEffect(()=>{
         const unsubscribed =   onAuthStateChanged(auth, currentUser=>{
              console.log('current user from useEffect', currentUser)  
            setUser(currentUser)
             setLoading(false)
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
               loading
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