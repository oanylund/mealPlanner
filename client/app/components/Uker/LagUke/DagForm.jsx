import React, { PropTypes } from 'react'
import LagUkeActions from '../../../actions/LagUkeActions'
import { Input, Button } from 'react-bootstrap'
import ChoseDinnerModal from './ChoseDinnerModal.jsx'

class DagForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dinner: null,
      whynot: '',
      comment: '',
      showModal: false
    }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
    this.onWhyNotChange = this.onWhyNotChange.bind(this)
    this.addDinnerToDay = this.addDinnerToDay.bind(this)
    this.addDayMenu = this.addDayMenu.bind(this)
    this.dayAdded = this.dayAdded.bind(this)
    this.resetDinner = this.resetDinner.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }
  openModal() {
    this.setState({ showModal: true })
  }
  closeModal() {
    this.setState({ showModal: false })
  }
  onCommentChange(e) {
    this.setState({
      comment: e.target.value
    });
  }
  onWhyNotChange(e) {
    this.setState({
      whynot: e.target.value
    });
  }
  addDinnerToDay(dinner) {
    this.setState({
      dinner: dinner
    });
  }
  resetDinner() {
    this.setState({
      dinner: null
    });
  }
  resetForm() {
    this.setState({
      dinner: null,
      comment: '',
      whynot: ''
    });
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
          <Input value={this.state.whynot} onChange={this.onWhyNotChange} type='text'/>
        </div>
      </div>
    )
  }
  dayAdded() {
    return (
      <div>
        <p>Middag valgt</p>
        <h4>{this.state.dinner.title}</h4>
        <Button bsSize='xs' onClick={this.resetDinner}>Fjern middag</Button>
      </div>
    )
  }
  handleAddClick() {
    const { addDay } = this.props;
    let day = this.refs.day.getValue();
    let comment = this.state.comment;

    let payload = { day: day }

    if ( comment !== '') {
      payload.comment = comment;
    }

    if (this.state.dinner) {
      payload.dinnerId = this.state.dinner.dinnerId;
      addDay(payload);
      this.resetForm();
    }
    else {
      let whynot = this.state.whynot;
      if(whynot === '') {
        alert('Når ingen middag er valgt, må det være en begrunnelse for hvorfor det ikke blir middag');
      }
      else {
        payload.whynot = whynot;
        addDay(payload);
        this.resetForm();
      }
    }
  }
  render() {
    let translateDays = this.props.translateDays
    const daysLeft = Object.keys(translateDays).filter( (day) => {
      return !this.props.alreadyAdded.includes(day)
    })
    const options = daysLeft.map( (day, i) => {
      return(
        <option key={i} value={day}>{translateDays[day]}</option>
      )
    })

    return (
      <div className='Dagform-box'>
        { this.props.hideForm ? <i className='fa fa-close fa-CloseBtn' onClick={this.props.hideForm} /> : '' }
        <form>
          <fieldset>
            <legend className='Dagform-legend'>Legg til dag</legend>
            <p>Velg dagen det gjelder</p>
            <Input ref='day' type='select'>
              {options}
            </Input>
            { this.state.dinner ? this.dayAdded() : this.addDayMenu() }
            <div className='Dagform-kommentar'>
              <p>Legg til kommentar (feks: 'Ta opp kjøtt fra frysern')</p>
              <Input value={this.state.comment} onChange={this.onCommentChange} type='text'/>
            </div>
            <div style={{textAlign:'right'}}>
              <Button bsStyle='primary' onClick={this.handleAddClick}>Legg til dag</Button>
            </div>
          </fieldset>
        </form>
        <ChoseDinnerModal show={this.state.showModal} close={this.closeModal}
          addDinner={this.addDinnerToDay} />
      </div>
    )
  }

}

export default DagForm
