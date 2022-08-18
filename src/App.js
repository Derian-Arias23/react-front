import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import Inicio from './components/inicio';
import Premios from './components/premios';
import Solicitudes from './components/solicitudes';
import NavbarRa from './layaouts/navbar';
import Ranking from './components/ranking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavbarRa/> }>
            <Route index element={ <Inicio/> } />
            <Route path='premios' element={ <Premios/> }/>
            <Route path='solicitudes' element={ <Solicitudes/> }/>
            <Route path='ranking' element={ <Ranking/> }/>

            <Route path='*' element={ <Navigate replace to="/"/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
