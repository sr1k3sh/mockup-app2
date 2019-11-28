import React, { Component } from 'react'
import './weathercard.css'
export default class WeatherCard extends Component {
    render() {
        return (
            <div className="weather-card">
                <div className="weather-info">
                    <img src="./images/sun.svg" alt="weather"></img>
                    <div className="weather-details">
                        <span style={{ fontSize: '20px', fontWeight: '700' }}>21C</span>
                        <span style={{ fontSize: '20px', fontWeight: '100',color: '#b1b0b6' }}>|</span>
                        <div className="weather-more-details">
                            <span style={{fontSize:'11px',fontWeight:'700',letterSpacing:'1px'}}>Kathmandu</span>
                            <span style={{ fontSize: '11px', fontWeight: '700', color:'#b1b0b6'}}>Nepal</span>
                        </div>
                    </div>
                </div>
                <div className="weather-minordetails">
                    <span>Humidity:65% |</span>
                    <span>NorthWest |</span>
                    <span>0.3km/hr</span>
                </div>
            </div>
        )
    }
}
