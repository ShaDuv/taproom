import React from 'react';
import css from './POS.css';

function POSCard(props) {
  return (
    <div className='pos-card'>
      <div className='container'>
      <h3>{props.tap.name}</h3>
      <h3>{props.tap.pints}</h3>
      <button type="button" variant='light' className='btn' onClick={() => props.onSale(props.index)}> Sell </button>
      </div>
    </div>
  );
};

export default POSCard;
