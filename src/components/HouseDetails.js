import { Col, Container, Row, UncontrolledCarousel } from 'reactstrap'
import { useEffect, useState } from 'react'

import { BASE_URL } from '../environment'
import React from 'react'
import axios from 'axios'
import bed from '../images/bed.svg'
import clean from '../images/clean.svg'
import home from '../images/home.svg'

function HouseDetails(props) {
    console.log('HDRENDER', props)
    const _id = props.match.params._id
    const code = props.match.params.code

    const [houseDetails, setHouseDetails] = useState([])
    const [houseImages, setHouseImages] = useState([])



    useEffect(() => {
        // props.parentcallBack(false)
        const getDetails = async () => {
            const results = await axios.get(`${BASE_URL}/country/${code}/${_id}`)
            console.log(results, 'RESSSH')
            setHouseDetails(results.data.details)
            setHouseImages([
                {
                    src: results.data.details.images.picture_url,
                    altText: 'Slide 1',
                    caption: '',
                    header: '',
                    key: 1
                }
            ])
        }


        getDetails()
    }, [])

    const getImages = () => {
        // return
        // var images = [
        //     {
        //         src: houseDetails.images.picture_url,
        //         altText: 'Slide 1',
        //         caption: '',
        //         header: '',
        //         key: 1
        //     }
        // ]
        // setHouseImages(images)
    }
    return (
        <div >
            <Container className='details-container'>
                <Row>
                    <Col>
                        <h3 style={{ float: 'left' }}>
                            {houseDetails.name ? houseDetails.name : 'N/A'}
                        </h3>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <span style={{ float: 'left' }}>
                            {houseDetails.room_type ? houseDetails.room_type : 'N/A'}
                        </span>
                    </Col>
                </Row>
                {/* TODO STYLE */}
                <Row sm='1' className='carousel-gruham'>
                    <UncontrolledCarousel items={houseImages} />
                </Row>
            </Container>

            <Container className='details-container'>
                <Col>
                    <Row>
                        <Col>
                            <h4 className='details-title'>{houseDetails.room_type ? houseDetails.room_type : 'N/A'} hosted by {houseDetails.host?.host_name} </h4>
                        </Col>
                        <Col>
                            {houseDetails.host?.host_has_profile_pic ? <img src={houseDetails.host?.host_picture_url} style={{ height: '50px', width: '50px', borderRadius: '100%', float: 'right' }} /> : ''}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className='details-title'> {houseDetails?.guests_included} guests · {houseDetails?.property_type} · {houseDetails?.beds} beds · {houseDetails?.bathrooms} bathroom</span>
                        </Col>
                    </Row>
                </Col>
            </Container>

            <Container className='details-container'>
                <Row className='row-details-container'>
                    <Col xs='1'>
                        <span><img className='cleaning-img' src={home} /></span>
                    </Col>
                    <Col xs='11' >
                        <Row>
                            <h4 >{houseDetails?.room_type} <br />

                            </h4>
                        </Row>

                        <Row>
                            <span>
                                You’ll have the {houseDetails?.room_type} to yourself.
                            </span>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs='1'>
                        <span><img className='cleaning-img' src={clean} /></span>
                    </Col>
                    <Col xs='11' >
                        <Row>
                            <h4>Enhanced Cleaning <br />

                            </h4>
                        </Row>
                        <Row>
                            <span style={{ textAlign: 'left' }}>
                                This host committed to Airbnb's 5-step enhanced cleaning process.
                            </span>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className='details-container'>
                <Col>
                    <Row>
                        <Col style={{ textAlign: 'left' }}>
                            <span >
                                {houseDetails?.space}
                            </span>

                        </Col>
                    </Row>
                </Col>
            </Container>

            <Container className='details-container'>
                <Col>
                    <Row>
                        <Col>
                            <h4 className='details-title'>Sleeping arrangements</h4>
                        </Col>

                    </Row>
                    <Col className='sleep-arrangements'>
                        <Row>
                            <Col>
                                <img className='cleaning-img' src={bed} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span className='details-title'> Bedroom </span>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span className='details-title'> 1 Real Bed </span>
                            </Col>
                        </Row>
                    </Col>

                </Col>
            </Container>
        </div>
    )
}

export default HouseDetails
