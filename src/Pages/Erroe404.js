import React, { Component } from 'react';

// section
import Error from '../Components/Error/Error';


class Error404 extends Component{
    render(){
        return(
            <section className="bg pt-5 pb-5">
                <Error/>
            </section>

        );
    }
}

export default Error404;