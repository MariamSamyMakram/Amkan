import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

// section
import Error from '../Components/Error/Error';


class Error404 extends Component{
    render(){
        return(
            <DocumentTitle title={'Amkan | Error 404'}>
                <section className="bg pt-5 pb-5">
                    <Error/>
                </section>
            </DocumentTitle>
        );
    }
}

export default Error404;