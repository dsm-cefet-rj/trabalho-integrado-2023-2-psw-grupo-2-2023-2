import "../styles/pesquisa.css"
import { useState } from "react"
function Pesquisa(){
const[textoDigitado, setTextoDigitado] = useState('')
    
    return(
        <section className="local">
            <input className="pesquisa"
                onBlur ={evento => setTextoDigitado(evento.target.value)}
                placeholder="Digite aqui"
            />
        </section>
        
    )
}

export default Pesquisa