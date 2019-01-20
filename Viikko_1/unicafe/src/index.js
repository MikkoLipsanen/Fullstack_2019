import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = (props) => {
  if(props.stats.total === 0){
    return (
      <div> 
        Ei yhtään palautetta annettu.
      </div>
    )
  }

  return (
    <div>
      <Statistic text='hyvä' value={props.stats.good} />
      <Statistic text='neutraali' value={props.stats.neutral} />
      <Statistic text='huono' value={props.stats.bad} />
      <Statistic text='yhteensä' value={props.stats.total} />
      <Statistic text='keskiarvo' value={props.stats.average} />
      <Statistic text='positiivisia' value={props.stats.positive} />
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

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: good + neutral + bad,
    average: (good-bad)/(good + neutral + bad),
    positive: good/(good + neutral + bad)*100 + '%'
  }


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
      <Statistics stats={stats} />
    </div>
  )
}
  

ReactDOM.render(<App />, 
  document.getElementById('root')
)