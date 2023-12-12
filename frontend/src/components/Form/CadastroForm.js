import '../../styles/CadastroForm.css';
import React, { useState } from "react";
import Input from '../Input';
import Botao from '../Botao';
import Logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import { EyeSlash, Eye } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { signupUser } from './LoginSlice';
import { useForm } from "react-hook-form";
import teamsList from '../ListaTimes';
import axios from 'axios';
function CadastroForm(props){
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [verificaSenha, setVerificaSenha] = useState("");
  const [showVerificaSenha, setShowVerificaSenha] = useState(false);
  const [idTeam, setIdTeam] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, errors } = useForm();
  const handleTeamSelect = (event) => {
    setIdTeam(event.target.value);
  };

  const handleSenhaToggle = () => {
    setShowSenha(!showSenha);
  };

  const handleVerificaSenhaToggle = () => {
    setShowVerificaSenha(!showVerificaSenha);
  };

  const handleChange = (event, setText) => {
    setText(event.target.value);
  };

  const cadastro = () => {
    let payload = {
        username: username,
        password: senha,
        idTeam: idTeam,
    };
    console.log(payload);
    dispatch(signupUser(payload))
        .unwrap().then(() => {
            navigate("/");
        });
};
        
 
    return (
        <div className='containerCadastro'>
            <div className='logo-Container'>
                <img className="logo" src={Logo} alt="Logo Site" />
        </div>
        <div>
                <form className="FormularioCadastro" onSubmit={handleSubmit(cadastro)}>    
                    <div className ="senhas">
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
                    <div className ="eye-container1Cadastro">
                     {showSenha
                          ? <EyeSlash size={30} weight="duotone" onClick={handleSenhaToggle} className = "Olho" />
                          : <Eye size={30} weight="duotone" onClick={handleSenhaToggle} className = "Olho" />
                     }
                    </div>
                    <Input
                        type={showVerificaSenha ? "text" : "password"}
                        name="verificaPassword"
                        id="verificaPassword"
                        placeholder="Confirmar Senha"
                        onChange={(event) => handleChange(event, setVerificaSenha)}
                    />
                    <div className ="eye-container2Cadastro">
                     {showVerificaSenha
                          ? <EyeSlash size={30} weight="duotone" onClick={handleVerificaSenhaToggle} className = "Olho" />
                          : <Eye size={30} weight="duotone" onClick={handleVerificaSenhaToggle} className = "Olho" />
                     }  
                    </div>
                    </div>
                    <select 
                    className='Lista'
                    onChange={handleTeamSelect}
                    value={idTeam}

                    >
                    {teamsList.map((team, index) => (
                    <option key={index} value={team.id}> 
                            {team.name}
                    </option>
                    ))}
                    </select>

                    <div className = "Botoes">
                        <Botao 
                        type = "submit"
                        Text = "Salvar"
                        />
                        <Botao onClick={() => navigate("/")} Text= "Cancelar"/>  
                    </div>
                </form>
            </div>
        </div>    
    )
 
}

export default CadastroForm;