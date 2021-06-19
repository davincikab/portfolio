import React from 'react';
import './App.css';


import NavigationBar from './components/Navigation';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

// Navigation bar
// Introduction
// Projects
// Contacts
// Footer