import React from 'react';

function TOKENOMICS() {
    return (
        <section className="tokenomic_area">
            <div className="container">
                <h2 className="title">TOKENOMICS</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                        <div className="token_box">
                            <p>1,000,000,000,000</p>
                            <h4>TOTAL TOKEN SUPPLY</h4>
                            <p>TBD% MAX WALLET <br />
                               TBD% MAX TRANSACTION</p>
                        </div>
                    </div> {/* col */}
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
                        <div className="token_box">
                            <p>$TBD</p>
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
                                5% Marketing<br />
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