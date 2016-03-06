import React, { PropTypes } from 'react'

const AddStepsForm = (props) => {
  return (
    <div className='addDinner-StepAddForm'>
      <div className='form-group'>
        <label className='control-label'>Beskrivelse</label>
        <textarea className='form-control'></textarea>
      </div>
      <div className='form-group' style={{textAlign: 'right'}}>
        <input className='btn btn-primary addIngredBtn' type='button' value='Legg til'/>
      </div>
    </div>
  )
}

export default AddStepsForm
