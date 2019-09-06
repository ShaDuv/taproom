import React from 'react';
import taps from './taps';

function TapCard(props) {
  return (
    <div className='tap-card'>
      <h3>{props.taps.description}</h3>
      <p>{props.taps.brewery}</p>
      <p>{props.taps.style}</p>
      <p>{props.taps.abv}</p>
      <p>{props.taps.price}</p>
    </div>
  );
};

export default TapCard;
