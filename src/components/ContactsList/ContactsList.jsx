import { DeleteBtn, List } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <List>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id} id={contact.id}>
              {contact.name} : {contact.number}
              <DeleteBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(contact.id));
                }}
              >
                Delete
              </DeleteBtn>
            </li>
          );
        })}
    </List>
  );
};
