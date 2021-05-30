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
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from "react-spinkit";
import Home from './components/Home/Home';

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading) {
    return (
      <Loading>
        <Content>
          <img src="https://i.ibb.co/xYJZQTt/hello.png" alt="" />

          <Spinner 
            name="ball-spin-fade-loader"
            color="#6EC5E9"
            fadeIn="none"
          />
        </Content>
      </Loading>
    )
  }

  return (
    <div className="app">
      <Router>
      {!user ? (
        <Login />
      ) : (
        <>
          <ChatHeader />
          <AppBody>
            <ChatSideBar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      )}
      </Router>
    </div>
  );
}

export default App;

const Loading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

>img {
  height: 100pcx;
  padding: 20px;
  margin-bottom: 40px;
}
`;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;