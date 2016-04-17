import React, { PropTypes } from 'react'
import LagUkeActions from '../../../actions/LagUkeActions'
import { Input, Button, Glyphicon } from 'react-bootstrap'
import ChoseDinnerModal from '../LagUke/ChoseDinnerModal.jsx'
import { Form } from 'formsy-react'
import { HOC } from 'formsy-react'

import translateDays from '../translateDays'

const FormsyInputElement = (props) => {
  const style = props.isValid() ? null : 'error';
  const placeholder = props.isValid() ? '' : 'Hvorfor blir det ikke middag (påkrevd)';
  return (
      <Input type='text' bsStyle={style} onChange={(e) => props.setValue(e.target.value)}
        value={props.getValue()} placeholder={placeholder} />
  )
}
const FormsyInput = HOC(FormsyInputElement);

class EndreDagForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      canSubmit: false,
      dinner: props.dinner
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
    this.disableBtn = this.disableBtn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addDinnerToDay = this.addDinnerToDay.bind(this);
    this.resetDinner = this.resetDinner.bind(this);
    this.addDayMenu = this.addDayMenu.bind(this);
    this.dayAdded = this.dayAdded.bind(this);
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }
  enableBtn() {
    this.setState({ canSubmit: true });
  }
  disableBtn() {
    this.setState({ canSubmit: false });
  }
  onSubmit(model) {
    const dinner = this.state.dinner;
    const { changeDay } = this.props.actions;
    let payload = { day: this.props.dayToEdit };
    if( model.comment.length > 0 ) {
      payload.comment = model.comment;
    }
    if( dinner ) {
      changeDay({ ...payload, dinnerId: dinner.dinnerId });
    }
    else {
      changeDay({ ...payload, whynot: model.whynot });
    }
  }
  addDinnerToDay(dinner) {
    this.setState({ dinner: dinner });
  }
  resetDinner() {
    this.setState({ dinner: null });
  }
  addDayMenu() {
    return (
      <div className='Dagform-innerBox'>
        <div className='Dagform-addmiddag'>
          <p>Legg til middag</p>
          <i className='fa fa-plus' onClick={this.openModal}/>
        </div>
        <div className='Dagform-whynot'>
          <p><strong>Eller</strong> skriv kort om hvorfor det ikke blir middag</p>
          <FormsyInput name='whynot' value={this.props.whynot} required />
        </div>
      </div>
    )
  }
  dayAdded() {
    const { dinner } = this.state;
    return (
      <div>
        <p>Middag valgt</p>
        <h4>{dinner.title}</h4>
        <Button bsSize='xs' onClick={this.resetDinner}>Fjern middag</Button>
      </div>
    )
  }
  render() {
    const { dayToEdit, whynot, comment } = this.props;
    const { closeEdit, changeDay } = this.props.actions;

    return (
      <div className='Dagform-box'>
        <i className='fa fa-close fa-CloseBtn' onClick={closeEdit} />
        <Form onValidSubmit={this.onSubmit} onValid={this.enableBtn} onInvalid={this.disableBtn}>
          <fieldset>
            <legend className='Dagform-legend'>Endre {translateDays[dayToEdit]}</legend>
            { this.state.dinner ? this.dayAdded() : this.addDayMenu() }
            <div className='Dagform-kommentar'>
              <p>Legg til kommentar (feks: 'Ta opp kjøtt fra frysern')</p>
              <FormsyInput name='comment' value={comment}/>
            </div>
            <div style={{textAlign:'right'}}>
              <Button disabled={!this.state.canSubmit} bsStyle='primary' type='submit'>Endre dag</Button>
            </div>
          </fieldset>
          <ChoseDinnerModal show={this.state.showModal} close={this.closeModal}
            addDinner={this.addDinnerToDay} />
        </Form>
      </div>
    )
  }

}

export default EndreDagForm
