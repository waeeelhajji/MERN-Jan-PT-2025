import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Cool from './components/Cool'
import Hero from './components/Hero'
import Home from './components/Home'

function App() {

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h1>REACT Routing</h1>
      {/* THEATER STAGE */}
      {/* <Hero /> */}
      {/* ---<a href='/'>home</a>---
      <a href='/hero'>Hero</a>---
      <a href='/cool'>Cool</a>---- */}
      {/* nooooooo   anchor tag */}
      ---<Link to="/">home</Link>
      ---<Link to="/cool">Cool</Link>
      ---<Link to="/hero">Hero</Link>---
      <Routes>
        {/* ACT I - HOME */}
        <Route path="/" element={<Home />} />
        {/* ACT II - Cool 😎 */}
        <Route path='/cool' element={<Cool />} />
        {/* ACT III - Hero  */}
        <Route path='/hero/:iheb' element={<Hero />} />

        <Route path="*" element={<h4>NOT Found ❌❌❌❌❌</h4>} />
      </Routes>
    </fieldset>
  )
}

export default App
