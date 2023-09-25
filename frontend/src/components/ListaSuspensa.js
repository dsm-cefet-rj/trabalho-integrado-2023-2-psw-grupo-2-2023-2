import '../styles/ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div >
            <select required={props.obrigatorio} className='Lista'>
                {props.itens.map((item , index) => {
                return <option key={index}>{item}</option>
            })}
            </select>
        </div>
    )
}

export default ListaSuspensa




