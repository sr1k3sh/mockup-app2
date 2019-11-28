import React, { Component } from 'react'
import './places.css'
export default class Places extends Component {
    render() {
        return (
            <div className="places-container">
                <img id="place-cards" src="./images/card-img.jpg" alt="places"></img>
                <div style={{position:'absolute',left:'10%',top:'10%',display:'flex',flexDirection:'row'}}>
                    <img src="./images/map-pin.svg" alt='marker' width='12px' height="12px" style={{marginRight:'5px'}}></img>
                    <span style={{fontWeight:'500',color:'#fff',fontSize:'11px'}}>Arab Street <br></br>Singapore</span>
                </div>
            </div>
        )
    }
}
