import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Game, Header, Sidebar, Footer } from './containers';

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
};

function App() {
  return (
    <div className="App">
      <Header />
      <div style={contentStyle}>
        <Sidebar />
        <Game />
      </div>
      <Footer />
    </div>
  );
}

export default App;
