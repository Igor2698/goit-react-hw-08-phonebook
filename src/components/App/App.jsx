import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';

import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from 'hooks/hooks';
import { refreshUser } from 'redux/auth/operations';
import { ToastContainer } from 'react-toastify';

import { Loader } from 'components/Grid';

const Home = lazy(() => import('../../pages/Home/Home'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const Register = lazy(() => import('pages/Register'));
const UserProfile = lazy(() => import('pages/UserProfile'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <ToastContainer autoClose={3000} />
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
            <Route
              path="/profile"
              element={
                <PrivateRoute component={<UserProfile />} redirectTo="/login" />
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
    </>
  );
};
