import React, { useEffect, useState } from 'react';
import '../styles/Fundo.css'
import Cabecalho from '../components/cabecalho'
import '../styles/Time.css'
import perfil from "../assets/images/imagemPerfil.png"
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
          console.log("Vasco");
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
        <Cabecalho />
        <div className='Fundo'>
          <img onClick={() => navigate("/perfil")} className="Perfil" src={perfil} alt="ImagemPerfil" />
       
        <div className="ListaJogadores">
          <h2>Jogadores do Time</h2>
          <ul>
            {jogadores.map((jogador) => (
              <li key={jogador.player.id}>
                <img src={jogador.player.photo} alt={jogador.player.name} />
                <p>{jogador.player.name}</p>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Time;