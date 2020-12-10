import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();
    if (!isValidatedForm) return;
    onAdd({ id: shortid.generate(), name, number });
    this.resetForm();
  };
  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert("Some field is empty");
      return false;
    }
    return onCheckUnique(name);
  };
  resetForm = () => this.setState(INITIAL_STATE);
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTyper = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
