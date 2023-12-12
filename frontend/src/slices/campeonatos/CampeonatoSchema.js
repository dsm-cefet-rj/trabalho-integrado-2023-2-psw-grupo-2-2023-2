import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let campeonatoSchema = object().shape(
    {
        id:  number(),
        nome: string().required().max(30),
        country:string().required().max(30)
    }
)
