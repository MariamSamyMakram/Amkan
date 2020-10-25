import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Who.scss';

class Who extends Component{
    render(){
        return(
            <div className="who pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8} className="text-center">
                            <h1>Who we are</h1>
                            <p>AMKAN is a private prestige investment company that provides a range of active investment strategies to serve a broad spectrum of clients’ and partners’ needs.</p>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Who;