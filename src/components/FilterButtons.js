import { Button, Col, Row } from 'reactstrap'
import React, { useEffect, useState } from 'react'

function FilterButtons({ parentCb }) {

    const [bedrooms, setBedrooms] = useState(1);
    const [beds, setBeds] = useState(1);
    const [guests, setGuests] = useState(1);
    const [bathrooms, setBathrooms] = useState(1)


    useEffect(() => {
        parentCb([bedrooms, beds, guests, bathrooms])

    }, [bedrooms, beds, guests, bathrooms])
    return (
        <div>
            <Row>
                <Col xs='4' className='filter-title'>
                    <span >Bedrooms </span>
                </Col >
                <Col xs='8' className='filter-values'>

                    <Button disabled={(bedrooms === 1 ? true : false)} color='primary' className='filter-operators' onClick={() => setBedrooms(bedrooms - 1)}> - </Button>
                    <span>{bedrooms}</span>
                    <Button color='primary' className='filter-operators' onClick={() => setBedrooms(bedrooms + 1)}> + </Button>

                </Col>
            </Row>
            <Row>
                <Col xs='4' className='filter-title'>
                    <span >Beds </span>
                </Col >
                <Col xs='8' className='filter-values'>

                    <Button disabled={(beds === 1 ? true : false)} color='primary' className='filter-operators' onClick={() => setBeds(beds - 1)}> - </Button>
                    <span>{beds}</span>
                    <Button color='primary' className='filter-operators' onClick={() => setBeds(beds + 1)}> + </Button>

                </Col>
            </Row>
            <Row>
                <Col xs='4' className='filter-title'>
                    <span >Guests </span>
                </Col >
                <Col xs='8' className='filter-values'>

                    <Button disabled={(guests === 0 ? true : false)} color='primary' className='filter-operators' onClick={() => setGuests(guests - 1)}> - </Button>
                    <span>{guests}</span>
                    <Button color='primary' className='filter-operators' onClick={() => setGuests(guests + 1)}> + </Button>

                </Col>
            </Row>
            <Row>
                <Col xs='4' className='filter-title'>
                    <span >Bathrooms </span>
                </Col >
                <Col xs='8' className='filter-values'>
                    <Button disabled={(bathrooms === 1 ? true : false)} color='primary' className='filter-operators' onClick={() => setBathrooms(bathrooms - 1)}> - </Button>
                    <span>{bathrooms}</span>
                    <Button color='primary' className='filter-operators' onClick={() => setBathrooms(bathrooms + 1)}> + </Button>

                </Col>
            </Row>
        </div>
    )
}

export default FilterButtons
