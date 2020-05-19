import React, { useState, useEffect } from 'react';
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
  const [teamList, setTeamList] = useState([{ name: 'Drew', email: 'email@email.com', role: 'Frontend Engineer', id: uuid() }]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [currentId, setCurrentId] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.role.trim()) {
      return
    }
    if (!currentId) {
      const teamMember = { ...formValues, id: uuid() }
      setTeamList([...teamList, teamMember]);
      console.log('NEW ID');
    } else {
      const newTeamList = teamList.map(member => {
        if (member.id === currentId) {
          return member = { ...formValues };
        } else {
          return member;
        }
      });
      setTeamList([...newTeamList]);
      console.log('teamList', teamList);
      console.log('newTeamList', newTeamList);
      console.log('OLD ID');
      setCurrentId(null);
    }
    setFormValues(initialFormValues);
  }

  const onInputChange = e => {
    const { name } = e.target;
    const { value } = e.target;
    const newFormValues = { ...formValues, [name]: value }
    setFormValues(newFormValues);
  }

  const getMemberByCurrentId = () => teamList.filter(member => member.id === currentId);

  useEffect(() => {
    if (currentId) {
      const teamMember = getMemberByCurrentId();
      setFormValues(...teamMember);
    }
  }, [currentId])

  return (
    <div className="App">
      <TeamListForm formValues={formValues} onInputChange={onInputChange} onSubmit={onSubmit} />
      <TeamList teamList={teamList} setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
