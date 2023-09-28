import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Contacts } from 'pages/Contacts';
import { PrivateRoute } from 'components/PrivateRoute';

import { Register } from 'pages/Register';

import { LoginPage } from 'pages/LoginPage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/operations';
import { Home } from 'components/Home/Home';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route path="/login " />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
          />
        </Route>
      </Routes>
    </div>
  );
};
