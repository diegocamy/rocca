import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Index} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
