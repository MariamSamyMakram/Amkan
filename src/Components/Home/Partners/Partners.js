import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Partners.scss';

import PropTypes from 'prop-types';
import {translate} from 'react-switch-lang';

class Partners extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="Partners pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={3} className="d-flex justify-content-center align-items-center">
                            <h1 className="pt-3">{t('partners')}</h1>
                        </Col>
                        <Col lg={9}>
                            <ul className="mb-0 list-unstyled d-flex justify-content-between">
                                <li><a href="http://www.ehong.ae" target="_blank" rel="noreferrer" ><img src='images/partner1.png' alt={"partner"}/> </a></li>
                                <li><a href="https://www.hughesprecisionm.com/" target="_blank" rel="noreferrer" ><img src='images/partner2.png' alt={"partner"}/> </a></li>
                                <li><a href="http://www.zdpcc.net" target="_blank" rel="noreferrer"><img src='images/partner3.png' alt={"partner"}/> </a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Partners.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Partners);