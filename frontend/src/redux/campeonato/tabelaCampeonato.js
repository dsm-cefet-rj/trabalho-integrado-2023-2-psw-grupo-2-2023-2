import React, {Component} from 'react';

export default class ListagemCampeonato extends Component{

    constructor(props){
        super(props);
        this.state ={
            campeonatos  : [
                {name: 'teste1', country:'brasil'},
                {name: 'teste2', country:'brasil'},
                {name: 'teste3', country:'brasil'},
           ]
        }
        setTimeout(() => {this.setState(
                {campeonatos : [{name:'teste4', country:'Brazil'}].concat(this.state.campeonatos)}
                )}, 2000);
    }
    render(){
        return(
            <>
                <div>
                    <button id="Novo Campeonato" name ="btn_novo_campeonato">
                        Novo Campeonato
                    </button>
                    <br/><br/>
                    <TabelaCampeonato campeonato ={this.state.campeonatos}/>
                </div>
            </>
            );
    }
}







const LinhaCampeonato = (props)=>{
    return(
        <tr>
            <td>{props.campeonato.name}</td>
            <td>{props.campeonato.country}</td>
        </tr>
    );
}

const TabelaCampeonato = (props)=> {
    return(
        <table id = "campeonatos" border = "1">
            <tbody>
                {props.campeonato.map((campeonato) =>
                    <LinhaCampeonato
                    key={campeonato.name}
                    campeonato={campeonato}                    
                    />
                    )
                }
            </tbody>

        </table>
    );
}

