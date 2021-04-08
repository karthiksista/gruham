import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import { countries } from '../utils/countries'

function CountryCard({ countryCode, parentCallback }) {
    // console.log(selectedCountry, 'SELECTED')
    console.log('CountryCard render ......')

    const getCountry = (code) => {
        parentCallback(code)
    }

    return (
        <div className='country-buttons' >
            {countries.length ?
                <>

                    {countries.map(ele => <Link key={ele.code} to={`/countries/${ele.code}`}>
                        <Button key={ele.code} className='code-buttons' color="primary" onClick={() => getCountry(ele.code)} >{ele.country}</Button>
                    </Link>
                    )}

                </>
                : 'Loading'}
        </div>
    )
}

export default CountryCard
