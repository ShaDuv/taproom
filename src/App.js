import React from 'react';
import './App.css';
import TapList from './Taps/TapList';
import Header from './Header/Header';
import AboutUs from './About/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component = {Header} />
        <Route path='/TapList' component = {TapList} />
        <Route path='/About' component ={ AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
