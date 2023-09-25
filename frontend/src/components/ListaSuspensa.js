import '../styles/ListaSuspensa.css'

import React from 'react';
import teamsList from './ListaTimes' // Importe a lista de equipes

const ListaSuspensa = (props) => {
  return (
    <div>
      <select required={props.obrigatorio} className='Lista'>
        {teamsList.map((team, index) => (
          <option key={index}>{team.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;


