// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { getFirestore,addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7lQ34qeuAYFGs4_CkWZmaK37vc1M_DDo",
  authDomain: "netflix-clone-a4cde.firebaseapp.com",
  projectId: "netflix-clone-a4cde",
  storageBucket: "netflix-clone-a4cde.firebasestorage.app",
  messagingSenderId: "939783559071",
  appId: "1:939783559071:web:41f47e1f3aa3df70bf8faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);

        const user =res.user;
        await addDoc(collection(db,"users"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }
    catch(error){
        console.log(error);
        // alert(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));

    }

}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
        // alert(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
        // alert("Invalid email or password");
 
    }
}

const logout = async ()=>{
    signOut(auth);
}
export {auth,db,signup,login,logout};

