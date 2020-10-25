import React, { Component } from 'react';

// sections
import HeaderTop from '../Components/Home/HeaderTop/HeaderTop';
import Banner from '../Components/Home/Banner/Banner';
import Header from '../Components/Home/Header/Header';
import Partners from '../Components/Home/Partners/Partners';
import Who from '../Components/Home/Who/Who';
import Vision from '../Components/Home/Vision/Vision';
import Values from '../Components/Home/Values/Values';
import Message from '../Components/Home/Message/Message';
import Strategies from '../Components/Home/Strategies/Strategies';

class Home extends Component{
    render(){
        return(
            <>
                <HeaderTop />
                <Header />
                <Banner />
                <Partners />
                <section className="bg">
                    <Who />
                    <Vision />
                    <Values />
                    <Message />
                    <Strategies />
                </section>  
            </>
        );
    }
}

export default Home;