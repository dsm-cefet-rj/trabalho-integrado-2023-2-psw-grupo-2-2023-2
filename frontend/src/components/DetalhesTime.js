import React from 'react';

function DetalhesTime({ time }) {
  return (
    <div>
      <h2>{time.team.name}</h2>
      <img src={time.team.logo} alt={time.team.name} />
      <ul>
        {time.statistics.map((playerStats) => (
          <li key={playerStats.player.id}>
            <h3>{playerStats.player.name}</h3>
            <img src={playerStats.player.photo} alt={playerStats.player.name} />
            <p>Idade: {playerStats.player.age}</p>
            {/* Adicione outras informações dos jogadores aqui */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalhesTime;