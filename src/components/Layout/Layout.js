import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrap: {
    position: 'relative',
    minHeight: '100vh',
    padding: theme.spacing(7, 5),
    overflow: 'hidden'
  }
}));

const Layout = ({ children, theme }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper className={classes.wrap}>
          {children}
        </Paper>
      </Container>
    </>
  )
};


Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;