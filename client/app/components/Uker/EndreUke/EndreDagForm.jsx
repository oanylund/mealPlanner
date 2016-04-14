import React, { PropTypes } from 'react'
import LagUkeActions from '../../../actions/LagUkeActions'
import { Input, Button, Glyphicon } from 'react-bootstrap'
import ChoseDinnerModal from '../LagUke/ChoseDinnerModal.jsx'

const translateDays = {
  tuesday: 'Tirsdag',
  wednesday: 'Onsdag',
  thursday:  'Torsdag',
  friday:    'Fredag',
  saturday:  'Lørdag',
  sunday:   'Søndag',
  monday: 'Mandag',
}

const ChangeBtn = ({style}) => {
  const btnStyle = style || 'primary';
  return (
    <Button bsStyle={btnStyle} type='submit'><Glyphicon glyph='save' /></Button>
  );
}

class EndreDagForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      whynotStatus: 'sameAsProp',
      commentStatus: 'sameAsProp'
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmitComment = this.onSubmitComment.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onSubmitWhynot = this.onSubmitWhynot.bind(this);
    this.onWhynotChange = this.onWhynotChange.bind(this);
    this.addDinnerToDay = this.addDinnerToDay.bind(this);
    this.resetDinner = this.resetDinner.bind(this);
    this.validateWhyNot = this.validateWhyNot.bind(this);
    this.addDayMenu = this.addDayMenu.bind(this);
    this.dayAdded = this.dayAdded.bind(this);
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }
  onSubmitComment(e) {
    e.preventDefault();
    if( this.state.commentStatus === 'changed' ) {
      this.props.actions.changeComment(this.refs.comment.getValue());
    }
  }
  onCommentChange(e) {
    if( e.target.value === this.props.comment ) {
      this.setState({ commentStatus: 'sameAsProp' });
    }
    else {
      this.setState({ commentStatus: 'changed' });
    }
  }
  onSubmitWhynot(e) {
    e.preventDefault();
    if( this.state.whynotStatus === 'changed' ) {
      this.props.actions.changeWhynot(this.refs.whynot.getValue());
    }
  }
  onWhynotChange(e) {
    if( e.target.value.length === 0 ) {
      this.setState({ whynotStatus: 'empty' });
    }
    else if( e.target.value === this.props.whynot ) {
      this.setState({ whynotStatus: 'sameAsProp' });
    }
    else {
      this.setState({ whynotStatus: 'changed' });
    }
  }
  addDinnerToDay(dinner) {
    this.props.actions.changeDinner(dinner);
  }
  resetDinner() {
    this.props.actions.deleteDinner();
  }
  validateWhyNot() {
    if( this.state.whynotStatus === 'empty' ) {
      return {
        placeholder: 'Kan ikke være tomt her',
        bsStyle: 'error',
        btnStyle: 'danger'
      }
    }
    else if( this.state.whynotStatus !== 'sameAsProp' ) {
      return {
        bsStyle: null,
        btnStyle: 'warning'
      }
    }
    return {
      placeholder: '',
      bsStyle: null
    }
  }
  addDayMenu() {
    const { btnStyle, ...inputStyle } = this.validateWhyNot();
    const btn = <ChangeBtn style={btnStyle} />
    return (
      <div className='Dagform-innerBox'>
        <div className='Dagform-addmiddag'>
          <p>Legg til middag</p>
          <i className='fa fa-plus' onClick={this.openModal}/>
        </div>
        <div className='Dagform-whynot'>
          <p><strong>Eller</strong> skriv kort om hvorfor det ikke blir middag</p>
          <form onSubmit={this.onSubmitWhynot}>
            <Input defaultValue={this.props.whynot} {...inputStyle}
              ref='whynot' buttonAfter={btn}
              onChange={this.onWhynotChange} type='text'/>
          </form>
        </div>
      </div>
    )
  }
  dayAdded() {
    const { dinner } = this.props;
    return (
      <div>
        <p>Middag valgt</p>
        <h4>{dinner.title}</h4>
        <Button bsSize='xs' onClick={this.resetDinner}>Fjern middag</Button>
      </div>
    )
  }
  render() {
    const { dayToEdit, whynot, comment, dinner } = this.props;
    const { closeEdit, changeComment } = this.props.actions;

    const commentBtnStyle = this.state.commentStatus === 'sameAsProp' ? 'primary' : 'warning';

    return (
      <div className='Dagform-box'>
        <i className='fa fa-close fa-CloseBtn' onClick={closeEdit} />
        <fieldset>
          <legend className='Dagform-legend'>Endre {translateDays[dayToEdit]}</legend>
          { dinner ? this.dayAdded() : this.addDayMenu() }
          <div className='Dagform-kommentar'>
            <p>Legg til kommentar (feks: 'Ta opp kjøtt fra frysern')</p>
            <form onSubmit={this.onSubmitComment}>
              <Input defaultValue={comment} ref='comment'
                buttonAfter={<ChangeBtn style={commentBtnStyle} />}
                onChange={this.onCommentChange} type='text'/>
            </form>
          </div>
        </fieldset>
        <ChoseDinnerModal show={this.state.showModal} close={this.closeModal}
          addDinner={this.addDinnerToDay} />
      </div>
    )
  }

}

export default EndreDagForm
