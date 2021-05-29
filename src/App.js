import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChatHeader from './ChatHeader';

function App() {
  return (
    <div className="app">

      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <ChatHeader />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
