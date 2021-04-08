import React, { useEffect, useState } from 'react'

import CardItem from '../components/CardItem';
import Paginate from './Paginate';
import axios from 'axios';

function SideMenu(props) {
    const [houses, setHouses] = useState([])
    const [showHouses, setShowHouses] = useState(false)
    console.log('SIDEE', props)
    const code = props.match.params.code
    // return
    const sortFun = (val) => {
        // parentCallback(val)
    }

    // const checkFun = () => {
    //     console.log('here')
    // }

    const filterBedrooms = (val, checked) => {

        // parentFilterCallback(val, checked)
    }
    const paginatedData = (data) => {
        console.log('paginatedData -APP', paginatedData)
        setHouses(data.posts)
    }

    useEffect(() => {
        const getHouses = async (code) => {
            console.log(code, 'CODE---------------')
            const result = await axios.get(`http://localhost:4000/country/${code}`)
            console.log(result, 'RES')
            setShowHouses(true)
            setHouses(result.data.posts)
        }
        getHouses(code)
    }, [code])
    return (
        <div className='content-style'>

            <div className='side-menu'>
                <div className='price-sort'>
                    <h4>Sort</h4>
                    <input type="radio" id="desc" name="sort" value="desc" onClick={(e) => sortFun(e.target.value)} />
                    <label htmlFor="desc">High to Low</label><br />
                    <input type="radio" id="asc" name="sort" value="asc" onClick={(e) => sortFun(e.target.value)} />
                    <label htmlFor="asc">Low to High</label><br />
                </div>


                <input type="checkbox" id="1bed" name="1bed" value="1" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                <label for="1bed"> 1Bedroom</label><br />
                <input type="checkbox" id="2bed" name="2bed" value="2" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                <label for="2bed"> 2 Bedrroms</label><br />
                <input type="checkbox" id="3bed" name="3bed" value="3" onClick={(e) => filterBedrooms(e.target.value, e.target.checked)} />
                <label for="3bed"> 3 Bedrooms</label><br></br>
            </div>

            <div className='card-style'>
                <Paginate paginatedCallback={paginatedData} code={code} />
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
