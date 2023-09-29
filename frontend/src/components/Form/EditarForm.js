import Input from '../Input'
import Botao from '../Botao'
import {EyeSlash, Eye } from 'phosphor-react'
import Lista from '../ListaSuspensa'
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function EditarForm(){
     const navigate = useNavigate();
     const [username, setUsername] = useState("");
     const [senha, setSenha] = useState("");
     const [showSenha, setShowSenha] = useState(false);
     const [verificaSenha, setVerificaSenha] = useState("");
     const [showVerificaSenha, setShowVerificaSenha] = useState(false);
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
               <form className = "FormularioPerfil">
                    <div className='InputPerfil'>
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
                            <div className='eyecontainer1Perfil'>
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
                            <div className='eyecontainer2Perfil'>
                            {showVerificaSenha
                                ? <EyeSlash size={30} weight="duotone" onClick={handleVerificaSenhaToggle} className = "Olho" />
                                : <Eye size={30} weight="duotone" onClick={handleVerificaSenhaToggle} className = "Olho" />
                            }  
                              </div>
                            <Lista obrigatorio = {true} />
                         </div>

                            <div className = "Botoes-Perfil">
                                <Botao onClick={() => navigate("/perfil")} Text = "Salvar"/>
                                <Botao onClick={() => navigate("/perfil")} Text= "Cancelar"/>  
                            </div>
                        </form>
          </div>
     )
}

export default EditarForm;