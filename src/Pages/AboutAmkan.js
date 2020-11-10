import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
// section
import Who from '../Components/About/Who/Who';
import Vision from '../Components/Home/Vision/Vision';
import Values from '../Components/Home/Values/Values';


class AboutAmkan extends Component{
    render(){
        return(
            <DocumentTitle title={'Amkan | About'}>
                <section className="bg pt-5 pb-5">
                    <Who />
                    <Vision />
                    <Values />
                </section>
            </DocumentTitle>

        );
    }
}

export default AboutAmkan;