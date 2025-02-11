import { useState } from 'react'
import './App.css'

import AnotherComponent from './components/AnotherComponent'

function App() {

  const x = 3
  const message = "hello"
  const animals = ['🦁', '🦒', '🦓', '🐊'];

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }



  return (
    <fieldset>
      <legend>App.jsx</legend>

      x : {x} <br />
      Wael says {message}<br />
      All Animals : {animals} <br />
      this is the person object : {JSON.stringify(person)}
      name of the person : {person.name}

      <AnotherComponent aa={animals} />


    </fieldset>
  )
}

export default App
