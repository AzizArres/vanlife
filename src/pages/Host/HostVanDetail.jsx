import React from "react"
import {useParams, Link, Outlet, NavLink} from "react-router-dom"

export default function HostVanDetail(){
    const params = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [params.id])

    
    return(
        <div className="host-van-detail">
            <Link to="/host/vans" className="back-to-all-vans">
                <span>&larr;</span>
                <p>Back to all vans</p>
            </Link>
            {
                currentVan ? (
                    <div className="host-van-detail-card">
                        <div className="host-van-detail-static">
                            <img src={currentVan.imageUrl} className="current-van-image" />
                            <div className="current-van-details">
                                <h3 className={`van-type ${currentVan.type} selected`}>{currentVan.type}</h3>
                                <h3 className="current-van-name">{currentVan.name}</h3>
                                <p className="current-van-price">${currentVan.price} <span>/day</span></p>
                            </div>
                        </div>
                        <header  className="host-van-detail-info-nav">
                        <nav>
                            <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } end to="">Details</NavLink>
                            <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } to="pricing">Pricing</NavLink>
                            <NavLink className={ ({isActive}) => isActive ? "active-link" : "" } to="photos">Photos</NavLink>
                        </nav>
                        </header>
                        <Outlet context={{currentVan}}/>
                    </div>
                    

                ) : <h2>Loading ...</h2>
            }
        </div>
    )
} 