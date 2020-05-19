import React from 'react';
import TeamMember from './TeamMember';
const TeamList = ({ teamList, setCurrentId, currentId }) => {

    return (
        <div className='team-list'>
            {teamList.map(member => {
               return <TeamMember member={member} setCurrentId={setCurrentId} currentId={currentId}/>
            })}
        </div>
    )
}

export default TeamList;