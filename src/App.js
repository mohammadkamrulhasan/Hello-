import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div>
      <Navbar />
       <Switch>
         <Route path="/about" exact>
                <About />
         </Route>
       </Switch>
    
    </div>
  );
}

export default App;
