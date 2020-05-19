import React, { useState } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import TeamListForm from './components/TeamListForm';
import { v4 as uuid } from 'uuid';

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }
  const [teamList, setTeamList] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onSubmit = e => {
    e.preventDefault();
    //guard against empty submissions
    const teamMember = { ...formValues, id: uuid() }
    setTeamList([...teamList, teamMember]);
    setFormValues(initialFormValues);
  }

  const onInputChange = e => {
    const { name } = e.target;
    const { value } = e.target;
    const newFormValues = { ...formValues, [name]: value }
    setFormValues(newFormValues);
  }

  return (
    <div className="App">
      <TeamListForm formValues={formValues} onInputChange={onInputChange} onSubmit={onSubmit} />
      <TeamList teamList={teamList} />
    </div>
  );
}

export default App;
