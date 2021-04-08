import { createContext, useEffect, useState } from 'react'

import React from 'react'
import { auth } from './firebase'

export const UserContext = createContext()

export default (props) => {
    const [user, setuser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async (userDetails) => {
            console.log('here', userDetails)
            if (userDetails !== null) {
                const loggedInDetails = { ...userDetails };
                setuser({
                    displayName: loggedInDetails.displayName,
                    email: loggedInDetails.email
                })
            } else if (userDetails === null) {
                console.log('FINALLY', user)
                setuser(null)
            }
        })
    }, [])
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}

