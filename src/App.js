import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
// import Index from './components/layout/Index';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component="Index" />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
