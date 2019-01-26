import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '090-98765' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const rows = () => persons.map(person =>
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

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
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