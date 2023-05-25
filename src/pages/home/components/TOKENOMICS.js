import React from 'react';

function TOKENOMICS() {
    return (
        <section className="tokenomic_area" id="tokenomics">
            <div className="container" style={{ marginTop: 200 }}>
                <h2 className="title">TOKENOMICS</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                        <div className="token_box">
                            <p>100,000,000,000</p>
                            <h4>TOTAL TOKEN SUPPLY</h4>
                            <p>LAUNCH ALLOCATION<br />
                                2% Max Wallet <br />
                                2% Max Transaction <br />
                                6% Private Offering <br />
                                25% Public IDO via Yasha Dao<br />
                                25% Held in multi sig for future CEX <br />
                                44% Uniswap LP</p>

                        </div>
                    </div> {/* col */}
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
                        <div className="token_box">
                            <p>PROTOCOL ZERO (ZRO)</p>

                            <h4>TOKEN SYMBOL</h4>
                            <p>BUY TAX<br />
                                2% Marketing <br />
                                1% Future Utility<br />
                                1% Auto LP <br />
                                2% Development</p>
                        </div>
                    </div> {/* col */}
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                        <div className="token_box">
                            <p>ETHEREUM ERC20</p>
                            <h4>NETWORK</h4>
                            <p>SELL TAX<br />
                                2% Marketing<br />
                                1% Future Utility<br />
                                1% Auto LP<br />
                                2% Development</p>
                        </div>
                    </div> {/* col */}
                </div> {/* .row */}
            </div>
        </section>
    );
}

export default TOKENOMICS;