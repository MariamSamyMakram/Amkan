import React, { Component } from 'react';

// section
import Who from '../Components/About/Who/Who';
import Vission from '../Components/About/Vission/Vission';
import Values from '../Components/Home/Values/Values';
import Message from '../Components/Home/Message/Message';

class About extends Component{
    render(){
        return(
            <section className="bg pt-5 pb-5">
                <Who />
                <Vission />
                <Values />
                <Message />
            </section>
        );
    }
}

export default About;