import '../styles/Login.css'
import '../styles/Fundo.css'
import Form from '../components/Form/LoginForm' 
import {Link, useNavigate} from "react-router-dom"
 
const Login = () => {
    return (
     <div>
        <div className='Fundo'>
            <Form/>
        </div>
     </div> 
    );
  }
export default Login







                