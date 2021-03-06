import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {NavLink} from "react-router-dom";

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

// style
import './Footer.scss';


class Footer extends Component{
    render(){
        const { t } = this.props;
        return(
            <section className={getLanguage()==='ar'?'GE_SS footer pb-5':'footer pb-5 lota'}>
                <div className="bg">
                    <img src={'images/Layer.png'} alt={'layer'} className="Layer" />
                </div>
                <Container className="pt-5">
                    <Row>
                        <Col lg={8} md={4} className="mb-2 mb-md-0">
                            <Row>
                                <Col lg={6} xs={8} className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                                    <p className="mb-1" >{t('footer.email')} : </p>
                                    <p className="mb-1">info@amkan.ae</p>
                                </Col>
                                <Col lg={6} xs={4} className={getLanguage()==='he' || getLanguage()==='ar'?'text-right pr-0 pl-0':'text-left pr-0 pl-0'}>
                                    <ul className={getLanguage()==='he' || getLanguage()==='ar'?'pr-0 mb-0 list-unstyled':'pl-0 mb-0 list-unstyled'}>
                                        <li className="mb-1"><NavLink exact to="/">{t('header.home')}</NavLink></li>
                                        <li className="mb-1"><NavLink  to="/aboutAmkan">{t('header.about_amkan')}</NavLink ></li>
                                        <li className="mb-1"><NavLink  to="/chairmanMessage">{t('header.ChairmanMessage')}</NavLink ></li>
                                        <li className="mb-1"><NavLink  to="/strategy">{t('header.strategy')}</NavLink></li>
                                        <li className="mb-1"><NavLink  to="/team">{t('header.team')}</NavLink></li>
                                        <li className="mb-1"><NavLink  to="/clientsPartners">{t('header.client')}</NavLink></li>
                                        <li className="mb-1"><NavLink  to="/contact">{t('header.contact')}</NavLink></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}  md={4} className="text-center mb-2 mb-md-0">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/amkan-investments/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <p className="mt-3">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                {t('footer.copyright1')}<a href="#">{t('footer.copyright2')}</a>{t('footer.copyright3')}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Footer.propTypes = {
    t: PropTypes.func.isRequired,
  };

export default translate(Footer);