import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import * as operations from '../../redux/contact/contact.operations';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contact/contact-selector';

export default function ContactList() {
  const dispatch = useDispatch();
  const contact = useSelector(getVisibleContacts);

  const deleteContact = id => dispatch(operations.deleteContacts(id));

  return (
    <ul className={styles.container}>
      {contact.map(({ id, name, number }) => (
        <li key={id} className={styles.list}>
          <p>
            {name} {number}
          </p>

          <button
            type="button"
            className={styles.button}
            onClick={() => deleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func,
};
