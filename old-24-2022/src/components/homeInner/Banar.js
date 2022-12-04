import React from 'react';

import HomeBanar from '../../img/banar.png';

function Banar() {
    return ( 
        <section className="banar_area">
            <img src={HomeBanar} alt="Banar" className='banarBg' />
            <div className="container">
                <div className="banar_content">
                    <h1>FLASH <br /> PROTOCOL</h1>
                    <p>Your Gas free Gateway to the Ethereum Network</p>
                    <a href="#" className='banarBtn'>LAUNCH APP</a>
                </div>
            </div>
        </section>
     );
}

export default Banar;