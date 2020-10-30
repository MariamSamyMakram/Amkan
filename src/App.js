import React from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// slick slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// style
import './App.scss';

// Header
import HeaderTop from './Components/Home/HeaderTop/HeaderTop';
import Header from './Components/Home/Header/Header';

// pages
import Home from './Pages/Home';
import About from './Pages/About';
import Strategies from './Pages/Strategies';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Client from './Pages/Client';


// Footer
import Footer from './Components/Home/Footer/Footer';

import {translate , getLanguage} from 'react-switch-lang';

function App() {
    console.log(getLanguage());
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div className="App" dir={getLanguage()==='he' || getLanguage()==='ar'?'rtl':'ltr'}>
          <HeaderTop />
          <Header/>
          <React.StrictMode>
              {/* Links of pages */}
              <Switch>
                  <Route path="/contact">
                      <Contact />
                  </Route>
                  <Route path="/clients">
                      <Client />
                  </Route>
                  <Route path="/team">
                      <Team />
                  </Route>
                  <Route path="/strategy">
                      <Strategies />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/" exact>
                      <Home />
                  </Route>
              </Switch>
          </React.StrictMode>

          {/* Footer */}
          <Footer />
      </div>
  </Router>

  );
}

export default translate(App);
