import React from 'react';

const TeamMember = ({ member, setCurrentId }) => {

    const memberId = member.id;
    const editMember = (e) => {
        setCurrentId(memberId);
    }

    return (
        <div className='team-member'>
            <h3>{member.name}</h3>
            <p>Role: {member.role}</p>
            <p>Email: {member.email}</p>
            <button onClick={editMember}>Edit</button>
        </div>
    )
}

export default TeamMember;