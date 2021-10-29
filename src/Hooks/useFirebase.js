import { getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Pages/Firebase/firebase.init";
firebaseInitialize();



const useFirebase=()=>{
    const [user,setUser]=useState([]);
    const [error,setError]=useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleSignIn=()=>{
      const googleProvider = new GoogleAuthProvider();
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider).catch((error) => {
        
            setError (error.message)

          });
    }

    const logOut=()=>{
      
      setIsLoading(true)
      signOut(auth)
      .finally(() => setIsLoading(false))
    
    }


    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, user=> {
          if (user) {
              
            setUser(user);
              // ...
            } else {
              setUser({})
            }
             setIsLoading(false);

           
          });
          return ()=> unsubscribed;
     },[])

    return {
        user,
        isLoading,
        error,
        googleSignIn,
        logOut,
    }

}

export default useFirebase;