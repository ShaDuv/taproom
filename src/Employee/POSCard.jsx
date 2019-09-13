import React from 'react';
import taps from '../Taps/taps';
import css from './POS.css';

function POSCard(props) {
  return (
    <div className='pos-card'>
      <div className='container'>
      <h3>{props.state.name}</h3>
      <h3>{props.state.pints}</h3>
      <button variant='light' className='btn' onClick={props.onSale}> Sell </button>
      </div>
    </div>
  );
};

export default POSCard;
