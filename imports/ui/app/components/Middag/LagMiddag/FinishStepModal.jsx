import React, { PropTypes } from 'react'
import alt from '../../../alt'
import LagMiddagStore from '../../../stores/LagMiddagStore'
import ClassNames from 'classnames'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

class FinishStepModal extends React.Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
  }
  submitData() {
    this.props.addDinner();
    this.props.restartView(2);
    // If view is 1 when submitting, input fields retain their values. So render first 2 then one, ugly but working
    this.props.restartView(1);
    // TODO: Some way to restart all state smoothly with loader present more cleanly
  }
  render () {
    const { steps, image } = this.props;
    let mer = 'Nei, jeg vil legge til mer';
    let jaLag = 'Ja, legg til middag';
    let warningMsg = 'Er du sikker på at du ikke vil legge til noen steg og et bilde?';
    let LagMdagBtn = ( steps.valid && image.added ) ? 'Legg til middag' : jaLag;
    let lukkBtn = ( steps.valid && image.added ) ? 'Lukk' : mer;

    if( steps.valid && !image.added ) {
      warningMsg = 'Er du sikker på at du ikke vil legge til et bilde?';
      LagMdagBtn = jaLag;
      lukkBtn = mer;
    }
    else if ( !steps.valid && image.added ) {
      warningMsg = 'Er du sikker på at du ikke vil legge til noen steg?';
      LagMdagBtn = jaLag;
      lukkBtn = mer;
    }

    return (
      <div className='alert alert-info addDinner-Modal'>
        <h4>Lag middag</h4>
        { ( steps.valid && image.added ) ? ''
          : <p className='addDinner-Modal-Warning'>{warningMsg}</p> }
        <div className='addDinner-Modal-Footer'>
          <ButtonToolbar>
            <Button bsStyle='success' onClick={this.submitData}>{LagMdagBtn}</Button>
            <Button onClick={this.props.close}>{lukkBtn}</Button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

export default FinishStepModal;
