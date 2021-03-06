import React, { useState, useEffect, useContext, createContext } from "react";
import "../firebase";
import { getAuth, GoogleAuthProvider, getRedirectResult, signInWithPopup } from 'firebase/auth'
// Add your Firebase credentials

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth ( { children } )
{
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () =>
{
    return useContext( authContext );
};
// Provider hook that creates auth object and handles state
function useProvideAuth ()
{
    const [ user, setUser ] = useState( null );
    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const googleSignIn = () =>
    {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup( auth, provider )
            .then( ( result ) =>
            {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult( result );
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            } ).catch( ( error ) =>
            {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError( error );
                // ...
            } );
    }


    const signin = ( email, password ) =>
    {
        getAuth()
            .signInWithEmailAndPassword( email, password )
            .then( ( response ) =>
            {
                setUser( response.user );
                return response.user;
            } );
    };
    const signup = ( email, password ) =>
    {
        getAuth()
            .createUserWithEmailAndPassword( email, password )
            .then( ( response ) =>
            {
                setUser( response.user );
                return response.user;
            } );
    };
    const signout = () =>
    {
        getAuth()
            .signOut()
            .then( () =>
            {
                setUser( false );
            } );
    };
    const sendPasswordResetEmail = ( email ) =>
    {
        getAuth()
            .sendPasswordResetEmail( email )
            .then( () =>
            {
                return true;
            } );
    };
    const confirmPasswordReset = ( code, password ) =>
    {
        getAuth()
            .confirmPasswordReset( code, password )
            .then( () =>
            {
                return true;
            } );
    };
    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect( () =>
    {
        const unsubscribe = getAuth().onAuthStateChanged( ( user ) =>
        {
            if ( user )
            {
                setUser( user );
            } else
            {
                setUser( false );
            }
        } );
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [] );
    // Return the user object and auth methods

    // userRole
    const [ userRole, setUserRole ] = useState( '' );
    useEffect( () =>
    {
        setUserRole( 'admin' );
    }, [] );
    return {
        user,
        userRole,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset,
        googleSignIn
    };
}