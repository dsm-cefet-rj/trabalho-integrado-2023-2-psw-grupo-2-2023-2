import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Campeonato.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate } from "react-router-dom";

function Campeonato(){
    const navigate = useNavigate();
    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
            <img onClick={() => navigate("/perfil")} className = "ContPerfil" src = {perfil} alt = "ImagemPerfil"/>
        </div>
    </div>
    )
}

export default Campeonato