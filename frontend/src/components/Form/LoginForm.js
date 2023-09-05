import '../../styles/LoginForm.css'
import React, { useState } from "react";
import Input from '../Input';
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

                <img className = "imagem" src={imagem} alt="imagem-bola" />
                <h1 className='Subtitulo'>DO CAMPO PARA SUA MÃO</h1>

                <h1>Usuário:</h1>

                <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Digite seu nome de usuário"
                    onChange={(event) => handleChange(event, setUsername)}
                />

                <h1>Senha:</h1>

                <Input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Digite sua senha"
                    onChange={(event) => handleChange(event, setUsername)}
                />
            </form>
        </div>
    )
 
}

export default LoginForm