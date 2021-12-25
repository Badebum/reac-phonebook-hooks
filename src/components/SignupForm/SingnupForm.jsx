import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './SingnupForm.module.css';
import * as authOperations from '../../redux/auth/auth-operations';

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };
// export default connect(null, mapDispatchToProps)(SignupForm);

export default function SignupForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Fill the Registration form');
      return;
    }

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Страница регистрации</h2>

      <form onSubmit={handleSubmit} className={styles.input_menu}>
        <div className={styles.input_item}>
          <label htmlFor="name" className={styles.form_label}>
            Имя
          </label>

          <input
            type="text"
            className={styles.input}
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="false"
          />
        </div>

        <div className={styles.input_item}>
          <label htmlFor="email" className={styles.form_label}>
            Почта
          </label>

          <input
            type="email"
            className={styles.input}
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="false"
          />
        </div>

        <div className={styles.input_item}>
          <label htmlFor="password" className={styles.form_label}>
            Пароль
          </label>

          <input
            type="password"
            className={styles.input}
            placeholder={'More than 7 symbols'}
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="false"
          />
        </div>

        <button type="submit" className={styles.sbt_button}>
          Зарегистрировать
        </button>
      </form>
    </div>
  );
}

// SignupForm.propTypes = {
//   onRegister: PropTypes.func.isRequired,
// };
