import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Container,
  MainTitle,
  SecondTitle,
} from './Container/Container.styled';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import FilterForm from './Filter/Filter';
import Contacts from './Contacts/Contacts';
import useLocalStorage from '../hooks/hooks';

const CONTACTS_LIST = 'phone_contacts';

export function App() {
  const [contacts, setContacts] = useLocalStorage(CONTACTS_LIST, []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const checkName = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts([...contacts, newContact]);
  };

  const removeContact = id => {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <PhonebookForm addContact={addContact} />
      <SecondTitle>Contacts</SecondTitle>
      <FilterForm label="Find contacts by name" onChange={handleFilterChange} />
      {contacts.length === 0 ? (
        <p>You don't have contacts yet</p>
      ) : (
        <Contacts options={filteredContacts} removeContact={removeContact} />
      )}
    </Container>
  );
}
