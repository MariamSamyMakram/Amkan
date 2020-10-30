import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Body.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Body extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="body pt-5 pb-5">
                <Container className="mt-md-5">
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10} className="text-center p-5">
                            <h1>{t('team.title')}</h1>
                            <p>
                            {t('team.p')}
                            </p>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3} sm={6}>
                            <div className="team_overlay">
                                <img src={'images/team3.png'} alt={''}/>
                                <div className={getLanguage()==='he'?'right overlay':'left overlay'}>
                                    <p className="mb-0"><b>{t('team.name1')}</b></p>
                                    <p className="job mb-0"> {t('team.job1')}</p>
                                </div>
                            </div>
                            <p className={getLanguage()==='he'?'text-right mt-5':'text-left mt-5'}>
                            {t('team.p1')}
                            </p>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="team_overlay">
                                <img src={'images/team2.png'} alt={''}/>
                                <div  className={getLanguage()==='he'?'right overlay':'left overlay'}>
                                    <p className="mb-0"><b>{t('team.name2')}</b></p>
                                    <p className="job mb-0">{t('team.job2')}</p>
                                </div>
                            </div>
                            <p className={getLanguage()==='he'?'text-right mt-5':'text-left mt-5'}>
                            {t('team.p2')}
                            </p>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="team_overlay">
                                <img src={'images/team1.png'} alt={''}/>
                                <div  className={getLanguage()==='he'?'right overlay':'left overlay'}>
                                    <p className="mb-0"><b>{t('team.name3')}</b></p>
                                    <p className="job mb-0">{t('team.job3')}</p>
                                </div>
                            </div>
                            <p className={getLanguage()==='he'?'text-right mt-5':'text-left mt-5'}>
                            {t('team.p3')}
                            </p>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="team_overlay">
                                <img src={'images/team4.png'} alt={''}/>
                                <div  className={getLanguage()==='he'?'right overlay':'left overlay'}>
                                    <p className="mb-0"><b>{t('team.name4')}</b></p>
                                    <p className="job mb-0">{t('team.job4')}</p>
                                </div>
                            </div>
                            <p className={getLanguage()==='he'?'text-right mt-5':'text-left mt-5'}>
                                {t('team.p4')}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

Body.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Body);