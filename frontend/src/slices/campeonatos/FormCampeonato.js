import React, {useState} from 'react';
import { useParams, useNavigate  } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {addCampeonatoServer, updateCampeonatoServer, selectCampeonatosById} from './CampeonatosSlice'
import {campeonatoSchema} from './CampeonatoSchema';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import Button from '@mui/material/Button';


export default function FormCampeonato(props){

    const navigate = useNavigate();
    const dispatch = useDispatch()
    let { id } = useParams();
    
    const campeonatoFound = useSelector(state => selectCampeonatosById(state, id))
    const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(campeonatoSchema)
        });
        

    const [campeonatoOnLoad] = useState(
        id ? campeonatoFound ?? campeonatoSchema.cast({}): campeonatoSchema.cast({}));

    const [actionType, ] = useState(
        id ? campeonatoFound 
                ? 'campeonatos/updateCampeonato'
                : 'campeonatos/addCampeonato'
                : 'campeonatos/addCampeonato');


    function onSubmit(campeonato){
        if(actionType === 'campeonatos/addCampeonato'){
            dispatch(addCampeonatoServer(campeonato));
        }else{
            dispatch(updateCampeonatoServer({...campeonato, id: campeonatoFound.id}));
        }
        
        navigate('/campeonatos');
    }
    let pageTitle;
    if(actionType === 'campeonatos/addCampeonato'){
        pageTitle = 'Novo Campeonato';
    }else{
        pageTitle = 'Alteração de Campeonato';
    }
    
    return(<>
            <h1>{pageTitle}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nome:
                <input type="text" name="nome" id="nome" defaultValue={campeonatoOnLoad.nome} ref={register} />
                &nbsp;<span id="nome_err_msg">{errors.nome?.message}</span>
            </label>
            <br/>
            <label>
                País:
                <input type="text" name="country" id="country" defaultValue={campeonatoOnLoad.country} ref={register} />
                &nbsp;<span id="country_err_msg">{errors.country?.message}</span>
            </label>
            <br/>
            <br/>   
            <Button type="submit" id="Salvar" name="btn_salvar_campeonato" variant="contained" color="primary">Salvar</Button>
            </form>
          </>
    );
}