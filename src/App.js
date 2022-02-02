import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Section from "./components/Section.styled";

function App () {
  const [contacts, setContacts] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    } catch {
      console.error();
      setContacts("");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (!contacts) {
      setContacts([newContact]);
    } else if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )) {
      window.alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }

    form.reset();
  };

  const handleSearch = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filterContact = () => {
    try {
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filter);
      });
    } catch { 
      return false;
    }
  };

  const handleDelete = (e) => {
    const nameToDelete = e.target.parentNode.firstChild.data.toLowerCase();
    const newContacts = contacts.filter(
      (contact) => contact.name.toLowerCase() !== nameToDelete
    );
    setContacts(newContacts);
  };

  const formId = nanoid();

    return (
      <Section>
        <p>Phonebook</p>
        <ContactForm onSubmit={handleSubmit} htmlFor={formId} />
        <p>Contacts</p>
        <Filter onChange={handleSearch} />
        {filterContact() && 
        <ContactList
          contacts={filterContact()}
          onClick={handleDelete}
        />}
      </Section>
    );
}

export default App;
