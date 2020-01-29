import React, { useState } from 'react';
import TeamList from './components/TeamList';
import Form from './components/Form';
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Alex Miller',
      email: 'alexmiller@lambda.com',
      role: 'React Developer'
    }
  ]);

  return (
    <div className="App">
      <Form/>
      <h1>Our Team</h1>
      <TeamList team={team}/>
    </div>
  );
}

export default App;
