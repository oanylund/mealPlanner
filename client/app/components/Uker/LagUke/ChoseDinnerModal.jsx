import React, { PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'

class ChoseDinnerModal extends React.Component {
  render () {
    const { show, close, addDinner } = this.props;

    return (
      <Modal bsSize='large' show={show} onHide={close} >
        <Modal.Header>Legg middag til dag</Modal.Header>
        <Modal.Body>Her skal middager vises, med søkefunksjon</Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Lukk</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ChoseDinnerModal;
