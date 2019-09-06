import React from 'react';
import './App.css';
import TapList from './Taps/TapList';
import Banner from './Header/Banner';
import Navbar from './Header/NavBar';
function App() {
  return (
    <div className='App'>
      <Banner/>
      <Navbar/>
      <TapList/>
    </div>
  );
}

export default App;
