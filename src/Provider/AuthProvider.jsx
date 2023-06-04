import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword ( auth, email, password);
    };
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password)
    };

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };
    const updateProfileInfo = (name, photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        })
    }
    const passwordReset = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }

    },[]);

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    };


    const authInfo ={
        user,
        loading,
        setLoading,
        updateProfileInfo,
        createUser,
        googleSignIn,
        logIn,
        logOut,
        passwordReset

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;