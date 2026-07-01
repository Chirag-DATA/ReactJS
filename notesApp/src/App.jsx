import React, { useState } from 'react'


const App = () => {

const [title, setTitle] = useState("")
const [details, setDetails] = useState("")
const [task, setTask] = useState([])

const submitHandler = (e) => {
  e.preventDefault()

  const copyTask = [...task];    
  copyTask.push({title,details})      
  setTask(copyTask)

  
  setTitle("")
  setDetails("")
}

const deleteNote = (idx) => {
  const copyTask = [...task]

  copyTask.splice(idx,1)
  setTask(copyTask)
}


  return (
    <div 
      className='h-screen bg-black text-white lg:flex'>
      <form 
        onSubmit={(e) => {
        submitHandler(e)
      }} className='lg:w-1/2 flex gap-4 flex-col items-start p-10'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input 
          type="text" 
          placeholder='Enter Notes Heading' 
          className='w-full px-5 py-2 border-2 rounded outline-none font-medium'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type='text' 
          placeholder="Write details" 
          className='w-full h-32 px-5 py-2 border-2 rounded outline-none font-medium'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button 
          className='w-full bg-white px-5 py-2 text-black rounded outline-none font-medium active:scale-95'>
          Add Note
        </button>
      </form>
      <div className='p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx) {
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl text-black pb-5 pt-9 px-4 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button 
                onClick={() =>{
                  deleteNote(idx)
                }}
                className='text-white bg-red-400 w-full cursor-pointer active:scale-95 text-xs py-1 rounded font-bold '>Delete</button>
              
            </div>
          })}
        </div>
        
      </div>
    </div>
  )
}

export default App
