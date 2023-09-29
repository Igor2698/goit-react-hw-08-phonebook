import { useAuth } from 'hooks/hooks';

import css from './Profile.module.css';
import { GiExitDoor } from 'react-icons/gi';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const StyledExitIcon = styled(GiExitDoor)`
  font-size: 18px;
  width: 30px;

  height: 30px;

  // &:hover {
  //   color: white;
  // }
`;

export const Profile = () => {
  const dispatch = useDispatch();
  const {
    user: { name, email },
  } = useAuth();

  return (
    <div className={css.profileWrapper}>
      <h1 className={css.profileTitle}>Profile</h1>

      <img
        className={css.imgProfile}
        style={{ width: '200px' }}
        src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
        alt=""
      />
      <div className={css.textProfileWrapper}>
        <p className={css.describeProfile}>Name:</p>
        <p>{name}</p>
        <p className={css.describeProfile}>Email:</p>
        <p>{email}</p>
      </div>
      <button
        onClick={() => dispatch(logOut())}
        className={css.buttonProfile}
        type="button"
      >
        Logout
        <StyledExitIcon />
      </button>
    </div>
  );
};

//
