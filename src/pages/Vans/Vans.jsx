/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'


export default function Vans(){

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    const [vans, setVans] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.filter((van) => typeFilter ? van.type === typeFilter : van).map(van => (
        <div key={van.id} className="van">
            <Link to={`${van.id}`}>
                <img src={van.imageUrl} alt="" loading="lazy" />
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
            <div className="vans-filter-buttons">
                <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => setSearchParams({type: "simple"})}>Simple</button>
                <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
                <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
                <button className="clear-type" onClick={() => setSearchParams({})}>Clear filters</button>
            </div>
            <div className="van-list-container">
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}