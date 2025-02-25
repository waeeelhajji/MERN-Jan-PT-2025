import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import HeroDisplay from './components/HeroDisplay'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Main from './Views/Main'
import ErrorComp from "./components/ErrorComp"

function App() {

  return (
    <>
      <h1>routing with heroes 🦸‍♂️🦸‍♀️</h1>
      <Navbar />
      {/* THEATER STAGE */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />

        <Route path="/hero/form" element={<Form />} />
        <Route path="/hero/:heroId" element={<HeroDisplay />} />
        <Route path="/error" element={<ErrorComp />} />

      </Routes>



    </>
  )
}

export default App
