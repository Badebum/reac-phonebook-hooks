import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import * as actions from '../../redux/contact/contact-actions';
import { getFilter } from '../../redux/contact/contact-selector';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label className={styles.titel}>
      Search
      <input
        type="text"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        className={styles.input}
      />
    </label>
  );
}
