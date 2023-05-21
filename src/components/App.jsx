import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import FilterForm from './Filter/Filter';
import Contacts from './Contacts/Contacts';
import { filter, getFilter } from './Redux/Filter/filterSlice';
import {
  addContact,
  removeContact,
  getContacts,
} from './Redux/Contacts/contactsSlice';
import {
  Container,
  MainTitle,
  SecondTitle,
} from './Container/Container.styled';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const addContacts = (name, number) => {
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

    dispatch(addContact(newContact));
  };

  const removeContacts = id => {
    return dispatch(removeContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  };

  const handleFilterChange = e => {
    dispatch(filter(e.target.value));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <PhonebookForm addContact={addContacts} />
      <SecondTitle>Contacts</SecondTitle>
      <FilterForm label="Find contacts by name" onChange={handleFilterChange} />
      {contacts.length === 0 ? (
        <p>You don't have contacts yet</p>
      ) : (
        <Contacts options={filteredContacts} removeContact={removeContacts} />
      )}
    </Container>
  );
}
