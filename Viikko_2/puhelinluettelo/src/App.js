import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showLimited, setShowLimited ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const personsToShow = 
      persons.filter(person => person.name.toLowerCase().includes(showLimited.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.find(person => person.name === newName)){
        window.alert(`${newName} on jo luettelossa`);
        setNewName('')
        setNewNumber('')
        return;
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleShowLimited = (event) => {
    setShowLimited(event.target.value)
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Filter showLimited={showLimited} handleShowLimited={handleShowLimited}/>
      <h2>Lisää uusi</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
      newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numerot</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App