import React, { useState } from 'react';
import allContacts from './contacts.json';
import './App.css';

function App() {

  const [contacts, setContacts] = useState(allContacts.slice(0, 5))

  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter(contact => contact.id !== contactId))
  };

  const addContact = () => {
    const random = allContacts[Math.floor(Math.random() * allContacts.length)];

    // checking if in the state of contacts we already have the random contact
    if (contacts.find(contact => contact.id === random.id)) {
      // checking if there is still some contacts to add
      if (contacts.length < allContacts.length) {
        addContact();
      }
      return;
    }
    setContacts(contacts => [random, ...contacts])
  };

  const sortByName = () => {
    const sorted = [...contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    setContacts(sorted)
  };

  const sortByPopularity = () => {
    const sorted = contacts.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    setContacts(sorted)
  };

  return (
    <div className='App'>

      <h1>IronContacts</h1>

      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => {
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
                  <td>{contact.wonOscar && '🏆'}</td>
                  <td>{contact.wonEmmy && '🏆'}</td>
                  <td>
                    <button onClick={() => { deleteContact(contact.id) }}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;