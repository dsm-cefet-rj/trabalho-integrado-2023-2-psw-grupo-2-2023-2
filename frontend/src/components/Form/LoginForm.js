import '../../styles/LoginForm.css'
import React, { useState } from "react";
import Input from '../Input';
import Botao from '../Botao';
import Logo from '../../assets/images/logo.png'
import '../../styles/LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const handleChange = (event, setText) => {
        setText(event.target.value);
    };
    return(
        <div className='container'> 
            <div className='logo-Container'>
                 <img className = "logo" src = {Logo} alt = "Logo Site"/>
            </div>
            <div className='Form'>
                <form className = "Formulario">
                    
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        onChange={(event) => handleChange(event, setUsername)}
                    />

                    <Input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Senha"
                        onChange={(event) => handleChange(event, setUsername)}
                    />

                    <div className = "Butoes">
                        <Botao Text = "Login"/>
                        <Botao Text= "Cadastrar"/>  
                    </div>
                </form>
            </div>
        </div>    
    )
 
}

export default LoginForm