import React from "react"
import {useOutletContext} from "react-router-dom"


export default function Details(){

    const { currentVan } = useOutletContext()

    return(
        <div className="details">
            {
                currentVan ? (
                    <div className="detail-host-van">
                            <div className="info">
                                <p>Name: <span>{currentVan.name}</span></p>
                            </div>
                            <div className="info">
                                <p>Category: <span>{currentVan.type}</span></p>
                            </div>
                            <div className="info">
                                <p>Description: <span>{currentVan.description}</span></p>
                            </div>
                    </div>
                ) : <h2>Loading...</h2>
            }
        </div>
    )
}