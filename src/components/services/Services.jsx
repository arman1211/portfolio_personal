import React from 'react'
import './Services.css'
import heartimoji from '../../img/heartemoji.png'
import humble from '../../img/humble.png'
import glasses from '../../img/glasses.png'
import Servicesdiv from '../servicesdiv/Servicesdiv'
import resume from './ARMAN CV.pdf'

const Services = () => {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quos a corporis? Architecto, dolorum molestiae!</span>
                <a href={resume} download><button className='button s-button'>Download CV</button></a>
            </div>
            <div className="cards">
                <div style={{ left: '20%', top: '-10%' }}>
                    <Servicesdiv image={humble} txt1='Design' txt2='photoshop, illustrator, figma, sketch' />
                </div>
                <div style={{ left: '-30%', top: '45%' }}>
                    <Servicesdiv image={glasses} txt1='UI/UX' txt2='photoshop, illustrator, figma, sketch' /></div>
                <div style={{ left: '70%', top: '20%' }}>
                    <Servicesdiv image={heartimoji} txt1='Developer' txt2='React, MongoDB ,Express, Node JS' /></div>

            </div>
        </div>
    )
}

export default Services