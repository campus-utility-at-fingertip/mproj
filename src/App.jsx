import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Health from './components/Health';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './NavComponent/Navbar';
import Home from './NavComponent/Home';
import About from './NavComponent/About';
import Service from './NavComponent/Service';
import Contact from './NavComponent/Contact';
import Footer from './NavComponent/Footer';
import Transport from './components/Transport';
import BusRequest from './components/BusRequest';
import BicycleRequest from './components/BicycleRequest';
import Maintenance from './components/Maintenance';
import Login from './NavComponent/Login';


const App = () => {
  return (
    <> 
        <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/health"  exact component={Health} />
            <Route path="/transport" exact component={Transport} />
            <Route path="/maintenance" exact component={Maintenance} />
            <Route path="/transport" exact component={Transport} />
            <Route path="/transport/busrequest" exact component={BusRequest} />
            <Route path="/transport/bicyclerequest" exact component={BicycleRequest} />
          </Switch>
          <Footer/>
        </BrowserRouter>
         
    </>
  );
};

export default App;
