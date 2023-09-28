import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: #0bb5e0;
  }
`;

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </nav>
  );
};
