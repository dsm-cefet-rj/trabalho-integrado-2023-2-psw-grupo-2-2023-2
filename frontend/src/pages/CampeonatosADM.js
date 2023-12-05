import '../styles/Fundo.css'
import '../styles/HomeAdmin.css'
import "../styles/cabecalho.css";
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate,useParams  } from "react-router-dom";
import React, {useReducer, Provider} from 'react';
import '../styles/BotaoCampeonato.css'
import logo from '../assets/images/logo.png'

import {Routes, Route, Link } from 'react-router-dom';



const CampeonatoADM = (props) =>{
     
     const { idteam } = useParams();
     const navigate = useNavigate();
   
     return (

          <div>
            <header className="Cabecalho">
              <img
                onClick={() => navigate(`/home/${idteam}`)}
                className="Imagem"
                src={logo}
                alt="Logo Site"
              />
            </header>
            <div className="FundoHome">
              <div className="Tudo">
                <div className="PerfilHomeAdm">
                  <img
                    className="Foto"
                    onClick={() => navigate(`/perfil/${idteam}`)}
                    src={perfil}
                    alt="ImagemPerfil"
                  ></img>
                  <div className="Sair">
                    <button
                      className="BotaoPesquisa"
                      onClick={() => navigate(`/login`)}
                    >
                      Sair
                    </button>
                  </div>
                </div>
                <div className="Body">
                
                </div>
              </div>
            </div>
          </div>
     );
   }
   
   export default CampeonatoADM;