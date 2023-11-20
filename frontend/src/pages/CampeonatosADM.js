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

 function HomeADM(){
    const {idteam} = useParams();
    const [TimeUsuario, setTimeUsuario] = useState();
    const navigate = useNavigate();
    const [nomePesquisa, setNomePesquisa] = useState('');
    const [idUserCampeonato, setIdUserCampeonato] = useState('');
    const [userNomeTime, setUserNomeTime] = useState('');
    const [userLogoTime, setUserLogoTime] = useState('');
    
//     useEffect(() => {
// //      const idteamNumber = parseInt(idteam);
//       const TimeBrasil = JsonBrasil.response.find((item) => item.team.id === idteamNumber);
//       const TimeAlemanha = JsonAlemanha.response.find((item) => item.team.id === idteamNumber);
//       const TimeEspanha = JsonEspanha.response.find((item) => item.team.id === idteamNumber);
//       const TimeInglaterra = JsonInglaterra.response.find((item) => item.team.id === idteamNumber);
//       const TimeItalia = JsonItalia.response.find((item) => item.team.id === idteamNumber);
// //      const TimeFranca = JsonFranca.response.find((item) => item.team.id === idteamNumber);
      
//       console.log(JsonBrasil)
// //      if (TimeBrasil !== undefined) {
//         setIdUserCampeonato(71);
//         setUserNomeTime(TimeBrasil.team.name); 
//         setUserLogoTime(TimeBrasil.team.logo); 
        
//       } else if (TimeEspanha !== undefined ) {
//         setIdUserCampeonato(140);
//         setUserNomeTime(TimeEspanha.team.name); 
//         setUserLogoTime(TimeEspanha.team.logo); 
//       } else if (TimeAlemanha !== undefined) {
//         setIdUserCampeonato(78);
//         setUserNomeTime(TimeAlemanha.team.name); 
//         setUserLogoTime(TimeAlemanha.team.logo); 
//       } else if (TimeFranca !== undefined) {
//         setIdUserCampeonato(61);
//         setUserNomeTime(TimeFranca.team.name); 
//         setUserLogoTime(TimeFranca.team.logo); 
//       } else if (TimeItalia !== undefined) {
//         setIdUserCampeonato(135);
//         setUserNomeTime(TimeItalia.team.name); 
//         setUserLogoTime(TimeItalia.team.logo); 
//       } else if (TimeInglaterra !== undefined) {
//         setIdUserCampeonato(39); 
//         setUserNomeTime(TimeInglaterra.team.name); 
//         setUserLogoTime(TimeInglaterra.team.logo); 
// //      } 
// //    }, []);


    
// //    const buscarTime = () => {
//       if (nomePesquisa.trim() === '') {
//           console.log("NOME INVÁLIDO")
//       } else {
//         const timeEspanha = JsonEspanha.response.find((data) => data.team.name === nomePesquisa);
//         const timeBrasil = JsonBrasil.response.find((data) => data.team.name === nomePesquisa);
//         const timeAlemanha = JsonAlemanha.response.find((data) => data.team.name === nomePesquisa);
//         const timeFranca = JsonFranca.response.find((data) => data.team.name === nomePesquisa);
//         const timeItalia = JsonItalia.response.find((data) => data.team.name === nomePesquisa);
//         const timeInglaterra = JsonInglaterra.response.find((data) => data.team.name === nomePesquisa);
    
//         if (timeEspanha !== undefined) {
//           navigate(`/time/${JsonEspanha.parameters.league}/${timeEspanha.team.id}/${idteam}`)
//         } else if (timeBrasil !== undefined) {
//           navigate(`/time/${JsonBrasil.parameters.league}/${timeBrasil.team.id}/${idteam}`)
//         } else if (timeAlemanha !== undefined) {
//           navigate(`/time/${JsonAlemanha.parameters.league}/${timeAlemanha.team.id}/${idteam}`)
//         } else if (timeFranca !== undefined) {
//           navigate(`/time/${JsonFranca.parameters.league}/${timeFranca.team.id}/${idteam}`)
//         } else if (timeItalia !== undefined) {
//           navigate(`/time/${JsonItalia.parameters.league}/${timeItalia.team.id}/${idteam}`)
//         } else if (timeInglaterra !== undefined) {
//           navigate(`/time/${JsonInglaterra.parameters.league}/${timeInglaterra.team.id}/${idteam}`)
//         } else {
//           BuscarJogador(nomePesquisa);
//         }
//       }
// //    };

// //    const BuscarJogador = (nomePesquisa) =>{
//       const jogadorEspanha = dadosEspanha.response.find((data) => data.player.name === nomePesquisa);
//       const jogadorBrasil = dadosBrasil.response.find((data) => data.player.name === nomePesquisa);
//       const jogadorFranca = dadosFranca.response.find((data) => data.player.name === nomePesquisa);
//       const jogadorInglaterra = dadosInglaterra.response.find((data) => data.player.name === nomePesquisa);
//       const jogadorItalia = dadosItalia.response.find((data) => data.player.name === nomePesquisa);
//       const jogadorAlemanha = dadosAlemanha.response.find((data) => data.player.name === nomePesquisa);
//       if (jogadorEspanha !== undefined) {
//         navigate(`/stats/${dadosEspanha.parameters.league}/${jogadorEspanha.player.id}/${idteam}`)
//       } else if (jogadorBrasil !== undefined) {
//         navigate(`/stats/${dadosBrasil.parameters.league}/${jogadorBrasil.player.id}/${idteam}`)
//       } else if (jogadorFranca !== undefined) {
//         navigate(`/stats/${dadosFranca.parameters.league}/${jogadorFranca.player.id}/${idteam}`)
//       } else if (jogadorInglaterra !== undefined) {
//         navigate(`/stats/${dadosInglaterra.parameters.league}/${jogadorInglaterra.player.id}/${idteam}`)
//       } else if (jogadorItalia !== undefined) {
//         navigate(`/stats/${dadosItalia.parameters.league}/${jogadorItalia.player.id}/${idteam}`)
//       } else if (jogadorAlemanha !== undefined) {
//         navigate(`/stats/${dadosAlemanha.parameters.league}/${jogadorAlemanha.player.id}/${idteam}`)
//       } else{
//        BuscarCampeonato(nomePesquisa);
//       }
// //    }

// //    const BuscarCampeonato = (nomePesquisa)=>{
//       if(nomePesquisa==="Brasileirão"){
//         navigate(`/campeonato/${idteam}/71?json=${JSON.stringify(JsonBrasil)}`)
//       }else if(nomePesquisa==="Laliga"){
//         navigate(`/campeonato/${idteam}/140?json=${JSON.stringify(JsonEspanha)}`)}
//       else if(nomePesquisa==="Bundesliga"){
//         navigate(`/campeonato/${idteam}/78?json=${JSON.stringify(JsonAlemanha)}`)}
//       else if(nomePesquisa==="Premier League"){
//         navigate(`/campeonato/${idteam}/39?json=${JSON.stringify(JsonInglaterra)}`)} 
//       else if(nomePesquisa==="Ligue One"){
//         navigate(`/campeonato/${idteam}/61?json=${JSON.stringify(JsonFranca)}`)}
//       else if(nomePesquisa==="Serie A"){
//         navigate(`/campeonato/${idteam}/135?json=${JSON.stringify(JsonItalia)}`)}
// //  }  
  
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
          <div className='BotoesHomeADM'>
                  <button className = "LinkADM">Jogadores </button>
                  <button className = "LinkADM">Times </button> 
                  <button className = "LinkADM">Campeonatos </button> 
                  
               </div>
          </div>
          </div>    
          </div>   
     </div>
     )
}

export default HomeADM
