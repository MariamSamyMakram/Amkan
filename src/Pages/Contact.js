import React, { Component } from 'react';

// section
import FormContact from '../Components/Contact/FormContact/FormContact'

class Contact extends Component{
    render(){
        return(
            <section className="bg pt-5 pb-5">
                <FormContact />
            </section>
        );
    }
}

export default Contact;