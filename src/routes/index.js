import React from 'react';
import { Routes as Switch, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Rotas(){
  const isLoggedIn = true;

return(
  <Switch>
        <Route path='/' element={ isLoggedIn ? <Login /> : <Page404 />} />
        <Route path='*' element={<Page404 />} />
  </Switch>

);

}