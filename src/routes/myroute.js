import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


export default function MyRoute({component:Component,isClosed, ...rest}){
const isLoggedIn = isClosed;

  if(!isLoggedIn){
    return(
      <Redirect
      to={{pathname: '/login', state:{prevPath: rest.history.location.pathname}}}
      />

    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />
  }

  MyRoute.defaultProps = {
    isClosed: false,
  }

  MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
    isClosed: PropTypes.bool,
  }
