import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import perfil from "../assets/images/imagemPerfil.png"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import '../styles/Campeonato.css'
import { useLocation } from 'react-router-dom';
function Campeonato(props){
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
                    <div>
                 
                    <ul>
                        {jsonTime.response.map((time) => (
                        <li key={time.team.id}>
                            <img src={time.team.logo} alt={time.team.name} />
                            {time.team.name}
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
                </div>

                {/*
                    Api sem ser beta
                    api-football-v1.p.rapidapi.com 
                    Api  beta
                    api-football-beta.p.rapidapi.com" 
                */}


            {/* <div className = "jogos" 
                id="wg-api-football-games"
                data-host="api-football-beta.p.rapidapi.com"          
                data-key="85e13ac972msh0a28d2865f77831p138879jsnbbd24a9f2d99"
                data-date="24/09/2023"
                data-league={id}
                data-season="2023"
                data-theme="dark"
                data-refresh=""
                data-show-toolbar="true"
                data-show-errors="false"
                data-show-logos="true"
                data-modal-game="true"
                data-modal-standings="true"
                data-modal-show-logos="true">
            </div>      */}
                      
          
        </div>
    </div>
    )
}

export default Campeonato