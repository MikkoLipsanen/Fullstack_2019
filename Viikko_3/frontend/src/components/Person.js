import React from 'react'

const Person = ({ person, removePerson }) => {
  return (
    <div>
      {person.name} {person.number}<br/> 
      <button onClick={()=>removePerson(person.id)}>poista</button>
    </div>
  )
}

export default Person