import React from 'react';
import ReactDOM from 'react-dom';
import POSCard from './POSCard';

function PosList(props) {
  const posList = props.data.map((tap, i) => <POSCard onSale={props.onSale} key={i} index={i} tap = {tap}/>);
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
