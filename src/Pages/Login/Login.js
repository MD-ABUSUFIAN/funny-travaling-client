import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    
    const {user, googleSignIn}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/home';
    const [isLoading, setIsLoading] = useState(true);
    const handleGoogleLogin=()=>{
        
        googleSignIn()
        .then((result) => {
           
           history.push(redirect_uri)
                // ...
              })
              .finally(() => setIsLoading(false));
    }

    return (
        <div className="container mt-5 py-5">
           
            <div className="m-auto mt-5 py-5 text- border w-50">
            <h1>Login </h1>
            <div>
                <h1>{user.displayName}</h1>
            <img className="rounded-circle" src={user.photoURL} alt=""/>
           
            </div>
            <button onClick={handleGoogleLogin} className="btn btn-primary mt-5">Google Login</button>
        
            </div>
        </div>
    );
};

export default Login;

