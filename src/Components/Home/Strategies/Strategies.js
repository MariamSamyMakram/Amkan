import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// style
import './Strategies.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Strategies extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="Strategies pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={5} md={5}>
                            <img src={'images/strategies.png'} alt={'startegy'}/>
                        </Col>
                        <Col lg={7} md={7} className="mt-4 mt-md-0 " className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                            <h1>{t('strategies.title')}</h1>
                            <p>{t('strategies.p')}</p>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">
                                    <Row>
                                        <Col lg={2} xs={3} className="d-flex justify-content-center align-items-center">
                                            <img src={'images/cash_flow.png'} alt={''} />
                                        </Col>
                                        <Col lg={9} xs={9}>
                                            <h5>{t('strategies.h1_1')}</h5>
                                            <p>{t('strategies.p1_1')}</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="mb-1">
                                    <Row>
                                        <Col lg={2} xs={3} className="d-flex justify-content-center align-items-center">
                                            <img src={'images/development.png'} alt={''} />
                                        </Col>
                                        <Col lg={9} xs={9}>
                                            <h5>{t('strategies.h1_2')}</h5>
                                            <p>{t('strategies.p1_2')}</p>                                        </Col>
                                    </Row>
                                </li>
                                <li className="mb-1">
                                    <Row>
                                        <Col lg={2} xs={3} className="d-flex justify-content-center align-items-center">
                                            <img src={'images/growth.png'} alt={''} />
                                        </Col>
                                        <Col lg={9} xs={9}>
                                            <h5>{t('strategies.h1_3')}</h5>
                                            <p>{t('strategies.p1_3')}</p>
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


Strategies.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Strategies);