import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as authSelectors from '../../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#fff',
  },
  activeLink: {
    color: '#ff5100',
  },
};

export default function Navigaton() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Телефонная книга
        </NavLink>
      )}
    </div>
  );
}
