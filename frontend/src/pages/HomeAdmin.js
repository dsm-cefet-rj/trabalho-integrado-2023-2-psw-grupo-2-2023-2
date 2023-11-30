import '../styles/Fundo.css'
import '../styles/HomeAdmin.css'
import "../styles/cabecalho.css";
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate,useParams  } from "react-router-dom";
import React, { useEffect,useState } from 'react';
import '../styles/BotaoCampeonato.css'
import Brasil from '../assets/images/Brasileirao.png'
import Alemanha from '../assets/images/Bundesliga.png'
import Inglaterra from '../assets/images/PremierLeague.png'
import França from '../assets/images/Ligue1.png'
import Espanha from '../assets/images/LaLiga.png'
import Italia from '../assets/images/SerieAtim.png'
import JsonBrasil from '../dados/Times/TimesBrasil.json'
import JsonFranca from '../dados/Times/TimesFranca.json'
import JsonEspanha from '../dados/Times/TimesEspanha.json'
import JsonInglaterra from '../dados/Times/TimesInglaterra.json'
import JsonItalia from '../dados/Times/TimesItalia.json'
import JsonAlemanha from '../dados/Times/TimesAlemanha.json'
import dadosBrasil from '../dados/Jogadores/DadosJogadoresBrasileiro.json'
import dadosAlemanha from '../dados/Jogadores/DadosJogadoresAlemanha.json'
import dadosInglaterra from '../dados/Jogadores/DadosJogadoresInglaterra.json'
import dadosFranca from '../dados/Jogadores/DadosJogadoresFrances.json'
import dadosEspanha from '../dados/Jogadores/DadosJogadoresEspanhol.json'
import dadosItalia from '../dados/Jogadores/DadosJogadoresItaliano.json'
import logo from '../assets/images/logo.png'

 function HomeAdmin(){
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
          <div className="SairAdm">
          <button
                 className='BotaoSair'
                 onClick={() => navigate(`/login`)}>Sair </button>
          </div>
          </div>
          <div className='Body'>
          <div className='BotoesHomeADM'>
                  <button onClick={()=> navigate('/jogadoresAdmin')} className = "LinkADM">Jogadores </button>
                  <button onClick={()=> navigate('/timesAdmin')} className = "LinkADM">Times </button> 
                  <button onClick={()=> navigate('/campeonatosAdmin')} className = "LinkADM">Campeonatos </button> 
               </div>
          </div>
          </div>    
          </div>   
     </div>
     )
}

export default HomeAdmin