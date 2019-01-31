import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showLimited, setShowLimited ] = useState('')

  useEffect(() => {
    personService
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
  }, [])
  

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

    personService
      .create(personObject)
        .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })  
  }

  const removePerson = id => {
    const removable = persons.find(person => person.id === id)
    window.confirm(`Poistetaanko ${removable.name}`);
    personService
      .remove(id)
      .then(response => {
        console.log(response.data)
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
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
      <Persons personsToShow={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App