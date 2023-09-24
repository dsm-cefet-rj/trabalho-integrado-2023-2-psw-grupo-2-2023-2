import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Home.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass, X } from 'phosphor-react';
import escudo from '../assets/images/Al Mir sem fundo.png'

function Home(){
    const navigate = useNavigate();
    // fetch("https://v3.football.api-sports.io/fixtures?live=all", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	// 	"x-rapidapi-key": "85e13ac972msh0a28d2865f77831p138879jsnbbd24a9f2d99"
	// }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
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
                
            {/* <div id="wg-api-football-games"
                data-host="api-football-v1.p.rapidapi.com"
                data-key="85e13ac972msh0a28d2865f77831p138879jsnbbd24a9f2d99"
                data-date=""
                data-league="71"
                data-season="2023"
                data-theme="dark"
                data-refresh=""
                data-show-toolbar="true"
                data-show-errors="false"
                data-show-logos="true"
                data-modal-game="true"
                data-modal-standings="true"
                data-modal-show-logos="true">
            </div> */}
                      
            </div>    
        </div>
    </div>
    )
}

export default Home