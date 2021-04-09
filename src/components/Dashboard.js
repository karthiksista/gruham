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
    const handleCallback = (code) => {
        setCountryCode(code)
    }
    return (
        <Router>
            <Switch>
                <div >
                    <Header user brandName='Gruham' places='Places' />
                    <CountryCard countryCode={countryCode} parentCallback={handleCallback} />
                    <PrivateRoute path='/countries/:code' exact code={countryCode} strict component={SideMenu} code={countryCode} />
                </div>
            </Switch>
        </Router>
    )
}

export default Dashboard
