import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hom from "../Views/Hom.jsx"

function App() {

  return (
    <>
      <h1>Welcome to the Cake House 🍥</h1>
      <Routes>
        {/* Home of Cake */}
        <Route path="/homecake" element={<Hom />} />


      </Routes>
    </>
  )
}

export default App
