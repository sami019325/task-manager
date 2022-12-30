import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import App from '../Firebase/Firebase.config';
import { Navigate, unstable_HistoryRouter } from 'react-router-dom';
// import { Navigate, useLocation } from 'react-router-dom';


export const ContextData = createContext()
const SharedRoute = ({ children }) => {


    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider()
    const auth = getAuth(App)

    // get user current location 
    /*  */
    const CallNavigator = () => {
        console.log('Entering CallNavigator')
        window.location.replace("/");
    }
    // sign in
    const GoogleSignInCall = () => {
        setLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                setUser(result.user)
                CallNavigator()
            })
            .catch((error) => {
                // Handle Errors here.
                console.error(error)
            });

    }


    const SignOutUser = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                console.log('sign out successfully')
                window.location.reload(true);

            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logedUser => {
            logedUser && setUser(logedUser);
            console.log('auth state changed and current user is', logedUser)
            setLoading(false)

        })
        return (() => unsubscribe())

    }, [auth])

    const data = { user, GoogleSignInCall, SignOutUser, setUser, loading, setLoading }
    return (
        <ContextData.Provider value={data}>
            {children}
        </ContextData.Provider>
    );
};

export default SharedRoute;