import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

// style
import './Strategy.scss';

import PropTypes from 'prop-types';
import {translate, getLanguage} from 'react-switch-lang';

class Strategy extends Component {
    render() {
        const {t} = this.props
        return (
            <section className="Strategy pt-5 mt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center pt-md-5 mb-5">
                            <h1 className={getLanguage() === 'ar' ? 'GE_SS' : ' times'}>{t('strategies.title')}</h1>
                            <p className={getLanguage() === 'ar' ? 'GE_SS' : ' lota'}>{t('strategies.p1')}<br/>{t('strategies.p2')}
                            </p>
                        </Col>
                        <Col lg={12}>
                            <ul className="pl-0 pr-0 row list-unstyled">
                                <li className="col-sm-4 mb-3 text-center">
                                    <div className="strategy-item">
                                        <img src={'images/cash_flow.png'} alt={t('strategies.h1_1')}/>
                                        <h5 className={getLanguage() === 'ar' ? 'GE_SS' : ' lota'}>{t('strategies.h1_1')}</h5>
                                        <p className={getLanguage() === 'ar' ? 'GE_SS' : ' lota'}>{t('strategies.p1_1')}</p>
                                    </div>
                                </li>
                                <li className="col-sm-4 mb-3 text-center">
                                    <div className="strategy-item">
                                        <img src={'images/development.png'} alt={t('strategies.h1_2')}/>
                                        <h5 className={getLanguage() === 'ar' ? 'GE_SS' : ' lota'}>{t('strategies.h1_2')}</h5>
                                        <p className={getLanguage() === 'ar' ? 'GE_SS' : ' lota'}>{t('strategies.p1_2')}</p>
                                    </div>
                                </li>
                                <li className="col-sm-4 mb-3 text-center">
                                    <div className="strategy-item">
                                        <img src={'images/growth.png'} alt={t('strategies.h1_3')}/>
                                        <h5 className={getLanguage() === 'ar' ? 'GE_SS' : ' lota'}>{t('strategies.h1_3')}</h5>
                                        <p className={getLanguage() === 'ar' ? 'GE_SS' : ' lota'}>{t('strategies.p1_3')}</p>
                                    </div>
                                </li>
                            </ul>
                        </Col>
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