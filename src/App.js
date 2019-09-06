import React from 'react';
import './App.css';
import TapList from './Taps/TapList';
import Banner from './Header/Banner';
import Navbar from './Header/NavBar';
import AboutUs from './About/About';
function App() {
  return (
    <div className='App'>
      <Banner/>
      <Navbar/>
      <TapList/>
      <AboutUs/>
    </div>
  );
}

export default App;
