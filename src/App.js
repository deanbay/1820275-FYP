import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage1 from './landing-page1'
import Ideapage from './ideapage'
import Header from './components/Header'
import { initializeApp, getApp } from 'firebase/app'
import { getFirestore,collection,getDocs } from 'firebase/firestore'
import Loginsignup from './loginsignup';
import Footer from './components/Footer';

const otherAppConfig = {
  databaseURL: "fyp1-78231 europe-west6.firebasedatabase.app", 
  apiKey: "AIzaSyAA9xr8geeF9PVznNk-9CoVWO21p78gYyw",
  authDomain: "fyp1-78231.firebaseapp.com",
  projectId: "fyp1-78231",
  storageBucket: "fyp1-78231.appspot.com",
  messagingSenderId: "162728047362",
  appId: "1:162728047362:web:f9f6a8e19c2e7fd643481b",
  measurementId: "G-9RDDFMN57Q"
}

  const otherApp = initializeApp(otherAppConfig, "FYP1");console.log(otherApp.name); 
  export const db = getFirestore(otherApp);
  
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
            <Route path="/loginsignup">
              <Loginsignup />
            </Route>
            <Route path="/">
              <LandingPage1 />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </>
  );

  //const auth =firebase.auth();
}
export default App;

