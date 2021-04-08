import React, { useContext, useEffect, useState } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import CountryCard from './CountryCard';
import Header from './Header'
import PrivateRoute from '../services/PrivateRoute';
import { Redirect } from 'react-router-dom';
import SideMenu from './SideMenu'
import { UserContext } from '../services/UserProvider'

function Dashboard({ code }) {
    const [countryCode, setCountryCode] = useState();

    // const [redirect, setredirect] = useState(null)
    // const loggedInUser = useContext(UserContext)
    // useEffect(() => {
    //     if (!loggedInUser) {
    //         setredirect('/')
    //     }
    // }, [loggedInUser])
    // if (!loggedInUser) {
    //     return <Redirect to={redirect} />
    // }
    const handleCallback = (code) => {
        console.log('CODE', code)
        setCountryCode(code)
    }
    return (
        <Router>
            <Switch>
                <div >
                    <Header user brandName='Gruham' places='Places' />
                    <CountryCard countryCode={countryCode} parentCallback={handleCallback} />
                    <PrivateRoute path='/countries/:code' exact code={countryCode} strict component={SideMenu} code={countryCode} />

                    {/* <SideMenu code={countryCode} /> */}

                    {/* </Route> */}

                </div>
            </Switch>
        </Router>


        //     <Header brandName='Gruham' places='Places' />
        //     <CountryCard countryCode={code} parentCallback={handleCallback} />
        //     {countryCode ?

        //         <SideMenu code={countryCode} />

        //         : 'lol'}


        // </>
    )
}

export default Dashboard
