import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import CountryCard from './CountryCard';
import Header from './Header'
import HouseDetails from './HouseDetails';
import PrivateRoute from '../services/PrivateRoute';
import SideMenu from './SideMenu'

function Dashboard(props) {
    const [countryCode, setCountryCode] = useState();
    const [hideCountryCard, setHideCountryCard] = useState(false);

    const handleCallback = (code) => {
        setCountryCode(code)
        setHideCountryCard(true)
    }

    return (
        <Router>
            <Switch>
                <div >
                    <Header user brandName='Gruham' places='Places' />
                    {!hideCountryCard ? <CountryCard countryCode={countryCode} parentCallback={handleCallback} /> : ''}
                    {/* <CountryCard countryCode={countryCode} parentCallback={handleCallback} /> */}
                    <PrivateRoute exact path='/countries/:code' code={countryCode} strict component={SideMenu} />
                    <PrivateRoute exact path='/countries/:code/:_id' strict component={HouseDetails} />

                </div>
            </Switch>
        </Router>
    )
}

export default Dashboard
