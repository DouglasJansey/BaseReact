import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {get} from 'lodash';
import {FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import { Container } from '../../styles/GlobalStyles';
import {AlunoContainer, ProfilePicture} from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(false)

useEffect(() => {
  async function getData(){
    setLoading(true);
    const response = await axios.get('/alunos')
    setAlunos(response.data);
    setLoading(false);
  }

  getData();
},[]);

  return (
    <Container>
      <Loading isLoading={loading} />
      <h1>ALUNOS</h1>
      <AlunoContainer>
        {alunos.map(aluno => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
            {get(aluno,'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt='' />
                ):(
                  <FaUserCircle size={50} />
                )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`} >
               <FaEdit size={16} />
               </Link>
            <Link to={`/aluno/${aluno.id}`} >
               <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
