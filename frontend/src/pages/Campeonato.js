import '../styles/Fundo.css';
import Cabecalho from '../components/cabecalho';
import perfil from "../assets/images/imagemPerfil.png";
import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import '../styles/Campeonato.css'
import { useLocation } from 'react-router-dom';
function Campeonato(){
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const [jsonTime, setJsonTime] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const jsonParam = queryParams.get('json');

        if (jsonParam) {
        try {
            const parsedJson = JSON.parse(jsonParam);
            setJsonTime(parsedJson);
        } catch (error) {
            console.error('Erro ao analisar o JSON da string de consulta:', error);
        }
        }
        }, [location]);
    return(
    <div>
        <Cabecalho/>
        <div className='Fundo'>
               
        <img className = "ImagemPerfil" onClick={() => navigate("/perfil")}  src = {perfil} alt = "ImagemPerfil"/> 
            
                <div>
                {jsonTime && (
                    <ul className='Times' >
                        {jsonTime.response.map((time) => (
                        <li className='teste' key={time.team.id}>
                            <button onClick={() => navigate(`/time/${id}/${time.team.id}`)} className='linkTimes'>
                                <img  className = "logoTimes" src={time.team.logo} alt={time.team.name} />
                                
                                <div className='Nomes'>{time.team.name}</div>
                            </button>
                        </li>
                        ))}
                    </ul>
                )}
                </div>
                

         <div className = "jogos" 
                id="wg-api-football-games"
                data-host="api-football-beta.p.rapidapi.com"          
                data-key="7230cd40b3msh4c82dec94320fe8p146a87jsnb08449a06425"
                data-date="24/09/2023"
                data-league={id}
                data-season="2023"
                data-theme="dark"
                data-refresh="0"
                data-show-toolbar="true"
                data-show-errors="false"
                data-show-logos="true"
                data-modal-game="true"
                data-modal-standings="true"
                data-modal-show-logos="true">
         </div>        
                      
          
        </div>
    </div>
    )
}

export default Campeonato