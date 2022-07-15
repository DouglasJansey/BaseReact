/* eslint-disable consistent-return */
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute(isClosed){
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if(isClosed && !isLoggedIn){
    return <Navigate to='/login' replace />

  }

   return <Outlet />
  }

PrivateRoute.defaultProps = {
  isClosed: false,
}


