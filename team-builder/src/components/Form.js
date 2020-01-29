import React, { useState } from "react";

const Form = props => {

    const [newMem, setNewMem] = useState({
        name: '',
        role: '',
        email: ''
    })

    const handleChanges = e => {
        setNewMem({ ...newMem, [e.target.name]: e.target.value })
        console.log(newMem)
    }
    
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(newMem);
        setNewMem({ name: '', role:'', email: '' })
    }

    return (
        <div>Add a new team member:
            <form onSubmit={submitForm}>
                <label>Name: </label>
                <input id='name'
                placeholder='Name'
                type='text'
                name='name'
                value = {newMem.name}
                onChange={handleChanges}/>
                <br/>
                <label>Role: </label>
                <input id='role'
                placeholder='Role'
                type='text'
                name='role'
                value = {newMem.role}
                onChange={handleChanges}/>
                <br/>
                <label>Email: </label>
                <input id='email'
                placeholder='Role'
                type='email'
                name='email'
                value = {newMem.email}
                onChange={handleChanges}/>
                <br/>
                <button>Add New Member</button>

            </form>
        </div>
    )
};

export default Form;