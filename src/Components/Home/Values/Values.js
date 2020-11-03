import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Values.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';


class Values extends Component{
    render(){
        const { t} = this.props
        return(
            <div className="Values pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="mb-3">
                            <h1 className={getLanguage()==='ar'?'GE_SS text-center':' times text-center'}>{t('values.title')}</h1>
                        </Col>
                        <Col lg={12}>
                            <ul className="mb-0 mt-5 list-unstyled ">
                                <li className="mb-4">
                                    <Row>
                                        <Col lg={2} xs={2}><h2 >A</h2></Col>
                                        <Col lg={10} xs={10} className={getLanguage()==='ar'?'GE_SS':' lota'}>
                                            <p className="square_title text-center">{t('values.h2_1')}</p>
                                            <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                            {t('values.p_1')}
                                            </p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="mb-4">
                                    <Row>
                                        <Col lg={2} xs={2}><h2 >M</h2></Col>
                                        <Col lg={10} xs={10} className={getLanguage()==='ar'?'GE_SS':' lota'}>
                                            <p className="square_title text-center">{t('values.h2_2')}</p>
                                            <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                            {t('values.p_2')}
                                            </p>
                                        </Col>
                                    </Row>                                    
                                </li>
                                <li className="mb-4">
                                    <Row>
                                        <Col lg={2} xs={2}><h2 >K</h2></Col>
                                        <Col lg={10} xs={10} className={getLanguage()==='ar'?'GE_SS':' lota'}>
                                            <p className="square_title text-center">{t('values.h2_3')}</p>
                                            <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                            {t('values.p_3')}
                                            </p>
                                        </Col>
                                    </Row>   
                                </li>
                                <li className="mb-4">
                                    <Row>
                                        <Col lg={2} xs={2}><h2 >A</h2></Col>
                                        <Col lg={10} xs={10} className={getLanguage()==='ar'?'GE_SS':' lota'}>
                                            <p className="square_title text-center">{t('values.h2_4')}</p>
                                            <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                            {t('values.p_4')}
                                            </p>
                                        </Col>
                                    </Row>  
                                </li>
                                <li className="mb-4">
                                    <Row>
                                        <Col lg={2} xs={2}><h2 >N</h2></Col>
                                        <Col lg={10} xs={10} className={getLanguage()==='ar'?'GE_SS':' lota'}>
                                            <p className="square_title text-center">{t('values.h2_5')}</p>
                                            <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                                {t('values.p_5')}
                                            </p>
                                        </Col>
                                    </Row>                                    
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Values.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Values);