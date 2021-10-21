import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

function Center (props) {
    const [icon, setIcon] = useState('')
    const [dt_st, setDt_st] = useState('')
    const [temp, setTemp] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [deg, setDeg] = useState(0)
    const [visibility, setVisibility] = useState(0)
    const [sunrise, setSunrise] = useState(0)
    const [sunset, setSunset] = useState(0)
    const [loading, setLoading] = useState(false)
    
    
    useEffect(() => {
        const updateWeather = async() => {
            setLoading(true)
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=02e0f989ee4b46462231034642561bb4`;
            const data = await fetch(url);
            let parsedData = await data.json();
            setLoading(false)
            const dt = new Date(parsedData.dt * 1000).toDateString()
            setIcon(`https://openweathermap.org/img/wn/${parsedData.weather[0].icon}@2x.png`)
            setDt_st(dt)
            setTemp(`${parsedData.main.temp}`)
            setHumidity(`${parsedData.main.humidity}`)
            setSpeed(`${parsedData.wind.speed}`)
            setDeg(`${parsedData.wind.deg}`)
            setVisibility(`${parsedData.visibility}`)
            setSunrise(`${new Date(parsedData.sys.sunrise * 1000).toTimeString()}`)
            setSunset(`${new Date(parsedData.sys.sunset * 1000).toTimeString()}`)
        }
        updateWeather();
    }, [props.city])

    return (
        <div className="container" style={{paddingTop: "40px"}}>
            {loading ? <Spinner /> :
            <div className="card mx-auto" style={{width: "25rem", backgroundColor: "#e0edff", border: "3px solid #0066ff", borderRadius: "7px", boxShadow: '0 0 8px 10px grey'}}>
                <img src={icon} style={{height: "180px", width: "180px", margin: "auto"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">Temperature: {temp}{String.fromCharCode(176)} F</h2> Date: {dt_st}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-primary">City: {props.city}</li>
                    <li className="list-group-item list-group-item-primary">Sunrise: {sunrise}</li>
                    <li className="list-group-item list-group-item-primary">Sunset: {sunset}</li>
                    <li className="list-group-item list-group-item-primary">Humidity: {humidity}%</li>
                    <li className="list-group-item list-group-item-primary">Wind: <span>Speed: {speed} m/s</span> <br/> <span>Degree: {deg}{String.fromCharCode(176)}</span></li>
                    <li className="list-group-item list-group-item-primary">Visiblity: {visibility}</li>
                </ul>
            </div>}
        </div>
    )
}

Center.defaultProps = {
    city: "Delhi"
}
Center.propTypes = {
    city: PropTypes.string
}

export default Center
