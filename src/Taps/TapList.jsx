import React from 'react';
import ReactDOM from 'react-dom';
import TapCard from './TapCard';
import taps from './taps';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class TapList extends React.Component {
  render() {
    const tapList = taps.map(tap => <TapCard key={tap.id} tap = {tap}/>);
    return (
      <div className='row'>
      <main className='tap-area'>
      <div className='tap-list'>
      {tapList}
      </div>
      </main>
      </div>
    );
  }
}
export default TapList;
