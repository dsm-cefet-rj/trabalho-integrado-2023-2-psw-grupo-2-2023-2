import React from "react";
import "../styles/Botao.css"

const Botao = ({Text, onClick, Type = "button"}) => {
    return(
        <Button
        className = "Botao"
        type ={Type}
        onClick ={onClick}
        >
            {Text}
        </Button>    

        
    ) 
};

export default Botao;