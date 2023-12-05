import '../styles/Fundo.css'
import '../styles/HomeAdmin.css'
import "../styles/cabecalho.css";
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate,useParams  } from "react-router-dom";
import React, { useEffect,useState } from 'react';
import '../styles/BotaoCampeonato.css'
import logo from '../assets/images/logo.png'
import Tabela from '../redux/campeonato/tabelaCampeonato'

 function CampeonatoADM(){
    const {idteam} = useParams();
    const [TimeUsuario, setTimeUsuario] = useState();
    const navigate = useNavigate();
    const [nomePesquisa, setNomePesquisa] = useState('');
    const [idUserCampeonato, setIdUserCampeonato] = useState('');
    const [userNomeTime, setUserNomeTime] = useState('');
    const [userLogoTime, setUserLogoTime] = useState('');

    




    return(
    <div>
          <header className = 'Cabecalho'>  
          <img onClick={() => navigate(`/home/${idteam}`)} className = "Imagem" src = {logo} alt = "Logo Site"/>
          </header>
          <div className='FundoHome'>
          <div className='Tudo'>
          <div className="PerfilHomeAdm">
          <img className = "Foto" onClick={() => navigate(`/perfil/${idteam}`)}  src = {perfil} alt = "ImagemPerfil"></img>
          <div className="Sair">
          <button
                 className='BotaoPesquisa'
                 onClick={() => navigate(`/login`)}>Sair </button>
          </div>
          </div>
          <div className='Body'>
               <Tabela/>
          </div>
          </div>    
          </div>   
     </div>
     )
}

export default CampeonatoADM
