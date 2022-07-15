/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login() {
const dispatch = useDispatch();
const isLoading = useSelector(state => state.auth.isLoading);

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


function handleSubmit(e){
  e.preventDefault();

  let formErrors = false;

  if(!isEmail(email)){
    formErrors = true;
    toast.error('E-mail inválido!')
  }
  if(password.length < 6 || password.length > 50){
    formErrors = true;
    toast.error('Senha precisa ter entre 6 e 50 caracteres');
  }

  if(formErrors) return;


   dispatch(actions.loginRequest({ email, password }));
}

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input type='text'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Seu e-mail'
       />
        <input type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Sua Senha'
       />
      <button type='submit'> Entrar </button>
      </Form>
    </Container>
  );
}
