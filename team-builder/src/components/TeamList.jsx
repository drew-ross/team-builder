import React from 'react';
import TeamMember from './TeamMember';
const TeamList = ({ teamList, setCurrentId }) => {

    return (
        <div className='team-list'>
            {teamList.map(member => {
               return <TeamMember member={member} setCurrentId={setCurrentId}/>
            })}
        </div>
    )
}

export default TeamList;