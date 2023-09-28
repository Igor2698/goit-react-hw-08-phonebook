import { Route, Routes } from 'react-router-dom';
// import Form from '../Form';
// import Section from '../Section';
// import ContactsList from '../ContactsList';
// import Filter from '../Filter';
// import { selectContacts, selectIsLoading } from 'redux/selectors/selectors';
// import { selectVisibleContacts } from 'redux/selectors/selectors';
// import { fetchContacts } from 'redux/operations';
// import { Loader } from 'components/Grid';
import { useSelector } from 'react-redux';
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
