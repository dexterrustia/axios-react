import React from 'react';
import ReactDOM from 'react-dom'; 
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
 
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';  
import './styles/default.scss'

import Home from './views/Home' 
import IndexPage from './views/index'

//Test indexs
import TestApp from './TEST ENVIRONMENT/Context/testApp'
import TestIndex from './TEST ENVIRONMENT/TestIndex';

const hist = createBrowserHistory();

ReactDOM.render( 
 <Router history={hist}>
   <Switch>
     <Route path="/" exact component={IndexPage} />
     <Route path="/home"  component={Home} />
   </Switch>
 </Router>
  
  //TestIndex
  ,document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
