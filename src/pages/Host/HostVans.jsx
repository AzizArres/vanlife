/* eslint-disable no-unused-vars */
import React from "react"
import {Link} from "react-router-dom"


export default function HostVans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() =>{
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    const hostVansEls = vans.map(van => (
        <Link to={`${van.id}`} key={van.id} className="host-van-link">
            <div className="host-van">
                <img src={van.imageUrl} alt="" />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return(
        <div className="host-vans">
            <h1>Your listed vans</h1>
            {
                vans.length > 0 ? <section>{hostVansEls}</section> : <h2> <br/> Loading...</h2>
            }
        </div>
    )
}                        