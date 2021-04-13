import { Col, Container, Row } from 'reactstrap'
import React, { useEffect, useState } from 'react'

import { BASE_URL } from '../environment'
import CardItem from '../components/CardItem';
import FiltersModal from './FiltersModal';
import HouseDetails from './HouseDetails';
import Paginate from './Paginate';
import axios from 'axios';

function SideMenu(props) {
    const [houses, setHouses] = useState([])
    const [showHouses, setShowHouses] = useState(false)
    const [sortVal, setSortVal] = useState('asc')
    const [vars, setVars] = useState({
        sort: 'asc',
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        guests: 1
    })
    const code = props.match.params.code
    const sortFun = async (val) => {
        let variables = {
            params: {
                ...vars,
                sort: val,
            }
        }
        const result = await axios.get(`${BASE_URL}/country/${code}`, variables)
        setSortVal(val)
        setHouses(result.data.posts)
    }

    const filteredResults = async (data) => {
        let sorty = { sort: 'asc' }
        let final = { ...data, ...sorty, }
        let variables = {
            params: {
                ...final
            }
        }
        const result = await axios.get(`${BASE_URL}/country/${code}`, variables)
        setHouses(result.data.posts)
        setVars({ ...final })

    }
    const paginatedData = (data) => {
        setHouses(data.posts)
    }

    useEffect(() => {
        const getHouses = async (code) => {
            let variables = {
                params: {
                    sort: 'asc',
                    bathrooms: 1,
                    bedrooms: 1,
                    beds: 1,
                    guests: 1
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

                    <FiltersModal buttonLabel='Apply Filters' parentCb={filteredResults} />
                </Col>
                <Col sm='9'>
                    <Row sm='2'>
                        {houses.length ? houses.map((house) => {
                            return (
                                <CardItem key={house._id} _id={house._id} image={house.images.picture_url} title={house.name} cardText={house.description} address={house.address} price={house.price} beds={house.beds} bathrooms={house.bathrooms} reviews={house.number_of_reviews} guests={house.guests_included} bedrooms={house.bedrooms} code={code} />
                            )
                        }) : ('')}
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default SideMenu
