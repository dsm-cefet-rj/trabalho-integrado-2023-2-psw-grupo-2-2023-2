import React, { useState, useEffect } from "react";
import Input from '../Input';
import Botao from '../Botao';
import Logo from '../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { EyeSlash, Eye } from 'phosphor-react';
import { useForm } from "react-hook-form";
import { loginServer } from './LoginSlice';
import '../../styles/LoginForm.css'

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.login.status);

  const { handleSubmit, errors } = useForm();

  const handleSenhaToggle = () => {
    setShowSenha(!showSenha);
  };

  const handleChange = (event, setText) => {
    setText(event.target.value);
  };

  const login = (data) => {
    let payload = {
      username: username,
      password: senha,
    };
    dispatch(loginServer(payload))
      .unwrap()
      .then(() => {
        navigate("/home");
        alert("Bem-vindo ao SCOUTBALL");
      })
      .catch((error) => {
        console.log(data);
        console.error("Erro no login:", error);
        alert("Erro no login, verifique o usuário e a senha");
      });
  };

  return (
    <div className="container">
      <div className="logo-Container">
        <img className="logo" src={Logo} alt="Logo Site" />
      </div>
      <div>
        <form className="Formulario" onSubmit={handleSubmit(login)}>
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
          <div className="eye-container">
            {showSenha ? (
              <EyeSlash
                size={30}
                weight="duotone"
                onClick={handleSenhaToggle}
                className="Olho"
              />
            ) : (
              <Eye
                size={30}
                weight="duotone"
                onClick={handleSenhaToggle}
                className="Olho"
              />
            )}
          </div>

          <div className="Botoes">
            <Botao type="submit" Text="Login" />
            <Botao onClick={() => navigate("/cadastro")} Text="Cadastrar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;