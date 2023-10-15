import React, { useState } from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../FIrebase/Firebase.init';

const Login = () => {
    const [user,setUser]=useState(null);
    const auth=getAuth(app)
    const provider=new GoogleAuthProvider();
   
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error=>{
            console.log('error:',error.message);
        })
    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null);
        })
        .catch(error=>{
            console.log();
        })
    }
    return (
        <div>
            {   user?
                <button onClick={handleSignOut}>Sign Out</button>:
                <button onClick={handleGoogleSignIn}>Google login</button>
            }
           { user && <div>
                <h3>user:{user.displayName}</h3>
                <p>Email:{user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>} 
        </div>
    );
};

export default Login;