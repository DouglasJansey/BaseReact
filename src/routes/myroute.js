import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

export default function MyRoute({component: Component, isClosed, ...rest }){
const isLoggedIn = true;

if(isLoggedIn){
  return(
    <Navigate to='/login' />
  )
}

  // eslint-disable-next-line react/jsx-props-no-spreading
   return  <Outlet />
  }


  MyRoute.defaultProps = {
    isClosed: false,
  }

  MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
    isClosed: PropTypes.bool,
  }
