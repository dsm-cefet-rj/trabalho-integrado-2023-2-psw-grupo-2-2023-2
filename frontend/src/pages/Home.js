import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Home.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate } from "react-router-dom";
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

function Home(){
    const navigate = useNavigate();
    return(
    <div>
        <Cabecalho/>61
        <div className='Fundo'>
        <img className = "Perfil" onClick={() => navigate("/perfil")}  src = {perfil} alt = "ImagemPerfil"/> 
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
    )
}

export default Home

