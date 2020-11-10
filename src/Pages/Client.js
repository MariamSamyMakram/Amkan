import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

// section
import Clients from '../Components/Home/Clients/Clients';
// import Partner from '../Components/Client/Partner/Partner';


class Client extends Component{
    render(){
        return(
            <DocumentTitle title={'Amkan | Clients And Partners'}>
                <section className="lion_bg pt-5 pb-5">
                    <br/>
                    <br/>
                    <br/>
                    <Clients />
                </section>
            </DocumentTitle>
        );
    }
}

export default Client;