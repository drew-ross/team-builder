import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1rem;
    padding: .5rem 1rem;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 5px;
    outline: none;

    &:hover {
        cursor: ${props => props.isEditing ? 'not-allowed' : 'pointer'};
    }

    &:active {
        box-shadow: ${props => props.isEditing ? null : '0 0 5px gray'};
        color: ${props => props.isEditing ? null : 'gray'};
    }

    background: ${props => props.isEditing ? '#4287f5' : 'white'};
    color: ${props => props.isEditing ? 'white' : 'black'};
`;

export default StyledButton;