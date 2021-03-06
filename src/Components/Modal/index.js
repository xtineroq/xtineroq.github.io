import React from "react";
import "./style.css";
import { Modal, Button } from "react-bootstrap";

function ModalBox(props) {

    const handleClose = () => props.setModalShow(false);

    return (

        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title>Thank You!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>I will get back to you shortly.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalBox;
