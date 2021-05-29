import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
    <Home></Home>
    <div>
      <Switch>
        <Route path="/">
         
        </Route>
        <Route path="/">
        
        </Route>
        <Route path="/">
         
        </Route>
        <Route path="/">
        
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
