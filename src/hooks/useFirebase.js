import { GoogleAuthProvider,getAuth,signOut ,signInWithPopup,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();
const useFirebase =()=>{
    const auth = getAuth()
    const [user , setUser] = useState({})

    const signInWithGoogle =()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth ,googleProvider )
        .then(result =>{
        //    const user = 
           setUser(result.user)
        //    console.log(user)
        })
        .catch((error) => {
        
            const errorMessage = error.message;
            console.log(errorMessage)
          
          });

    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => {});
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
        });
        return () => unsubscribed;

    }, [auth])

return{
    user,
    signInWithGoogle,
    logOut,

}
}
export default useFirebase;