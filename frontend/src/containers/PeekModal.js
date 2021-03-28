import React, { useState } from 'react';
import { Button, Container, makeStyles, Modal } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        margin: 'auto',
        width: 'min(60vw, 700px)',
        height: '60vh',
        backgroundColor: 'cyan',
        borderRadius: 15,
        textAlign: 'center',
    },
    stoneText: {
        marginTop: 'auto',
    },
    closeButton: {
        position: 'absolute',
        bottom: 0,
    }
}));

const SeeStoneButton = ({ onClick }) => (
    <Button onClick={onClick}>
        Click to see stone (Make sure the other player isn't peaking!)
    </Button>
)

const StoneDisplay = ({ onClick }) => (
    <Button onClick={onClick}>
        Click to see stone (Make sure the other player isn't peaking!)
    </Button>
)

export const PeekModal = ({ stone, closeModal }) => {
    const [stoneHidden, setStoneHidden] = useState(true);
    const classes = useStyles();

    const onClose = () => {
        setStoneHidden(true);
        closeModal();
    }

    return (
        <Modal className={classes.root} open={!!stone}>
            <Container>
                {stoneHidden ? <SeeStoneButton onClick={() => setStoneHidden(false)} /> : (<div>
                    <h1>{stone}</h1>
                </div>)}
                {!stoneHidden && <Button onClick={onClose} className={classes.closeButton}> Close </Button>}
            </Container>
        </Modal>
    );
}