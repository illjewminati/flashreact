import React from 'react';


function Roadmap() {
    return (
        <section className="mission_evolution" id="roadmap">
            <div className="container">
                <div className="mission_content" data-aos="fade-right" data-aos-duration="1000" >
                    <h2>THE MISSION</h2>
                    <p>Simply to evolve the way cryptocurrencies are traded. By
                        seamlessly connecting users to the
                        utility through our dapps, we make
                        these tools accessible, opening up
                        infinite possibilities for experienced
                        traders and removing the barrier for
                        entry among beginners</p>
                </div>
                <div className="evelation_container">
                    <h2 data-aos="fade-down" data-aos-duration="1000" >THE EVOLUTION</h2>
                    <ul className="evulation_map">
                        <li className="map_item" data-aos="fade-right" data-aos-duration="1000">
                            <h3>Q1 2022</h3>
                            <p>Recruit core Dev team of 9 engineers from various backgrounds</p>
                        </li>
                        <li className="map_item" data-aos="fade-left" data-aos-duration="1000">
                            <h3>Q2 2022</h3>
                            <p>Build V1 Dapp & select alpha testers</p>
                        </li>
                        <li className="map_item" data-aos="fade-right" data-aos-duration="1000">
                            <h3>Q3 2022</h3>
                            <p>$ZRO Token Launch & V1 Full Audit/KYC</p>
                        </li>
                        <li className="map_item" data-aos="fade-left" data-aos-duration="1000">
                            <h3>Q4 2022</h3>
                            <p>Release V1.5 Dapp to <br />Token holders (Beta)</p>
                        </li>
                        <li className="map_item" data-aos="fade-right" data-aos-duration="1000">
                            <h3>Q4.5 2022</h3>
                            <p>Deploy Phase II</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;