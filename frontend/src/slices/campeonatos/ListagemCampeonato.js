import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteCampeonatoServer, fetchCampeonatos, selectAllCampeonatos } from './CampeonatosSlice';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TabelaCampeonatos from './TabelaCampeonatos';

/**
 * @module campeonatos/ListagemCampeonatos
 */

function ListagemCampeonato(props) {
  const campeonatos = useSelector(selectAllCampeonatos);
  const status = useSelector(state => state.campeonatos.status);
  const error = useSelector(state => state.campeonatos.error);

  const dispatch = useDispatch();

  function handleClickExcluirCampeonato(id) {
    dispatch(deleteCampeonatoServer(id));
  }

  useEffect(() => {
    if (status === 'not_loaded') {
      dispatch(fetchCampeonatos());
    } else if (status === 'failed') {
      // setTimeout(()=>dispatch(fetchCampeonatos()), 5000);
    }
  }, [status, dispatch]);

  let tabelaCampeonatos;
  if (status === 'loaded' || status === 'saved' || status === 'deleted') {
    tabelaCampeonatos = <TabelaCampeonatos campeonatos={campeonatos} onClickExcluirCampeonato={handleClickExcluirCampeonato} />;
  } else if (status === 'loading') {
    tabelaCampeonatos = <div id="campeonatos">Carregando os campeonatos...</div>;
  } else if (status === 'not_loaded') {
    tabelaCampeonatos = '';
  } else {
    tabelaCampeonatos = <div id="campeonatos">Error: {error}</div>;
  }

  return (
    <>
      <div id="lbl_titulo_pagina"><Typography variant="h3">Listagem de Campeonatos</Typography></div><br />
      <Button sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', border: 0, borderRadius: 3, boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', color: 'white', height: 48, padding: '0 30px' }} id="Novo Campeonato" name="btn_novo_campeonato" to="/campeonatos/novo" component={Link}>Novo Campeonato</Button><br /><br />
      {tabelaCampeonatos}
    </>
  );
}

export default ListagemCampeonato;
