import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import ItemList from './ItemList';
import ItemList2 from './ItemList2';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className = "app">
        <Switch>
          <Route path = "/">
            <Header />
            <Jumbotron />
            <ItemList />
            <ItemList2 />
            <ItemList2 />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
