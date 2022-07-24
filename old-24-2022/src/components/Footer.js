import React from 'react';

import Facebook from '../img/social/fb.svg';
import Inst from '../img/social/inst.svg';
import Twiter from '../img/social/twi.svg';
import Youtube from '../img/social/you.svg';
import logo from '../img/logo-2.svg';



function Foooter() {
    return ( 
        <footer className="footer_area">
            <div className="container">
                <div className="footer_social">
                    <ul className='social_links'>
                        <li><a href="#"><img src={Facebook} alt="Icons" /></a></li>
                        <li><a href="#"><img src={Inst} alt="Icons" /></a></li>
                        <li><a href="#"><img src={Twiter} alt="Icons" /></a></li>
                        <li><a href="#"><img src={Youtube} alt="Icons" /></a></li>
                    </ul>
                </div>
                <div className="foot_bottom">
                    <div className="footLogo">
                        <a href="#" className="FootBrand">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <ul className="foot_menu">
                        <li><a href="#">@FlashProtocol_</a></li>
                        <li><a href="#">flashpro.ai</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Audits</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}

export default Foooter;