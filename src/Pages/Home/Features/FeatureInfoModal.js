import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import './FeatureInfoModal.css'
import { BsPlayCircle } from "react-icons/bs";

const FeatureInfoModal = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <Container className='background my-5'>
            <BsPlayCircle  variant="primary" onClick={handleShow} className='playbtn' ></BsPlayCircle>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <iframe src="https://www.youtube.com/embed/8pKjULHzs0s" className='modal-style'  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Close </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
};

export default FeatureInfoModal;