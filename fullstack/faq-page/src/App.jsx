import { useState } from 'react'
import './App.css'

function App() {
  const [questionOne, setQuestionOne] = useState(false)
  const [questionTwo, setQuestionTwo] = useState(false)
  const [questionThree, setQuestionThree] = useState(false)

  return (
    <div className='container'>
      <h1 className='title'>FAQ Page</h1>
      <div className='list'>
        <button className="question-btn" onClick={() => setQuestionOne(!questionOne)}>What is React?</button>
        {questionOne && <p className='question'>React is a JavaScript library for building user interfaces.</p>}
        <button className="question-btn" onClick={() => setQuestionTwo(!questionTwo)}>Who created React?</button>
        {questionTwo && <p className='question'>React was created by Facebook in 2013.</p>}
        <button className="question-btn" onClick={() => setQuestionThree(!questionThree)}>What is a component in React?</button>
        {questionThree && <p className='question'>A component is a reusable piece of UI that manages its own structure and behavior.</p>}


      </div>
    </div>
  )
}

export default App
