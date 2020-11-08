import React, { useEffect } from 'react';
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
import AboutAmkan from './Pages/AboutAmkan';
import ChairmanMessage from './Pages/ChairmanMessage';
import Strategies from './Pages/Strategies';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Client from './Pages/Client';
import Error from './Pages/Erroe404';


// Footer
import Footer from './Components/Home/Footer/Footer';

import {translate , getLanguage} from 'react-switch-lang';
import Error404 from './Pages/Erroe404';

// loading
const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");

function App() {
  const direction = ['he','ar'].includes(getLanguage()) ? 'rtl' : 'ltr';
  useEffect(() => {
    showLoader();
    addClass();
  }, []);
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div className="App" dir={direction} >
          <HeaderTop />
          <Header/>
          <React.StrictMode>
              {/* Links of pages */}
              <Switch>
                  <Route path="/contact">
                      <Contact />
                  </Route>
                  <Route path="/clientsPartners">
                      <Client />
                  </Route>
                  <Route path="/team">
                      <Team />
                  </Route>
                  <Route path="/strategy">
                      <Strategies />
                  </Route>
                  <Route path="/chairmanMessage">
                      <ChairmanMessage />
                  </Route>
                  <Route path="/aboutAmkan">
                      <AboutAmkan />
                  </Route>
                  <Route path="/" exact>
                      <Home />
                  </Route>
                  <Route path="/">
                      <Error404 />
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
