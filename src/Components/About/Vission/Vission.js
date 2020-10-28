import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Vission.scss';

class Vission extends Component{
    render(){
        return(
            <section className="vission pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={6} md={6} className="mb-4 mb-md-0">
                            <h1 className="mb-5">Our Vision</h1>
                            <p>UAE in Origin, Global in Scope. Becoming the ultimate bridge between foreign enterprises and UAE.</p>
                        </Col>
                        <Col lg={6} md={6}>
                            <h1 className="mb-5">Our Mission</h1>
                            <p>AMKAN is committed to providing business gateways to foreign enterprises, and value investing in foreign and local companies to create effective joint ventures.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Vission;