/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from "../../components/Loading";
import axios from '../../services/axios'


export default function UserEdit() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);

const navigate = useNavigate();

async function handleSubmit(e){
  e.preventDefault();
  let formErrors = false;

  if(nome.length < 3 || nome.length > 255){
    formErrors = true;
    toast.error('Nome deve ter entre 3 e 255 caracteres')
  }
  if(!isEmail(email)){
    formErrors = true;
    toast.error('E-mail inválido!')
  }
  if(password.length < 6 || password.length > 50){
    formErrors = true;
    toast.error('Senha deve ter entre 6 e 50 caracteres')
  }
  if(formErrors) return;
  setLoading(true);

  try{
    await axios.post('/users/', {
      nome,
      password,
      email,
    });
    toast.success('Usuário criado com sucesso!')
    setLoading(false);

    navigate('/login')

  }catch(err){
    const errors = get(err, 'response.data.errors', [])

    errors.map(error=> toast.error(error));
    setLoading(false);

  }


}

return (
    <Container>
         <Loading isLoading={loading} />

      <h1>Edite sua Conta</h1>
      <Form onSubmit={ handleSubmit }>
        <label htmlFor='nome'>
          Nome:
          <input type='text'
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder='Seu nome'
          />
        </label>
        <label htmlFor='email'>
          E-mail:
          <input type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Seu email'
          />
        </label>
        <label htmlFor='password'>
          Senha:
          <input type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Sua senha'
          />
        </label>
        <button type='submit' >Salvar</button>
      </Form>
    </Container>
  );
}
