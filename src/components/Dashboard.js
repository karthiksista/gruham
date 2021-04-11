import React, { useContext, useEffect, useState } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import CountryCard from './CountryCard';
import Header from './Header'
import HouseDetails from './HouseDetails';
import PrivateRoute from '../services/PrivateRoute';
import { Redirect } from 'react-router-dom';
import SideMenu from './SideMenu'
import { UserContext } from '../services/UserProvider'

function Dashboard(props) {
    console.log(props, 'PRops')
    const [countryCode, setCountryCode] = useState();
    const [hideCountryCard, setHideCountryCard] = useState(true);

    const handleCallback = (code) => {
        setCountryCode(code)
    }
    const handleCb = (conditionalRender) => {
        console.log('conditionalRender', conditionalRender)
    }
    return (
        <Router>
            <Switch>
                <div >
                    <Header user brandName='Gruham' places='Places' />
                    <CountryCard countryCode={countryCode} parentCallback={handleCallback} />
                    <PrivateRoute exact path='/countries/:code' code={countryCode} strict component={SideMenu} />
                    <PrivateRoute exact path='/countries/:code/:_id' strict component={HouseDetails} />

                </div>
            </Switch>
        </Router>
    )
}

export default Dashboard
