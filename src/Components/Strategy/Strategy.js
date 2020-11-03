import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap'

// style
import './Strategy.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Strategy extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="Strategy pt-5 mt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center pt-md-5 mb-5">
                            <h1 className={getLanguage()==='ar'?'GE_SS':' times'}>{t('strategies.title')}</h1>
                            <p className={getLanguage()==='ar'?'GE_SS':' lota'}>{t('strategies.p')}</p>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <ul className="mb-0 pl-0 list-unstyled d-block d-md-flex justify-content-between flex-nowrap bd-highlight">
                                <li className="order-3 p-3 bd-highlight text-center">
                                    <img src={'images/cash_flow.png'}/>
                                    <h5 className={getLanguage()==='ar'?'GE_SS':' lota'}>{t('strategies.h1_1')}</h5>
                                    <p className={getLanguage()==='ar'?'GE_SS':' lota'}>{t('strategies.p1_1')}</p>
                                </li>
                                <li className="order-3 p-3 bd-highlight text-center">
                                    <img src={'images/development.png'}/>
                                    <h5 className={getLanguage()==='ar'?'GE_SS':' lota'}>{t('strategies.h1_2')}</h5>
                                    <p className={getLanguage()==='ar'?'GE_SS':' lota'}>{t('strategies.p1_2')}</p>                                
                                </li>
                                <li className="order-3 p-3 bd-highlight text-center">
                                    <img src={'images/growth.png'}/>
                                    <h5 className={getLanguage()==='ar'?'GE_SS':' lota'}>{t('strategies.h1_3')}</h5>
                                    <p className={getLanguage()==='ar'?'GE_SS':' lota'}>{t('strategies.p1_3')}</p>
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