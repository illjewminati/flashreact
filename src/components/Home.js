import React from 'react';
import Banar from './homeInner/Banar';
import ETHEREUM from './homeInner/ETHEREUM_Flash';
import Roadmap from './homeInner/Roadmap';
import TOKENOMICS from './homeInner/TOKENOMICS';
import QA from './homeInner/QA';



function Home() {
    return ( 
        <div className="home_container">
            <Banar/>
            <Roadmap/>
            <TOKENOMICS/>
            <ETHEREUM/>
            <QA/>
        </div>
     );
}

export default Home;