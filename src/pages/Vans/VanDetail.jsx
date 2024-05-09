/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams, Link } from 'react-router-dom'



export default function VanDetail(){
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return(
        <div className="van-detail-container">
            <Link to="/vans" className="back-to-all-vans">
                <span>&larr;</span>
                <p>Back to all vans</p>
            </Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <div className={`van-type ${van.type} selected`}>{van.type}</div>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p className="van-description">{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}