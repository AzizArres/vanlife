import React from "react"
import {useOutletContext} from "react-router-dom"

export default function Pricing(){
    const {currentVan} = useOutletContext
    return(
        <div className="pricing">
            {
                currentVan ? (<p className="price-host-van">${currentVan.price}<span>/day</span></p>) : <h2>Loading...</h2>
            }
        </div>
    )
}