import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  isAuthenticated,
  children,
  ...routeProps
}) {
  const usLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {usLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
