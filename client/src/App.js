import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Horses from "./Pages/Horses";


const App = () => (
  <Router>
    <div>
      <Horses />
      {/* <Switch>
        <Route  path="/" component={Horses} />
        <Route  path="/horses" component={Horses} />
      </Switch> */}
    </div>
  </Router>
);



export default App;
