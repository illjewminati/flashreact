import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
    return (
        <section className="faq_area"  data-aos="fade-right" data-aos-duration="1000" id="services">
            <div className="container">
                <div className="faqContent">
                    <h2>Q & A</h2>
                    <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>HOW CAN THE NOGAS PROTOCOL HELP ME?</Accordion.Header>
                            <Accordion.Body>
                                Users can privately and securely BUY/SELL/SWAP ERC20 tokens 
                                without having to spend eth on gas ever again 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>DO I NEED CODING EXPERIENCE TO USE THESE TOOLS?</Accordion.Header>
                            <Accordion.Body>
                            No you do not! and therein lies the beauty of the NOGAS ecosystem. 
                            We have already done the hard part of turning complex code into a simple 
                            UI that anybody can use

                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>HOW MUCH DO THESE UTILITIES COST?</Accordion.Header>
                            <Accordion.Body>
                            There will be different Tiers and utilities available according to 
                            how much $TBD token you hold. These details will be released after launch
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default FAQ;