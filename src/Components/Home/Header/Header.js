import React, { Component } from 'react';
import {Container , Navbar, Nav , NavDropdown} from 'react-bootstrap';
import {NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

// style
import './Header.scss';


class Header extends Component{
    render(){
        const { t} = this.props
        return(
            <section className={getLanguage()==='ar'?'GE_SS header':'header lota'}>
                <Container>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                            <NavLink  to="/">
                                <img src="images/logo2.png" alt={'logo'}/>    
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <FontAwesomeIcon icon={faBars} />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className={getLanguage()==='he' || getLanguage()==='ar'?'mr-auto':'ml-auto'}>
                                <NavLink className="nav-link" exact to="/">{t('header.home')}</NavLink>
                                {/* <NavLink className="nav-link"  to="/about">{t('header.about')}</NavLink> */}
                                <NavDropdown title={t('header.about')} id="basic-nav-dropdown">
                                    <NavLink  className={getLanguage()==='he' || getLanguage()==='ar'?'text-right dropdown-item':'text-left dropdown-item'} to="/aboutAmkan">{t('header.about_amkan')}</NavLink >
                                    <NavLink  className={getLanguage()==='he' || getLanguage()==='ar'?'text-right dropdown-item':'text-left dropdown-item'} to="/chairmanMessage">{t('header.ChairmanMessage')}</NavLink >
                                </NavDropdown>
                                <NavLink className="nav-link"  to="/strategy">{t('header.strategy')}</NavLink>
                                <NavLink className="nav-link"  to="/team">{t('header.team')}</NavLink>
                                <NavLink className="nav-link"  to="/clientsPartners">{t('header.client')}</NavLink>
                                <NavLink className="nav-link"  to="/contact">{t('header.contact')}</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </section>
        )
    }
}

Header.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Header);