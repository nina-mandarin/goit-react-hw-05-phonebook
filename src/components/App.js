import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Alert from './Alert';

import '../index.css';
import Layout from './Layout/Layout';
import PageTitle from './PageTitle/PageTitle';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    alert: false
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');

    if (localContacts) {
      this.setState({
        contacts: JSON.parse(localContacts)
      })
    }
  }

  componentDidUpdate(prevProp, prevState) {
    const prevContacts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (prevContacts !== currentContacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  }

  // Add new contact
  addContact = (name, number) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      return this.setState({ alert: true })
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
    })
  };

  // Filter
  changeFilter = filter => {
    this.setState({ filter });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  // Delete a contact
  deleteContact = itemId => {

    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== itemId),
      };
    });
  }

  // Hide alert
  hideAlert = () => {
    return this.setState({ alert: false });
  }

  render() {
    const { filter, alert } = this.state;
    const filteredContacts = this.handleFilter();

    return (
      <Layout>
        <Alert show={alert} onHide={this.hideAlert} />

        <Box mb={5}>
          <PageTitle />
          <ContactForm onCreateContact={this.addContact} />
        </Box>

        <Box>
          <Typography variant="h3">Contacts</Typography>
          <Filter value={filter} onChange={this.changeFilter} inTransition={filteredContacts.length > 1 || Boolean(filter)} />

          {filteredContacts.length > 0 && (
            <ContactList contacts={filteredContacts} onDeleteItem={this.deleteContact} />
          )}
        </Box>
      </Layout>
    )
  }
}
