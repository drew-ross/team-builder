import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    max-width: 50%;
    min-width: 500px;
    padding: 1rem;
    margin: 1rem auto;

    outline: ${props => props.isNotFilled ? '2px solid red;' : null};

    input, .button {
        margin: .5rem;
    }

    input, select{
        width: 30%;
    }
`;

const TeamListForm = ({ formValues, onInputChange, onSubmit, isNotFilled }) => {

    return (
        <StyledForm isNotFilled={isNotFilled} onSubmit={onSubmit} className='card'>
            <label>Name:&nbsp;
                <input
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
            <button className='button'>Submit</button>
            {isNotFilled && <p style={{color: 'red'}}>All fields must be filled</p>}
        </StyledForm>
    )
}

export default TeamListForm;