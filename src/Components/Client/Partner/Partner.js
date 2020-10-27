import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Partner.scss';

class Partner extends Component{
    render(){
        return(
            <section className="Partner pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h1 className="pt-3">Partners</h1>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <ul className="mb-0 list-unstyled d-flex justify-content-between">
                                <li><img src='images/partner1.png' alt={"partner"}/></li>
                                <li><img src='images/partner2.png' alt={"partner"}/></li>
                                <li><img src='images/partner3.png' alt={"partner"}/></li>
                            </ul>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Partner;