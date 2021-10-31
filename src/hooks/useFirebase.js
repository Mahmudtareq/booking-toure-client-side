import {getAuth ,signOut, GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
// import { Redirect } from 'react-router-dom';
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();
const useFirebase =()=>{
    
    const [user , setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle =()=>{
        // setIsLoading(true);
       return  signInWithPopup(auth,googleProvider )
        // .then(result =>{
        //    setUser(result.user)
        // })
        // .finally(() => setIsLoading(false));

    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed;

    }, [])

return{
    user,
    setUser,
    isLoading,
    signInWithGoogle,
    logOut,

}
}
export default useFirebase;