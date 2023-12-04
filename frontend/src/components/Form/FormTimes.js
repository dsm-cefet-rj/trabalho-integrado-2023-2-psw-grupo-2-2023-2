import React, {useState, useEffect} from 'react';
import{ useHistory } from "react-router-dom";

export default function FormTimes(props){

     const[ time, setTime] = useState({});
     const history = useHistory();

     function handleInputChange(e){
          setTime( {...time, [e.target.name]: e.target.value});
     }

     function handleSubmit(e){
          e.preventDefault();
          props.setTime(props.times.concat.concat(time));
          props.dispatch({type: 'add_time', payload: time})
          history.push('/times');
     }

     useEffect(() => {document.title = 
          'Time: ${time.nome}';
          return () => {document.title = 'Título'}

     }, [time.nome]);

}