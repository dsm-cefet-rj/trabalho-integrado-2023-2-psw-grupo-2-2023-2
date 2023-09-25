import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Campeonato.css'
import perfil from "../assets/images/imagemPerfil.png"
import { useNavigate } from "react-router-dom";


function Campeonato(){
    const navigate = useNavigate();
    // fetch("https://v3.football.api-sports.io/standings?league=71&season=2023", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	// 	"x-rapidapi-key":"85e13ac972msh0a28d2865f77831p138879jsnbbd24a9f2d99"
	// }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
           
            {/*<div  id="wg-api-football-standings"
                data-host="api-football-v1.p.rapidapi.com"
                data-key="85e13ac972msh0a28d2865f77831p138879jsnbbd24a9f2d99"
                data-league="71"
                data-team=""
                data-season="2023"
                data-theme="dark"
                data-show-errors="false"
                data-show-logos="true"
                class="wg_loader">
            </div> */}
        </div>
    </div>
    )
}

export default Campeonato