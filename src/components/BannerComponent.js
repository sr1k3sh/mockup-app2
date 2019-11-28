import React, { Component } from 'react'
import './banner.css'
export default class BannerComponent extends Component {
    render() {
        return (
            <div className="banner-container">
                <div className='banner-div'>
                    <div className="profile-div-outer">
                        <div className="profile-div-inner">
                            <img src="./images/profile.jpg" alt="profile pic"></img>
                        </div>
                    </div>
                </div>
                <div className="banner-forecast-div">
                    <div className="banner-forecast-header">
                        <div className="banner-forecast-icon">
                            <img src="./images/sun.svg" alt="weather" width='20px' height='20px'></img>
                            <span>cloudy</span>
                        </div>
                        <span id="weather-details">31°C</span>
                    </div>
                </div>
            </div>
        )
    }
}
