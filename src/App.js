import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import CountryCard from './components/CountryCard';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import { useState } from 'react'

function App() {
  console.log('APP Render ...')
  const [countryCode, setCountryCode] = useState();
  const handleCallback = async (code) => {
    setCountryCode(code)
  }

  const filterFun = (val, checked) => {
    // // console.log('wow')
    // if (checked && !(set1.has(val))) {
    //   set1.add(val)
    //   filt = Array.from(set1).sort((a, b) => a - b)
    //   let copyHouses = [...houses]

    //   const filteredResults = copyHouses.filter((ele) => {
    //     filt.forEach(v => {
    //       if (ele.bedrooms == v) {
    //         if (!finalFilterSet.has(ele._id)) {
    //           finalFilterSet.add(ele)
    //         }
    //         finalFilter = Array.from(finalFilterSet)
    //         // console.log('----------***********&&&&&&&&&&&&&&==================', filteredResults)
    //       }
    //     })
    //   })
    //   console.log(finalFilter, 'finalfiltsrt')
    //   // setHouses(finalFilter)
    //   setBedroomFilters(finalFilter)

    // } else if (!checked) {
    //   set1.delete(val)
    //   set2.add(val)
    //   filt = Array.from(set1).sort((a, b) => a - b)
    //   deltedFilt = Array.from(set2).sort((a, b) => a - b)
    //   let copyHouses = [...houses]

    //   const filteredResults = copyHouses.filter((ele) => {
    //     return deltedFilt.forEach(v => {
    //       if (ele.bedrooms == v) {
    //         finalFilterSet.delete(ele)
    //         // if (finalFilterSet.has(ele._id)) {
    //         // } else {
    //         //   console.log('IKKADA')
    //         // }
    //         finalFilter = Array.from(finalFilterSet)
    //         // console.log('----------***********&&&&&&&&&&&&&&==================', filteredResults)
    //       }
    //     })

    //   })
    //   // setHouses(finalFilter)
    //   console.log(finalFilter, 'VAAMMM')
    //   // setHouses(finalFilter)
    //   setBedroomFilters(finalFilter)

    //   console.log(set1, 'filr')

    // }

  }




  return (
    <Router>
      <Switch>
        <div className='App'>
          <Header brandName='Gruham' places='Places' />
          <CountryCard countryCode={countryCode} parentCallback={handleCallback} />
          <Route path='/countries/:code' exact strict>

            <SideMenu code={countryCode} />

          </Route>

        </div>
      </Switch>
    </Router>

  )

}

export default App;
