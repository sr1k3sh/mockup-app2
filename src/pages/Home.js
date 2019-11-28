import React, { Component } from 'react'
import './home.css'
import BannerComponent from '../components/BannerComponent'
import ForecastComponent from '../components/ForecastComponent'
export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <BannerComponent></BannerComponent>
                <ForecastComponent></ForecastComponent>
            </div>
        )
    }
}
