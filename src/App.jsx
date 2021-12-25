import React, { lazy, Suspense, useEffect } from 'react';
import AppBar from './components/AppBar';
import { Switch } from 'react-router-dom';
import * as authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Container from './components/Container/Container';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName: "home-view" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView.jsx' /* webpackChunkName: "register-view" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView.jsx' /* webpackChunkName: "login-view" */),
);

const ContactView = lazy(() =>
  import('./views/ContactView.jsx' /* webpackChunkName: "Contact-view" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Loading in progress...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path={'/register'} restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path={'/login'} restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path={'/contacts'} >
            <ContactView />
            </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
