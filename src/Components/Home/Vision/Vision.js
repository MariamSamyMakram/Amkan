import React, { Component } from 'react';
import {Container ,Row ,Col ,Tabs ,Tab} from 'react-bootstrap';

// style
import './Vision.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Vision extends Component{
    render(){
        const { t} = this.props
        return(
            <div className="Vision pt-5 pb-4">
                <Container>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <Row>
                                <Col lg={4} sm={4}>
                                    <img src={'images/logo.png'} alt={'logo'}/>
                                </Col>
                                <Col lg={8} sm={8} className="mt-sm-5 pt-sm-2 pt-md-5">
                                    <Tabs defaultActiveKey="Vission" id="uncontrolled-tab-example" className={getLanguage()==='ar'?'GE_SS':' times'}>
                                        <Tab eventKey="Vission" title={t('vission.title')} >
                                            <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right GE_SS':'text-left lota'}>
                                            {t('vission.p')}
                                            </p>
                                        </Tab>
                                        <Tab eventKey="Mission" title={t('mission.title')}>
                                            <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right GE_SS':'text-left lota'}>
                                            {t('mission.p')}                                           
                                            </p>
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Vision.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Vision);