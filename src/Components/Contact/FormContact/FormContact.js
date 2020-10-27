import React, { Component } from 'react';
import { Container ,Row ,Col ,Form ,Button} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt , faEnvelope , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

// style
import './FormContact.scss';

class FormContact extends Component{
    render(){
        return(
            <section className="FormContact pt-5 pb-5 mt-md-5">
                <Container>
                    <Row>
                        <Col lg={6} md={6} className="mt-5">
                            <h1 className="mb-4">Contact Us</h1>
                            <ul className="mb-0 list-unstyled p-0">
                                <li>
                                    <Row>
                                        <Col lg={2} xs={4}><div className="square"><FontAwesomeIcon icon={faPhoneAlt}/></div></Col>
                                        <Col lg={9} xs={8} className="d-flex justify-content-start align-items-center pl-0 pr-0"><p>+971 123 456 789</p></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col lg={2} xs={4}><div className="square"><FontAwesomeIcon icon={faEnvelope}/></div></Col>
                                        <Col lg={9} xs={8} className="d-flex justify-content-start align-items-center pl-0 pr-0"><a href="#">info@amkan.com</a></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col lg={2} xs={4}><div className="square"><FontAwesomeIcon icon={faMapMarkerAlt}/></div></Col>
                                        <Col lg={9} xs={8} className="d-flex justify-content-start align-items-center pl-0 pr-0"><p>102 street 2300</p></Col>
                                    </Row>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} md={6} className="mt-5">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={4} placeholder="Message" />
                                </Form.Group>
                                <Button variant="warning">SEND</Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default FormContact;