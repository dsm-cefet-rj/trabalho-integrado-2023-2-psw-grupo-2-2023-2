import "../styles/cabecalho.css";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'
function Cabecalho(){
    const navigate = useNavigate();
    return(
        <header className = 'Cabecalho'>  
        <img onClick={() => navigate("/home")} className = "Imagem" src = {logo} alt = "Logo Site"/>
        </header>
    )
}

export default Cabecalho