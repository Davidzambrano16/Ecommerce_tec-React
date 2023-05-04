import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import checkSucess from "../assets/checkSucess.png"

const SucessModal = ({message}) => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>successful process </Modal.Title>
                </Modal.Header>
                <Modal.Body>{message} <img src={checkSucess} width={"40px"} style={{marginLeft:"1rem" }} /> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SucessModal;
