import React from 'react';
import PropTypes from 'prop-types';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import ContactListItem from '../ContactListItem';

import styles from './ContactList.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  }
});

const ContactList = ({ contacts, onDeleteItem }) => {
  const classes = useStyles();

  return (
    <TransitionGroup component={List} classes={{ root: classes.root }}>
      {contacts.map(({ id, name, number }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={styles}>
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDelete={() => onDeleteItem(id)}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })).isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

export default ContactList;