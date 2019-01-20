import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.text} {props.value}</div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good-bad)/total
  const positive = 0 + (good/total*100)

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
      <Display text='hyvä' value={good} />
      <Display text='neutraali' value={neutral} />
      <Display text='huono' value={bad} />
      <Display text='yhteensä' value={total} />
      <Display text='keskiarvo' value={average} />
      <div>positiivisia {positive} %</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)