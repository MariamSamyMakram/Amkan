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
                            <h1 className={getLanguage()==='he' || getLanguage()==='ar'?'GE_SS text-right':' times text-left'}>{t('banner.title')}</h1>
                        </Col>
                        <Col lg={6} md={5}></Col>
                        <Col lg={6} md={7} className={getLanguage()==='ar'?'GE_SS ':' lota'}>
                            <p className={getLanguage()==='he' || getLanguage()==='ar'?'text-right':'text-left'} >
                                {t('banner.p')}
                            </p>
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