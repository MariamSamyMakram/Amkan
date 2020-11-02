import React, { Component } from 'react';

// section
import Message from '../Components/Home/Message/Message';


// Footer
import Footer from '../Components/Home/Footer/Footer';

class ChairmanMessage extends Component{
    render(){
        return(
            <>
                <section className="bg pt-5 pb-5">
                    <Message />
                </section>

                <Footer />
            </>

        );
    }
}

export default ChairmanMessage;