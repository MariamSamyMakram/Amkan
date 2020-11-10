import React, { Component } from 'react';
import  DocumentTitle  from 'react-document-title';


// sections

import Banner from '../Components/Home/Banner/Banner';


class Home extends Component{
    render(){
        return(
            <DocumentTitle title={'Amkan'}>
                <Banner />
            </DocumentTitle>
        );
    }
}

export default Home;