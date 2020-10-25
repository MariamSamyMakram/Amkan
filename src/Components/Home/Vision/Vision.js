import React, { Component } from 'react';
import {Container ,Row ,Col ,Tabs ,Tab} from 'react-bootstrap';

// style
import './Vision.scss';

class Vision extends Component{
    render(){
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
                                    <Tabs defaultActiveKey="Vission" id="uncontrolled-tab-example">
                                        <Tab eventKey="Vission" title="VISSION" >
                                            <p>UAE in Origin, Global in Scope. Becoming the ultimate bridge between foreign enterprises and UAE.</p>
                                        </Tab>
                                        <Tab eventKey="Mission" title="MISSION">
                                            <p>
                                            AMKAN is committed to providing business gateways to foreign enterprises, and value investing in foreign and local companies to create effective joint ventures
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

export default Vision;