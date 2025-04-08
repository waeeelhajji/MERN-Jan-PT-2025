import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const OneCake = () => {
    const nav = useNavigate()

    const { id } = useParams()
    const [oneCake, setOneCake] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:5000/api/cakes/" + id)
            .then(res => {
                console.log(res.data)
                setOneCake(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>

            {
                oneCake ? <ul>
                    <li>{oneCake.name}</li>
                    <li><img src={oneCake.imgURL} alt={oneCake.name} height="300px" /></li>
                    <li>{oneCake.layers}</li>
                    <li>{oneCake.hasFrosting ? "✅" : "❌"}</li>
                    <li><button onClick={() => { nav("/cake/update/" + oneCake._id) }}>Update Cake</button></li>
                </ul> : <h3>Loading...</h3>
            }


        </div>
    )
}

export default OneCake