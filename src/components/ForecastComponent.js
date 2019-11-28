import React, { Component } from 'react'
import './forecast.css'
import ForecastCard from './ForecastCard'
import Places from './Places'
import ImageCard from './ImageCard'
import WeatherCard from './WeatherCard'
export default class ForecastComponent extends Component {
    render() {
        return (
            <div className="forecast-container">
                <div className="weather-container">
                    <div style={{marginBottom:'25px',display:'flex',justifyContent:'center'}}>
                        <div>
                            <span style={{fontWeight:700}}>3 Days </span><span>Forecast</span>
                        </div>
                    </div>
                    <ForecastCard></ForecastCard>
                    <ForecastCard></ForecastCard>
                    <ForecastCard></ForecastCard>
                </div>
                <div className="weather-container">
                    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <span style={{ fontWeight: 700 }}>Places to </span><span>Visit</span>
                        </div>
                    </div>
                    <Places></Places>
                </div>
                <div className="weather-container">
                    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ display: 'flex',flexDirection:'row',width:'100%',justifyContent:'space-around',alignItems:'center'}}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <span style={{ padding:'0px 4px',borderRadius:'4px',background:'#e7e6e7',fontSize:'12px', color:'#b1b0b6',marginRight:'5px'}}>+</span>
                                <span style={{ padding: '0px 4px', borderRadius: '4px', background: '#e7e6e7', fontSize: '12px', color: '#b1b0b6' }}>Review</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                <ImageCard></ImageCard>
                                <ImageCard></ImageCard>
                                <ImageCard></ImageCard>
                                <ImageCard></ImageCard>
                            </div>                           
                        </div>
                    </div>
                    <div className="small-card">
                        <img width="180px" height='40px' src="./images/colorbuildings.jpg" alt="small-bard"></img>
                        <div style={{ position: 'absolute', left: '10%', top: '19%', display: 'flex', flexDirection: 'row' }}>
                            <img src="./images/map-pin.svg" alt='marker' width='12px' height="12px" style={{ marginRight: '5px' }}></img>
                            <span style={{ fontWeight: '500', color: '#fff', fontSize: '11px' }}>Arab Street <br></br>Singapore</span>
                        </div>
                    </div>
                    <div className="small-card">
                        <img width="180px" height="130px" src="./images/vibrant.jpg" alt="small-bard"></img>
                        <div style={{ position: 'absolute', left: '10%', top: '19%', display: 'flex', flexDirection: 'row' }}>
                            <img src="./images/map-pin.svg" alt='marker' width='12px' height="12px" style={{ marginRight: '5px' }}></img>
                            <span style={{ fontWeight: '500', color: '#fff', fontSize: '11px' }}>Arab Street <br></br>Singapore</span>
                        </div>
                        <div style={{
                            position: 'absolute', right: '4px', top: '0', display: 'flex', justifyContent: 'center', alignItems: 'center',width:'28%',
                            height:'97%',
                            background: '#786ae3',
                        borderRadius: '17px',
                        boxShadow: '-3px -1px 9px 0px #ffffff45'}}>
                            <span>+</span>
                        </div>
                    </div>
                </div>
                <div className="location-div weather-container">
                   
                    <div className="dynamic-weather-card">
                        <WeatherCard></WeatherCard>
                        <WeatherCard></WeatherCard>
                        <WeatherCard></WeatherCard>
                    </div>
                    <div className="location-container" style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center',}}>
                        <span style={{borderRadius:'25px', background:'#e7e6e7',padding:'7px 10px',fontSize:'13px',fontWeight:'500'}}>Add Location</span>
                        <img width="160px" height="100px" src="https://cdn.dribbble.com/users/13164/screenshots/4415413/illustration.png" alt="location"></img>
                    </div>
                </div>
            </div>
        )
    }
}
