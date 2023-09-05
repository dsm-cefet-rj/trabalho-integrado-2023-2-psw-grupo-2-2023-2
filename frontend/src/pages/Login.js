import '../styles/Login.css'
import Cabecalho from '../components/cabecalho'

import Form from '../components/Form/LoginForm' 
import {Link, useNavigate} from "react-router-dom"
 
const Login = () => {
    return (
     <div>
        <Cabecalho/>
        <body className='Pagina'>
            <div className='form'>
               <Form/>
            </div>
        </body>
       
     </div> 
    );
  }
export default Login







                