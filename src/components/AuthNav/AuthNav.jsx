import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: #0bb5e0;
  }
`;

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
};
