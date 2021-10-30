import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase =() =>{
    const [user, setUser] = useState({});
    const[isLoading, setIsLoading] = useState(true);

    const auth = getAuth();  

   const signInUsingGoogle =() =>{
       setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
   return signInWithPopup(auth, googleProvider)
    // .then( (result) =>{
    //    setUser(result.user);
    // })
    .finally( () => setIsLoading(false));

}
// observe  user state change
useEffect(() =>{
  const unsubscribed =  onAuthStateChanged(auth, (user) => {
        if (user) { 
         setUser(user);
        
        } else {
         setUser({})
        }
      setIsLoading(false);
      });
      return () => unsubscribed;
},[])


// user log out 
const logOut =() =>{
    setIsLoading(true);
    signOut(auth)
   .then(() => { })
   .finally(() => setIsLoading(false));
}

    return {
     user , signInUsingGoogle, logOut , isLoading 
    }
}
export default useFirebase;