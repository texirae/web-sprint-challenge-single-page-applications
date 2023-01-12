import React, { useState, useEffect } from "react";

import { Route, Link } from "react-router-dom";

import Home from './Components/Home'
import OrderForm from './Components/Order_Form'
import OrderConfirmation from './Components/Order_confirmation'
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
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
};
export default App;
