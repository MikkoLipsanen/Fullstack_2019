import React from 'react'

const Countries = (props) => {

  if (props.countriesToShow.length >= 10 && props.showLimited.length !== 0) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  if(props.countriesToShow.length > 1 && props.countriesToShow.length < 10) {
    return (
      props.countriesToShow.map(country =>
        <div key={country.name}>{country.name}</div>
      )
    )
  }

  if(props.countriesToShow.length === 1){
    return (
        <div>
          <h1>{props.countriesToShow[0].name}</h1>
          <p>capital {props.countriesToShow[0].capital}</p>
          <p>population {props.countriesToShow[0].population}</p>
          <h2>languages</h2>
          <ul>
            {props.countriesToShow[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
          </ul>
          <img src={props.countriesToShow[0].flag} alt="Country flag" height="100" width="150"/>
        </div>
      )
  }

  if(props.showLimited.length === 0){
    return (
        <div>
          Search for a country
        </div>
    )
  }

  if(props.countriesToShow.length === 0){
    return (
        <div>
          No matches, specify another filter
        </div>
    )
  }

}

export default Countries