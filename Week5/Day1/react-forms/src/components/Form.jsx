import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [heroId, setHeroId] = useState(1)
    const nav = useNavigate()


    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(heroId)
        nav("/hero/" + heroId)
    }
    return (
        <div>
            <h5>Search for your favorite Hero</h5>
            <form onSubmit={SubmitHandler}>
                <label>Hero Id</label> <br />
                <input type="text" onChange={(e) => { setHeroId(e.target.value) }} />
                <button>Search</button>
            </form>

        </div>
    )
}

export default Form