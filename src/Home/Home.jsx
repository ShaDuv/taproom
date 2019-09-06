import React from 'react';

function Home() {
  let img = {
    float: 'left',
    margin: '10px',
  };
  return (
    <div>
      <img style={img} src='http://lorempixel.com/400/300/food/'/>
      <h2>Welcome to our bar!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis quis sapien vitae ultricies. In imperdiet placerat ligula, vitae mattis tortor accumsan et. Aenean non lobortis lectus. Sed vel nisi turpis. Nulla eros urna, facilisis quis arcu in, pretium tempus dui. Vivamus nec lorem bibendum, sagittis ante sed, suscipit sem. Mauris tristique, massa a consequat elementum, eros orci elementum nibh, vitae suscipit enim mi at metus. Integer venenatis maximus ultrices.</p>

    </div>
  );
}
export default Home;
