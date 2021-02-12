import React, { useState } from 'react';


const initialFormState = {
    id: null, 
    name: '', 
    email: ''
};

const AddUserForm = (props) => {
    
    const [user, setUser] = useState(initialFormState);

    const handleInputChance = (event) => {
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    };

    return(

        <form
            onSubmit={event => {
                event.preventDefault();
                if(!user.name || !user.email) return;
                props.addUser(user);
                setUser(initialFormState);
            }}
        >
            <label>Nome</label>
            <input 
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChance}
            />
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChance}
            />
            <button>Adicionar Usuário</button>
        </form>
    );
};

export default AddUserForm;