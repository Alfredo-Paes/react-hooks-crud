import React, { useState } from 'react';

import UserTable from './components/table/UserTable';
import AddUserForm from './components/form/AddUserForm';
import EditUserForm from './components/form/EditUserForm';
import './Style/UIStyle.css';

const usersData = [
  {id: 1, name: 'João', email: 'joao@email.com.br'},
  {id: 2, name: 'Megui', email: 'megui@email.com.br'},
  {id: 3, name: 'Pedro', email: 'pedro@email.com.br'},
  {id: 4, name: 'Laura', email: 'laura@email.com'},
];

const initialFormState = {
  id: null, 
  name: '', 
  email: ''
};

const App = () => {

  const [ users, setUsers ] = useState(usersData);
  const [ editing, setEditing ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState(initialFormState);

  /**
   * Como não estamos usando uma API e um banco de dados reais, 
   * que provavelmente teriam um ID de incremento automático, 
   * incrementarei o ID do novo usuário manualmente. 
   * Esta função pegará um userobjeto como parâmetro e o adicionará ao usersarray de objetos. 
   * O ...users código garante que todos os usuários anteriores permaneçam na matriz.
  */
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  };

  /**
   * Ao criar "deleteUser", o ID do usuário será filtrado para fora da matriz usuário 
   */
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ 
      id: user.id, 
      name: user.name, 
      email: user.email 
    });
  };
  /**
   *Usaremos uma operação ternária para verificar se o editingestado é verdadeiro ou não. 
   *Se verdadeiro, mostra o formulário de edição. Se for falso, mostra o formulário de adição.
   */
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>Formulário: React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          { editing ? (
            <div>
              <h2>Editar Usuário: </h2>
              <EditUserForm 
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Adicionar Usuário: </h2>
              <AddUserForm addUser={addUser}/>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Usuários Cadastrados</h2>
          <UserTable 
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
