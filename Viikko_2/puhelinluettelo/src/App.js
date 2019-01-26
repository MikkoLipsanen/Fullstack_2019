import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showLimited, setShowLimited ] = useState('')

  const personsToShow = 
      persons.filter(person => person.name.toLowerCase().includes(showLimited.toLowerCase()))
  

  const rows = () => personsToShow.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

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
      <form onSubmit={addPerson}>
      <div>rajaa näytettäviä: 
        <input 
          value={showLimited} 
          onChange={handleShowLimited}
        />
        </div>
        <h2>Lisää uusi</h2>
        <div>nimi: 
        <input 
          value={newName} 
          onChange={handleNameChange}
        />
        </div>
        <div>numero: 
        <input 
          value={newNumber} 
          onChange={handleNumberChange}
        />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <div>
        {rows()}
      </div>
    </div>
  )

}

export default App