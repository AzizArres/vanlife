/* eslint-disable no-unused-vars */
import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header>
          <Link className="site-logo" to="/">#VANLIFE</Link>
          <nav>
            <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } to="/host">Host</NavLink>
            <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } to="/about">About</NavLink>
            <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } to="/vans">Vans</NavLink>
          </nav>
        </header>
    )
}