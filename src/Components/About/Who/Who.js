import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// style
import './Who.scss';

class Who extends Component{
    render(){
        return(
            <section className="who pt-5 pb-5 mt-5">
                <Container className="mt-lg-5 pt-lg-5">
                    <Row>
                        <Col lg={5} md={5}>
                            <img src={'images/Who.png'} alt={'Who'}/>
                        </Col>
                        <Col lg={7} md={7} className="mt-4 mt-md-0">
                            <h1 className="mb-4">Who we are</h1>
                            <div className="body_message">
                                <p>AMKAN is a private prestige investment company that provides a range of active investment strategies to serve a broad spectrum of clients’ and partners’ needs.</p>
                            </div>
                           
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Who;