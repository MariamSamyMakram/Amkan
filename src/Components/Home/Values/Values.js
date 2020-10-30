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
                            <h1 className="text-center">{t('values.title')}</h1>
                        </Col>
                        <Col lg={12}>
                            <ul className="mb-0 list-unstyled d-block d-lg-flex justify-content-between flex-nowrap bd-highlight">
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">{t('values.h1_1')}</h2>
                                    <p className="square_title text-center">{t('values.h2_1')}</p>
                                    <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                    {t('values.p_1')}
                                    </p>
                                </li>
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">{t('values.h1_2')}</h2>
                                    <p className="square_title text-center">{t('values.h2_2')}</p>
                                    <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                    {t('values.p_2')}
                                    </p>
                                </li>
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">{t('values.h1_3')}</h2>
                                    <p className="square_title text-center">{t('values.h2_3')}</p>
                                    <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                    {t('values.p_3')}
                                    </p>
                                </li>
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">{t('values.h1_4')}</h2>
                                    <p className="square_title text-center">{t('values.h2_4')}</p>
                                    <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                    {t('values.p_4')}
                                    </p>
                                </li>
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">{t('values.h1_5')}</h2>
                                    <p className="square_title text-center">{t('values.h2_5')}</p>
                                    <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                        {t('values.p_5')}
                                    </p>
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