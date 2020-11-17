import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Clients.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';
// json 
import {Client} from './Client';

class Clients extends Component{
    render(){
        const { t } = this.props
        return(
            <section className="clients pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h1 className={getLanguage()==='ar'?'GE_SS':'times'}>{t('clients.title')}</h1>
                            <p className={getLanguage()==='ar'?'GE_SS':'lota'}>{t('clients.p')}</p>
                        </Col>
                        <Col lg={12}>
                            <Row>
                                {
                                    Client.map((item ,key)=>{
                                        return(
                                            <Col lg={3} md={4} sm={6} xs={12} className="mb-4" key={key}>
                                                <a href={item.url}  target="_blank" rel="noreferrer" ><img src={item.image} alt={'clients'}/></a>
                                            </Col>
                                        )
                                    })
                                }

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Clients.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Clients);