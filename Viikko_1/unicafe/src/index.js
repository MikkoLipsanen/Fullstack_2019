import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
      <tr>
        <td>{props.text} {props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  if(props.stats.total === 0){
    return (
      <tbody>
        <tr> 
          <td>Ei yhtään palautetta annettu.</td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody>
      <Statistic text='hyvä' value={props.stats.good} />
      <Statistic text='neutraali' value={props.stats.neutral} />
      <Statistic text='huono' value={props.stats.bad} />
      <Statistic text='yhteensä' value={props.stats.total} />
      <Statistic text='keskiarvo' value={props.stats.average} />
      <Statistic text='positiivisia' value={props.stats.positive} />
    </tbody>
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
    <table>
      <Statistics stats={stats} />
    </table> 
    </div>
  )
}
  

ReactDOM.render(<App />, 
  document.getElementById('root')
)