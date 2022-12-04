import React from 'react';

function ETHEREUM() {
    return (
        <section className="ethereum_area" data-aos="fade-down" data-aos-duration="1000">
            <div className="container">
                <div className="ethereum_cont">
                    <h2>PROTOCOL ZERO in ETHEREUM 2.0</h2>
                    <p>It is a common myth that 2.0
                        will decrease gas prices on the network, 
                        although this is simply not the case.
                        Since the transaction ordering process in
                        ETH 2.0 will be the same as that of PoW
                        Ethereum (ETH 1.0), the same principles
                        will apply. The difference lies in who has
                        ultimate control over the ordering,
                        namely validators rather than miners.
                        Instead of tipping the miner, once ETH
                        2.0 is released it will then be the
                        validator but the purpose of Protocol Zero remains
                        the same</p>
                </div>
            </div>
        </section>
    );
}

export default ETHEREUM;