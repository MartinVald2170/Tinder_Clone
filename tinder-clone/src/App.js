import React from 'react';
import './App.css';
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons";




function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/chat">
            <Header backButton="/" />
              <h1>I am Chat Page</h1>
            </Route> 
            <Route path="/">
            <Header />
             
              <TinderCards />
              <SwipeButtons />
              </Route> 


          </Switch>

         
{/* Tinder Cards */}
    {/* Buttons Below tinder cards*/ }
    {/* Chats Screen */}
    {/* Individual chat screen */}
   
   
   
   
    </Router>



    

    </div>
  );
}

export default App;
