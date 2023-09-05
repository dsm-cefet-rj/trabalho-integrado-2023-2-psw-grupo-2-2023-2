import React from "react";
import "../styles/Botao.css"

const Botao = ({Text, onClick, Type = "button"}) => {
    return(
        <button
        className = "Botao"
        type ={Type}
        onClick ={onClick}
        >
            {Text}
        </button>    

        
    ) 
};

export default Botao;