import React from 'react'
import './Work.css'
import shopify from '../../img/Shopify.png'
import fiver from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import upwork from '../../img/Upwork.png'
import facebook from '../../img/Facebook.png'

const Work = () => {
    return (
        <div className="work">
            {/*left side*/}
            <div className="awesome">
                <span>Work for All These</span>
                <span>BRANDS & CLIENTS</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quos a corporis? Architecto, dolorum molestiae!</span>
                <button className='button s-button'>Get in touch</button>
            </div>
            <div className="w-right">
                <div className="w-maincircle">
                    <div className="w-seccircle">
                        <img src={fiver} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={shopify} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={upwork} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={facebook} alt="" />
                    </div>
                </div>
                <div className="w-backcircle bluecircle"></div>
                <div className="w-backcircle yellowcircle"></div>

            </div>

        </div>
    )
}

export default Work