import React, { Component } from 'react';
import {Container , Navbar, Nav } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
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
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                                <NavLink className="nav-link"  to="/about">About</NavLink>
                                <NavLink className="nav-link"  to="/strategy">Strategy</NavLink>
                                <NavLink className="nav-link"  to="/team">Team</NavLink>
                                <NavLink className="nav-link"  to="/clients">Clients / Partners</NavLink>
                                <NavLink className="nav-link"  to="/contact">Contact Us</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </section>
        )
    }
}

export default Header;