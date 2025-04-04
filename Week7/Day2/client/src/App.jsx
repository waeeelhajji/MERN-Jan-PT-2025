import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hom from "./Views/Hom"
import NavBar from './components/NavBar'
import OneCake from './Views/OneCake'

function App() {

  return (
    <>
      <h1>Welcome to the Cake House 🍥</h1>
      <NavBar />

      <Routes>
        {/* Home of Cake */}
        <Route path="/home" element={<Hom />} />
        <Route path="/cake/:id" element={<OneCake />} />

      </Routes>
    </>
  )
}

export default App
