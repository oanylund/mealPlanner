import React, { PropTypes } from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import FinishStepModal from './FinishStepModal.jsx'

class CompleteBtns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFinish: false
    }
    this.onShowFinish = this.onShowFinish.bind(this);
    this.onCloseFinish = this.onCloseFinish.bind(this);
  }
  onShowFinish() {
    this.setState({ showFinish: true });
  }
  onCloseFinish() {
    this.setState({ showFinish: false });
  }
  render () {
    const { titleAndDesc, ingredients, steps, image } = this.props.validSteps;

    if ( titleAndDesc.valid && ingredients.valid ) {
      return (
        <Row>
          <Col md={12} >
            <Button bsStyle='success' onClick={this.onShowFinish}>Lag middag</Button>
            <Modal show={this.state.showFinish} onHide={this.onCloseFinish}>
              <FinishStepModal close={this.onCloseFinish} {...this.props.validSteps } />
            </Modal>
          </Col>
        </Row>
      )
    }
    else {
      return (
        <p className='addDinner-infoTxt'>Du må minst legge til tittel, beskrivelse og en ingrediens for å lage en middag.</p>
      )
    }
  }
}

export default CompleteBtns
