import React from 'react'
import Person from './Person'

const Persons = (props) =>(
  props.personsToShow.map(person =>
    <Person
      key={person.id}
      person={person}
      removePerson={props.removePerson}
    />
  )
)

export default Persons
