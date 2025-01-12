import React from 'react';


function Foooter() {
    return ( 
        <footer className="footer_area" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="footer_social">
                    <ul className='social_links'>
                        <li><a href="#home"><i className=' fab fa-facebook icon'/></a></li>
                        <li><a  href="#home"><i className='fab fa-instagram icon'/></a></li>
                        <li><a href="https://twitter.com/_nogas"><i className='fab fa-twitter icon'/></a></li>
                        <li><a  href="https://medium.com/@zrodev/protocol-zero-dcf8de91f0e1"><i className='fab fa-medium icon'/></a></li>
                        <li>
                            <a href="https://t.me/nogastoken">
                                <i className='fab fa-telegram icon'/>
                            </a>
                        </li>
                        <li>
                            <a href="home">
                                <i className='fab fa-youtube icon'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="foot_bottom">
                    <div className="footLogo">
                        <a href="home" className="FootBrand">
                            
                        </a>
                    </div>
                    <ul className="foot_menu">
                        <li><a href="home">HOME</a></li>
                        <li><a href="home">TEAM@PROTOCOLZERO.APP</a></li>
                        <li><a href="home">LITEPAPER</a></li>
                        <li><a href="home">AUDIT</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}

export default Foooter;