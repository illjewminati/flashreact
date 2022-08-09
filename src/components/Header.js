import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaTwitter,FaTelegram} from "react-icons/fa";
// Logo
import Logo from '../img/logo.svg';
import { Link } from 'react-scroll';

function Header() {
    return (
        <header className="header_area">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <Link to="services" spy={true} smooth={true} offset={-120} duration={500}> <Nav.Link>Q & A</Nav.Link></Link>   
                          <Link to="tokenomics" spy={true} smooth={true} offset={-120} duration={500}><Nav.Link >TOKEN</Nav.Link></Link>  
                           <Nav.Link href="./litepaper/NOGAS V1 LITEPAPER.pdf" target="_blank"> LITEPAPER</Nav.Link>    
                           <Nav.Link target="_blank" href="https://twitter.com/_nogas" > <FaTwitter className="header_social"/></Nav.Link>    

                           <Nav.Link target="_blank" href="https://t.me/nogastoken" > <FaTelegram className="header_social"/></Nav.Link>    

                            <Nav.Link href="#" className='AppLaunce'>LAUNCH APP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;