import { FaListAlt, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to='/alunos'>
        <FaListAlt size="24px" />
      </Link>
      <Link to='/register'>
        <FaSignInAlt />
      </Link>
      <Link to="/login">
        <FaUserAlt />
      </Link>
    </Nav>
  );
}
