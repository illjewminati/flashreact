import React, { Component } from 'react';
import Banar from './components/Banar'; 
import Roadmap from './components/Roadmap'; 
import TOKENOMICS from './components/TOKENOMICS';
import ETHEREUM from './components/ETHEREUM_Flash';
import QA from './components/QA';
import Header from '../../components/Header';

export default class Home extends Component {
    render() {
        return (
            <div className="home_container">
                <Header />
                <Banar />
                <Roadmap />
                <TOKENOMICS />
                <ETHEREUM/>
                <QA/>
            </div>
        )
    }
}
