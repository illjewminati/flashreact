import React from 'react';

function TOKENOMICS() {
    return (
        <section className="tokenomic_area">
            <div className="container">
                <h2 className="title">TOKENOMICS</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="token_box">
                            <p>1,000,000,000,000</p>
                            <h4>TOTAL TOKEN SUPPLY</h4>
                            <p>2% MAX WALLET <br />
                                2% MAX TRANSACTION</p>
                        </div>
                    </div> {/* col */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="token_box">
                            <p>$FLASH</p>
                            <h4>TOKEN SYMBOL</h4>
                            <p>2% MARKETING <br />
                                1% FUTURE UTILITY<br />
                                1% AUTO LP 2%<br />
                                DEVELOPMENT</p>
                        </div>
                    </div> {/* col */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="token_box">
                            <p>ETHEREUM ERC20</p>
                            <h4>NETWORK</h4>
                            <p>4% MARKETING <br />
                                1% FUTURE UTILITY<br />
                                1% AUTO LP<br />
                                2% DEVELOPMENT</p>
                        </div>
                    </div> {/* col */}
                </div> {/* .row */}
            </div>
        </section>
    );
}

export default TOKENOMICS;