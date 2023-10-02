import '../../styles/CadastroForm.css';
import React, { useState } from "react";
import Input from '../Input';
import Botao from '../Botao';
import Logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import { EyeSlash, Eye } from 'phosphor-react';
import teamsList from '../ListaTimes';

const CadastroForm = () => {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [verificaSenha, setVerificaSenha] = useState("");
  const [showVerificaSenha, setShowVerificaSenha] = useState(false);
  const [idTeam, setIdTeam] = useState("");
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (senha !== verificaSenha) {
      console.error('Senhas não coincidem');
      return;
    }
  
    try {
        const response = await fetch('http://localhost:5000/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              senha,
              verificaSenha,
              idTeam: parseInt(idTeam),
            }),
          });
          
  
      if (!response.ok) {
        throw new Error('Erro no cadastro.');
      }
  
      alert('Cadastro bem-sucedido!');
      navigate('/'); 
    } catch (error) {
      alert('Username já cadastrado.');
    }
  };
  
    
    

    return (
        <div className='containerCadastro'>
            <div className='logo-Container'>
                <img className="logo" src={Logo} alt="Logo Site" />
        </div>
        <div>
                <form className="FormularioCadastro" onSubmit={handleSubmit}>    
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