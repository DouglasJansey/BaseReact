import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(state => state.click.botaoClicado)
  return (
    <Nav>
      <Link to='/'>
        <FaHome size="24px" />
      </Link>
      <Link to='/login'>
        <FaSignInAlt />
      </Link>
      <Link to="/hahaha">
        <FaUserAlt />
      </Link>
      {botaoClicado ? 'clicou' : 'Não clicou'}
    </Nav>
  );
}
