import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

// style
import './Error.scss';

import PropTypes from 'prop-types';
import {translate ,getLanguage} from 'react-switch-lang';

class Error extends Component{
    render(){
        const { t} = this.props
        return(
            <section className="error pt-5 pb-5 text-center mt-5">
                <Container className="pt-5 pb-5 mt-md-5">
                    <h1 className={getLanguage()==='ar'?'GE_SS':'times'}>404</h1>
                    <p className={getLanguage()==='ar'?'GE_SS':'lota'}>{t('error.message')}</p>
                </Container>
            </section>
        )
    }
}

Error.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Error);