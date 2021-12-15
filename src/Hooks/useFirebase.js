
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import hoodieInitialization from '../Firebase/firebase.init';

hoodieInitialization();

const useFirebase = () => {

    const [user, setUser] = useState([])

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    ////////////////////USER Authentication//////////////////
    const googleProvider = () => {
        signInWithPopup(auth, provider)
            .then(result => {
            console.log(result.user);
            })
            .catch(error => {
            console.log(error.message);
        })
    }
    /////////////////////////////////with EMAIL and Password///////////////////
    const createAuthUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password, name)
        .then((result) => {
          // Signed in 
            // const user = userCredential.user;
            

            updateProfile(auth.currentUser, {
                displayName: name,
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });

        })
        .catch((error) => {
          const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
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
            const errorMessage = error.message;
            console.log(error.message);
        });
    }


//user observe
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const uid = user.uid;
                console.log(uid);
            } else {
                setUser({})
            }
          });
    }, [])
    

//user signout
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    return {
        user,
        createAuthUser,
        userSignIn,
        googleProvider,
        logOut
    }
};

export default useFirebase;