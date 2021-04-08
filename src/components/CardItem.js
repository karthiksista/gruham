import { Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Row } from 'reactstrap'
import React, { useEffect, useState } from 'react'

function CardItem({ image, title, cardText, address, price }) {
    console.log('Card Item render ......')
    const [truncText, setTruncText] = useState('')
    const [truncText100, setTruncText100] = useState('')

    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        setTruncText(cardText.split(' ').slice(0, 25).join(' '))
        setTruncText100(cardText.split(' ').slice(0, 100).join(' '))
    }, [cardText])

    return (
        <>
            <Card className='Card-Style'>
                <img style={{ height: '30%', width: '100%' }} src={image} alt="Card" />
                <CardBody className='Card-Body'>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardText>{!showMore ? truncText : truncText100}</CardText>
                    {!showMore ?
                        <p className='show' onClick={() => setShowMore(true)}>Show More...</p>
                        : <p className='show' onClick={() => setShowMore(false)}> Show Less...</p>
                    }
                    <Row xs="2">
                        <Col>
                            <b><u>Address:</u></b> <br />
                            <span>
                                {address.market}, {address.street}
                            </span>
                        </Col>
                        <Col className='price'>
                            Price: <br />
                            {`$ ${price}`}
                        </Col>

                    </Row>
                </CardBody>
                <CardFooter className="text-muted">
                    <Button color='primary' className='footer-button'>View Details</Button>
                </CardFooter>
            </Card>

        </>
    )
}

export default CardItem
