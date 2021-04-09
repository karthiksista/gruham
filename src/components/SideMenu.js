import { Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import React, { useEffect, useState } from 'react'

import { BASE_URL } from '../environment'
import CardItem from '../components/CardItem';
import Paginate from './Paginate';
import axios from 'axios';

function SideMenu(props) {
    const [houses, setHouses] = useState([])
    const [showHouses, setShowHouses] = useState(false)
    const [sortVal, setSortVal] = useState('asc')
    const [bedroomsFilter, setBedroomsFilter] = useState(1)
    const code = props.match.params.code
    const sortFun = async (val) => {
        let variables = {
            params: {
                sort: val,
                roomtype: Number(bedroomsFilter)
            }
        }
        const result = await axios.get(`${BASE_URL}/country/${code}`, variables)
        setSortVal(val)
        setHouses(result.data.posts)
    }

    const filterBedrooms = async (val, checked) => {
        if (checked) {
            let variables = {
                params: {
                    sort: sortVal,
                    roomtype: Number(val)
                }
            }
            const result = await axios.get(`${BASE_URL}/country/${code}`, variables)
            setBedroomsFilter(val)
            setHouses(result.data.posts)
        }
    }
    const paginatedData = (data) => {
        setHouses(data.posts)
    }

    useEffect(() => {
        const getHouses = async (code) => {
            let variables = {
                params: {
                    sort: 'asc',
                    roomtype: 1
                }
            }
            const result = await axios.get(`${BASE_URL}/country/${code}`, variables)
            setShowHouses(true)
            setHouses(result.data.posts)
        }
        getHouses(code)

    }, [code])
    return (
        <Container>
            <Row>
                <Col sm='3'>
                    <h4>Sort</h4>
                    <input type="radio" id="asc" name="sort" value="asc" defaultChecked onClick={(e) => sortFun(e.target.value)} />
                    <label htmlFor="asc"> Low to High</label><br />
                    <input type="radio" id="desc" name="sort" value="desc" onClick={(e) => sortFun(e.target.value)} />
                    <label htmlFor="desc"> High to Low</label><br />

                    <input type="checkbox" id="1bed" name="1bed" value="1" defaultChecked onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                    <label for="1bed"> 1Bedroom</label><br />
                    <input type="checkbox" id="2bed" name="2bed" value="2" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                    <label for="2bed"> 2 Bedrroms</label><br />

                    <input type="checkbox" id="3bed" name="3bed" value="3" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                    <label for="3bed"> 3 Bedrooms</label><br></br>
                </Col>
                <Col sm='9'>
                    <Row sm='2'>
                        {houses.length ? houses.map((house) => {
                            return (
                                <CardItem key={house.name} image={house.images.picture_url} title={house.name} cardText={house.description} address={house.address} price={house.price} beds={house.beds} bathrooms={house.bathrooms} reviews={house.number_of_reviews} guests={house.guests_included} bedrooms={house.bedrooms} />
                            )
                        }) : ('')}
                    </Row>
                </Col>
            </Row>
        </Container>
        // <div className='content-style'>

        //     <div className='side-menu'>
        //         <div className='container'>
        //             <h4>Sort</h4>
        //             <input type="radio" id="asc" name="sort" value="asc" defaultChecked onClick={(e) => sortFun(e.target.value)} />
        //             <label htmlFor="asc"> Low to High</label><br />
        //             <input type="radio" id="desc" name="sort" value="desc" onClick={(e) => sortFun(e.target.value)} />
        //             <label htmlFor="desc"> High to Low</label><br />
        //         </div>

        //         <input type="checkbox" id="1bed" name="1bed" value="1" defaultChecked onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
        //         <label for="1bed"> 1Bedroom</label><br />
        //         <input type="checkbox" id="2bed" name="2bed" value="2" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
        //         <label for="2bed"> 2 Bedrroms</label><br />
        //       
        //         <input type="checkbox" id="3bed" name="3bed" value="3" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
        //         <label for="3bed"> 3 Bedrooms</label><br></br>
        //     </div>

        //     <div className='card-style'>
        //         <Paginate paginatedCallback={paginatedData} code={code} bedrooms={bedroomsFilter} sortValue={sortVal} />

        //         {houses.length ? houses.map((house) => {
        //             return (
        //                 <CardItem key={house.name} image={house.images.picture_url} title={house.name} cardText={house.description} address={house.address} price={house.price} />
        //             )
        //         }) : ('')}

        //     </div>
        // </div>
    )
}

export default SideMenu
