import React, { Component } from 'react'

export default class ImageCard extends Component {
    render() {
        return (
            <div style={{ background:'#b1b0b6',width:24,height:24,marginRight:'1px'}}>
                <img width="24" height="24" style={{ objectFit: 'cover', borderRadius: '8px',}} src="./images/profile.jpg" alt="review"></img>
            </div>
        )
    }
}
