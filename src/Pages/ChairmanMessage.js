import React, { Component } from 'react';

// section
import Message from '../Components/Home/Message/Message';



class ChairmanMessage extends Component{
    render(){
        return(
            <section className="bg pt-5 pb-5">
                <Message />
            </section>
        );
    }
}

export default ChairmanMessage;