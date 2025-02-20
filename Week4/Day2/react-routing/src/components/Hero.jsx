import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Hero = () => {
    const { iheb } = useParams()
    const [oneHero, setOneHero] = useState(null)
    console.log(iheb)
    // Axios
    const getHeroes = () => {
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${iheb}.json`)
            .then(response => {
                //! always your response it will be inside .data
                console.log(response.data)
                setOneHero(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${iheb}.json`)
            .then(response => {
                //! always your response it will be inside .data
                console.log(response.data)
                setOneHero(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    // getHeroes()

    return (
        <fieldset>
            <legend>Hero.jsx</legend>
            <h3>My Hero 🦸‍♂️🦸‍♀️🦹🦹‍♀️</h3>
            <button onClick={getHeroes}>Get hero</button>
            {iheb}
            {
                oneHero ? (
                    <>

                        <h3>{oneHero.name}</h3>
                        <img src={oneHero.images.sm} alt="" />
                    </>

                ) : <h1>no Hero</h1>

            }
        </fieldset>
    )
}

export default Hero