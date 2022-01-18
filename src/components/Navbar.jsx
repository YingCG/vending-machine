import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar(){
    return (
        <>
        <nav className='nav-bar'>
            <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
            <NavLink exact activeClassName='active-link' to='/chips'>Chips</NavLink>
            <NavLink exact activeClassName='active-link' to='/sardines'>Sardine</NavLink>
            <NavLink exact activeClassName='active-link' to='/soda'>Soda</NavLink>
      </nav>
        </>
    )
}

export default Navbar