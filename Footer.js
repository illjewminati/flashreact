import React from 'react';

import Facebook from '../img/social/fb.svg';
import Inst from '../img/social/inst.svg';
import Twiter from '../img/social/twi.svg';

import Youtube from '../img/social/you.svg';
import logo from '../img/logo-2.svg';
import {FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaTelegram} from "react-icons/fa";



function Foooter() {
    return ( 
        <footer className="footer_area" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="footer_social">
                    <ul className='social_links'>
                        <li><a target="_blank" href="#"><FaFacebookF className='icon'/></a></li>
                        <li><a target ="_blank" href="#"><FaInstagram className='icon'/></a></li>
                        <li><a target="_blank" href="https://twitter.com/_nogas"><FaTwitter className='icon'/></a></li>
                        <li><a target="_blank" href="https://t.me/nogastoken"><FaTelegram className='icon'/></a></li>
                        <li><a target="_blank" href=""><FaYoutube className='icon'/></a></li>
                    </ul>
                </div>
                <div className="foot_bottom">
                    <div className="footLogo">
                        <a href="#" className="FootBrand">
                            
                        </a>
                    </div>
                    <ul className="foot_menu">
                        <li><a href="#"></a></li>
                        <li><a href="#">TEAM@PROTOCOLZERO.APP</a></li>
                        <li><a href="#">LITEPAPER</a></li>
                        <li><a href="#">AUDIT</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}

export default Foooter;