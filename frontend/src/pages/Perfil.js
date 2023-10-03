import React from 'react';
import dados from '../dados/Times/TodosTimes.json';
import '../styles/Fundo.css';
import '../styles/Perfil.css';
import "../styles/cabecalho.css";
import { useNavigate,useParams  } from "react-router-dom";
import Botao from '../components/Botao'
import logo from '../assets/images/logo.png'


function Perfil() {
  const navigate = useNavigate();
  const {idteam} = useParams();
  const idteamNumber = parseInt(idteam);
  const acMilanData = dados.response.find((team) => team.team.id === idteamNumber);

  return (
    <div>
      <header className = 'Cabecalho'>  
          <img onClick={() => navigate(`/home/${idteam}`)} className = "Imagem" src = {logo} alt = "Logo Site"/>
        </header>
        <div className = "FundoPerfil">
        <div className = "Container-Time-Favorito">
            <h1> Time Favorito:</h1>
            {acMilanData && (
            <img src={acMilanData.team.logo} alt={acMilanData.team.name} />
            )}
            <h1>{acMilanData.team.name}</h1>
        </div>
         <div className='Container-Botoes-Perfil'>      
        <Botao onClick={() => navigate(`/editarperfil/${idteam}`)} Text = "Editar Perfil"/>
        <Botao  Text= "Apagar Perfil"/>
        </div>
      </div>
    </div>
  );
}

export default Perfil
