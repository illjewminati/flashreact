import React, {Component} from 'react';
import Logo from '../img/logonotext.png';


export default class Header extends Component {

    render () {
        return (
            <header className="header_area">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="home">
                            <img src={Logo} alt="Logo" width='70' height="90" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="token">TOKEN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href='./litepaper/NOGAS V1 LITEPAPER.pdf'  ref='noreferrer'>LITEPAPER</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href='https://pdfhost.io/v/vfVoi0gqi_ChainSafe_Audit'  ref='noreferrer'>AUDIT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#home">Q & A</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page"  href="https://twitter.com/_nogas" ref='noreferrer'>
                                        <i className="fab fa-twitter icon"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page"  href="https://coinmarketcap.com/currencies/protocol-zero/" ref='noreferrer'>
                                        <i className="fa fa-coins icon"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page"  href="https://medium.com/@zrodev/protocol-zero-dcf8de91f0e1" ref='noreferrer'>
                                        <i className="fab fa-medium icon"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page"  href="https://t.me/nogastoken" ref='noreferrer'>
                                        <i className="fab fa-telegram icon"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="AppLaunce nav-link" aria-current="page" href="https://www.swap.nogas.pro"  ref='noreferrer'>
                                        LAUNCH APP
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}