import React from 'react';
import './../../Style/UIStyle.css';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    onClick={() => props.editRow(user)} 
                                    className="button muted-button"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => props.deleteUser(user.id)} 
                                    className="button muted-button"
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Sem Registros!</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserTable;