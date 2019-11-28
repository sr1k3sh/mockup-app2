import React, { Component } from 'react'
import './forecastcard.css'
export default class ForecastCard extends Component {
    render() {
        return (
            <div className="forecast-card"> 
                <div style={{display:'flex',flexDirection:'row'}}>
                    <img style={{marginRight:'13px'}} src="./images/sun.svg" alt='weather' width="30px" height='30px'></img>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <span style={{ color:'#78777c',fontSize:'12px',fontWeight:'bold'}}>Friday</span>
                        <span style={{ color:'#dbdae0',fontSize:'11px',fontWeight:'normal'}}>Rainy</span>
                    </div>
                </div>
                    <div className="temp-card"><span style={{color:'#fff',fontWeight:'300',fontSize:'13px'}}>32/31</span></div>
            </div>
        )
    }
}
