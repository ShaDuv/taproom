import React from 'react';
import './App.css';
import TapList from './Taps/TapList';
import Header from './Header/Header';
import AboutUs from './About/About';
import Home from './Home/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PosList from './Employee/POSList';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route path='/TapList' component = {TapList} />
        <Route path='/AboutUs' component ={AboutUs} />
        <Route path='/Employee' component ={PosList} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
