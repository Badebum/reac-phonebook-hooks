import React, { useEffect } from 'react';
import ContactList from '../../components/ContactList';
import ContactEditor from '../../components/ContactEditor';
import Filter from '../../components/Filter';

import { useDispatch } from 'react-redux';
import * as operatimport from '../../redux/contact/contact.operations';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operatimport.fetchContact());
  }, [dispatch]);

  return (
    <div className={styles.cont_container}>
      <div className={styles.cont_form}>
        <h2>Add contact</h2>
        <ContactEditor />
      </div>

      <div className={styles.cont_list}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
