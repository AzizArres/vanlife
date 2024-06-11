/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'


export default function About(){
    return(
        <div className="about">
            <img src=".../src/assets/87f1968974ee12ce5da85059cc83bb81.png" alt="" />
            <h2>Dont squeeze in a sedan when you could relaxe in a van</h2>
            <p>
                Our mission is to enliven your road with the perfect
                travel van rental, Our Vans are recertified before each trip
                to ensure your travel plans can go off without a hitch
                (Hitch costs extra)
                <br />
                <br />
                Our team is full of vanlife enthusiasts who know firsthand
                the magic of touring the world on 4 wheels.
            </p>
            <div className="explore-box">
                <h3>Your destionation is waiting.<br />You van is ready.</h3>
                <Link to="/vans">
                    <button>Explore our vans</button>
                </Link>
            </div>
        </div>
    )
}
