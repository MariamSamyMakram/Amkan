import React, { Component } from 'react';

// sections

import Banner from '../Components/Home/Banner/Banner';
import Partners from '../Components/Home/Partners/Partners';
import Who from '../Components/Home/Who/Who';
import Vision from '../Components/Home/Vision/Vision';
import Values from '../Components/Home/Values/Values';
import Message from '../Components/Home/Message/Message';
import Strategies from '../Components/Home/Strategies/Strategies';
import Clients from '../Components/Home/Clients/Clients';

class Home extends Component{
    render(){
        return(
            <>
                <Banner />
                {/* <Partners />
                <section className="bg">
                    <Who />
                    <Vision />
                    <Values />
                    <Message />
                    <Strategies />
                    <Clients />
                </section>   */}
            </>
        );
    }
}

export default Home;