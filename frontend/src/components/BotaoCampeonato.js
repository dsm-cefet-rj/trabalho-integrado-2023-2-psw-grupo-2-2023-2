import React from "react";
import "../styles/BotaoCampeonato.css"

const BotaoCampeonato = ({Text, onClick, Type = "button"}) => {
    return(
        <button
        className = "BotaoCampeonato"
        type ={Type}
        onClick ={onClick}
        >
            {Text}
        </button>    

        
    ) 
};

export default BotaoCampeonato;