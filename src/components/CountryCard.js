import { Link, Redirect } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'

import { Button } from 'reactstrap'
import { countries } from '../utils/countries'

function CountryCard({ countryCode, parentCallback }) {
    const [rSelected, setRSelected] = useState(null);
    const getCountry = (code) => {
        setRSelected(code)
        parentCallback(code)
    }
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
        </div>
    )
}

export default CountryCard



