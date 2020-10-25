import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// style
import './Strategies.scss';

class Strategies extends Component{
    render(){
        return(
            <section className="Strategies pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={5} md={5}>
                            <img src={'images/strategies.png'} alt={'startegy'}/>
                        </Col>
                        <Col lg={7} md={7} className="mt-4 mt-md-0">
                            <h1>Our Strategies</h1>
                            <p>“ We Drive You To Excellence Not Just Success!”</p>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">
                                    <Row>
                                        <Col lg={2} xs={3} className="d-flex justify-content-center align-items-center">
                                            <img src={'images/cash_flow.png'} alt={''} />
                                        </Col>
                                        <Col lg={9} xs={9}>
                                            <h5>Investing in Foreign Enterprises</h5>
                                            <p>Opening the gates to the multinational promised enterprises to take place in UAE business community</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="mb-1">
                                    <Row>
                                        <Col lg={2} xs={3} className="d-flex justify-content-center align-items-center">
                                            <img src={'images/development.png'} alt={''} />
                                        </Col>
                                        <Col lg={9} xs={9}>
                                            <h5>Establishing Joint Ventures</h5>
                                            <p>Creating the chance for business expansions and development while moving into Emirati market</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="mb-1">
                                    <Row>
                                        <Col lg={2} xs={3} className="d-flex justify-content-center align-items-center">
                                            <img src={'images/growth.png'} alt={''} />
                                        </Col>
                                        <Col lg={9} xs={9}>
                                            <h5>Providing Business Access</h5>
                                            <p>Providing your business access to the Emirati established markets and distribution channels</p>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Strategies;