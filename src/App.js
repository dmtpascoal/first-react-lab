import './App.css';
import React from 'react';
import SayHello from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <SayHello/>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
