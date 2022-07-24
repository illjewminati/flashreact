import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';

import Header from './components/Header';
import Foooter from './components/Footer';
import Home from './components/Home';


function App() {
  return ( 
    <div id="App">
      <Header/>
      <Home/>
      <Foooter/>
    </div>
   );
}

export default App;