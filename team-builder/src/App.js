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
  const [isNotFilled, setIsNotFilled] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.role.trim()) {
      setIsNotFilled(true);
      return
    }
    if (!currentId) {
      const teamMember = { ...formValues, id: uuid() }
      setTeamList([...teamList, teamMember]);
      setIsNotFilled(false);
    } else {
      const newTeamList = teamList.map(member => {
        if (member.id === currentId) {
          return member = { ...formValues };
        } else {
          return member;
        }
      });
      setTeamList([...newTeamList]);
      setCurrentId(null);
      setIsNotFilled(false);
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
      setIsNotFilled(false);
    }
  }, [currentId])

  return (
    <div className='App'>
      <header>
        <h1>Developer Team</h1>
      </header>
      <TeamListForm formValues={formValues} onInputChange={onInputChange} onSubmit={onSubmit} isNotFilled={isNotFilled} />
      <TeamList teamList={teamList} setCurrentId={setCurrentId} currentId={currentId} />
    </div>
  );
}

export default App;
