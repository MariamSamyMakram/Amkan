import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons';

// style
import './Clients.scss';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="next" onClick={onClick}>
            <FontAwesomeIcon icon={faAngleRight}/>
        </div>  
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="prev" onClick={onClick}>
            <FontAwesomeIcon icon={faAngleLeft}/>
        </div>    
    );
}

class Clients extends Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.Slider.slickNext();
    }
    previous() {
        this.Slider.slickPrev();
    }
    render(){
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
        return(
            <section className="clients pt-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h1>clients</h1>
                            <p>Our Clients Are Our Priority</p>
                        </Col>
                        <Col lg={12}>
                            <Slider {...settings}>
                                <div>
                                    <img src={'images/client1.png'} alt={'clients'}/>
                                </div>
                                <div>
                                    <img src={'images/client2.png'} alt={'clients'}/>
                                </div>
                                <div>
                                    <img src={'images/client3.png'} alt={'clients'}/>
                                </div>
                                <div>
                                    <img src={'images/client4.png'} alt={'clients'}/>
                                </div>
                                <div>
                                    <img src={'images/client5.png'} alt={'clients'}/>
                                </div>
                                <div>
                                    <img src={'images/client6.png'} alt={'clients'}/>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
                <div className="bg">
                    <img src={'images/Layer.png'} alt={'layer'} className="Layer" />
                </div>
            </section>
        )
    }
}

export default Clients;