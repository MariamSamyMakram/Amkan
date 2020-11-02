import React, { Component } from 'react';

// section
import Clients from '../Components/Home/Clients/Clients';
// import Partner from '../Components/Client/Partner/Partner';
// Footer
import Footer from '../Components/Home/Footer/Footer';

class Client extends Component{
    render(){
        return(
            <>
                <section className="lion_bg pt-5 pb-5">
                    <br/>
                    <br/>
                    <br/>
                    <Clients />
                    {/* <Partner /> */}
                </section>
                <Footer />
            </>
        );
    }
}

export default Client;