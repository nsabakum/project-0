import React from 'react';
import './App.scss';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
