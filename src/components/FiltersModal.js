import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import React, { useState } from 'react';

import FilterButtons from './FilterButtons';

function FiltersModal({ buttonLabel, parentCb }) {
    const [modal, setModal] = useState(false);
    const [bedrooms, setBedrooms] = useState(1);
    const [beds, setBeds] = useState(1);
    const [guests, setGuests] = useState(1);
    const [bathrooms, setBathrooms] = useState(1)

    const handleCb = (data) => {
        setBedrooms(data[0])
        setBeds(data[1])
        setGuests(data[2])
        setBathrooms(data[3])
    }
    const closedFun = () => {
        let obj = {
            bedrooms: bedrooms,
            beds: beds,
            guests: guests,
            bathrooms: bathrooms
        }
        setModal(!modal)
        parentCb(obj)
    }

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color='primary' onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}  >
                <ModalHeader toggle={toggle}>Filters</ModalHeader>
                <ModalBody>
                    <Container>
                        <FilterButtons parentCb={handleCb} />
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={closedFun}>Apply</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default FiltersModal
