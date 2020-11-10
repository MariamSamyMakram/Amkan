import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

// sections
import Strategy from '../Components/Strategy/Strategy';


class Strategies extends Component{
    render(){
        return(
            <DocumentTitle title={'Amkan | Strategies'}>
                <section className="lion_bg pt-5 pb-5">
                    <Strategy/>
                </section>
            </DocumentTitle>
        );
    }
}

export default Strategies;