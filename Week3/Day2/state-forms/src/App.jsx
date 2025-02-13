
import { useState } from 'react'
import './App.css'

function App() {

  const animals = ["🦛", "🐄", "🦆"]



  //? CREATE STATE FOR THIS COMPONENT
  //!      State 
  //!       !  Change state
  //!      V      V            default state
  const [animal, setAnimal] = useState("")
  const [animall, setAnimall] = useState("")
  const [zoo, setZoo] = useState(animals)

  const submitHandler = (e) => {
    e.preventDefault()
    // animals.push(animal)
    setZoo([...zoo, animal, animall])
    console.log("hello from submit function")
  }

  return (
    <fieldset>
      <legend>App.jsx</legend>
      {/* My Animals : {JSON.stringify(animals)} */}
      <br />
      {JSON.stringify(animal)} <br />
      Zoo : {JSON.stringify(zoo)}
      <form onSubmit={submitHandler}>
        <div>
          <label> enter animal emoji :</label>
          <input type="text" onChange={(event) => { setAnimal(event.target.value) }} />
        </div>
        <div>
          <label> enter animal emoji :</label>
          <input type="text" onChange={(event) => { setAnimall(event.target.value) }} />
        </div>
        <button>Add animal</button>
      </form>

    </fieldset>
  )
}

export default App
