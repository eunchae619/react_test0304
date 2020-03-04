import React from 'react';
import Home from './Home.js';
import Bong from './Bong.js';
import { HashRouter, Route } from "react-router-dom";

function App() {
  return(
    <HashRouter>
      <Route path="/" component={Home} exact={true} />
      <Route path="/Bong" component={Bong} exact={true} />
    </HashRouter>
    
  );
}

export default App;
