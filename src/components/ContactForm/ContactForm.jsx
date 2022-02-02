import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "./ContactForm.styled";

function ContactForm ({onSubmit, htmlFor}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newName = form.elements.name.value;
    const newNumber = form.elements.number.value;

    setName(newName);
    setNumber(newNumber);

    onSubmit(e);

    form.reset();
  };

    return (
      <Form onSubmit={handleSubmit} htmlFor={htmlFor}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </Form>
    );
}

ContactForm.propTypes = {
  htmlFor: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default ContactForm;
