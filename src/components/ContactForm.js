import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class ContactForm extends Component {
  static propTypes = {
    onCreateContact: () => { }
  };

  state = {
    name: '',
    number: ''
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })

  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      this.props.onCreateContact(this.state.name, this.state.number);
      return this.setState({ name: '', number: '' });
    }

    return null;
  };


  render() {
    const { name, number } = this.state;

    return (
      <Box maxWidth={300}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="name-field"
            label="Name"
            variant="outlined"
            fullWidth
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
            margin="normal"
          />
          <TextField
            id="number-field"
            label="Number"
            variant="outlined"
            fullWidth
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add contact
        </Button>
        </form>
      </Box>
    )
  }
}

export default ContactForm;