import React, { useContext, useEffect, useState } from 'react';

import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../services/UserProvider'
import foo from './gruham.png'
import { signInWithGoogle } from '../services/firebase';

export default function Login() {
    const user = useContext(UserContext)
    const [redirect, setredirect] = useState(null)

    useEffect(() => {
        if (user) {
            setredirect('/dashboard')
            // <Redirect to={redirect} />

        }
    }, [user])
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        <div className="login-buttons">
            <div class="Iam">

                <p>This is</p>
                <b>
                    <div class="innerIam">
                        Gruham<br />
                        an airbnb clone (in progress)<br />
                        built on MERN<br />
                        Feel free to<br />
                        Sign in & Explore
                        </div>
                </b>

            </div>
            <img className='gruham-title-logo' src={foo} alt='gruham' />
            <Button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/plasticine/50/000000/google-logo.png" alt='google-logo' />
                <span>  Sign up/Login instantly with Google</span>
            </Button>
        </div>
    );
}