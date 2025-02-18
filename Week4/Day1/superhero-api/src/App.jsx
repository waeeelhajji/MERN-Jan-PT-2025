import { useState } from 'react'
import './App.css'

function App() {

  //! State
  const [heroes, setHeroes] = useState([])


  //? Vanilla JS Fetch
  const fetchHeroes = () => {
    console.log("its working")
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(serverResponse => {
        return serverResponse.json()
      }).then(actualServerRes => {
        console.log(actualServerRes)
        setHeroes(actualServerRes)
      })
      .catch(err => {
        console.log(err)
      })
  }








  return (
    <>
      <h1>superheroes 🦸🦸‍♂️🦹🦹‍♂️</h1>
      <button onClick={fetchHeroes}>fetch heroes</button>
      <br />
      {/* {JSON.stringify(heroes)} */}
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>full name</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero) => {
              return (
                <tr>
                  <td><img src={hero.images.sm} alt="" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>





    </>
  )
}

export default App
