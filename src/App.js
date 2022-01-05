import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import NavBar from "./NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/About" exact component={About}/>
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/Services" exact component={Services}/>
            <Redirect to="/"/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
