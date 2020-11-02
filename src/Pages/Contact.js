import React, { Component } from 'react';

// section
import FormContact from '../Components/Contact/FormContact/FormContact'
// Footer
import Footer from '../Components/Home/Footer/Footer';

class Contact extends Component{
    render(){
        return(
            <>
                <section className="lion_bg pt-5 pb-5">
                    <FormContact />
                </section>
                <Footer/>
            </>
        );
    }
}

export default Contact;