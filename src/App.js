import React from 'react';
import './App.css';
import TapList from './Taps/TapList';
import Header from './Header/Header';
import AboutUs from './About/About';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component = {Header} />
        <Route path='/TapList' component = {TapList} />
        <Route path='/About' component ={ AboutUs} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
