import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Horses from "./Pages/Horses";
import Home from "../src/Pages/Home"
import SearchHorses from "./Pages/SearchHorses";
import AddHorse from "./Pages/AddHorse";
import AllHorses from "./Pages/AllHorses";

import Navbar from "./components/Nav/Nav"
import Weanlings from "./Pages/Weanlings/Weanlings";
import Yearlings from "./Pages/Yearlings/Yearlings";


const App = () => (
  <Router>
    <div>
      <Navbar />

        {/*/<Horses /> */}
        <Route  exact path="/" component={Home} />
         
        <Route exact path="/SearchHorses" component={SearchHorses} />
        <Route exact path="/AddHorse" component={AddHorse} />
        <Route exact path="/AllHorses" component={AllHorses} /> 
        <Route exact path="/Weanlings" component={Weanlings} /> 
        <Route exact path="/Yearlings" component={Yearlings} />
        {/* <Route  path="/About" component={About} />  */}

    </div>
  </Router>
);


export default App;

// This code is what we're going to use when we have the pages and components made later on
// Not necessarily the components that will house what we want but thats there for now so we know what
// is going where 

