import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Logo
import Logo from '../img/logo.svg';

function Header() {
    return (
        <header className="header_area">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#SERVICES">SERVICES</Nav.Link>
                            <Nav.Link href="#TOKENS">TOKENS</Nav.Link>
                            <Nav.Link href="#ABOUTUS">ABOUT US</Nav.Link>
                            <Nav.Link href="#" className='AppLaunce'>LAUNCH APP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;