import React from 'react'

const Course = (props) => {
  const courseList = props.courses.map(course =>  
    <div key={course.id}>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
  return courseList
}

const Header = (props) => 
  <h1>{props.name}</h1>

const Part = (props) => 
  <p>{props.part.name} {props.part.exercises}</p>


const Content = (props) => {
  const items = props.parts.map(part =>
    <Part key={part.id}
          part={part} 
    />
  )
  return items
}

const Total = (props) => {
  const total = props.parts.reduce((t, part) => t + part.exercises, 0)
    return (
      <p>yhteensä {total} tehtävää</p> 
  )
}

export default Course