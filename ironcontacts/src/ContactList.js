import React from 'react';

const ContactList = props => {

  const filtered = props.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(props.query.toLowerCase()) ? true : false
  });

  return (
    <></>
  );
};

export default ContactList;