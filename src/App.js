import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage1 from './landing-page1'
import Ideapage from './ideapage'
import Header from './components/Header'


//import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <div>
         
          <Switch>
            <Route path="/ideapage">
              <Ideapage />
            </Route>
            <Route path="/">
              <LandingPage1 />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;

