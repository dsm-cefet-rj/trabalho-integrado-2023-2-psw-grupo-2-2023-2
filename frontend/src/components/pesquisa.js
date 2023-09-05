import "../styles/pesquisa.css"
import Input from "../Input"
import { useState } from "react"
function Pesquisa(){
const[textoDigitado, setTextoDigitado] = useState('')
    
    return(
        <section>
            <h2>Pesquisa</h2>
            <Input
                onBlur ={evento => setTextoDigitado(evento.target.value)}
            />
        </section>
        
    )
}

export default Pesquisa