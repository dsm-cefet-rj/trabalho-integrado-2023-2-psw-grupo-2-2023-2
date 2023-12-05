import React, {useState} from 'react';

export default function ListagemCampeonato(props){
    const[campeonatos, setCampeonato] = useState({name: 'teste1', country:'brasil'},
                                                  {name: 'teste2', country:'brasil'},
                                                  {name: 'teste3', country:'brasil'},)
    
       
        setTimeout(() => {setCampeonato(
                {campeonatos : [{name:'teste4', country:'Brazil'}].concat(this.state.campeonatos)}
                )}, 2000);
                this.handleClickExcluirCampeonato = this.handleClickExcluirCampeonato.bind(this);
    
    function handleClickNovoCampeonato(param){
        alert(param);
    }

    function handleClickExcluirCampeonato(name){
        setCampeonato(campeonatos.filter((value) => value.name !== name));
    }    

   
        return(
            <>
                <div id ='titulo_pagina'> Listagem de Campeonatos</div> <br/>
                    <button id="Novo Campeonato" name ="btn_novo_campeonato" onClick={() =>  this.handleClickNovoCampeonato('msg')} > Novo Campeonato</button><br/><br/>
                    <TabelaCampeonato campeonatos ={this.state.campeonatos} onClickExcluirCampeonato = {this.handleClickExcluirCampeonato}/>
                
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

