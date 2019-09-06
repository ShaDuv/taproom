import React from 'react';
import ReactDOM from 'react-dom';
import TapCard from './TapCard';
import taps from './taps';

class TapList extends React.Component {
  render() {
    const tapList = taps.map(tap => <TapCard key={tap.id} tap = {tap}/>);
    return (
      <main className='tap-area'>
      <div className='tap-list'>
      {tapList}
      </div>
      </main>
    );
  }
}
export default TapList;
