import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import styles from './LoginForm.module.css';

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);

        break;
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (!email || !password) {
        alert('Fill the Login form');
        return;
      }

      dispatch(authOperations.logIn({ email, password }));

      setEmail('');
      setPassword('');
    },
    [email, password, dispatch],
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Страница логина</h1>

      <form
        className={styles.input_menu}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className={styles.input_item}>
          <label className={styles.form_label}>
            Почта
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="false"
            />
          </label>
        </div>

        <div className={styles.input_item}>
          <label className={styles.form_label}>
            Пароль
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete="false"
            />
          </label>
        </div>

        <button type="submit" className={styles.sbt_button}>
          Войти
        </button>
      </form>
    </div>
  );
}
