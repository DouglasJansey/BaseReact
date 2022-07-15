import { FaListAlt, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';

import { Nav } from './styled';

export default function Header() {
const id = useSelector(state => state.auth.user.id)

  return (
    <Nav>
      <Link to='/alunos'>
        <FaListAlt size="24px" />
      </Link>
      <Link to={`${id ?'/useredit':'/register'}`}>
        <FaSignInAlt />
      </Link>
      <Link to="/login">
        <FaUserAlt />
      </Link>
    </Nav>
  );
}
