import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack -sovelluskehitys' 

  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }
  
  const Part = (props) => {
    console.log(props)
    return (
      <div>
        <p>{props.name} {props.exercises}</p>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>
          yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää
        </p>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))
