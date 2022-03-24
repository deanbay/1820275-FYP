import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {initializeApp} from 'firebase/app'
import { getAuth, onAuthStateChanged} from 'firebase/auth' ;
import { getDocs, collection, getFirestore} from 'firebase/firestore' ;

// import { BrowserRouter } from "react-router-dom";


// import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
// import styles from './ideapage.module.css';


//const firebaseConfig = 
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAA9xr8geeF9PVznNk-9CoVWO21p78gYyw",
  authDomain: "fyp1-78231.firebaseapp.com",
  projectId: "fyp1-78231",
  storageBucket: "fyp1-78231.appspot.com",
  messagingSenderId: "162728047362",
  appId: "1:162728047362:web:f9f6a8e19c2e7fd643481b",
  measurementId: "G-9RDDFMN57Q"
});



const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

async function getCities(db) {
  const citiesCol = collection(db, 'todos');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log({cityList})
  return cityList;
}

console.log(getCities(db))

//detect auth state
auth.onAuthStateChanged(user => {

});
onAuthStateChanged(auth, user => {
  if (user != null){
    console.log('Logged In!');
  } else{
    console.log('No user');
  }
});


// db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos'); 
// const snapshot = getDocs(todosCol);

// //detect auth state
// auth.onAuthStateChanged(user => {

// });
// onAuthStateChanged(auth, user => {
//   if (user != null){
//     console.log('Logged In!');
//   } else{
//     console.log('No user');
//   }
// });


ReactDOM.render(
    <App />,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()