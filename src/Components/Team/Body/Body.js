import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Body.scss';

class Body extends Component{
    render(){
        return(
            <section className="body pt-5 pb-5">
                <Container className="mt-md-5">
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10} className="text-center p-5">
                            <h1>Our team</h1>
                            <p>“In the UAE, we believe that creating
                                 a sustainable business will lead to further business growth.
                                  We consistently work to earn the trust of our partners and 
                                  clients and meet with their sophisticated needs. 
                                  In AMKAN Investments we continuously expand 
                                  into new investments and endure our mission 
                                  to enrich our partners and clients with our expertise”</p>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3} sm={6}>
                            <div className="team_overlay">
                                <img src={'images/team1.png'} alt={''}/>
                                <div className="overlay">
                                    <p className="mb-0"><b>Mr.Yocob Ahli</b></p>
                                    <p className="job mb-0"> CEO</p>
                                </div>
                            </div>
                            <p className="mt-5">As an experienced professional in the Middle Eastern Banking and Investment Industry, Yacob Ahli is the Chief Executive Officer. He has a clear vision for great strategies that can bring and strengthen projects worldwide, and deliver solid accomplishments for AMKAN’s partners and clients.</p>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="team_overlay">
                                <img src={'images/team2.png'} alt={''}/>
                                <div className="overlay">
                                    <p className="mb-0"><b>Mr.Majed Al Abbar</b></p>
                                    <p className="job mb-0">Chief Operating Officer</p>
                                </div>
                            </div>
                            <p className="mt-5">Having served as a director in the government, Majed Al Abbar, acts as the Chief Operations Officer. He intends to steadily achieve the targets which AMKAN sets with its partners and clients, and makes a point of engaging in dialogue and stepping up efforts to continuously create services of value.</p>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="team_overlay">
                                <img src={'images/team3.png'} alt={''}/>
                                <div className="overlay">
                                    <p className="mb-0"><b>Mr.Jason Zheng</b></p>
                                    <p className="job mb-0">Chief Commercial Officer</p>
                                </div>
                            </div>
                            <p className="mt-5">A former member of Huawei Middle East Executive management team, VP of Huawei ME region and Vodafone Key account, and one of the main founders of Huawei Iraq, Jason Zheng, the Chief Commercial Officer. He is centered as the core in enforcing and expanding businesses and Investments between foreign enterprises and the UAE. Zheng’s long-standing experience and knowledge deliver the best practices taking into account each country’s business customs and culture.</p>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="team_overlay">
                                <img src={'images/team4.png'} alt={''}/>
                                <div className="overlay">
                                    <p className="mb-0"><b>Mr.Wang Xiaohui</b></p>
                                    <p className="job mb-0">Chief Investment Representative</p>
                                </div>
                            </div>
                            <p className="mt-5">Serves as Chief Investment Officer, Mr.Wang Xiaohui, has worked in the investment banking industry in China for more than 10 years and is experienced in providing financial services in projects such as IPO, equity refinancing, bond issuing in PRC China, Hong Kong, and Macao capital markets. His clients include major China state-owned enterprises (SOE) as well as high-tech private unicorn companies.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Body;