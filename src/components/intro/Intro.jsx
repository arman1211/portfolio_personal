import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import crown from '../../img/crown.png'
import thumb from '../../img/thumbup.png'
import { motion } from 'framer-motion'
import FloatingDiv from '../floatingdiv/FloatingDiv'

const Intro = () => {
    const transition = {
        duration: 2,
        type: 'spring'

    }
    return (
        <div className="intro">
            <div className="i-left">
                <span className='name '>Hey! I Am</span>
                <span className='name i-name'>Sharfuddin Arman</span>
                <span className='i-des'>I am professional React developer who can develop any website with MERN stack.</span>
                <button className='button i-button'>Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.div
                    style={{ left: '65%' }}
                    initial={{ left: '0%' }}
                    whileInView={{ left: '-10%' }}
                    transition={transition}
                >
                    <FloatingDiv image={crown} txt1='Web' txt2=' Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: '0%' }}
                    whileInView={{ left: '70%' }}
                    transition={transition}

                    style={{ left: '-9%', top: '16rem' }}>
                    <FloatingDiv image={thumb} txt1='Best Design' txt2=' Award' />
                </motion.div>
                <div className='blurbg' style={{ background: 'rgb{238 210 255}' }}></div>
            </div>
        </div>
    )
}

export default Intro