import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Home.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate } from "react-router-dom";
import Pesquisa from '../components/pesquisa.js'
function Home(){
    const navigate = useNavigate();
    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
            <img onClick={() => navigate("/perfil")} className = "Perfil" src = {perfil} alt = "ImagemPerfil"/>
        </div>
    </div>
    )
}

export default Home