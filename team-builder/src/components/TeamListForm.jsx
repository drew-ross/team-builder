import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const StyledForm = styled.form`
    max-width: 50%;
    min-width: 500px;
    padding: 1rem;
    margin: 1rem auto;
    background: white;
    box-shadow: ${props => props.isNotFilled ? '0 0 10px red' : null};

    input:focus, select:focus {
        box-shadow: 0 0 5px blue;
    }

    input, .button {
        margin: .5rem;
    }

    input, select{
        width: 30%;
        padding: .5rem;
        border-radius: 4px;
        border: 1px solid gray;
        box-shadow: 0 0 2px;
    }
`;

const TeamListForm = ({ formValues, onInputChange, onSubmit, isNotFilled }) => {

    return (
        <StyledForm isNotFilled={isNotFilled} onSubmit={onSubmit} className='card'>
            <label>Name:&nbsp;
                <input
                    required
                    name='name'
                    type='text'
                    placeholder='Full Name'
                    maxLength='50'
                    value={formValues.name}
                    onChange={onInputChange}
                />
            </label><br />
            <label>Email:&nbsp;
                <input
                    required
                    name='email'
                    type='email'
                    placeholder='user@email.com'
                    maxLength='50'
                    value={formValues.email}
                    onChange={onInputChange}
                />
            </label><br />
            <label>Role:&nbsp;
                <select
                    required
                    name='role'
                    value={formValues.role}
                    onChange={onInputChange}
                >
                    <option value=''>Select Role</option>
                    <option>Frontend Engineer</option>
                    <option>Backend Engineer</option>
                    <option>Designer</option>
                    <option>UX</option>
                </select>
            </label><br />
            <StyledButton className='button'>Submit</StyledButton>
            {isNotFilled && <p style={{ color: 'red' }}>All fields must be filled</p>}
        </StyledForm>
    )
}

export default TeamListForm;