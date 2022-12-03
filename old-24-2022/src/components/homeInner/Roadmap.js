import React from 'react';


function Roadmap() {
    return (
        <section className="mission_evolution">
            <div className="container">
                <div className="mission_content">
                    <h2>THE MISSION</h2>
                    <p>The Flash Protocol is evolving the waycryptocurrencies are traded. By
                        seamlessly connecting users to the
                        utility through our dapps, we make
                        these tools accessible, opening up
                        infinite possibilities for experienced
                        traders and removing the barrier for
                        entry among beginners</p>
                </div>
                <div className="evelation_container">
                    <h2>THE EVOLUTION</h2>
                    <ul className="evulation_map">
                        <li className="map_item">
                            <h3>Q1 2022</h3>
                            <p>Recruit core Dev team</p>
                        </li>
                        <li className="map_item">
                            <h3>Q2 2022</h3>
                            <p>Build V1 Dapp & begin alpha testing</p>
                        </li>
                        <li className="map_item">
                            <h3>Q3 2022</h3>
                            <p>$FLASH Token Launch</p>
                        </li>
                        <li className="map_item">
                            <h3>Q3 2022</h3>
                            <p>Release V1.5 Dapp to <br />$FLASH holders (Beta)</p>
                        </li>
                        <li className="map_item">
                            <h3>Q4 2022</h3>
                            <p>Launch Flash Dao & Staking</p>
                        </li>
                        <li className="map_item">
                            <h3>Q1 2023 </h3>
                            <p>Release “FlashPad” balancer LBP Launch pad</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;