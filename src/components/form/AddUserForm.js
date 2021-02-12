import React, { useState } from 'react';


const initialFormState = {
    id: null, 
    name: '', 
    email: ''
};

const AddUserForm = (props) => {
    
    const [user, setUser] = useState(initialFormState);

    /**
     * Agora vamos criar uma função para atualizar o estado dentro do formulário.
     * "event" sempre é passado para qualquer onevento no DOM, então você verá isso como o parâmetro da função.
     * A desestruturação do objeto nos permitirá obter facilmente a name(chave) e  o "value" do formulário.
     * Por fim, definiremos o usuário da mesma forma que fizemos no componente App, exceto que, desta vez, 
     * estamos usando nomes de propriedades computadas para definir dinamicamente o nome (usando [name]) e o valor.
     */
    const handleInputChance = (event) => {
        //console.log('event passou aqui primeiro', event);
        const { name, value } = event.target;
        //console.log('event também passou por aqui', event);
        setUser({...user, [name]: value});
        //console.log('event chegou até aqui', event);
    };

    return(
        /**
         * A última coisa a fazer é enviar o formulário de volta para o componente App.
         * Conforme passamos a função com props, vamos usar adereços para acessar a função.
         * Vou escrever uma função onSubmit e evitar que o envio do formulário padrão seja disparado.
         * Também foi adicionado uma validação para garantir que valores vazios não possam ser enviados e 
         * enviei o "user" para a função "addUser".
         * Finalmente, estou usando o setter para redefinir o formulário para seu valor inicial após o envio 
         * bem-sucedido.
         */
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