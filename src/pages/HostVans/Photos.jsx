import React from "react"
import {useOutletContext} from "react-router-dom"

export default function Photos(){
    const {currentVan} = useOutletContext()

    return(
        <div className="photos">
            {
                currentVan ? (
                    <img src={currentVan.imageUrl} className="mini-photo"/>
                ) : <h2>Loading...</h2>
            }
        </div>
    )
}