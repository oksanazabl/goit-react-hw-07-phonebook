import css from './PhonebookContatcs.module.css';

import {   deleteContact } from 'redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts  } from 'redux/selectors';

const PhonebookContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(state => state.filter.filter).toLowerCase();

   const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );


  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhonebookContacts;
