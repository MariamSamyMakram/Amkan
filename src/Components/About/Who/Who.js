import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// style
import './Who.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Who extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="who pt-5 pb-5 mt-5">
                <Container className="mt-lg-5 pt-lg-5">
                    <Row>
                        <Col lg={5} md={5}>
                            <img src={'images/Who.png'} alt={'Who'}/>
                        </Col>
                        <Col lg={7} md={7}  className={getLanguage()==='he'?'text-right mt-4 mt-md-0':'text-left mt-4 mt-md-0'}>
                            <h1 className="mb-4">{t('who.title')}</h1>
                            <div className="body_message">
                                <p>{t('who.p')}</p>
                            </div>
                           
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Who.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Who);