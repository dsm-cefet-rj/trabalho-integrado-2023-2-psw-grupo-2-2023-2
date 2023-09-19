import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Home.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass, X } from 'phosphor-react';
import escudo from '../assets/images/Al Mir sem fundo.png'

function Home(){
    const navigate = useNavigate();
    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
            <div className='Container'>
                <div className='Container-Search'>
                    <input
                    type = "text"
                    placeholder='Pesquise aqui'
                    />
                    <button className='Search'>
                        <MagnifyingGlass size={26} color= '#F8CF2C'/>
                    </button>
                </div>
                
               <div className = "Perfil"> 
                    <img onClick={() => navigate("/perfil")}  src = {perfil} alt = "ImagemPerfil"/> 
               </div>
                
                <div className='Campeonato'>
                    <div onClick={() => navigate("/campeonato")}>Campeonato CEFET</div>
                </div>
                <div className='Jogo'>
                    <div className='Home' onClick={() => navigate("/time")} >Al Mir<img  className = "Escudo" onClick={() => navigate("/time")}  src = {escudo} alt = "escudoTime"/>  </div> 
                    <X size={24}  className='X'/>
                    <div className='Away' onClick={() => navigate("/time")} >Al Mir<img  className = "Escudo" onClick={() => navigate("/time")}  src = {escudo} alt = "escudoTime"/>  </div> 
                </div>
          
            </div>    
        </div>
    </div>
    )
}

export default Home