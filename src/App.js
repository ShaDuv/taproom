import React from 'react';
import logo from './logo.svg';
import './App.css';
import TapList from './Taps/TapList';
import Banner from "./Header/Banner"
function App() {
  return (
    <div className='App'>
      <Banner/>
      <TapList/>
    </div>
  );
}

export default App;
