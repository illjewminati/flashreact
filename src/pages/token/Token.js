import React, { Component } from 'react';
import Header from '../../components/Header';
import TOKENOMICS from '../home/components/TOKENOMICS';


export default class Token extends Component {

    render() {
        return (
            <div className="token_container">
                <Header />
                <TOKENOMICS />
            </div>
        )
    }
}
