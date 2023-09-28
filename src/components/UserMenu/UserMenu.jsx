import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/hooks';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  console.log(currentHour);
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
    <div className={css.userMenu}>
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
  );
};
