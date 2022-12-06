import React from 'react';
import Twitter from '../img/social/twi.svg';
import Youtube from '../img/social/you.svg';
import logo from '../img/logo-2.svg';

function Foooter() {
    return ( 
        <footer className="footer_area" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="footer_social">
                    <ul className='social_links'>
                       
                     <li><a target="_blank" href="https://twitter.com/_nogas"><i className='fab fa-twitter icon'/></a></li>
                        <li><a target="_blank" href="https://medium.com/@zrodev/protocol-zero-dcf8de91f0e1"><i className='fab fa-medium icon'/></a></li>
                        <li>
                            <a target="_blank" href="https://t.me/nogastoken">
                                <i className='fab fa-telegram icon'/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.youtube.com/channel/UC2ikx5j__kGKzjDvh_0eEIg">
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
                        <li><a href="#">PROTOCOL.ZRO@PROTON.ME</a></li>
                       
                    </ul>
                </div>
            </div>
        </footer>
     );
}

export default Foooter;