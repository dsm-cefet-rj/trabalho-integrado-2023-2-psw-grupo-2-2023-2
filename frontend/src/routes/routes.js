import { Fragment } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import Cadastro from '../pages/Cadastro.js'
import Perfil from '../pages/Perfil.js'
import Time from '../pages/Time.js'
import Campeonato from '../pages/Campeonato.js'



const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path = "/" element = {<Login/>}/>
                    <Route path = "/cadastro" element = {<Cadastro/>}/>
                    <Route path = "/perfil" element = {<Perfil/>}/>
                    <Route path = "/home" element={<Home/>}/>
                    <Route path = "/time/:id/:idteam" element = {<Time/>}/>
                    <Route path = "/campeonato/:id" element = {<Campeonato/>}/>
                    <Route path = "*" element = {<Login/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>

    );
};



export default RoutesApp;