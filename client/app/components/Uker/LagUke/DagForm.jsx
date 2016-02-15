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
        <Input type='select' label='Velg dagen det gjelder'>
          {options}
        </Input>
      </fieldset>
      <p style={{textAlign: 'center'}}>Test</p>
      <div className='Dagform-innerBox'>
        <div className='Dagform-addmiddag'>
          <i className='fa fa-plus'/>
        </div>
        <div className='Dagform-whynot'>
          <Input type='text' label='Skriv hvorfor ikke det blir'/>
        </div>
      </div>
    </div>
  )

}

export default DagForm
