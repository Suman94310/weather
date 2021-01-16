import React, { useState, useEffect } from 'react'

import axios from 'axios'

import "./city.css"
import openTab from "./tab.js"

function City() {
    const [main, setMain] = useState(0)
    const [coord, setCoord] = useState(0)
    const [name, setName] = useState(0)
    const [sys, setSys] = useState(0)
    const [weather, setWeather] = useState([{icon:0}])
    const [wind, setWind] = useState(0)
    const [cloud, setCloud] = useState(0)
    const [visibility, setVissibility] = useState(0)
    const [historical, setHistorical] = useState(0)
    const [today, setToday] = useState(0)
    const [future, setFuture] = useState(0)
    const [history, setHistory] = useState(0)
    // http://history.openweathermap.org/data/2.5/history/city?lat=17.1825&lon=46.4427&type=hour&appid=668ce0d33b3fbd26b1cd34a4f3d49db7
    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=pat&appid=668ce0d33b3fbd26b1cd34a4f3d49db7").then(res=>{
            // console.log(res.data)
            setMain(res.data.main)
            setCoord(res.data.coord)
            setName(res.data.name)
            setSys(res.data.sys)
            setWeather(res.data.weather)
            setWind(res.data.wind)
            setCloud(res.data.clouds.all)
            setVissibility(res.data.visibility)
            let temp = document.getElementsByClassName('city-currentData')[0]
            let tablinks = document.getElementsByClassName('tablinks')
            for(let i=1; i<tablinks.length; i++){
                tablinks[i].children[1].style.width = window.getComputedStyle(temp).width
            }
        })
        // axios.get("http://history.openweathermap.org/data/2.5/history/city?id=2885679&type=hour&start=1610150400&end=1610642860&appid=668ce0d33b3fbd26b1cd34a4f3d49db7").then(res=>{
        //     setHistorical(res.data)
        //     console.log(historical)
        // })
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=41dfeee3e6d81455be2e254ba8f986a9").then(res=>{
            setToday(res.data.current)
            setFuture(res.data.daily)
            console.log(res.data.current)
        })
        axios.get("http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1610215652&appid=41dfeee3e6d81455be2e254ba8f986a9").then(res=>{
            setHistory(res.data.current)
        })
    }, []);    

    return (
        <div className="city">
            <div className="city-current">
                <div className="city-currentTemp tablinks active" onClick={(e)=>{openTab(e,"temp")}}>
                    <div className="city-currentIcon">
                        {/* <img src={"http://openweathermap.org/img/wn/"+today.weather[0].icon+"@4x.png"} alt=""/> */}
                    </div>
                    <div className="city-currentData">
                        <div className="bigger">
                            {today.temp} &#8451;
                        </div> 
                        <div className="small">
                            (max {future.temp?future.temp.max:""}&#8451;,&nbsp; min {future.temp? future.temp.min:""}&#8451;)
                        </div>
                        <div className="city-currentName">
                            <span className="big">{name}</span>, &nbsp; {sys.country} ({coord.lon},{coord.lat})
                        </div>
                        <div className="city-currentDescription">
                            {today.weather && today.weather.description}
                        </div>
                    </div>
                </div>
                <div className="city-currentDetails">
                    <div className="city-currentVisibility tablinks" onClick={(e)=>{openTab(e,"visibility")}}>
                        <div>Visibility</div>
                        <div>{visibility} m</div>
                    </div>
                    <div className="city-currentCloud tablinks" onClick={(e)=>{openTab(e,"cloud")}}>
                        <div>Cloud</div>
                        <div>{cloud} %</div>
                    </div>
                    <div className="city-currentWind tablinks" onClick={(e)=>{openTab(e,"wind")}}>
                        <div>Wind</div>
                        <div>{wind.speed} m/s, &nbsp;{wind.deg}&#176;</div>
                    </div>
                    <div className="city-currentPressure tablinks" onClick={(e)=>{openTab(e,"pressure")}}>
                        <div>Pressure</div>
                        <div>{main.pressure} hpa</div>
                    </div>
                    <div className="city-currentHumidity tablinks" onClick={(e)=>{openTab(e,"humidity")}}>
                        <div>Humidity</div>
                        <div>{main.humidity} %</div>
                    </div>
                    <div className="city-currentSun">
                        Sunrise:{sys.sunrise}
                        SunSet{sys.sunset}
                    </div>
                </div>
                

            </div>
            <div className="city-history">
                <div className="city-history tabcontent" id="temp">temp</div>
                <div className="city-history tabcontent" id="visibility">visibility</div>
                <div className="city-history tabcontent" id="cloud">cloud</div>
                <div className="city-history tabcontent" id="wind">wind</div>
                <div className="city-history tabcontent" id="pressure">pressure</div>
                <div className="city-history tabcontent" id="humidity">humidity</div>
            </div>
        </div>
    )
}

export default City
