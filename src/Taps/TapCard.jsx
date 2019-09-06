import React from 'react';
import taps from './taps';
import css from './taps.css';

function TapCard(props) {
  return (
    <div className='tap-card'>
      <div className='container'>
      <h3>{props.tap.name}</h3>
      <p>{props.tap.description}</p>
      <p>Brewery: {props.tap.brewery}</p>
      <p>Style: {props.tap.style}</p>
      <p>ABV: {props.tap.abv}</p>
      <p>Price: {props.tap.price}</p>
      </div>
    </div>
  );
};

export default TapCard;
