import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showLimited, setShowLimited ] = useState('')
  const [ message, setMessage ] = useState('')

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
        const person = persons.find(person => person.name === newName)
        window.alert(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`);
        const changedPerson = {...person, number: newNumber}

        personService
          .update(person.id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            })
                .catch(error => {
                setMessage(
                  `Henkilö '${person.name}' on jo poistettu`
                )
                setTimeout(() => {
                  setMessage(null)
                }, 5000)
                setPersons(persons.filter(p => p.id !== person.id))
                })

                setMessage(
                  `Henkilön '${person.name}' numero päivitetty`
                )
                setTimeout(() => {
                  setMessage(null)
                }, 5000)
            
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
        setMessage(
          `Lisättiin '${returnedPerson.name}'`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })  
      .catch(error => {
        console.log(error.response.data)
        setMessage(JSON.stringify(error.response.data.error))
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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
        setPersons(persons.filter(p => p.id !== id))
        setMessage(
          `Poistettiin '${removable.name}'`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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

      <Notification message={message} />

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