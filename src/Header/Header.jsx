import React from 'react';
import css from './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <div className='banner'>
      <h1>Tapped Out</h1>
      </div>
      <div className='navbar'>
        <Link to="/">Home</Link> | <Link to="/TapList">What's On Tap</Link> | <Link to="/AboutUs">About Us</Link> | <Link to="/Employee">Employees Only</Link>
      </div>
    </div>
  );
}
export default Header;
