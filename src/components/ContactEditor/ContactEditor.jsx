import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Contact.module.css';
import * as operations from '../../redux/contact/contact.operations';
import * as contactsSelectors from '../../redux/contact/contact-selector';

export default function ContactEditor() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
        break;
    }
  }, []);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (contacts.some(elm => elm.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${name} is already in contacts`);
      }
      if (
        contacts.some(elm => elm.number.toLowerCase() === number.toLowerCase())
      ) {
        return alert(`${number} is already in contacts`);
      }

      if (name !== '') {
        dispatch(operations.addContact({ name, number }));

        reset();
        return;
      }
      alert('ERROR');
    },
    [dispatch, contacts, name, number],
  );

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <p>Имя</p>
      <input
        type="text"
        className={styles.input}
        value={name}
        onChange={handleChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <p>Номер телефона</p>
      <input
        type="tel"
        className={styles.input}
        value={number}
        onChange={handleChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button type="submit" className={styles.sub_btn}>
        save contact
      </button>
    </form>
  );
}
