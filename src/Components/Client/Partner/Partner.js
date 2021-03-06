import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Partner.scss';

import PropTypes from 'prop-types';
import {translate} from 'react-switch-lang';


class Partner extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="Partner pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h1 className="pt-3">{t('partners')}</h1>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <ul className="mb-0 list-unstyled d-flex justify-content-between">
                                <li>
                                    <a href="http://www.ehong.ae" target="_blank" rel="noreferrer" ><img src='images/partner1.png' alt={"partner"}/> </a>
                                    <p>Investing in Foreign Enterprises</p>
                                </li>
                                <li>
                                    <a href="https://www.hughesprecisionm.com/" target="_blank" rel="noreferrer" ><img src='images/partner2.png' alt={"partner"}/> </a>
                                    <p>Federal Firearms Manufacturer<br/> Type 7 NFA Class 2</p>
                                </li>
                                <li>
                                    <a href="http://www.zdpcc.net" target="_blank" rel="noreferrer" ><img src='images/partner3.png' alt={"partner"}/> </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Partner.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Partner);