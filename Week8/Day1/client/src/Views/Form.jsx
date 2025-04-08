import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const nav = useNavigate()
    const [name, setName] = useState("")
    const [imgURL, setImageURL] = useState("")
    const [layers, setLayers] = useState(1)
    const [hasFrosting, setFrosting] = useState(false)

    const [errorHandler, setErrorHandler] = useState({})


    const SubmitHandler = (e) => {
        e.preventDefault()
        const newData = {
            name,
            imgURL,
            layers,
            hasFrosting
        }
        axios.post("http://localhost:5000/api/cakes/", newData)
            .then(res => {
                console.log("✅✅✅", res.data)
                nav("/home")
            })
            .catch(err => {
                console.log("❌❌❌❌", err.response.data.errors)
                setErrorHandler(err.response.data.errors)
            })
        setName("")
        setImageURL("")
        setLayers(0)
        setFrosting(false)

    }

    return (
        <div>
            <h3>Add New Cake</h3>
            name : {JSON.stringify(name)} <br />
            imgURL : {JSON.stringify(imgURL)} <br />
            layers : {JSON.stringify(layers)} <br />
            hasFrosting : {JSON.stringify(hasFrosting)} <br />
            <form onSubmit={SubmitHandler}>
                <div>
                    <label > Cake Name :</label> <br />
                    <input type="text" value={name} onChange={e => { setName(e.target.value) }} />
                    <br />
                    {errorHandler.name && <p>{errorHandler.name.message}</p>}
                </div>
                <div>
                    <label > Cake Image :</label> <br />
                    <input type="text" value={imgURL} onChange={e => { setImageURL(e.target.value) }} />
                    {errorHandler.imgURL && <p style={re}>{errorHandler.imgURL.message}</p>}
                </div>
                <div>
                    <label > How many layers do the cake have ?</label>  <br />
                    <input type="number" value={layers} onChange={e => { setLayers(e.target.value) }} />
                    {errorHandler.layers && <p>{errorHandler.layers.message}</p>}
                </div>
                <div>
                    <label > Has Frosting ?</label>  <br />
                    <input type="checkbox" value={hasFrosting} onChange={e => { setFrosting(e.target.checked) }} />
                </div>
                <button>Add Cake</button>
            </form>



        </div>
    )
}

export default Form