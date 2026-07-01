import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)

  function increaseNum() {
    setnum(num+1)
  }
  function decreaseNum() {
    setnum(num-1)
  }
  function reset() {
    setnum(0)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
