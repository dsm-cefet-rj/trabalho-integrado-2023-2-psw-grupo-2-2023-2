import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Jogos.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Jogo(){
    const navigate = useNavigate();
    const { id } = useParams();
    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
               
        <img className = "Perfil" onClick={() => navigate("/perfil")}  src = {perfil} alt = "ImagemPerfil"/> 
               
                
             {/* <div className = "jogos" 
                id="wg-api-football-games"
                data-host="api-football-v1.p.rapidapi.com"
                data-key="85e13ac972msh0a28d2865f77831p138879jsnbbd24a9f2d99"
                data-date=""
                data-league={id}
                data-season="2023"
                data-theme="dark"
                data-refresh=""
                data-show-toolbar="true"
                data-show-errors="false"
                data-show-logos="true"
                data-modal-game="true"
                data-modal-standings="true"
                data-modal-show-logos="true">
            </div> 
                       */}
          
        </div>
    </div>
    )
}

export default Jogo