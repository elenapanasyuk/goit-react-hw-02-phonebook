import React, { Component } from "react";
import shortid from "shortid";
import Container from "./components/Container";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: shortid.generate(), name: "Rosie Simpson", number: "459-12-56" },
      { id: shortid.generate(), name: "Hermione Kline", number: "443-89-12" },
      { id: shortid.generate(), name: "Eden Clements", number: "645-17-79" },
      { id: shortid.generate(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  handleAddContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  handleCheckUniqueContact = (name) => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert("Contact is already exist");
    return !isExistContact;
  };

  handleDeleteContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  handleChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Container>
          <ContactForm
            onAdd={this.handleAddContact}
            onCheckUnique={this.handleCheckUniqueContact}
          />
        </Container>
        <Container title="Contacts">
          <Filter filter={filter} onChange={this.handleChangeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Container>
      </div>
    );
  }
}

export default App;
