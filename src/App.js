import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { Header, Sidebar, Footer } from './components';
import { Game } from './containers';

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    textAlign: 'center',
    minHeight: '100vh',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
}))

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root} >
      <Header style={{ height: '70px' }} />
      <Container className={classes.body}>
        <Sidebar />
        <Game />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
