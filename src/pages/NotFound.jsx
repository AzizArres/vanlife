// eslint-disable-next-line no-unused-vars
import React from "react"
// eslint-disable-next-line no-unused-vars
import {Link, NavLink} from "react-router-dom"


export default function NotFound(){
    return(
        <div className="not-found">
            <h1>Sorry the page you were looking for was not found.</h1>
            <button>
                <NavLink to="" >Return to home</NavLink>
            </button>
        </div>
    )
}