import React, { Component } from 'react';

// section
import Body from '../Components/Team/Body/Body';
// Footer
import Footer from '../Components/Home/Footer/Footer';

class Team extends Component{
    render(){
        return(
            <>
                <section className="lion_bg pt-5 pb-5">
                    <Body />
                </section>
                <Footer />
            </>
        );
    }
}

export default Team;