import React from 'react';

const TeamListForm = ({ formValues, onInputChange, onSubmit }) => {

    return (
        <form onSubmit={onSubmit} className='card'>
            <label>Name:
                <input
                    name='name'
                    type='text'
                    placeholder='Full Name'
                    maxLength='50'
                    value={formValues.name}
                    onChange={onInputChange}
                />
            </label><br />
            <label>Email:
                <input
                    name='email'
                    type='email'
                    placeholder='user@email.com'
                    maxLength='50'
                    value={formValues.email}
                    onChange={onInputChange}
                />
            </label><br />
            <label>Role:
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
            <button>Submit</button>
        </form>
    )
}

export default TeamListForm;