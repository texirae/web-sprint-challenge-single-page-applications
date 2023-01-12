import React from "react";

import { Route, Link } from "react-router-dom";

import Home from './Components/Home'
import OrderForm from './Components/Form'
import OrderConfirmation from './Components/Confirmation'
import Help from './Components/Help'


const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="site-header">Bloomtech Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/pizza">
        <OrderForm />
      </Route>

      <Route exact path="/confirmation">
        <OrderConfirmation />
      </Route>

      <Route exact path="/help">
        <Help />
      </Route>
    </div>
  );
};
export default App;
