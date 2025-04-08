import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <fieldset>
            <Link to="/home" >
                All Cakes
            </Link>
            <br />
            <Link to="/cake/add">
                Add new Cake
            </Link>

        </fieldset>
    )
}

export default NavBar