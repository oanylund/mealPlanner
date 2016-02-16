import React, { PropTypes } from 'react'
import LagUkeActions from '../../../actions/LagUkeActions'
import { Input, Button } from 'react-bootstrap'


class DagForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDinner: false
    }
    this.handleAddClick = this.handleAddClick.bind(this)
  }
  handleAddClick() {
    let day = this.refs.day.getValue()
    let whynot = this.refs.whynot.getValue()
    let comment = this.refs.comment.getValue()

    if (this.state.isDinner) {

    }
    else {
      if(whynot === '') {
        alert('Det burde vertfall være en tittel til dagen når det ikke er valgt en middag')
      }
      else {
        let payload = {
          day: day,
          isDinner: this.state.isDinner,
          title: whynot,
          comment: comment
        }
        LagUkeActions.addDay(payload)
      }
    }
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
            <div className='Dagform-innerBox'>
              <div className='Dagform-addmiddag'>
                <p>Legg til middag</p>
                <i className='fa fa-plus'/>
              </div>
              <div className='Dagform-whynot'>
                <p><strong>Eller</strong> skriv kort om hvorfor det ikke blir middag</p>
                <Input ref='whynot' type='text'/>
              </div>
            </div>
            <div className='Dagform-kommentar'>
              <p>Legg til kommentar (feks: 'Ta opp kjøtt fra frysern')</p>
              <Input ref='comment' type='text'/>
            </div>
            <div style={{textAlign:'right'}}>
              <Button bsStyle='primary' onClick={this.handleAddClick}>Legg til dag</Button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }

}

export default DagForm
