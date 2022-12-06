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
                        <li><a target="_blank" href="#"><i className=' fab fa-facebook icon'/></a></li>
                        <li><a target ="_blank" href="#"><i className='fab fa-instagram icon'/></a></li>
                        <li><a target="_blank" href="https://twitter.com/_nogas"><i className='fab fa-twitter icon'/></a></li>
                        <li><a target="_blank" href="https://medium.com/@zrodev/protocol-zero-dcf8de91f0e1"><i className='fab fa-medium icon'/></a></li>
                        <li>
                            <a target="_blank" href="https://t.me/nogastoken">
                                <i className='fab fa-telegram icon'/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <i className='fab fa-youtube icon'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="foot_bottom">
                    <div className="footLogo">
                        <a href="#" className="FootBrand">
                            
                        </a>
                    </div>
                    <ul className="foot_menu">
                        <li><a href="#"></a></li>
                        <li><a href="#">PROTOCOL.ZRO@proton.me</a></li>
                        <li><a href="#">LITEPAPER</a></li>
                        <li><a href="#">AUDIT</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}

export default Foooter;