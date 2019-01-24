import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Uint8Array(anecdotes.length))

  
  const generateRandomNumber = (min , max) => {
    let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
  }
  
  const handleSetSelected = () => {
    setSelected(generateRandomNumber(0,anecdotes.length))
  }

  const handleSetVote = () => {
    console.log(selected)
    const copy = [...votes];
    copy[selected] +=1
    setVote(copy)
    
  } 

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleSetVote} text="vote" />
      <Button handleClick={handleSetSelected} text="next anecdote" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)