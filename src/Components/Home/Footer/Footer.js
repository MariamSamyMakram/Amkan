import React, { Component } from 'react';
import {Container ,Row ,Col ,InputGroup ,FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

// style
import './Footer.scss';

class Footer extends Component{
    render(){
        return(
            <section className="footer pb-5">
                <div className="bg">
                    <img src={'images/Layer.png'} alt={'layer'} className="Layer" />
                </div>
                <Container className="pt-5">
                    <Row>
                        <Col lg={4} md={4} className="mb-2 mb-md-0">
                            <Row>
                                <Col lg={8} xs={8}>
                                    <h3 className="mb-3">Venues</h3>
                                    <p className="mb-1" >Address :  </p>
                                    <p className="mb-1">Lorem ipsum dolor sit amet,</p>
                                    <p className="mb-1">+971 123 456 789</p>
                                </Col>
                                <Col lg={4} xs={4} className="pr-0 pl-0">
                                    <ul className="mb-0 list-unstyled">
                                        <li className="mb-1"><a href="#">Home</a></li>
                                        <li className="mb-1"><a href="#">About</a></li>
                                        <li className="mb-1"><a href="#">Services</a></li>
                                        <li className="mb-1"><a href="#">Clients</a></li>
                                        <li className="mb-1"><a href="#">Contact us</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}  md={4} className="text-center mb-2 mb-md-0">
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <p className="mt-3">© 2020.<a href="#">AMKAN</a>  - All Rights Reserved</p>
                        </Col>
                        <Col lg={4} md={4} className="mb-2 mb-md-0">
                            <p>Be first to know about the latest updates</p>

                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="EMAIL ADDRESS"
                                    aria-label="EMAIL ADDRESS"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">SUBSCRIBE</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Footer;