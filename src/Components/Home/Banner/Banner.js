import React ,{Component} from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Banner.scss';

class Banner extends Component{
    render(){
        return(
            <section className="Banner">
                <Container>
                    <Row>
                        <Col lg={6} md={7}>
                            <h1>Appreciating our partners</h1>
                        </Col>
                        <Col lg={6} md={5}></Col>
                        <Col lg={6} md={7}>
                            <p>AMKAN has a disciplined, detailed, and standardized investment strategy. We offer comprehensive business access to various enterprises worldwide.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Banner;