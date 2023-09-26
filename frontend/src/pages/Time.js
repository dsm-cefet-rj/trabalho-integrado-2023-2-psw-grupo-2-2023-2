import React, { useEffect, useState } from 'react';
import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Time.css'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import dadosBrasil from '../dados/Jogadores/DadosJogadoresBrasileiro.json'
import dadosAlemanha from '../dados/Jogadores/DadosJogadoresAlemanha.json'
import dadosInglaterra from '../dados/Jogadores/DadosJogadoresInglaterra.json'
import dadosFranca from '../dados/Jogadores/DadosJogadoresFrances.json'
import dadosEspanha from '../dados/Jogadores/DadosJogadoresEspanhol.json'
import dadosItalia from '../dados/Jogadores/DadosJogadoresItaliano.json'


function Time() {
    const { id, idteam } = useParams();
    const navigate = useNavigate();
    const [jogadores, setJogadores] = useState([]);
    useEffect(() => {
      const carregarDadosPorLiga = (id) => {
        if (id === '71') {
          return dadosBrasil;
        } else if (id === '78') {
          return dadosAlemanha;
        } else if (id === '39') {
          return dadosInglaterra;
        } else if (id === '61') {
          return dadosFranca;
        } else if (id === '140') {
          return dadosEspanha;
        } else if (id === '135') {
          return dadosItalia;
        } else {
          return null;
        }
      };
      const dadosLiga = carregarDadosPorLiga(id);
      if (dadosLiga) {
        const jogadoresDoTime = dadosLiga.response.filter(
          (jogador) => jogador.statistics[0].team.id === Number(idteam)
        );
        setJogadores(jogadoresDoTime);
      }
    }, [id, idteam]);
    return (
      <div>
        <Cabecalho/>
        <div className='Fundo'>
        <h1 className = "TituloTimes">Jogadores</h1>
        <div className="ListaJogadores">
          <body className="CorpoLista">
            <ul className = "Container-teste">
              {jogadores.map((jogador) => (
                <li className = "LocalJogadores" key={jogador.player.id}>
                  <button onClick={() => navigate(`/stats/${id}/${jogador.player.id}`)}  className = "ImagemNomeJogador">
                    <img className="FotoJogadores" src={jogador.player.photo} alt={jogador.player.name} />
                    <p className = "NomesJogadores">{jogador.player.name}</p>
                  </button>  
                  
                </li>
              ))}
            </ul>
          </body>
          </div>
        </div>
      </div>
    );
  }
  
  export default Time;