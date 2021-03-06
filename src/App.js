import React from 'react';
import './App.css';
import TapList from './Taps/TapList';
import Header from './Header/Header';
import AboutUs from './About/About';
import Home from './Home/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PosList from './Employee/POSList';
import defaultTaps from './Taps/taps';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taps: defaultTaps,
    };
    this.handleSell = this.handleSell.bind(this);
  };
  handleSell = i => {
    this.setState(state => {
      const list = state.taps.map((tap, j) => {
        if (j === i) {
          tap.pints = tap.pints - 1;
          return tap;
        } else {
          return tap;
        }
      });
      console.log(list);
      return {
        taps: list,
      };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component = {Home} />
            <Route path='/TapList' component = {TapList} />
            <Route path='/AboutUs' component ={AboutUs} />
            <Route path='/Employee' render={(props) => <PosList {...props} onSale={this.handleSell} data={this.state.taps} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
