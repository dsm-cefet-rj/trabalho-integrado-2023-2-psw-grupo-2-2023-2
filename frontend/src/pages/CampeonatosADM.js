import '../styles/Fundo.css'
import '../styles/HomeAdmin.css'
import "../styles/cabecalho.css";
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate,useParams  } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import '../styles/BotaoCampeonato.css'
import logo from '../assets/images/logo.png'

import ListagemCampeonato from '../redux/campeonato/tabelaCampeonato'
import FormCampeonato from '../redux/campeonato/FormCampeonato'

import {Routes, Route, Link } from 'react-router-dom';

function CampeonatoADM() {
     const { idteam } = useParams();
     const navigate = useNavigate();
   
     const [campeonato, setCampeonato] = useState([
       { name: 'teste1', country: 'brasil' },
       { name: 'teste2', country: 'brasil' },
       { name: 'teste3', country: 'brasil' },
     ]);
   
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
               <>
                 <nav>
                   <ul>
                     <li>
                       <Link to="/homeAdmin">Home</Link>
                     </li>
                     <li>
                       <Link to="/campeonatos/novo">Novo Campeonato</Link>
                     </li>
                     <li>
                       <Link to="/campeonatosAdmin">Campeonatos</Link>
                     </li>
                   </ul>
                 </nav>
                 <ListagemCampeonato campeonatos={campeonato} setCampeonato={setCampeonato} />
               </>
             </div>
           </div>
         </div>
       </div>
     );
   }
   
   export default CampeonatoADM;