import React, {useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import {useSelector, useDispatch} from 'react-redux';

import ContactListItem from '../contactListItem/ContactListItem';

import {
  deleteContact,
  fetchContacts,
  getFilteredContacts,
  getLoading
} from '../../redux/contacts';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const isLoadingContacts = useSelector(getLoading);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoadingContacts && <h2>Loading...</h2>}
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={uuid()}
          deleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
}
