import "../styles/cabecalho.css";
import logo from '../assets/images/logo.png'
function Cabecalho(){
    return(
        <header className = 'Cabecalho'>  
        <img className = "Imagem" src = {logo} alt = "Logo Site"/>
        </header>
    )
}

export default Cabecalho