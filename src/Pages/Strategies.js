import React, { Component } from 'react';

// sections
import Strategy from '../Components/Strategy/Strategy';
// Footer
import Footer from '../Components/Home/Footer/Footer';

class Strategies extends Component{
    render(){
        return(
            <>
                <section className="lion_bg pt-5 pb-5">
                    <Strategy/>
                </section>
                <Footer/>
            </>
        );
    }
}

export default Strategies;