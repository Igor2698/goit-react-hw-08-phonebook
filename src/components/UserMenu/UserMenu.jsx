import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/hooks';
import { NavLink } from 'react-router-dom';

import css from './UserMenu.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: #0bb5e0;
  }
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = '';
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good day';
  } else if (currentHour > 18 && currentHour < 23) {
    greeting = 'Good evening';
  } else {
    greeting = 'Good night';
  }

  return (
    <>
      <div className={css.userMenu}>
        <StyledLink to="/profile">User Profile</StyledLink>
        <p className={css.greetingText}>
          {greeting}, {user.name}
        </p>

        <button
          className={css.userMenuButton}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </button>
      </div>
    </>
  );
};
