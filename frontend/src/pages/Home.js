import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Home.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate  } from "react-router-dom";
import React, { useState } from 'react';
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

function Home(){
    const navigate = useNavigate();
    const [nomePesquisa, setNomePesquisa] = useState('');
    const buscarTime = () => {
      if (nomePesquisa.trim() === '') {
          console.log("NOME INVÁLIDO")
      } else {
        const timeEspanha = JsonEspanha.response.find((data) => data.team.name === nomePesquisa);
        const timeBrasil = JsonBrasil.response.find((data) => data.team.name === nomePesquisa);
        const timeAlemanha = JsonAlemanha.response.find((data) => data.team.name === nomePesquisa);
        const timeFranca = JsonFranca.response.find((data) => data.team.name === nomePesquisa);
        const timeItalia = JsonItalia.response.find((data) => data.team.name === nomePesquisa);
        const timeInglaterra = JsonInglaterra.response.find((data) => data.team.name === nomePesquisa);
    
        if (timeEspanha !== undefined) {
          navigate(`/time/${JsonEspanha.parameters.league}/${timeEspanha.team.id}`)
        } else if (timeBrasil !== undefined) {
          navigate(`/time/${JsonBrasil.parameters.league}/${timeBrasil.team.id}`)
        } else if (timeAlemanha !== undefined) {
          navigate(`/time/${JsonAlemanha.parameters.league}/${timeAlemanha.team.id}`)
        } else if (timeFranca !== undefined) {
          navigate(`/time/${JsonFranca.parameters.league}/${timeFranca.team.id}`)
        } else if (timeItalia !== undefined) {
          navigate(`/time/${JsonItalia.parameters.league}/${timeItalia.team.id}`)
        } else if (timeInglaterra !== undefined) {
          navigate(`/time/${JsonInglaterra.parameters.league}/${timeInglaterra.team.id}`)
        } else {
          BuscarJogador(nomePesquisa);
        }
      }
    };

    const BuscarJogador = (nomePesquisa) =>{
      const jogadorEspanha = dadosEspanha.response.find((data) => data.player.name === nomePesquisa);
      const jogadorBrasil = dadosBrasil.response.find((data) => data.player.name === nomePesquisa);
      const jogadorFranca = dadosFranca.response.find((data) => data.player.name === nomePesquisa);
      const jogadorInglaterra = dadosInglaterra.response.find((data) => data.player.name === nomePesquisa);
      const jogadorItalia = dadosItalia.response.find((data) => data.player.name === nomePesquisa);
      const jogadorAlemanha = dadosAlemanha.response.find((data) => data.player.name === nomePesquisa);
      if (jogadorEspanha !== undefined) {
        navigate(`/stats/${dadosEspanha.parameters.league}/${jogadorEspanha.player.id}`)
      } else if (jogadorBrasil !== undefined) {
        navigate(`/stats/${dadosBrasil.parameters.league}/${jogadorBrasil.player.id}`)
      } else if (jogadorFranca !== undefined) {
        navigate(`/stats/${dadosFranca.parameters.league}/${jogadorFranca.player.id}`)
      } else if (jogadorInglaterra !== undefined) {
        navigate(`/stats/${dadosInglaterra.parameters.league}/${jogadorInglaterra.player.id}`)
      } else if (jogadorItalia !== undefined) {
        navigate(`/stats/${dadosItalia.parameters.league}/${jogadorItalia.player.id}`)
      } else if (jogadorAlemanha !== undefined) {
        navigate(`/stats/${dadosAlemanha.parameters.league}/${jogadorAlemanha.player.id}`)
      } else{
       BuscarCampeonato(nomePesquisa);
      }
    }

    const BuscarCampeonato = (nomePesquisa)=>{
      if(nomePesquisa==="Brasileirao"){
        navigate(`/campeonato/71?json=${JSON.stringify(JsonBrasil)}`)
      }else if(nomePesquisa==="Laliga"){
        navigate(`/campeonato/140?json=${JSON.stringify(JsonEspanha)}`)}
      else if(nomePesquisa==="Bundesliga"){
        navigate(`/campeonato/78?json=${JSON.stringify(JsonAlemanha)}`)}
      else if(nomePesquisa==="Premier League"){
        navigate(`/campeonato/39?json=${JSON.stringify(JsonInglaterra)}`)} 
      else if(nomePesquisa==="Ligue One"){
        navigate(`/campeonato/61?json=${JSON.stringify(JsonFranca)}`)}
      else if(nomePesquisa==="Serie A"){
        navigate(`/campeonato/135?json=${JSON.stringify(JsonItalia)}`)}
  }  
  
    return(
    <div>
        <Cabecalho/>
        <div className='FundoHome'>
        <img className = "Foto" onClick={() => navigate("/perfil")}  src = {perfil} alt = "ImagemPerfil"></img>
        <div className='Body'>
          <div className='Container-Pesquisa'>
            <input
                  className='InputPesquisa'
                  type="text"
                  placeholder="Digite o nome do time"
                  value={nomePesquisa}
                  onChange={(e) => setNomePesquisa(e.target.value)}
                />
                <button
                 className='BotaoPesquisa'
                 onClick={buscarTime}>Buscar</button>
            </div>     
          
          
          {/* <div className='Campeonatos'>
                  <button className = "Link" onClick={() => navigate(`/campeonato/71?json=${JSON.stringify(JsonBrasil)}`)}> <img className = "Logo" src = {Brasil} alt = "Brasileirao"/> Brasileirão </button>
                  <button className = "Link" onClick={() => navigate(`/campeonato/140?json=${JSON.stringify(JsonEspanha)}`)} > <img className = "Logo" src = {Espanha} alt = "LaLiga"/> La Liga </button> 
                  <button className = "Link" onClick={() => navigate(`/campeonato/39?json=${JSON.stringify(JsonInglaterra)}`)} >  <img className = "Logo" src = {Inglaterra} alt = "Premier League"/> Premier League</button> 
                  <button className = "Link" onClick={() => navigate(`/campeonato/135?json=${JSON.stringify(JsonItalia)}`)} > <img className = "Logo" src = {Italia} alt = "Serie Atim"/> Serie A tim </button> 
                  <button className = "Link" onClick={() => navigate(`/campeonato/78?json=${JSON.stringify(JsonAlemanha)}`)} >  <img className = "Logo" src = {Alemanha} alt = "Bundesliga"/> Bundesliga</button> 
                  <button className = "Link" onClick={() => navigate(`/campeonato/61?json=${JSON.stringify(JsonFranca)}`)} >  <img className = "Logo" src = {França} alt = "Ligue one"/> Ligue One</button>
              </div>  */}
        </div>         
        </div>
    </div>
    )
}

export default Home

