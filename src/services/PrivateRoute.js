import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { UserContext } from './UserProvider'

function PrivateRoute({ component: RouteComponent, ...rest }) {
    let loggedInUser = useContext(UserContext);
    console.log({ loggedInUser }, '!@&*#^*@&#')
    useEffect(() => {
        if (loggedInUser) {
            // setredirect('/')
            console.log('YAYYY', loggedInUser)
            localStorage.setItem('displayName', loggedInUser.displayName)
            localStorage.setItem('email', loggedInUser.email)
        } else {
            if (localStorage.getItem('displayName')) {
                loggedInUser = {}
                loggedInUser['displayName'] = localStorage.getItem('displayName')
                loggedInUser['email'] = localStorage.getItem('email')
                console.log(loggedInUser, 'QPQPQPQP')
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
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                !!loggedInUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={'/login'} />
                )
            }
        />
    );
}

export default PrivateRoute;
