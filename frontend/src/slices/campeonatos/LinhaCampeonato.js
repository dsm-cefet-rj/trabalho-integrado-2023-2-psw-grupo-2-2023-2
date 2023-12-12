import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {Link } from "react-router-dom";

/**
 * @module campeonatos/LinhaCampeonato
 */

 /**
 * @typedef Campeonato
 * @type {object}
 * @property {number} id - 
 * @property {string} nome - 
 * @property {string} country- 
 */
 /**
  * 
  * @param {Campeonato} props.campeonato 
  */
function LinhaCampeonato(props){
    if(props != null && props.campeonato != null && props.campeonato.id != null){
         return(
            <tr><td><Link to={`/campeonatos/${props.campeonato.id}`}><button>{props.campeonato.nome}</button></Link></td>
                <td>{props.campeonato.country}</td>
                <td><IconButton id={`excluir_campeonato_${props.campeonato.id}`} name="excluir_campeonato" onClick={() => props.onClickExcluirCampeonato(props.campeonato.id)}><DeleteIcon /></IconButton></td>
            </tr>
        );
    }else{
        return(<tr><td colSpan={3}>Não foi possível exibir o campeonato.</td></tr>)
    }
}

export default LinhaCampeonato;