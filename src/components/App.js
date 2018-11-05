import React, { Component, Fragment } from 'react';
import './../App.css';
import Headers from './Header';
import Routers from './Routers'
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Headers/>
          <Routers/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
