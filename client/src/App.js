import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Horses from "./Pages/Horses";
import Yearlings from './Pages/Yearlings'
import Navbar from './components/Nav/Nav';


const App = () => (
  <Router>
    <div>
      <Navbar />

        {/* <Route  path="/" component={Home} />
        <Route  path="/SearchHorses" component={SearchHorses} />
        <Route  path="/AddHorse" component={AddHorse} />
        <Route  path="/AllHorses" component={AllHorses} />
        <Route  path="/Weanlings" component={Weanlings} />
        <Route  path="/About" component={About} /> */}

        <Route  path="/Yearlings" component={Yearlings} />
        <Route path='/AddHorse' component={Horses} />
    </div>     
  </Router>
);


export default App