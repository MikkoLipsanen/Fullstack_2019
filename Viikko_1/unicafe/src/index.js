import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    const { good, neutral, bad } = props
    const total = good + neutral + bad
    const countAverage = () => {
      if(total===0){
        return 0
      }
      return (good-bad)/total}
    const countPositive = () => {
        if(total===0){
          return 0
        }
        return good/total*100}

    return (
      <div>
        <p>hyvä {props.good}</p>
        <p>neutraali {props.neutral}</p>
        <p>huono {props.bad}</p>
        <p>yhteensä {total}</p>
        <p>keskiarvo {countAverage()}</p>
        <p>positiivisia {countPositive()} %</p>
      </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
  }

  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleSetBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h2>Anna palautetta</h2>
      <Button handleClick={handleSetGood} text="hyvä" />
      <Button handleClick={handleSetNeutral} text="neutraali" />
      <Button handleClick={handleSetBad} text="huono" />
      <h3>Statistiikka</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)