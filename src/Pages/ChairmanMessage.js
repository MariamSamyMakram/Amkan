import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

// section
import Message from '../Components/Home/Message/Message';



class ChairmanMessage extends Component{
    render(){
        return(
            <DocumentTitle title={"Amkan | Chairman's Message"}>
                <section className="bg pt-5 pb-5">
                    <Message />
                </section>
            </DocumentTitle>
        );
    }
}

export default ChairmanMessage;