import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { ContactForm } from 'components/ContactsForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { PageBox } from 'components/PageBox/PageBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { getIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PageBox>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <h2>Contacts</h2>
      <ContactsFilter />
      {contacts.length !== 0 ? <ContactsList /> : <div>Add some friends!</div>}
    </PageBox>
  );
}
