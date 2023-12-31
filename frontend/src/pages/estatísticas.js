import "../styles/cabecalho.css";
import React, { useState, useEffect } from 'react';
import PlayerDetails from './PlayerDetails'; 
import dadosBrasil from '../dados/Jogadores/DadosJogadoresBrasileiro.json';
import dadosAlemanha from '../dados/Jogadores/DadosJogadoresAlemanha.json';
import dadosInglaterra from '../dados/Jogadores/DadosJogadoresInglaterra.json';
import dadosFranca from '../dados/Jogadores/DadosJogadoresFrances.json';
import dadosEspanha from '../dados/Jogadores/DadosJogadoresEspanhol.json';
import dadosItalia from '../dados/Jogadores/DadosJogadoresItaliano.json';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'

function Estatisticas() {
  const [jogadores, setJogadores] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [botaoVisivel, setBotaoVisivel] = useState(true);
  const { ligaId, jogadorId,idteam } = useParams(); 
  const navigate = useNavigate();
  const handleButtonClick = (jogador) => {
    setSelectedPlayer(jogador);
    setBotaoVisivel(false); 
  };

  useEffect(() => {
    
    const carregarDadosPorLiga = (id) => {
      switch (id) {
        case '71':
          return dadosBrasil;
        case '78':
          return dadosAlemanha;
        case '39':
          return dadosInglaterra;
        case '61':
          return dadosFranca;
        case '140':
          return dadosEspanha;
        case '135':
          return dadosItalia;
        default:
          return null;
      }
    };

  
    const dadosLiga = carregarDadosPorLiga(ligaId);

    if (dadosLiga) {
      const jogadorEncontrado = dadosLiga.response.find(
        (jogador) => jogador.player.id === Number(jogadorId)
      );

      if (jogadorEncontrado) {
        setJogadores([jogadorEncontrado]);
      }
    }
  }, [ligaId, jogadorId]);

  return (
    <div>
         <header className = 'Cabecalho'>  
          <img onClick={() => navigate(`/home/${idteam}`)} className = "Imagem" src = {logo} alt = "Logo Site"/>
        </header>
        <div className='Fundo'>
            <ul className = "Container-teste">
                {jogadores.map((jogador) => (
                <li key={jogador.player.id}>
                   {botaoVisivel && (
                <button
                    className="ImagemNomeJogador"
                    onClick={() => handleButtonClick(jogador)}
                >
                    {jogador.player.name}
                </button>
                )}
                </li>
                ))}
            </ul>

            {selectedPlayer && (
                <PlayerDetails jogador={selectedPlayer} />
            )}
        </div>    
    </div>
  );
}

export default Estatisticas;