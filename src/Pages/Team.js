import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
// section
import Body from '../Components/Team/Body/Body';


class Team extends Component{
    render(){
        return(
            <DocumentTitle title={'Amkan | Team'}>
                <section className="lion_bg pt-5 pb-5" >
                    <Body />
                </section>
            </DocumentTitle>
            
        );
    }
}

export default Team;