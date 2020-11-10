import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';
// import Slider from "react-slick";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons';

// style
import './Clients.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';
// json 
import {Client} from './Client';

// function SampleNextArrow(props) {
//     const { onClick } = props;
//     return (
//         <div className="next" onClick={onClick}>
//             <FontAwesomeIcon icon={faAngleRight}/>
//         </div>
//     );
// }
//
// function SamplePrevArrow(props) {
//     const { onClick } = props;
//     return (
//         <div className="prev" onClick={onClick}>
//             <FontAwesomeIcon icon={faAngleLeft}/>
//         </div>
//     );
// }

class Clients extends Component{
    // constructor(props) {
    //     super(props);
    //     this.next = this.next.bind(this);
    //     this.previous = this.previous.bind(this);
    // }
    // next() {
    //     this.Slider.slickNext();
    // }
    // previous() {
    //     this.Slider.slickPrev();
    // }
    render(){
        const { t } = this.props
        /*
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive:[
                {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
            ]
        };
        */
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