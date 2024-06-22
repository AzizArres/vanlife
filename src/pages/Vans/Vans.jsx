/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'



export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = filteredVans.map(van => (
        <div key={van.id} className="van">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt="" />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <div className={`van-type ${van.type} selected`} >{van.type}</div>
            </Link>
        </div>
    ))

    return(
        <div className="vans">
            <h1>Explore our van options</h1>
            <div className="van-list-container">
                <nav className="filters">
                    <button onClick={()=> setSearchParams("?type=simple")} className="van-type-button simple">Simple</button>
                    <button onClick={()=> setSearchParams("?type=luxury")} className="van-type-button luxury">Luxury</button>
                    <button onClick={()=> setSearchParams("?type=rugged")} className="van-type-button rugged">Rugged</button>
                    <button onClick={()=> setSearchParams("")} className="van-type-button clear-filter">Clear filter</button>
                </nav>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}