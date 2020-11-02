import React, { Component } from 'react';
import {Container ,Row ,Col ,Dropdown} from 'react-bootstrap';

// style
import './HeaderTop.scss';

import PropTypes from 'prop-types';
// Translation Higher Order Component
import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    translate,
    getLanguage
} from 'react-switch-lang';

import en from '../../../lang/en.json';
import he from '../../../lang/he.json';
import ar from '../../../lang/ar.json';
import ch from '../../../lang/ch.json';

// Do this two lines only when setting up the application
setTranslations({ en, he ,ar ,ch });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie('language');


class HeaderTop extends Component{
    handleSetLanguage = (key) => () => {
        setLanguage(key);
    };
    render(){
        const { t } = this.props
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
                                    {/* <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option onClick={this.handleSetLanguage('en')} value="en"> <FontAwesomeIcon icon={faGlobe} />{t('headertop.en')}</option>
                                                <option onClick={this.handleSetLanguage('he')} value="he">{t('headertop.he')}</option>
                                                <option onClick={this.handleSetLanguage('ar')} value="ar">{t('headertop.ar')}</option>
                                                <option onClick={this.handleSetLanguage('ch')} value="ch">{t('headertop.ch')}</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form> */}

                                    <Dropdown>
                                        <Dropdown.Toggle  id="dropdown-basic">
                                            {t('headertop.'+getLanguage())}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item  onClick={this.handleSetLanguage('en')}>{t('headertop.en')}</Dropdown.Item>
                                            <Dropdown.Item  onClick={this.handleSetLanguage('he')}>{t('headertop.he')}</Dropdown.Item>
                                            <Dropdown.Item  onClick={this.handleSetLanguage('ar')}>{t('headertop.ar')}</Dropdown.Item>
                                            <Dropdown.Item  onClick={this.handleSetLanguage('ch')}>{t('headertop.ch')}</Dropdown.Item>
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

HeaderTop.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(HeaderTop);