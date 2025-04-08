import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hom from "./Views/Hom"
import NavBar from './components/NavBar'
import OneCake from './Views/OneCake'
import Form from './Views/Form'
import Update from './Views/Update'

function App() {

  return (
    <>
      <h1>Welcome to the Cake House 🍥</h1>
      <NavBar />

      <Routes>
        {/* Home of Cake */}
        <Route path="/home" element={<Hom />} />
        <Route path="/cake/:id" element={<OneCake />} />
        <Route path='/cake/add' element={<Form />} />
        <Route path="/cake/update/:id" element={<Update />} />

      </Routes>
    </>
  )
}

export default App
