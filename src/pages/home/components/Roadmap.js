import React from 'react';


function Roadmap() {
    return (
        <section className="mission_evolution" id="roadmap">
            <div className="container">
                <div className="mission_content aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000" >
                    <h2>THE MISSION</h2>
                    <p>Our mission is to simplify transaction complexities and provide a seamless onboarding experience for users in web3/Defi applications through the use of gasless Meta-transactions. We aim to offer a range of advantages to our users, enabling them to interact with different decentralized applications effortlessly.</p>
                </div>
                <div className="evelation_container">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="aos-init">THE EVOLUTION</h2>
                    <ul className="evulation_map">
                        <li className="map_item aos-init" data-aos="fade-right" data-aos-duration="1000">
                            <h3>2022</h3>
                            <p>Developed and launched ZRO Swap Beta v1.0 </p>
                        </li>
                        <li className="map_item aos-init" data-aos="fade-left" data-aos-duration="1000">
                            <h3>Q2 2023</h3>
                            <p>Release ZRO Swap v1.1 on Mainnet</p>
                        </li>
                        <li className="map_item aos-init" data-aos="fade-right" data-aos-duration="1000">
                            <h3>Q2 2023</h3>
                            <p>Deploy Arbitrum Swap & Bridge</p>
                        </li>
                        <li className="map_item aos-init" data-aos="fade-left" data-aos-duration="1000">
                            <h3>Q2 2023</h3>
                            <p>ZRO Arbitrum Token Launch<br /> + airdrop current holders</p>
                        </li>
                        <li className="map_item aos-init" data-aos="fade-right" data-aos-duration="1000">
                            <h3>Q3 2023</h3>
                            <p>Deploy Phase III</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;