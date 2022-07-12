import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import * as exempleActions from '../../store/modules/exemple/actions'

export default function Login() {
  const dispatch = useDispatch();

function handleClick(e){
  e.preventDefault();
  dispatch(exempleActions.requestBotao());
}

  return (
    <Container>
      <h1>Login</h1>
      <button type="button" onClick={handleClick}>Clique</button>
    </Container>
  );
}
