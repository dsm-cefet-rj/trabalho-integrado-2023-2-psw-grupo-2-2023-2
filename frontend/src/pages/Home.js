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
    const [ligaDoTime, setLigaDoTime] = useState('');
    const [idDoTime, setIdDoTime] = useState('');
    const [idJogador, setIdJogador] = useState('');
    const buscarTime = () => {
      if (nomePesquisa.trim() === '') {

        setLigaDoTime('');
        setIdDoTime(null);
      } else {
        const timeEspanha = JsonEspanha.response.find((data) => data.team.name === nomePesquisa);
        const timeBrasil = JsonBrasil.response.find((data) => data.team.name === nomePesquisa);
        const timeAlemanha = JsonAlemanha.response.find((data) => data.team.name === nomePesquisa);
        const timeFranca = JsonFranca.response.find((data) => data.team.name === nomePesquisa);
        const timeItalia = JsonItalia.response.find((data) => data.team.name === nomePesquisa);
        const timeInglaterra = JsonInglaterra.response.find((data) => data.team.name === nomePesquisa);
    
        if (timeEspanha !== undefined) {
          setLigaDoTime(JsonEspanha.parameters.league);
          setIdDoTime(timeEspanha.team.id);
        } else if (timeBrasil !== undefined) {
          setLigaDoTime(JsonBrasil.parameters.league);
          setIdDoTime(timeBrasil.team.id);
        } else if (timeAlemanha !== undefined) {
          setLigaDoTime(JsonAlemanha.parameters.league);
          setIdDoTime(timeAlemanha.team.id);
        } else if (timeFranca !== undefined) {
          setLigaDoTime(JsonFranca.parameters.league);
          setIdDoTime(timeFranca.team.id);
        } else if (timeItalia !== undefined) {
          setLigaDoTime(JsonItalia.parameters.league);
          setIdDoTime(timeItalia.team.id);
        } else if (timeInglaterra !== undefined) {
          setLigaDoTime(JsonInglaterra.parameters.league);
          setIdDoTime(timeInglaterra.team.id);
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
        setIdJogador(jogadorEspanha.player.id)
        setLigaDoTime(dadosEspanha.parameters.league);
        setIdDoTime(jogadorEspanha.statistics[0].team.id);
      } else if (jogadorBrasil !== undefined) {
        setIdJogador(jogadorBrasil.player.id)
        setLigaDoTime(dadosBrasil.parameters.league);
        setIdDoTime(jogadorBrasil.statistics[0].team.id);
      } else if (jogadorFranca !== undefined) {
        setIdJogador(jogadorFranca.player.id)
        setLigaDoTime(dadosFranca.parameters.league);
        setIdDoTime(jogadorFranca.statistics[0].team.id);
      } else if (jogadorInglaterra !== undefined) {
        setIdJogador(jogadorInglaterra.player.id)
        setLigaDoTime(dadosInglaterra.parameters.league);
        setIdDoTime(jogadorInglaterra.statistics[0].team.id);
      } else if (jogadorItalia !== undefined) {
        setIdJogador(jogadorItalia.player.id)
        setLigaDoTime(dadosItalia.parameters.league);
        setIdDoTime(jogadorItalia.statistics[0].team.id);
      } else if (jogadorAlemanha !== undefined) {
        setIdJogador(jogadorAlemanha.player.id)
        setLigaDoTime(dadosAlemanha.parameters.league);
        setIdDoTime(jogadorAlemanha.statistics[0].team.id);
      } else{

      }
    }

    const Navegar = () =>{
      if (idJogador !== '') {
        navigate(`/stats/${ligaDoTime}/${idJogador}`)
      } else if(idDoTime !== '') {
        navigate(`/time/${ligaDoTime}/${idDoTime}`);
      }else{
        
      }
    }
    
    console.log("teste")

        
      
  

    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
        <img className = "Perfil" onClick={() => navigate("/perfil")}  src = {perfil} alt = "ImagemPerfil"/> 
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
                <button
                className='BotaoPesquisa' 
                onClick={Navegar}>ir</button>
            </div>     
          
          
              <div className='Campeonatos'> 
                  <button className = "Link" onClick={() => navigate(`/campeonato/71?json=${JSON.stringify(JsonBrasil)}`)}> <img className = "Logo" src = {Brasil} alt = "Brasileirao"/> Brasileirão </button>{/*Brasileirão*/}
                  <button className = "Link" onClick={() => navigate(`/campeonato/140?json=${JSON.stringify(JsonEspanha)}`)} > <img className = "Logo" src = {Espanha} alt = "LaLiga"/> La Liga </button> {/*Campeonato Espanhol*/}
                  <button className = "Link" onClick={() => navigate(`/campeonato/39?json=${JSON.stringify(JsonInglaterra)}`)} >  <img className = "Logo" src = {Inglaterra} alt = "Premier League"/> Premier League</button> {/*Premier League*/}
                  <button className = "Link" onClick={() => navigate(`/campeonato/135?json=${JSON.stringify(JsonItalia)}`)} > <img className = "Logo" src = {Italia} alt = "Serie Atim"/> Serie A tim </button> {/*Campeonato Italiano*/}
                  <button className = "Link" onClick={() => navigate(`/campeonato/78?json=${JSON.stringify(JsonAlemanha)}`)} >  <img className = "Logo" src = {Alemanha} alt = "Bundesliga"/> Bundesliga</button> {/*Campeonato alemão*/}
                  <button className = "Link" onClick={() => navigate(`/campeonato/61?json=${JSON.stringify(JsonFranca)}`)} >  <img className = "Logo" src = {França} alt = "Ligue one"/> Ligue One</button> {/*Campeonato Francês*/}
              </div> 
        </div>         
        </div>
    </div>
    )
}

export default Home

