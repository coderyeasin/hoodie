
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import hoodieInitialization from '../Firebase/firebase.init';

hoodieInitialization();

const useFirebase = () => {

    const [user, setUser] = useState([])
    const [errors, setErrors] = useState(false) //IC---must

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    ////////////////////USER Authentication//////////////////
    const googleProvider = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setErrors('')
            })
            .catch(error => {
                setErrors(error.message);
        })
    }
    /////////////////////////////////with EMAIL and Password///////////////////
    const createAuthUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password, name)
        .then((result) => {
          // Signed in 
            // const user = userCredential.user;
            
            setErrors('')

            updateProfile(auth.currentUser, {
                displayName: name,
              }).then(() => {

              }).catch((error) => {
                  
              });

        })
        .catch((error) => {

            console.log(error.message);
            // setErrors(error.message);
          // ..
        });
    }
///////////////////////////sign in////////////////////////
    
    const userSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(error.message);
           setErrors(error.message)
        });
    }


//user observe
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const uid = user.uid;
                console.log(uid);
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth])
    

//user signout
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
         
        });
    }

    return {
        user,
        errors,
        createAuthUser,
        userSignIn,
        googleProvider,
        logOut
    }
};

export default useFirebase;