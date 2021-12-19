
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile,getIdToken, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import hoodieInitialization from '../Firebase/firebase.init';

hoodieInitialization();

const useFirebase = () => {

    const [admin, setAdmin] = useState([])
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [token, setToken] = useState('')

    const [errors, setErrors] = useState(false) //IC---must

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    ////////////////////USER Authentication//////////////////
    const googleProvider = () => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setErrors('')
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
            })
            .catch(error => {
                setErrors(error.message);
            })
        .finally(()=> setIsLoading(false))
    }
    /////////////////////////////////with EMAIL and Password///////////////////
    const createAuthUser = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in 
            // const user = userCredential.user;
            setErrors('')
            const newUser = { email, displayName: name } //name store will be firebase
            setUser(newUser);

            saveUser(email, name, 'POST');
            
            
            updateProfile(auth.currentUser, {
                displayName: name,
              }).then(() => {

              }).catch((error) => {
                  
              });
              navigate('/')

        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(()=> setIsLoading(false))
    }
///////////////////////////sign in////////////////////////
    
    const userSignIn = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            setErrors('')
            const destination = location?.state?.from || '/dashboard'
            navigate(destination)
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(error.message);
           setErrors(error.message)
        })
        .finally(()=> setIsLoading(false))
    }


//user observe
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {               
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                    setToken(idToken);
                })

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])
    
////////////////////////admin load------
    useEffect(() => {
        fetch(`https://warm-falls-65459.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])
    
/////////////////////////
    //when user sign up then data will be save db
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName } //property + parameter same hole emon use kora zay
        fetch('https://warm-falls-65459.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(user)
        })
        .then()
    }

//user signout
    const logOut = (navigate) => {
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/home')
        }).catch((error) => {
         
        })
        .finally(()=> setIsLoading(false))
    }

    
    return {
        user,
        errors,
        isLoading,
        admin,
        token,
        createAuthUser,
        userSignIn,
        googleProvider,
        logOut
    }
};

export default useFirebase;