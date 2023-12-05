import React, {useState, useEffect} from "react";
import {Routes, Route, Link } from 'react-router-dom';

export default function FormCampeonato(props){
  const [campeonato, setCampeonato] = useState({});

  function handleInputChange(e){
    setCampeonato({...campeonato, [e.target.name]:e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    props.setCampeonato(props.campeonato.concat(campeonato))
  }


  return(
    <>
      <h1>FORM CAMPEONATO</h1>
      <nav>
                   <ul>
                     <li>
                       <Link to="/homeAdmin">Home</Link>
                     </li>
                     <li>
                       <Link to="/campeonatos/novo">Novo Campeonato</Link>
                     </li>
                     <li>
                       <Link to="/campeonatosAdmin">Campeonatos</Link>
                     </li>
                   </ul>
     </nav>
      <forn onSubmit={handleSubmit}>
        <label>
          Nome Campeonato:
          <input type="text" name="nome" value ={campeonato.name} onChange={handleInputChange}/>
        </label>
        <br/>
        <label>
          País Campeonato:
          <input type="text" name="pais" value ={campeonato.country} onChange={handleInputChange}/>
        </label>
        <br/>
        <input type="submit" vale="salvar"/>
      </forn>
    </>
  );
  
}