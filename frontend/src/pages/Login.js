import '../styles/Login.css'
import '../styles/Fundo.css'
import Form from '../components/Form/LoginForm' 
import json from '../../dados'
 
const Login = () => {
  const data = JSON.parse(json);
  console.log(data.response.team.name)
    return (
     <div>
        <div className='Fundo'>
            <Form/>
        </div>
     </div> 
    );
  }
export default Login







                