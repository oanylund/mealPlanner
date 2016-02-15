import React, { PropTypes } from 'react'
import LagUkeActions from '../../../actions/LagUkeActions'
import { Input, Button } from 'react-bootstrap'

const DagForm = (props) => {
  let translateDays = props.translateDays
  const daysLeft = Object.keys(translateDays).filter( (day) => {
    return !props.alreadyAdded.includes(day)
  })
  const options = daysLeft.map( (day) => {
    return(
      <option key={day+'O'} value={day}>{translateDays[day]}</option>
    )
  })

  return (
    <div className='Dagform-box'>
      { props.hideForm ? <i className='fa fa-close fa-CloseBtn' onClick={props.hideForm} /> : '' }
      <fieldset>
        <legend className='Dagform-legend'>Legg til dag</legend>
        <Input type="select" label="Velg dag">
          {options}
        </Input>
      </fieldset>
    </div>
  )

}

export default DagForm
