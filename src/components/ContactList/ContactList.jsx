import React from 'react';
import PropTypes from 'prop-types';
import { List, ContactCard, DeleteContactBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactCard key={id}>
            <p>{name}: </p>
            <p>{number}</p>
            <DeleteContactBtn type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DeleteContactBtn>
          </ContactCard>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
