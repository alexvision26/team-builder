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
    },
    {
      id: 2,
      name: 'Jashele',
      email: 'jashele@lambda.com',
      role: 'Team Leader'
    },
    {
      id: 3,
      name: 'Keyeric',
      email: 'key@lambda.com',
      role: 'React Developer'
    },
    {
      id: 4,
      name: 'Minakshi',
      email: 'minaksho@lambda.com',
      role: 'React Developer'
    }

  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    };
    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <div className='container'>
      <Form addNewMember={addNewMember}/>
      <TeamList team={team}/>
      </div>
    </div>
  );
}

export default App;
