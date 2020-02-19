import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className="nav-container">
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/features'>Features</Link>
            </ul>
        </div>
    )
}

export default Nav;