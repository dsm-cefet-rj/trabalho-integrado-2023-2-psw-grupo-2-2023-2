import '../../styles/LoginForm.css'
import React, { useState } from "react";
import Input from '../Input';
import Botao from '../Botao';
import Logo from '../../assets/images/logo.png'
import { useNavigate } from "react-router-dom";
import {EyeSlash, Eye } from 'phosphor-react'
import JsonUsuario from "../../dados/Usuarios/dadosUsuarios.json"
const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [showSenha, setShowSenha] = useState(false);
    const navigate = useNavigate();
    const handleSenhaToggle = () => {
        setShowSenha(!showSenha);
      };
    const handleChange = (event, setText) => {
        setText(event.target.value);
    };
    const handleLogin = (event) => {
        event.preventDefault();
        const matchingUser = JsonUsuario.Dados.find(user => user.Usuários.Username === username && user.Usuários.Senha === senha);
        if (matchingUser) {
            const idTeam = matchingUser.Usuários.idTeam;
            navigate(`/home/${idTeam}`);
        } else {
            alert("Nome de usuário ou senha inválidos. Por favor, tente novamente.");
        }
    };

    console.log(JsonUsuario)
    return(
        <div className='container'> 
            <div className='logo-Container'>
                 <img className = "logo" src = {Logo} alt = "Logo Site"/>
            </div>
            <div >
                <form className = "Formulario" onSubmit={handleLogin}>
                    
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        onChange={(event) => handleChange(event, setUsername)}
                    />

                    <Input
                        type={showSenha ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Senha"
                        onChange={(event) => handleChange(event, setSenha)}
                    />
                    <div className='eye-container'>
                     {showSenha
                          ? <EyeSlash size={30} weight="duotone" onClick={handleSenhaToggle} className = "Olho" />
                          : <Eye size={30} weight="duotone" onClick={handleSenhaToggle} className = "Olho" />
                        }
                    </div>

                    <div className = "Botoes">
                        <Botao type = "submit" Text = "Login"/>
                        <Botao onClick={() => navigate("/cadastro")} Text= "Cadastrar"/>  
                    </div>
                </form>
            </div>
        </div>    
    )
 
}

export default LoginForm