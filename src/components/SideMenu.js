import React, { useEffect, useState } from 'react'

import CardItem from '../components/CardItem';
import Paginate from './Paginate';
import axios from 'axios';

function SideMenu(props) {
    const [houses, setHouses] = useState([])
    const [showHouses, setShowHouses] = useState(false)
    const [sortVal, setSortVal] = useState('asc')
    const [bedroomsFilter, setBedroomsFilter] = useState(1)
    console.log('SIDEE', props)
    const code = props.match.params.code


    const sortFun = async (val) => {
        console.log('SORTTTT')
        const result = await axios.get(`http://localhost:4000/country/${code}?sort=${val}&roomtype=${Number(bedroomsFilter)}`)
        setSortVal(val)
        setHouses(result.data.posts)
    }

    const filterBedrooms = async (val, checked) => {
        console.log()
        if (checked) {
            const result = await axios.get(`http://localhost:4000/country/${code}?sort=${sortVal}&roomtype=${Number(val)}`)
            console.log(result, 'kjfksd')
            setBedroomsFilter(val)
            setHouses(result.data.posts)
        }
    }
    const paginatedData = (data) => {
        console.log('paginatedData -APP', paginatedData)
        setHouses(data.posts)
    }

    useEffect(() => {
        const getHouses = async (code) => {
            console.log(code, 'CODE---------------')
            const result = await axios.get(`http://localhost:4000/country/${code}?page=1&sort=${sortVal}&roomType=${bedroomsFilter}`)
            console.log(result, 'RES')
            setShowHouses(true)
            setHouses(result.data.posts)
        }
        getHouses(code)
    }, [code])
    return (
        <div className='content-style'>

            <div className='side-menu'>
                <div className='container'>
                    <h4>Sort</h4>


                    <input type="radio" id="asc" name="sort" value="asc" defaultChecked onClick={(e) => sortFun(e.target.value)} />
                    <label htmlFor="asc"> Low to High</label><br />
                    <input type="radio" id="desc" name="sort" value="desc" onClick={(e) => sortFun(e.target.value)} />
                    <label htmlFor="desc"> High to Low</label><br />
                </div>


                <input type="checkbox" id="1bed" name="1bed" value="1" defaultChecked onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                <label for="1bed"> 1Bedroom</label><br />
                <input type="checkbox" id="2bed" name="2bed" value="2" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                <label for="2bed"> 2 Bedrroms</label><br />
                <label class="container">Two
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <input type="checkbox" id="3bed" name="3bed" value="3" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                <label for="3bed"> 3 Bedrooms</label><br></br>
            </div>

            <div className='card-style'>
                <Paginate paginatedCallback={paginatedData} code={code} bedrooms={bedroomsFilter} sortValue={sortVal} />
                {houses.length ? houses.map((house) => {
                    return (
                        <CardItem key={house.name} image={house.images.picture_url} title={house.name} cardText={house.description} address={house.address} price={house.price} />
                    )
                }) : ('')}

            </div>
        </div>
    )
}

export default SideMenu
