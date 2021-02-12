import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser);

    const handleInputChance = (event) => {
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

  return (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            props.updateUser(user.id, user);
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
        <button>Editar Usuário</button>
        <button
            onClick={() =>props.setEditing(false)}
            className="button muted-button"
        >
            Cancelar
        </button>
    </form>
  );
};

export default EditUserForm;