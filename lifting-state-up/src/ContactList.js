import React from 'react';

const ContactList = props => {


  const list = props.contacts.filter(contact => contact.name.includes(props.queryProp)).map(contact => {
    return (
      <tr key={contact.id}>
        <td>
          <img
            src={contact.pictureUrl}
            height='100px'
            alt={contact.name}
          />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>{contact.wonoscar && '🏆'}</td>
        <td>{contact.wonemmy && '🏆'}</td>
        <td>
          <button onClick={() => { props.deleteContactProp(contact.id) }}>
            delete
          </button>
        </td>
      </tr>
    );
  })


  return (
    <>
      {list}
    </>
  );
};

export default ContactList;