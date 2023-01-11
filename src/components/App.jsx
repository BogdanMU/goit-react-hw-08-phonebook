import { ContactsList } from './ContactsList/ContactsList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { ContactForm } from './ContactsForm/ContactForm';
import { Wrap } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Wrap>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsFilter />
      {contacts.length !== 0 ? <ContactsList /> : <div>Add some friends!</div>}
    </Wrap>
  );
};
