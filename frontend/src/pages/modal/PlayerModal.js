import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import dadosBrasil from '../../dados/Jogadores/DadosJogadoresBrasileiro.json';
import dadosAlemanha from '../../dados/Jogadores/DadosJogadoresAlemanha.json';
import dadosInglaterra from '../../dados/Jogadores/DadosJogadoresInglaterra.json';
import dadosFranca from '../../dados/Jogadores/DadosJogadoresFrances.json';
import dadosEspanha from '../../dados/Jogadores/DadosJogadoresEspanhol.json';
import dadosItalia from '../../dados/Jogadores/DadosJogadoresItaliano.json';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root'); // Define o elemento raiz do seu aplicativo

function PlayerModal({ isOpen, onRequestClose, ligaId, jogadorId }) {
  const [activeTab, setActiveTab] = useState('geral');
  const [dadosLiga, setDadosLiga] = useState(null);
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);

  useEffect(() => {
    setActiveTab('geral'); // Define a aba "Geral" como padrão ao abrir o modal

    // Carrega os dados da liga com base no ID da liga
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
    setDadosLiga(dadosLiga);

    // Encontre o jogador com base no jogadorId
    const jogadorEncontrado = dadosLiga.response.find(
      (jogador) => jogador.player.id === jogadorId
    );
    setJogadorSelecionado(jogadorEncontrado);
  }, [isOpen, ligaId, jogadorId]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Player Modal"
    >
      <div>
        <button onClick={onRequestClose}>Fechar</button>
        {jogadorSelecionado ? (
          <>
            <h2>{jogadorSelecionado.player.name}</h2>
            <img
              src={jogadorSelecionado.player.photo}
              alt={jogadorSelecionado.player.name}
            />
          </>
        ) : (
          <p>Jogador não encontrado</p>
        )}

        <div>
          <button onClick={() => setActiveTab('geral')}>Geral</button>
          <button onClick={() => setActiveTab('ataque')}>Ataque</button>
          <button onClick={() => setActiveTab('meio-campo')}>Meio-campo</button>
          <button onClick={() => setActiveTab('defesa')}>Defesa</button>
        </div>

        {activeTab === 'geral' && jogadorSelecionado && (
          <div>
            <h3>Estatísticas Gerais</h3>
            <p>Aparecimentos: {jogadorSelecionado.statistics[0].games.appearences}</p>
            <p>Posição: {jogadorSelecionado.statistics[0].games.position}</p>
            <p>Rating: {jogadorSelecionado.statistics[0].games.rating}</p>
            <p>Cartões Amarelos: {jogadorSelecionado.statistics[0].cards.yellow}</p>
            <p>Cartões Vermelhos: {jogadorSelecionado.statistics[0].cards.red}</p>
          </div>
        )}

        {/* Adicione outras abas de estatísticas aqui... */}
      </div>
    </Modal>
  );
}

export default PlayerModal;