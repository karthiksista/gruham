import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { UserContext } from './UserProvider'

function PrivateRoute({ component: RouteComponent, ...rest }) {
    let loggedInUser = useContext(UserContext);
    useEffect(() => {
        if (loggedInUser) {
            // setredirect('/')
            localStorage.setItem('displayName', loggedInUser.displayName)
            localStorage.setItem('email', loggedInUser.email)
        } else {
            if (localStorage.getItem('displayName')) {
                loggedInUser = {}
                loggedInUser['displayName'] = localStorage.getItem('displayName')
                loggedInUser['email'] = localStorage.getItem('email')
            }
        }
    }, [loggedInUser])
    if (!loggedInUser) {
        if (localStorage.getItem('displayName')) {
            return <Redirect to={'/dashboard'} />
        } else {

            return <Redirect to={'/login'} />
        }
    }
    console.log(rest, 'RESR')
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                !!loggedInUser ? (
                    <RouteComponent {...routeProps}  {...rest} />
                ) : (
                    <Redirect to={'/login'} />
                )
            }
        />
    );
}

export default PrivateRoute;
