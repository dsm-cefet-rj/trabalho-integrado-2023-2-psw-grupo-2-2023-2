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
function Home(){
    const navigate = useNavigate();
    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
               
        <img className = "Perfil" onClick={() => navigate("/perfil")}  src = {perfil} alt = "ImagemPerfil"/> 
            <div className='Campeonatos'> 
                <button className = "Link" onClick={() => navigate("/campeonato/71")}> <img className = "Logo" src = {Brasil} alt = "Brasileirao"/> Brasileirão </button>{/*Brasileirão*/}
                <button className = "Link" onClick={() => navigate("/campeonato/61")} > <img className = "Logo" src = {França} alt = "Ligue one"/>  Ligue One </button>{/*Campeonato Francês*/}
                <button className = "Link" onClick={() => navigate("/campeonato/140")} > <img className = "Logo" src = {Espanha} alt = "LaLiga"/> La Liga </button> {/*Campeonato Espanhol*/}
                <button className = "Link" onClick={() => navigate("/campeonato/39")} >  <img className = "Logo" src = {Inglaterra} alt = "Premier League"/> Premier League</button> {/*Premier League*/}
                <button className = "Link" onClick={() => navigate("/campeonato/135")} > <img className = "Logo" src = {Italia} alt = "Serie Atim"/> Serie A tim </button> {/*Campeonato Italiano*/}
                <button className = "Link" onClick={() => navigate("/campeonato/78")} >  <img className = "Logo" src = {Alemanha} alt = "Bundesliga"/> Bundesliga</button> {/*Campeonato alemão*/}
            </div>      
        </div>
    </div>
    )
}

export default Home