import React, { useState } from 'react'

const App2 = () => {
    const [name, setName] = useState("")
    function btnclicked() {
        setName("")
    }
    return (
   
    <>
      <input type="text"
        placeholder="Enter Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} />
      <h2>Hello {name}</h2> 
      <button onClick={btnclicked}>Submit</button>
    </>
  )
}

export default App2
