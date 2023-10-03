import { Fragment } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import Cadastro from '../pages/Cadastro.js'
import Perfil from '../pages/Perfil.js'
import Time from '../pages/Time.js'
import Campeonato from '../pages/Campeonato.js'
import Estatisticas from '../pages/estatísticas.js'
import EditarPerfil from '../pages/EditarPerfil.js'




const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path = "/" element = {<Login/>}/>
                    <Route path = "/cadastro" element = {<Cadastro/>}/>
                    <Route path = "/perfil/:idteam" element = {<Perfil/>}/>
                    <Route path = "/editarperfil/:idteamUsuario" element = {<EditarPerfil/>}/>
                    <Route path = "/home/:idteam" element={<Home/>}/>
                    <Route path = "/time/:id/:idteam/:idteamUsuario" element = {<Time/>}/>
                    <Route path = "/stats/:ligaId/:jogadorId/:idteam" element = {<Estatisticas/>}/>
                    <Route path = "/campeonato/:idteam/:id" element = {<Campeonato/>}/>
                    <Route path = "*" element = {<Login/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>

    );
};



export default RoutesApp;