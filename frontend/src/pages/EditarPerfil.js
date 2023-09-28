import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Perfil.css'
import React, { useState } from "react";
import Input from '../components/Input';
import Botao from '../components/Botao';

import { useNavigate } from "react-router-dom";
import {EyeSlash, Eye } from 'phosphor-react'
import Lista from '../components/ListaSuspensa'

function EditarPerfil(){
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
       <div>
            <Cabecalho/>
            <div className='Fundo'>
                <div className='container'> 
                    <div className='logo-Container'>
                    
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

                            <Lista obrigatorio = {true} />

                            <div className = "Butoes">
                                <Botao onClick={() => navigate("/perfil")} Text = "Salvar"/>
                                <Botao onClick={() => navigate("/perfil")} Text= "Cancelar"/>  
                            </div>
                        </form>
                    </div>
                </div> 
            </div> 
        </div>    
    )
 
}

export default EditarPerfil