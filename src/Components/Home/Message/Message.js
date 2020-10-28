import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Message.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Message extends Component{
    render(){
        return(
            <section className="message pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={4} md={4} className="bg_person mb-5 mb-md-0">
                            <img src={'images/person.png'} alt={'bg'} />
                        </Col>
                        <Col lg={8} md={8} className={getLanguage()==='he'?'text-right':'text-left'}>
                            <h1 className="mb-4">Chairman’s Message:</h1>
                            <div className="body_message">
                                <p>“AMKAN Investments has been based on partners appreciation, market knowledge, and strong financial capital.
                                    <br/> We take a broader approach and carefully scrutinize our partners’ interests for a long-term sustainable relation”</p>
                                <h5>H.H. Abdullah Mohammed Khaled Al Nahyan</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Message.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Message);