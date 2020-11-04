import React, { Component } from 'react';
import { Container ,Row ,Col ,Form ,Button, FormControl} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt , faEnvelope , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

// style
import './FormContact.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';


class FormContact extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="FormContact pt-5 pb-5 mt-md-5">
                <Container>
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={5} md={6} className="mt-5">
                            <h1 className={getLanguage()==='he' || getLanguage()==='ar'?'text-right mb-4 GE_SS':'text-left mb-4 times'}>{t('contact.title')}</h1>
                            <ul className="mb-0 list-unstyled p-0">
                                {/* <li>
                                    <Row>
                                        <Col lg={2} xs={4}><div className="square"><FontAwesomeIcon icon={faPhoneAlt}/></div></Col>
                                        <Col lg={10} xs={8} className="d-flex justify-content-start align-items-center"><p>+971 123 456 789</p></Col>
                                    </Row>
                                </li> */}
                                <li className={getLanguage()==='ar'?'GE_SS':'lota'}>
                                    <Row>
                                        <Col lg={2} xs={4}><div className="square"><FontAwesomeIcon icon={faEnvelope}/></div></Col>
                                        <Col lg={10} xs={8} className="d-flex justify-content-start align-items-center"><a href="#">info@amkan.ae</a></Col>
                                    </Row>
                                </li>
                                {/* <li>
                                    <Row>
                                        <Col lg={2} xs={4}><div className="square"><FontAwesomeIcon icon={faMapMarkerAlt}/></div></Col>
                                        <Col lg={10} xs={8} className="d-flex justify-content-start align-items-center"><p>102 street 2300</p></Col>
                                    </Row>
                                </li> */}
                            </ul>
                        </Col>
                        <Col lg={5} md={6} className="mt-5" className={getLanguage()==='ar'?'GE_SS':'lota'}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="name" placeholder={t('contact.name')} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder={t('contact.email')}/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={4} placeholder={t('contact.message')} />
                                </Form.Group>
                                <Button variant="warning">{t('contact.send')}</Button>
                            </Form>

                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

FormContact.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(FormContact);