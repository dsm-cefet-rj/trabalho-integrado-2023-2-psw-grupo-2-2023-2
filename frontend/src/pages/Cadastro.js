import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import Form from "../components/Form/CadastroForm"
import '../styles/Cadastro.css'
function Cadastro(){
    return(
    <div>
        <div className='Fundo'>
        <Form/>
        </div>
    </div>
    )
}

export default Cadastro