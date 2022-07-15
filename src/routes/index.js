import { Routes, Route } from 'react-router-dom';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import PrivateRouter from './PrivateRoute';

export default function Rotas(){

return(
    <Routes>
          <Route path='/' element={<PrivateRouter isClosed />} >
            <Route path='/alunos' element={<Alunos />} />

            <Route path='/aluno' element={<Aluno />} />
            <Route path='/aluno/:id/edit' element={<Aluno />} />
            <Route path='/fotos/:id' element={<Fotos />} />

          </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Page404 />} />
          {/*



           */}

  </Routes>

);

}
