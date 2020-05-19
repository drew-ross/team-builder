import React from 'react';

const TeamMember = ({ member }) => {

    return (
        <div className='team-member'>
            <h3>{member.name}</h3>
            <p>Role: {member.role}</p>
            <p>Email: {member.email}</p>
        </div>
    )
}

export default TeamMember;