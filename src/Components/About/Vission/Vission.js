import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Vission.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Vission extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="vission pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={6} md={6} className={getLanguage()==='he'?'text-right mb-4 mb-md-0':'text-left mb-4 mb-md-0'}>
                            <h1 className={getLanguage()==='he'?'border_right mb-5':'border_left mb-5'}>{t('vission.title')}</h1>
                            <p>{t('vission.p')}</p>
                        </Col>
                        <Col lg={6} md={6} className={getLanguage()==='he'?'text-right mb-4 mb-md-0':'text-left mb-4 mb-md-0'}>
                            <h1 className={getLanguage()==='he'?'border_right mb-5':'border_left mb-5'}>{t('mission.title')}</h1>
                            <p>{t('mission.p')}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Vission.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Vission);