import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const HeroDisplay = () => {
    const [hero, setHero] = useState(null)
    const { heroId } = useParams()
    const nav = useNavigate()
    console.log(heroId)




    useEffect(() => {
        axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/" + heroId + ".json")
            .then((res) => {
                console.log(res.data)
                setHero(res.data)
            })
            .catch((err => {
                console.log("❌❌❌❌", err)
                nav("/error")

            }))
    }, [])


    return (
        <div>
            Hero Display

            {
                hero ? (
                    <div>
                        <h2>{hero.name}</h2>
                        <img src={hero.images.sm} alt={hero.name} />
                    </div>
                ) : <h2>Loading ...</h2>
            }



        </div>
    )
}

export default HeroDisplay