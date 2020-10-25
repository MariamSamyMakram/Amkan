import React, { Component } from 'react';
import {Container , Navbar, Nav ,NavLink} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// style
import './Header.scss';

class Header extends Component{
    render(){
        return(
            <section className="header">
                <Container>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                            <img src="images/logo2.png" alt={'logo'}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <FontAwesomeIcon icon={faBars} />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink   href="#home">Home</NavLink>
                                <NavLink  href="#link">About</NavLink>
                                <NavLink  href="#link1">Strategy</NavLink>
                                <NavLink  href="#link2">Team</NavLink>
                                <NavLink  href="#link3">Clients / Partners</NavLink>
                                <NavLink  href="#link4">Contact Us</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </section>
        )
    }
}

export default Header;