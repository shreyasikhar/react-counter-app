import React, { useState } from 'react'
import './App.css'

function App() {
  // variable is count
  // setCount will be used to modify count
  // 0 is the default value passed to count
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Counter App using State/Hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={ () => setCount(0) }>Reset Counter</button>
      <button onClick={ () => setCount(count >= 10 ? count : count+1) }>Increase Counter</button>
      <button onClick={ () => setCount(count > 0 ? count-1 : count) }>Decrease Counter</button>
    </div>
  )
}

export default App