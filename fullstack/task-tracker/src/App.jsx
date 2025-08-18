import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1 className='title'>Counter App</h1>
      <p className='count'>Current count: {count}</p>
      {/* Use an arrow function so setCount runs only when the button is clicked, not immediately when the component renders.*/}
      <div>
        <button className='add-btn' onClick={() => setCount(count + 1)}>Add</button>
        <button className='sub-btn' onClick={() => setCount(count > 0 ? count - 1 : 0)}>Subtract</button>
        <button className='reset-btn' onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
