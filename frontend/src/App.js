
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Cadastro from './pages/Cadastro.js';
import Perfil from './pages/Perfil.js';
import Time from './pages/Time.js';
import Campeonato from './pages/Campeonato.js';
import Estatisticas from './pages/estatísticas.js';
import EditarPerfil from './pages/EditarPerfil.js';
import EditarJogadores from './pages/EditarJogadores.js';
import EditarCampeonatos from './pages/EditarCampeonatos.js';
import EditarTimes from './pages/EditarTimes.js';
import HomeAdmin from './pages/HomeAdmin.js';
import TimesADM from './pages/TimesADM.js';
import JogadoresADM from './pages/JogadoresADM.js';
import CampeonatosADM from './pages/CampeonatosADM.js';
import { Provider } from 'react-redux';
import store from './Store.js';


function App() {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
          <Route path = "/" element = {<Login/>}/>
                      <Route path = "/cadastro" element = {<Cadastro/>}/>
                      <Route path = "/perfil/:idteam" element = {<Perfil/>}/>
                      <Route path = "/editarperfil/:idteamUsuario" element = {<EditarPerfil/>}/>
                      <Route path = "/home" element={<Home/>}/>
                      <Route path = "/homeAdmin" element={<HomeAdmin/>}/>
                      <Route path = "/time/:id/:idteam" element = {<Time/>}/>
                      <Route path = "/stats/:ligaId/:jogadorId" element = {<Estatisticas/>}/>
                      <Route path = "/campeonato/:id" element = {<Campeonato/>}/>
                      <Route path = "/homeAdmin" element={<HomeAdmin/>}/>
                      <Route path = "/timesAdmin" element={<TimesADM/>}/>
                      <Route path = "/campeonatosAdmin" element={<CampeonatosADM/>}/>
                      <Route path = "/jogadoresAdmin" element={<JogadoresADM/>}/>
                      <Route path = "/editarCampeonatos" element={<EditarCampeonatos/>}/>
                      <Route path = "/editarJogadores" element={<EditarJogadores/>}/>
                      <Route path = "/editarTimes" element={<EditarTimes/>}/>
                      <Route path = "/time/:id/:idteam/:idteamUsuario" element = {<Time/>}/>
                      <Route path = "/stats/:ligaId/:jogadorId/:idteam" element = {<Estatisticas/>}/>
                      <Route path = "/campeonato/:idteam/:id" element = {<Campeonato/>}/>
                      <Route path = "*" element = {<Login/>}/>
          </Routes>
      </Router>
     </Provider>

    );
}

export default App;
