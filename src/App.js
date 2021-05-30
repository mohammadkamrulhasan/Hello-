import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChatHeader from './components/ChatHeader';
import styled from 'styled-components';
import ChatSideBar from './components/ChatSideBar';

function App() {
  return (
    <div className="app">

      <Router>
        <>
          <ChatHeader />
          <AppBody>
            <ChatSideBar />
            <Switch>
              <Route path="/" exact>
                {/* chat */}
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;