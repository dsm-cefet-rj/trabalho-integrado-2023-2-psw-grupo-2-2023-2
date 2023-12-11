import React from 'react';
import LinhaCampeonato from './LinhaCampeonato';

/**
 * @module campeonatos/TabelaCampeonatos
 */


/**
 * Renderiza a tabela de campeonatos.
 * 
 * @param {object} props.campeonatos - Lista de campeonatos para ser exibida na tabela.
 * 
 */
function TabelaCampeonatos(props){
    if(props != null && props.campeonatos != null && props.campeonatos.length > 0){
      return(
          <table id="campeonatos" border="1">
              <tbody>
                {props.campeonatos.map((campeonato) => <LinhaCampeonato key={campeonato.id} campeonato={campeonato} 
                onClickExcluirCampeonato={props.onClickExcluirCampeonato} />)}
              </tbody>
          </table>
      );
    }else{
      return(<div id="campeonatos">Não existem campeonatos a serem exibidos.</div>)
    }
}

export default TabelaCampeonatos;