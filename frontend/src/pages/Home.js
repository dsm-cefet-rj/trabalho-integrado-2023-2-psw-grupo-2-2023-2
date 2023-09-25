import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Home.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate } from "react-router-dom";
import Botao from '../components/BotaoCampeonato'



function Home(){
    const navigate = useNavigate();
    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
               
        <img className = "Perfil" onClick={() => navigate("/perfil")}  src = {perfil} alt = "ImagemPerfil"/> 
               
        <Botao onClick={() => navigate("/jogos/1")} /> 
        <Botao onClick={() => navigate("/jogos/2")} /> 
        <Botao onClick={() => navigate("/jogos/3")} /> 
       
          
        </div>
    </div>
    )
}

export default Home