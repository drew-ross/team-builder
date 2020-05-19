import React, { useState } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import TeamListForm from './components/TeamListForm';

function App() {
  return (
    <div className="App">
      <TeamListForm />
      <TeamList />
    </div>
  );
}

export default App;
