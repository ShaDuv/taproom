import React from 'react';
import ReactDOM from 'react-dom';
import POSCard from './POSCard';
import taps from '../Taps/taps';

function PosList(props) {
  const posList = taps.map(tap => <POSCard key={tap.id} tap = {tap}/>);
  return (
    <div className='row'>
      <main className='pos-area'>
        <div className='pos-list'>
          {posList}
        </div>
      </main>
    </div>
  );
}
export default PosList;
