import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Hom = () => {

    const [cakes, setCakes] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5000/api/cakes/")
            .then(res => {
                console.log(res.data)
                setCakes(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteCake = (idToDelete) => {
        axios.delete("http://localhost:5000/api/cakes/" + idToDelete)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }


    return (
        <div>
            <h3>All Cakes</h3>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>image of the Cake</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cakes.map((oneCake) => {
                            return <tr key={oneCake._id}>
                                <td>
                                    <Link to={"/cake/" + oneCake._id}>
                                        {oneCake.name}
                                    </Link>
                                </td>
                                <td>
                                    <img src={oneCake.imgURL} alt={oneCake.name} height="250px" />
                                </td>
                                <td>
                                    <button onClick={() => { deleteCake(oneCake._id) }}>Buy</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>



        </div>
    )
}

export default Hom