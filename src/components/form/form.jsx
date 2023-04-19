import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./form.module.css";
import ContactList from "../contactList/contactList";
import ContactForm from "../contactForm/contactForm";
import Filter from "../filter/filter";

class Form extends Component {
  state = {
    contacts: [
      { userId: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { userId: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { userId: "id-3", name: "Eden Clements", number: "645-17-79" },
      { userId: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  saveData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let userId = nanoid();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      this.state.contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { number, name, userId };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: "",
        number: "",
        userId: "",
      }));
    }
  };
  handleDelete = (id) => {
    const updateContacts = this.state.contacts.filter(
      (contact) => contact.userId !== id
    );
    this.setState({
      contacts: updateContacts,
    });
  };

  handleSearchChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <section className={styles.section}>
          <ContactForm
            name={this.state.name}
            number={this.state.number}
            saveData={this.saveData}
            handleSubmit={this.handleSubmit}
          />
          <div className={styles.contacts__container}>
            <h2>Contact list</h2>
            {this.state.contacts.length > 0 ? (
              <>
                <Filter onSearchChange={this.handleSearchChange} />
                <ContactList
                  data={this.filterContacts()}
                  handleDelete={this.handleDelete}
                />
              </>
            ) : (
              <h3>No contacts given</h3>
            )}
          </div>
        </section>
      </>
    );
  }
}
export default Form;
