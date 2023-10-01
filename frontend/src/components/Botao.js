import React from "react";
import "../styles/Botao.css"

const Botao = ({Text, onClick}) => {
    return(
        <button
        className = "Botao"
        onClick ={onClick}
        >
            {Text}
        </button>    

        
    ) 
};

export default Botao;