import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyCFRWPIQ0WYGTLFJOfLlYJZWb16vaWhmhQ",
    authDomain: "auth-784a5.firebaseapp.com",
    projectId: "auth-784a5",
    storageBucket: "auth-784a5.firebasestorage.app",
    messagingSenderId: "367817918317",
    appId: "1:367817918317:web:80968c1f2ef516f8e03c64",
    measurementId: "G-JGNY9X5LFW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth() //email / password authontion

  export function useAuth(){
    const[current,setCurrent]=useState("")
    useEffect(()=>{
        let x=onAuthStateChanged(auth,user=>setCurrent(user))
        return x

    },[])

    return current
  }


