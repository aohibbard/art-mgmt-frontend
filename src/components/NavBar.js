import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <NavLink to="/collections">
                My Collections
            </NavLink>
        </div>
    )
}

export default NavBar