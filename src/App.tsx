import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotFound from './workshop/components/NotFound';
import HeroList from './workshop/components/HeroList';
import VillainList from './workshop/components/VillainList';

function App() {
  return (
    <div className="App">
      <HeroList />
      <VillainList />
    </div>
  );
}

export default App;
