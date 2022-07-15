/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { Container, Load } from './styled';

export default function Loading({isLoading}){
  if(!isLoading) return <></>;
  return(
    <>
        <Load />
        <Container>
          <div />
        </Container>
    </>

  );
}

Loading.propTypes = {
  isLoading: false,
};

Loading.propTypes={
  isLoading: PropTypes.bool,
};
