import { Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import React, { useEffect, useState } from 'react'
import { Router, Switch } from 'react-router'

import { Link } from 'react-router-dom'

function CardItem({ _id, image, title, cardText, address, price, beds, bathrooms, reviews, guests, bedrooms, code }) {
    const [truncText, setTruncText] = useState('')
    const [truncText100, setTruncText100] = useState('')
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        setTruncText(cardText.split(' ').slice(0, 25).join(' '))
        setTruncText100(cardText.split(' ').slice(0, 100).join(' '))
    }, [cardText])

    return (
        <>
            <Card>
                <img style={{ height: '30%', width: '100%' }} src={image ? image : 'loading...'} alt="Card" />
                <CardBody className='gruh-card-body' >
                    <CardTitle tag="h5">{title ? title : 'loading...'}  </CardTitle>
                    <small>{reviews} reviews </small>
                    <Row xs='1' className='details-room'>
                        {`${guests} Guests allowed, ${bedrooms} Bedrooms, ${bathrooms} Bath, ${beds} Beds`}
                    </Row>
                    <Row xs="2">
                        <Col>
                            <b><u>Address:</u></b> <br />
                            <span>
                                {address.market}, {address.street}
                            </span>
                        </Col>
                        <Col className='price'>
                            Price: <br />
                            {`$ ${price}/night`}
                        </Col>

                    </Row>
                </CardBody>
                <CardFooter className="text-muted">
                    <Link to={`/countries/${code}/${_id}`} >
                        <Button className='btn-grad-details'>View Details</Button>
                    </Link>
                </CardFooter>
            </Card>


        </>
    )
}

export default CardItem
