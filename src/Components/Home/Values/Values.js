import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Values.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';


class Values extends Component{
    render(){
        return(
            <div className="Values pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="mb-3">
                            <h1 className="text-center">Our values</h1>
                        </Col>
                        <Col lg={12}>
                            <ul className="mb-0 list-unstyled d-block d-lg-flex justify-content-between flex-nowrap bd-highlight">
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">A</h2>
                                    <p className="square_title text-center">Appreciating our partners</p>
                                    <p className={getLanguage()==='he'?'text-right':'text-left'}>We continuously work in building a trustworthy, loyal, and long-life business partnership.</p>
                                </li>
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">M</h2>
                                    <p className="square_title text-center">Mutual benefits</p>
                                    <p className={getLanguage()==='he'?'text-right':'text-left'}>Ensuring an ongoing commitment for fruitful collaboration.</p>
                                </li>
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">K</h2>
                                    <p className="square_title text-center">Keenness</p>
                                    <p className={getLanguage()==='he'?'text-right':'text-left'}>Our expertise in global investments stimulates a successful outcome for our partners.</p>
                                </li>
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">A</h2>
                                    <p className="square_title text-center">Accomplishment</p>
                                    <p className={getLanguage()==='he'?'text-right':'text-left'}>We have established a great number of partnerships and strive to continue implementing projects in Amkan and the region.</p>
                                </li>
                                <li className="order-3 p-2 bd-highlight flex-shrink-1">
                                    <h2 className="text-center">N</h2>
                                    <p className="square_title text-center">Nobility</p>
                                    <p className={getLanguage()==='he'?'text-right':'text-left'}>The virtue of Nobility directs the relationship between Amkan and its Partners.</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Values.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Values);