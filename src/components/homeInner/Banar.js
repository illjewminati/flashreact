import React from 'react';

import HomeBanar from '../../img/banar.png';

function Banar() {
    return ( 
        <section className="banar_area">
            <img src={HomeBanar} alt="Banar" className='banarBg' />
            <div className="container">
                <div className="banar_content">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">PROTOCOL <br />ZERO</h1>
                    <p data-aos="fade-down" data-aos-duration="1000">The only place for gas free swaps on the Ethereum Network</p>
                    <a href="https://www.dextools.io/app/ether/pair-explorer/0xa5fb965433feccc7e0d1089b02529804199b0588" target="_blank" className='banarBtn' data-aos="fade-up" data-aos-duration="1000">BUY ON DEXTOOLS</a>
                </div>
            </div>
        </section>
     );
}

export default Banar;