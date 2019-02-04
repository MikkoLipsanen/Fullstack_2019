import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries] = useState([]) 
  const [ showLimited, setShowLimited ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow =  
    countries.filter(country => country.name.toLowerCase().includes(showLimited.toLowerCase()))

  const handleShowLimited = (event) => {
    setShowLimited(event.target.value)
  }

    return (
      <div>
        <Filter showLimited={showLimited} handleShowLimited={handleShowLimited}/>
        <Countries countriesToShow={countriesToShow} showLimited={showLimited}/>
      </div>
    )
  }


export default App;
