import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Partners.scss';

class Partners extends Component{
    render(){
        return(
            <section className="Partners pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={3} className="d-flex justify-content-center align-items-center">
                            <h1 className="pt-3">Partners</h1>
                        </Col>
                        <Col lg={9}>
                            <ul className="mb-0 list-unstyled d-flex justify-content-between">
                                <li><img src='images/partner1.png' alt={"partner"}/></li>
                                <li><img src='images/partner2.png' alt={"partner"}/></li>
                                <li><img src='images/partner3.png' alt={"partner"}/></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Partners;