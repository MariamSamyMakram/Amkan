import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

// section
import FormContact from '../Components/Contact/FormContact/FormContact'


class Contact extends Component{
    render(){
        return(
            <DocumentTitle title={'Amkan | Contact Us'}>
                <section className="lion_bg pt-5 pb-5">
                    <FormContact />
                </section>
            </DocumentTitle>
        );
    }
}

export default Contact;