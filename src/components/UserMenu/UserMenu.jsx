import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import defaultAvatar from './chel.png';
import * as authOperations from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout} className={styles.btn}>
        Выхода нет
      </button>
    </div>
  );
}
