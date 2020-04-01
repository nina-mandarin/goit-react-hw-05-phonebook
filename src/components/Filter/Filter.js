import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { CSSTransition } from 'react-transition-group';

import styles from './Filter.module.css'

const Filter = ({ value, onChange, inTransition }) => {
  return (
    <CSSTransition
      in={inTransition}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <Box marginBottom={2}>
        <Typography variant="h6">Find contacts by name</Typography>
        <TextField
          variant="outlined"
          type="text"
          name="filter"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </Box>
    </CSSTransition>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inTransition: PropTypes.bool.isRequired
};

Filter.defaultProps = {
  filter: ''
}

export default Filter;