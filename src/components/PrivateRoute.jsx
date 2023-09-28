import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  console.log(isLoggedIn);
  // console.log(shouldRedirect);
  // console.log(isRefreshing);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
