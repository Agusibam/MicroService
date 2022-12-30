import { createContext, useContext, useState, useEffect  } from "react";
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    sendPasswordResetEmail,
    updateProfile,
    getAuth,
} from "firebase/auth";
import { doc, deleteDoc, collection, addDoc, getDoc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase";





export const AuthContext = createContext();

export  const useAuth = ( )=> {
    const context  = useContext(AuthContext)
    if (!context) throw new Error("There is no Auth provider");
    return context
}


export const addOrEditUserBio = async (user, Bio) => {

  //const newBioRef = doc(collection(db, userInfo));
  //console.log(newBioRef)
  //const newBioRef = (collection(db, userInfo));
  
  await setDoc(doc(db, "Users", user, "userInfo", "Info"), {Bio})
  console.log("Bio agragda")
  
}


export const recibeBio = async(user) =>{
  const docRef = doc(db, "Users", user, "userInfo", "Info");
  const docSnap = await getDoc(docRef);
  console.log( docSnap.data().Bio.Bio);
  const bio = docSnap.data().Bio.Bio;
  return bio


}


export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const singup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
const login = (email, password) => signInWithEmailAndPassword(auth, email, password)
const logOut = () => signOut(auth);
const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
};
const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
const upDate = async (dataToUpdate) => updateProfile(user, dataToUpdate);
const auth = getAuth();








useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      //if (currentUser){localStorage.setItem(us)}
      console.log(currentUser.uid)
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);



    

return (
    <AuthContext.Provider value={{
      singup, 
      login, 
      user, 
      setUser, 
      logOut, 
      loading, 
      loginWithGoogle, 
      resetPassword,
      upDate,
      }}>
        {children}
    </AuthContext.Provider>
)

}


