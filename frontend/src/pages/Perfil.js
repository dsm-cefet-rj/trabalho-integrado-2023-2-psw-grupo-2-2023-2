import React from 'react';
import dados from '../dados/Times/TodosTimes.json';
import '../styles/Fundo.css';
import Cabecalho from '../components/cabecalho';
import '../styles/Perfil.css';
import { useNavigate } from "react-router-dom";
import Botao from '../components/Botao'


function Perfil() {
  const navigate = useNavigate();
  const acMilanData = dados.response.find((team) => team.team.id === 489);

  return (
    <div>
      <Cabecalho />
        <div className = "FundoPerfil">
        <div className = "Container-Time-Favorito">
            <h1> Time Favorito:</h1>
            {acMilanData && (
            <img src={acMilanData.team.logo} alt={acMilanData.team.name} />
            )}
        </div>
         <div className='Container-Botoes-Perfil'>      
        <Botao onClick={() => navigate("/editarperfil")} Text = "Editar Perfil"/>
        <Botao  Text= "Apagar Perfil"/>
        </div>
      </div>
    </div>
  );
}

export default Perfil
