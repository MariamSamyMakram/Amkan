import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Who.scss';

import PropTypes from 'prop-types';
import {translate} from 'react-switch-lang';

class Who extends Component{
    render(){
        const { t} = this.props
        return(
            <div className="who pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8} className="text-center">
                            <h1 className="text-center">{t('who.title')}</h1>
                            <p>{t('who.p')}</p>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Who.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Who);