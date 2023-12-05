import React from 'react';
import {Link} from 'react-router-dom';
export default function ListagemCampeonato(props){
   
    

    function handleClickExcluirCampeonato(name){
        props.setCampeonato(props.campeonatos.filter((value) => value.name !== name));
    }    

   
        return(
            <>
              <div id ='titulo_pagina'> Listagem de Campeonatos</div> <br/>
                    <Link to= "/campeonatos/novo"><button id="Novo Campeonato" name ="btn_novo_campeonato"> Novo Campeonato</button></Link><br/><br/>
                    <TabelaCampeonato campeonatos ={props.campeonatos} onClickExcluirCampeonato = {handleClickExcluirCampeonato}/>
            </>
            );
    

 

}


const LinhaCampeonato = (props)=>{
    return(
        <tr>
            <td>{props.campeonato.name}</td>
            <td>{props.campeonato.country}</td>
            <td><button id='excluir_campeonato' name='excluir_campeonato' onClick = {()=> props.onClickExcluirCampeonato(props.campeonato.name) }  > X</button></td>
        </tr>
    );
}

const TabelaCampeonato = (props)=> {
    return(
        <table id = "campeonatos" border = "1">
            <tbody>
                {props.campeonatos.map((campeonato) =>
                    <LinhaCampeonato
                    key={campeonato.name}
                    campeonato={campeonato}  
                    onClickExcluirCampeonato={props.onClickExcluirCampeonato}                  
                    />
                    )
                }
            </tbody>

        </table>
    );
}

