import React from 'react';

import Facebook from '../img/social/fb.svg';
import Inst from '../img/social/inst.svg';
import Twiter from '../img/social/twi.svg';
import Youtube from '../img/social/you.svg';
import logo from '../img/logo-2.svg';



function Foooter() {
    return ( 
        <footer className="footer_area" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="footer_social">
                    <ul className='social_links'>
                        <li><a href="#"><img src={Facebook} alt="Icons" /></a></li>
                        <li><a href="#"><img src={Inst} alt="Icons" /></a></li>
                        <li><a href="https://twitter.com/_nogas"><img src={Twiter} alt="Icons" /></a></li>
                        <li><a href=""><img src={Youtube} alt="Icons" /></a></li>
                    </ul>
                </div>
                <div className="foot_bottom">
                    <div className="footLogo">
                        <a href="#" className="FootBrand">
                            
                        </a>
                    </div>
                    <ul className="foot_menu">
                        <li><a href="#">TERMS AND CONDITIONS</a></li>
                        <li><a href="#">PRIVACY POLICY</a></li>
                        <li><a href="#">LITEPAPER</a></li>
                        <li><a href="#">AUDIT</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}

export default Foooter;