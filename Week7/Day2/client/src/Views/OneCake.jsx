import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneCake = () => {

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
            <ul>
                <li>{oneCake.name}</li>
                <li><img src={oneCake.imgURL} alt={oneCake.name} height="300px" /></li>
                <li>{oneCake.layers}</li>
                <li>{oneCake.hasFrosting ? "✅" : "❌"}</li>
            </ul>

        </div>
    )
}

export default OneCake