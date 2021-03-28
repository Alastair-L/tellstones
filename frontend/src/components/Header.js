import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 70,
        padding: '0 30px',
    },
});

export const Header = () => {
    const classes = useStyles();
    return <Container className={classes.root}>Header</Container>;
}
