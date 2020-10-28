import React, { Component } from 'react';
import {Container ,Row ,Col ,Dropdown} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
// style
import './HeaderTop.scss';

// Translation Higher Order Component
import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    translate,
} from 'react-switch-lang';

import en from './lang/en.json';
import he from './lang/he.json';

// Do this two lines only when setting up the application
setTranslations({ en, he });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie();


class HeaderTop extends Component{
    handleSetLanguage = (key) => () => {
        setLanguage(key);
    };
    render(){
        return(
            <section className="HeaderTop">
                <Container fluid>
                    <Row>
                        <Col lg={10}></Col>
                        <Col lg={2} className="d-flex justify-content-end">
                            <ul className="list-unstyled d-flex mb-0">
                                <li className="mr-2"><a target="_blank" href="https://www.linkedin.com/company/amkan-investments/" className="in"><b>in</b></a></li>
                                <li className="mr-2 ml-2">|</li>
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle  id="dropdown-basic">
                                            <FontAwesomeIcon icon={faGlobe} /> English
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item  onClick={this.handleSetLanguage('en')}>English</Dropdown.Item>
                                            <Dropdown.Item  onClick={this.handleSetLanguage('he')}>Hebrew</Dropdown.Item>
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