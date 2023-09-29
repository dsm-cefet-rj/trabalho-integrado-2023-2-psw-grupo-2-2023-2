import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/EditarPerfil.css'
import Form from '../components/Form/EditarForm'



function EditarPerfil(){
  

    return(
       <div>
            <Cabecalho/>
            <div className='Fundo'>
                <div className='container'>                  
                        <Form/>
                </div> 
            </div> 
        </div>    
    )
 
}

export default EditarPerfil