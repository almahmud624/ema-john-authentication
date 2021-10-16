import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in using google
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // sign out
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }

    // observe whether user auth state change or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        signInUsingGoogle,
        logout
    }
}
export default useFirebase;