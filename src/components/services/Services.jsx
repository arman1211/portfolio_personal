import React from 'react'
import './Services.css'
import heartimoji from '../../img/heartemoji.png'
import humble from '../../img/humble.png'
import glasses from '../../img/glasses.png'
import Servicesdiv from '../servicesdiv/Servicesdiv'
import resume from './ARMAN CV.pdf'
import { motion } from 'framer-motion'

const Services = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className="services" id='Services'>
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quos a corporis? Architecto, dolorum molestiae!</span>
                <a href={resume} download><button className='button s-button'>Download CV</button></a>
            </div>
            <div className="cards">
                <motion.div
                    initial={{}}
                    whileInView={{ left: '70%', top: '20%' }}
                    transition={transition}

                    style={{ left: '20%', top: '-10%' }}>
                    <Servicesdiv image={humble} txt1='Design' txt2='photoshop, illustrator, figma, sketch' />
                </motion.div>
                <motion.div
                    initial={{}}
                    whileInView={{ left: '20%', top: '-10%' }}
                    transition={transition}
                    style={{ left: '-30%', top: '45%' }}>
                    <Servicesdiv image={glasses} txt1='UI/UX' txt2='photoshop, illustrator, figma, sketch' /></motion.div>
                <motion.div
                    initial={{}}
                    whileInView={{ left: '-30%', top: '45%' }}
                    transition={transition}
                    style={{ left: '70%', top: '20%' }}>
                    <Servicesdiv image={heartimoji} txt1='Developer' txt2='React, MongoDB ,Express, Node JS' /></motion.div>

            </div>
        </div>
    )
}

export default Services