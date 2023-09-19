import '../../styles/CadastroForm.css'
import React, { useState } from "react";
import Input from '../Input';
import Botao from '../Botao';
import Logo from '../../assets/images/logo.png'
import { useNavigate } from "react-router-dom";
import {EyeSlash, Eye } from 'phosphor-react'
import Lista from '../ListaSuspensa'

const CadastroForm = () => {
    const Times = [
        'Al mir'
    ]
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [showSenha, setShowSenha] = useState(false);
    const [verificaSenha, setVerificaSenha] = useState("");
    const [showVerificaSenha, setShowVerificaSenha] = useState(false);
    const navigate = useNavigate();
    const handleSenhaToggle = () => {
        setShowSenha(!showSenha);
    };
     const handleVerificaSenhaToggle = () => {
        setShowVerificaSenha(!showVerificaSenha);
    };  
    const handleChange = (event, setText) => {
        setText(event.target.value);
    };
    return(
        <div className='container'> 
            <div className='logo-Container'>
                 <img className = "logo" src = {Logo} alt = "Logo Site"/>
            </div>
            <div>
                <form className = "Formulario">
                    
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
                     {showSenha
                          ? <EyeSlash size={30} weight="duotone" onClick={handleSenhaToggle} className = "Olho" />
                          : <Eye size={30} weight="duotone" onClick={handleSenhaToggle} className = "Olho" />
                     }

                    <Input
                        type={showVerificaSenha ? "text" : "password"}
                        name="verificaPassword"
                        id="verificaPassword"
                        placeholder="Confirmar Senha"
                        onChange={(event) => handleChange(event, setVerificaSenha)}
                    />
                     {showVerificaSenha
                          ? <EyeSlash size={30} weight="duotone" onClick={handleVerificaSenhaToggle} className = "Olho" />
                          : <Eye size={30} weight="duotone" onClick={handleVerificaSenhaToggle} className = "Olho" />
                     }  

                    <Lista obrigatorio = {true} label = "Times" itens = {Times}/>

                    <div className = "Butoes">
                        <Botao onClick={() => navigate("/home")} Text = "Salvar"/>
                        <Botao onClick={() => navigate("/")} Text= "Cancelar"/>  
                    </div>
                </form>
            </div>
        </div>    
    )
 
}

export default CadastroForm