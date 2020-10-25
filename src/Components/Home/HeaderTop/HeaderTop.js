import React, { Component } from 'react';
import {Container ,Row ,Col ,Dropdown} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// style
import './HeaderTop.scss';

class HeaderTop extends Component{
    render(){
        return(
            <section className="HeaderTop">
                <Container fluid>
                    <Row>
                        <Col lg={10}></Col>
                        <Col lg={2} className="d-flex justify-content-end">
                            <ul className="list-unstyled d-flex mb-0">
                                <li className="mr-2"><a href="#" className="in"><b>in</b></a></li>
                                <li className="mr-2 ml-2">|</li>
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle  id="dropdown-basic">
                                            <FontAwesomeIcon icon={faGlobe} /> English
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </section>
        );
    }
}

export default HeaderTop;