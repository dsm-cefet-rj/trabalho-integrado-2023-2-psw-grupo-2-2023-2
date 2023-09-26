import React, { useState } from 'react';

function PlayerStats({ jogador }) {
  return (
    <div className="EstatisticasContainer">
      <h3>Estatísticas Gerais</h3>
      <p>Aparecimentos: {jogador.statistics[0].games.appearences}</p>
      <p>Posição: {jogador.statistics[0].games.position}</p>
      <p>Rating: {jogador.statistics[0].games.rating}</p>
      <p>Cartões Amarelos: {jogador.statistics[0].cards.yellow}</p>
      <p>Cartões Vermelhos: {jogador.statistics[0].cards.red}</p>
    </div>
  );
}

function PlayerAttackStats({ jogador }) {
  return (
    <div className="EstatisticasContainer">
      <h3>Estatísticas de Ataque</h3>
      <p>Chutes Totais: {jogador.statistics[0].shots.total}</p>
      <p>Chutes no Alvo: {jogador.statistics[0].shots.on}</p>
      <p>Gols Totais: {jogador.statistics[0].goals.total}</p>
      <p>Assistências: {jogador.statistics[0].goals.assists}</p>
    </div>
  );
}

function PlayerMidfieldStats({ jogador }) {
  return (
    <div className="EstatisticasContainer">
      <h3>Estatísticas de Meio-campo</h3>
      <p>Passes Totais: {jogador.statistics[0].passes.total}</p>
      <p>Precisão de Passe: {jogador.statistics[0].passes.accuracy}</p>
      <p>Tentativas de Drible: {jogador.statistics[0].dribbles.attempts}</p>
      <p>Sucesso no Drible: {jogador.statistics[0].dribbles.success}</p>
    </div>
  );
}

function PlayerDefenseStats({ jogador }) {
  return (
    <div className="EstatisticasContainer">
      <h3 className='StatsLetras'>Estatísticas de Defesa</h3>
      <p className='StatsLetras'>Duelos Totais: {jogador.statistics[0].duels.total}</p>
      <p className='StatsLetras'>Duelos Vencidos: {jogador.statistics[0].duels.won}</p>
      <p className='StatsLetras'>Faltas Cometidas: {jogador.statistics[0].fouls.committed}</p>
    </div>
  );
}

function PlayerDetails({ jogador }) {
  const [activeTab, setActiveTab] = useState('geral');

  return (
    <div>
      <div className = "ContainerFotoStats">
        <img src={jogador.player.photo} alt={jogador.player.name} />
        <h2>{jogador.player.name}</h2>
      </div> 
      <div className='BotoesJogadoresStats'>
        <button className = "ImagemNomeJogadorStats" onClick={() => setActiveTab('geral')}>Geral</button>
        <button className = "ImagemNomeJogadorStats" onClick={() => setActiveTab('ataque')}>Ataque</button>
        <button className = "ImagemNomeJogadorStats" onClick={() => setActiveTab('meio-campo')}>Meio-campo</button>
        <button className = "ImagemNomeJogadorStats" onClick={() => setActiveTab('defesa')}>Defesa</button>
      </div>

      {activeTab === 'geral' && <PlayerStats jogador={jogador} />}
      {activeTab === 'ataque' && <PlayerAttackStats jogador={jogador} />}
      {activeTab === 'meio-campo' && <PlayerMidfieldStats jogador={jogador} />}
      {activeTab === 'defesa' && <PlayerDefenseStats jogador={jogador} />}
    </div>
  );
}

export default PlayerDetails;