import '../../styles/LoginForm.css'
import React, { useState } from "react";
import Input from '../Input';
import Botao from '../Botao';
import imagem from '../../assets/images/bolaamarelaLogin.png'
import '../../styles/LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const handleChange = (event, setText) => {
        setText(event.target.value);
    };
    return(
        <div className='Form'>
            <form className = "Formulario">

                <h1 className='TituloInput'>Usuário</h1>

                <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder=""
                    onChange={(event) => handleChange(event, setUsername)}
                />

                <h1 className='TituloInput'>Senha</h1>

                <Input
                    type="text"
                    name="password"
                    id="password"
                    placeholder=""
                    onChange={(event) => handleChange(event, setUsername)}
                />

                <div className = "Butoes">
                    <Botao Text = "Login"/>
                    <Botao Text= "Cadastrar"/>  
                </div>
            </form>
        </div>
    )
 
}

export default LoginForm