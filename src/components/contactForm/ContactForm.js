import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  ButtonContainer,
  ContactFormContainer,
  InputContainer,
  LabelContainer
} from './ContactFormStyled';

import {addNewContact, getContacts} from '../../redux/contacts';

export default function ContactForm() {
  const [name, setName] = useState('');
  const handleNameChange = event => {
    setName(event.target.value);
  };

  const [number, setNumber] = useState('');
  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const addNew = contact => dispatch(addNewContact(contact));

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addNew({
      name,
      number
    });

    setName('');
    setNumber('');
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <LabelContainer htmlFor="name">Name</LabelContainer>
      <InputContainer
        type="text"
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleNameChange}
        value={name}
      />
      <LabelContainer htmlFor="number">Number</LabelContainer>
      <InputContainer
        type="tel"
        id="number"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleNumberChange}
        value={number}
      />
      <ButtonContainer type="submit">Add contact</ButtonContainer>
    </ContactFormContainer>
  );
}
