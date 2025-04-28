// App.js (Main File)
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome to the Sample Page</h2>
        <p>This is a simple page built for the interview.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
