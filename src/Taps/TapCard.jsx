import React from 'react';
import taps from './taps';

function TapCard(props) {
  return (
    <div className='tap-card'>
      <h3>{props.tap.name}</h3>
      <p>{props.tap.description}</p>
      <p>{props.tap.brewery}</p>
      <p>{props.tap.style}</p>
      <p>{props.tap.abv}</p>
      <p>{props.tap.price}</p>
    </div>
  );
};

export default TapCard;
