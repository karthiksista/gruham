import React, { useContext, useEffect, useState } from 'react';

import { Redirect } from 'react-router-dom';
import { UserContext } from '../services/UserProvider'
import { logOut } from '../services/firebase';
import { signInWithGoogle } from '../services/firebase';

export default function Login() {
    const user = useContext(UserContext)
    const [redirect, setredirect] = useState(null)

    useEffect(() => {
        console.log('USER', user)
        if (user) {
            setredirect('/dashboard')
            // <Redirect to={redirect} />

        }
    }, [user])
    console.log('LOGRED', redirect)
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        <div className="login-buttons">
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                <span> Continue with Google</span>
            </button>
            <button className="login-provider-button" onClick={logOut}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                <span> logout</span>
            </button>
        </div>
    );
}