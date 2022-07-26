import React from 'react';

import HomeBanar from '../../img/banar.png';

function Banar() {
    return ( 
        <section className="banar_area">
            <img src={HomeBanar} alt="Banar" className='banarBg' />
            <div className="container">
                <div className="banar_content">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">NOGAS <br />PROTOCOL</h1>
                    <p data-aos="fade-down" data-aos-duration="1000">Your Gas free Gateway to the Ethereum Network</p>
                    <a href="https://www.dextools.io/app/" target="_blank" className='banarBtn' data-aos="fade-up" data-aos-duration="1000">BUY ON DEXTOOLS</a>
                </div>
            </div>
        </section>
     );
}

export default Banar;