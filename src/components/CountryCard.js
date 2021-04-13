import { Link, Redirect } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'

import { Button } from 'reactstrap'
import PrivateRoute from '../services/PrivateRoute'
import SideMenu from './SideMenu'
import { countries } from '../utils/countries'

function CountryCard({ countryCode, parentCallback }) {
    const [rSelected, setRSelected] = useState(null);
    const [codeSelected, setCodeSelected] = useState(null)
    const getCountry = (code) => {
        setRSelected(code)
        parentCallback(code)
        setCodeSelected(code)
    }

    useEffect(() => {
    }, [codeSelected])
    return (
        <div className='country-buttons' >
            <span>
                {/* {(rSelected !== null) ? rselected : 'wow'} */}
            </span>
            {countries.length ?
                <>
                    {countries.map(ele => <Link key={ele.code} to={`/countries/${ele.code}`}>
                        <Button key={ele.code} className={(rSelected === ele.code) ? 'btn-grad-active' : 'btn-grad'} onClick={() => getCountry(ele.code)}  >{ele.country}</Button>
                    </Link>
                    )}

                </>
                : 'Loading'}
            {/* {codeSelected ? <PrivateRoute exact path='/countries/:codeSelected' code={codeSelected} strict component={SideMenu} /> : ''} */}
            {/* <PrivateRoute exact path='/countries/:code' code={countryCode} strict component={SideMenu} /> */}

        </div>
    )
}

export default CountryCard



