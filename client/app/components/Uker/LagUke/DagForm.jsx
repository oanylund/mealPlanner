import React, { PropTypes } from 'react'
import LagUkeActions from '../../../actions/LagUkeActions'
import { Input, Button } from 'react-bootstrap'
import ChoseDinnerModal from './ChoseDinnerModal.jsx'

class DagForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dinner: null,
      showModal: false
    }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.addDinnerToDay = this.addDinnerToDay.bind(this)
  }
  handleAddClick() {
    let day = this.refs.day.getValue()
    let whynot = this.refs.whynot.getValue()
    let comment = this.refs.comment.getValue()

    let payload = { day: day }

    if ( comment !== '') {
      payload.comment = comment
    }

    if (this.state.dinner) {

    }
    else {
      if(whynot === '') {
        alert('Når ingen middag er valgt, må det være en begrunnelse for hvorfor det ikke blir middag')
      }
      else {
        payload.whynot = whynot
        LagUkeActions.addDay(payload)
      }
    }
  }
  openModal() {
    this.setState({ showModal: true })
  }
  closeModal() {
    this.setState({ showModal: false })
  }
  addDinnerToDay() {

  }
  render() {
    let translateDays = this.props.translateDays
    const daysLeft = Object.keys(translateDays).filter( (day) => {
      return !this.props.alreadyAdded.includes(day)
    })
    const options = daysLeft.map( (day) => {
      return(
        <option key={day+'O'} value={day}>{translateDays[day]}</option>
      )
    })

    const addDayMenu =  <div className='Dagform-innerBox'>
                          <div className='Dagform-addmiddag'>
                            <p>Legg til middag</p>
                            <i className='fa fa-plus' onClick={this.openModal}/>
                          </div>
                          <div className='Dagform-whynot'>
                            <p><strong>Eller</strong> skriv kort om hvorfor det ikke blir middag</p>
                            <Input ref='whynot' type='text'/>
                          </div>
                        </div>;

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
            { addDayMenu }
            <div className='Dagform-kommentar'>
              <p>Legg til kommentar (feks: 'Ta opp kjøtt fra frysern')</p>
              <Input ref='comment' type='text'/>
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
