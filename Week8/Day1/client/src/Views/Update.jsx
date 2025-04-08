import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const nav = useNavigate()
    const { id } = useParams()
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
        axios.put("http://localhost:5000/api/cakes/" + id, newData)
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







    useEffect(() => {
        axios.get("http://localhost:5000/api/cakes/" + id)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setImageURL(res.data.imgURL)
                setLayers(res.data.layers)
                setFrosting(res.data.hasFrosting)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>

            <h3>  Update Cake</h3>
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
                <button>  Update Cake</button>
            </form>


        </div>
    )
}

export default Update