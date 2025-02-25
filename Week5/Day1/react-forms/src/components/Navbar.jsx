import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/" >Home</Link>   - <Link to="/hero/:heroId" >Hero</Link> - <Link to="/hero/form" >Form</Link>
        </div>
    )
}

export default Navbar