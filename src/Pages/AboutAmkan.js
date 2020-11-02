import React, { Component } from 'react';

// section
import Who from '../Components/About/Who/Who';
import Vision from '../Components/Home/Vision/Vision';
import Values from '../Components/Home/Values/Values';


class AboutAmkan extends Component{
    render(){
        return(
            <section className="bg pt-5 pb-5">
                <Who />
                <Vision />
                <Values />
            </section>

        );
    }
}

export default AboutAmkan;