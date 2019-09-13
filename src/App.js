import React from 'react';
import './App.css';
import TapList from './Taps/TapList';
import Header from './Header/Header';
import AboutUs from './About/About';
import Home from './Home/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PosList from './Employee/POSList';
import taps from './Taps/taps';

class App extends React.Component {
  constructor() {
    super()
    this.state = (
      taps
    );
  }
  handleSell = () => {
    const updatePints = this.state.taps.pints -1;
    this.setState(
      {
        pints: updatePints,
      }
    );
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component = {Home} />
            <Route path='/TapList' component = {TapList} />
            <Route path='/AboutUs' component ={AboutUs} />
            <Route path='/Employee' onSleep={this.handleSale} component ={PosList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
