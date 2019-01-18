import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part part="Reactin perusteet" exercises="10" />
      <Part part="Tiedonvälitys propseilla" exercises="7" />
      <Part part="Komponenttien tila" exercises="14"/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        yhteensä {props.total} tehtävää
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const total = 31

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={total} />
    </div>
    )


}

ReactDOM.render(<App />, document.getElementById('root'))
