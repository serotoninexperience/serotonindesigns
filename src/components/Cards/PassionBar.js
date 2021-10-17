
import React from 'react'

import './Cards.css'

export default function PassionBar(props) {
    return (
   
            <div className="passion-section">
                <img src={props.img} className="passion-img" alt="" ></img>

                <div className="passion-collection">
                    <h3 className="passion-header">{props.title}</h3>
                    <p className="passion-para">{props.statement}</p>
                    <button className="passion-cta">{props.cta}</button>
                </div>
            </div>
  
    )
}
