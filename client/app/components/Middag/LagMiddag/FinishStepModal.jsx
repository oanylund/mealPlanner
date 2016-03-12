import React, { PropTypes } from 'react'
import ClassNames from 'classnames'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

class FinishStepModal extends React.Component {
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
            <Button bsStyle='success'>{LagMdagBtn}</Button>
            <Button onClick={this.props.close}>{lukkBtn}</Button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

export default FinishStepModal;
