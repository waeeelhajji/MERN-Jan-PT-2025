import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <fieldset>
            <Link to="/home" >
                All Cakes
            </Link>

        </fieldset>
    )
}

export default NavBar