import { Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Header, Sidebar, Footer } from './components';
import { Game, PeekModal } from './containers';

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
  const [peekModalStone, setPeekModalStone] = useState(null);

  const openPeekModal = setPeekModalStone;
  const closeModal = () => setPeekModalStone(null);

  return (
    <>
      <Container className={classes.root} >
        <Header style={{ height: '70px' }} />
        <Container className={classes.body}>
          <Sidebar />
          <Game openModal={openPeekModal} />
        </Container>
        <Footer />
      </Container>
      <PeekModal stone={peekModalStone} closeModal={closeModal} />
    </>
  );
}

export default App;
