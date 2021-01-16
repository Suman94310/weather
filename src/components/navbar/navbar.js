import React, { useState, useEffect } from 'react'
import "./navbar.css"

import axios from "axios"

function Navbar() {

    useEffect(() => {
    //     axios.get("http://api.openweathermap.org/geo/1.0/direct?q=pat&limit=10&appid=668ce0d33b3fbd26b1cd34a4f3d49db7").then(res=>{
    //         console.log(res.data)
    //     })
    }, []);

    const search = ()=>{
        let text = document.getElementById("search").value
    //     axios.get("http://api.openweathermap.org/geo/1.0/direct?q="+text+"&limit=10&appid=668ce0d33b3fbd26b1cd34a4f3d49db7").then(res=>{
    //         console.log(res.data)
    //     })
    }

    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="navbar-logo">
                    <i className="fas fa-umbrella navbar-logoImage"></i>
                    <h5>PrimeWeather</h5>
                </div>
                <div className="navbar-search">
                    <form action="" method="get">
                        <input className="navbar-searchInput" type="text" name="" id="search" placeholder="city"/>
                        <div className="navbar-searchButton" onClick={search}>
                            <i className="fas fa-search"></i>
                        </div>
                    </form>
                </div>
                <div className="navbar-riightPadding"></div>
            </div>
        </div>
    )
}

export default Navbar
