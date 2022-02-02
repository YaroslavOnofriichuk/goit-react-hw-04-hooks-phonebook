import PropTypes from "prop-types";
import ContactListStyled from "./ContactList.styled";
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList ({contacts, onClick}) {
    return (
      <ContactListStyled>
        {contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onClick={onClick}
          />
        ))}
      </ContactListStyled>
    );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};

export default ContactList;
