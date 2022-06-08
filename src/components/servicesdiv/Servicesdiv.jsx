import React from 'react'
import './Servicesdiv.css'

const Servicesdiv = ({ image, txt1, txt2 }) => {
    return (
        <div className="servicesdiv">
            <img src={image} alt="" />
            <span>{txt1}</span>
            <span>{txt2}</span>
            <button>Learn More</button>

        </div>
    )
}

export default Servicesdiv