import React from 'react';
import TeamMember from './TeamMember';
const TeamList = ({ teamList }) => {

    return (
        <div className='team-list'>
            {teamList.map(member => {
               return <TeamMember member={member} />
            })}
        </div>
    )
}

export default TeamList;