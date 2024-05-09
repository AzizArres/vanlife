/* eslint-disable no-unused-vars */
import React from "react"
import {NavLink} from "react-router-dom"


export default function HeaderHost(){
    return(
        <>
            <header className="header-host">
                <nav>
                    <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } end to="/host">Dashboard</NavLink>
                    <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } to="/host/income">Income</NavLink>
                    <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } to="/host/vans">Vans</NavLink>
                    <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } to="/host/reviews">Reviews</NavLink>
                </nav>
            </header>
        </>
    )
}