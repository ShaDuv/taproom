import React from 'react';
import taps from '../Taps/taps';
import css from './POS.css';

function POSCard(props) {
  return (
    <div className='pos-card'>
      <div className='container'>
      <h3>{props.tap.name}</h3>
      <h3>{props.tap.pints}</h3>
      </div>
    </div>
  );
};

export default POSCard;
