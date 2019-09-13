import React from 'react';
import ReactDOM from 'react-dom';
import POSCard from './POSCard';

function PosList(props) {
  const posList = props.data.map(tap => <POSCard onSale={props.onSale} key={tap.id} tap = {tap}/>);
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
