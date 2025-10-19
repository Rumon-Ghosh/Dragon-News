import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation()

  // console.log(location.pathname)

  if(loading) return <Loading></Loading>

  if (user && user.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={`/auth`}></Navigate>
  }
};

export default PrivateRoutes;