import React ,{Component} from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Banner.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Banner extends Component{
    render(){
        const { t } = this.props
        return(
            <section className="Banner">
                <Container>
                    <Row>
                        <Col lg={6} md={7}>
                            <h1>Appreciating our partners</h1>
                        </Col>
                        <Col lg={6} md={5}></Col>
                        <Col lg={6} md={7}>
                            <p className={getLanguage()==='he'?'text-right':'text-left'}>AMKAN has a disciplined, detailed, and standardized investment strategy. We offer comprehensive business access to various enterprises worldwide.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Banner.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Banner);