import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/Footer';
export default class App extends Component {

  render() {
    return (
      <div id='app'>
        <Routes >
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    )
  }

}
