import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Message.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Message extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="message pt-5 pb-5 mt-5">
                <Container className="mt-md-5">
                    <Row>
                        <Col lg={4} md={4} className="bg_person mb-5 mb-md-0">
                            <img src={'images/person.png'} alt={'bg'} className={getLanguage()==='he' || getLanguage()==='ar'?'rotate180':'rotate0'}/>
                        </Col>
                        <Col lg={8} md={8} className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'}>
                            <h1 className={getLanguage()==='ar'?'GE_SS mb-4':' times mb-4'}>{t('message.title')}</h1>
                            <div className="body_message">
                                <p className={getLanguage()==='ar'?'GE_SS':' lota'}>{t('message.p1')} <br/>{t('message.p2')}</p>
                                <h5 className={getLanguage()==='ar'?'GE_SS':' times'}>{t('message.name')}</h5>
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