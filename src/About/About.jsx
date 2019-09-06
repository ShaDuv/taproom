import React from 'react';

function AboutUs(props) {
  let aboutStyles = {
    backgroundColor: '#343049',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    color: 'white',
  };

  let img = {
    float: 'left',
    margin: '10px',
  };

  return (
    <div style={aboutStyles}>
      <h1>About Us</h1>
      <img style={img} src='http://lorempixel.com/400/300/people/'/>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis quis sapien vitae ultricies. In imperdiet placerat ligula, vitae mattis tortor accumsan et. Aenean non lobortis lectus. Sed vel nisi turpis. Nulla eros urna, facilisis quis arcu in, pretium tempus dui. Vivamus nec lorem bibendum, sagittis ante sed, suscipit sem. Mauris tristique, massa a consequat elementum, eros orci elementum nibh, vitae suscipit enim mi at metus. Integer venenatis maximus ultrices. Donec id felis fermentum, faucibus eros a, ultricies enim. Maecenas sit amet urna et purus varius auctor. Ut tristique enim ac odio varius, id facilisis nisi porttitor. Donec ut semper dolor. Cras ac libero at turpis fermentum sodales. Maecenas suscipit neque velit, id cursus felis porta mattis. Nam quam diam, porttitor non urna non, luctus molestie risus.</p>

      <p>Nam eget posuere risus. Maecenas gravida mi libero, et luctus mauris elementum a. Fusce pulvinar ultrices dui at aliquam. Morbi eget suscipit nunc. Sed lobortis diam eu ante fermentum vestibulum. Etiam pretium fermentum dignissim. Aliquam quis risus ante. In nec tristique dui. Praesent commodo tellus non sapien tincidunt, eget pharetra sem rhoncus. Proin massa diam, ornare eget interdum non, lobortis eget justo. Phasellus mattis massa sed convallis dictum. Vestibulum dictum lectus id porttitor aliquam.</p>

      <p>Integer sed ante dolor. Ut eu quam at velit pellentesque convallis sit amet vel erat. Praesent non eros metus. Integer scelerisque tortor vitae tristique placerat. Donec sagittis sem odio, quis blandit est ullamcorper vel. Quisque enim mi, malesuada placerat tempor in, posuere vitae magna. Nunc vitae aliquet erat, in pharetra libero. Vivamus auctor purus eu nibh blandit porta. Curabitur erat lectus, vulputate a elit vitae, sollicitudin finibus leo.</p>

      <p>Maecenas laoreet convallis metus vitae euismod. Sed eu diam eu mi imperdiet ultricies vel a risus. In id nulla viverra purus fringilla finibus et dignissim est. Aenean non sem nec elit porttitor faucibus. Phasellus convallis dictum neque, eget scelerisque magna commodo in. Quisque sed mattis libero. Phasellus eros leo, vulputate cursus elit ut, venenatis fermentum eros.</p>
    </div>
  );
}

export default AboutUs;
