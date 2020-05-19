import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const StyledMember = styled.div`
    max-width: 50%;
    min-width: 500px;
    padding: 1rem;
    margin: 1rem auto;

    h2 {
        font-size: 1.6rem;
    }

    p {
        font-size: 1.2rem;
        
        span {
            color: gray;
        }
    }

    ${props => (props.currentId === props.id) ? `background: #deeaff; box-shadow: 0 0 5px blue;` : `background: white; box-shadow: 0 0 5px;`}
`;


const TeamMember = ({ member, setCurrentId, currentId }) => {

    const editMember = () => {
        setCurrentId(member.id);
    }

    return (
        <StyledMember currentId={currentId} id={member.id} className='team-member card'>
            <h2>{member.name}</h2>
            <p><span>Role:</span> {member.role}</p>
            <p><span>Email:</span> {member.email}</p>
            <StyledButton isEditing={(currentId === member.id)} onClick={editMember}>{currentId === member.id ? 'Editing' : 'Edit'}</StyledButton>
        </StyledMember>
    )
}

export default TeamMember;