import '../styles/Fundo.css'
import '../styles/EditarPerfil.css'
import "../styles/cabecalho.css";
import Form from '../components/Form/EditarForm'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import logo from '../assets/images/logo.png'


function EditarPerfil(){
    const {idteamUsuario } = useParams();
    const navigate = useNavigate();

    return(
       <div>
        <header className = 'Cabecalho'>  
          <img onClick={() => navigate(`/home/${idteamUsuario}`)} className = "Imagem" src = {logo} alt = "Logo Site"/>
        </header>
            <div className='Fundo'>
                <div className='container'>                  
                        <Form/>
                </div> 
            </div> 
        </div>    
    )
 
}

export default EditarPerfil