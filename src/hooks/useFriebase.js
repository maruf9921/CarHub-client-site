import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut  } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

// initialize firebase App
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            history.replace('/');
            const newUser = { email, displayName: name };
            setUser(newUser);

            // User Informaation save Into DataBase

            saveUser(email, name);

            // send name to firebase after creation

            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });

          })
          .catch((error) => {
            setAuthError(error.message);
            // ..
          })
          .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // Observe User State

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [])


    useEffect( () =>{
        fetch(`https://quiet-falls-16935.herokuapp.com/users/${user.email}`)
        .then(Response => Response.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])


    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user= {email, displayName};
        fetch('https://quiet-falls-16935.herokuapp.com/users', {
            method: 'POST',
            headers: {
               'content-type': 'application/json' 
            },
            body: JSON.stringify(user)
        })
        .then()
    } 

    return{
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        authError,
        logOut
    }
}

export default useFirebase;