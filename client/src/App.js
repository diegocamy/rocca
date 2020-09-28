import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Index from "./pages/Index";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
