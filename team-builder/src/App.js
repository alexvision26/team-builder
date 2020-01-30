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
      name: 'Joe',
      email: 'joe@lambda.com',
      role: 'Front End Developer'
    },
    {
      id: 3,
      name: 'Brandon',
      email: 'brandon@lambda.com',
      role: 'Back End Developer'
    },
    {
      id: 4,
      name: 'Jessica',
      email: 'jessica@lambda.com',
      role: 'Front End Developer'
    },
    {
      id: 5,
      name: 'Terry',
      email: 'terry@lambda.com',
      role: 'Web UI Developer'
    },
    {
      id: 6,
      name: 'Bill',
      email: 'Bill@lambda.com',
      role: 'Web UI Developer'
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
