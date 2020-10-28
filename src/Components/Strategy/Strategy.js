import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap'

// style
import './Strategy.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Strategy extends Component{
    render(){
        return(
            <section className="Strategy pt-5 mt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center pt-md-5 mb-5">
                            <h1>Strategy</h1>
                            <p>“ We Drive You To Excellence Not Just Success!”</p>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <ul className="mb-0 pl-0 list-unstyled d-block d-md-flex justify-content-between flex-nowrap bd-highlight">
                                <li className="order-3 p-3 bd-highlight text-center">
                                    <img src={'images/cash_flow.png'}/>
                                    <h5>Investing in Foreign Enterprises</h5>
                                    <p>Opening the gates to the multinational promised enterprises to take place in UAE business community</p>
                                </li>
                                <li className="order-3 p-3 bd-highlight text-center">
                                    <img src={'images/development.png'}/>
                                    <h5>Establishing Joint Ventures</h5>
                                    <p>Creating the chance for business expansions and development while moving into Emirati market</p>
                                </li>
                                <li className="order-3 p-3 bd-highlight text-center">
                                    <img src={'images/growth.png'}/>
                                    <h5>Providing Busines Access</h5>
                                    <p>Providing your business access to the Emirati established markets and distribution channels</p>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

Strategy.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Strategy);