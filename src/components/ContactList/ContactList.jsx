import { List, ContactCard, DeleteContactBtn } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactCard key={id}>
            <p>{name}: </p>
            <p>{number}</p>
            <DeleteContactBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteContactBtn>
          </ContactCard>
        );
      })}
    </List>
  );
};
