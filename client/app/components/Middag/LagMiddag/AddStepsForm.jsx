import React, { PropTypes } from 'react'

class AddStepsForm extends React.Component {
  componentDidMount() {
    this.refs.addStepTextArea.focus();
  }
  render () {
    return (
      <div className='addDinner-StepAddForm'>
        <i className='fa fa-close' onClick={this.props.closeForm} />
        <div className='form-group'>
          <label className='control-label'>Beskriv nytt steg</label>
          <textarea ref='addStepTextArea' className='form-control'></textarea>
        </div>
        <div className='form-group' style={{textAlign: 'right'}}>
          <input className='btn btn-primary addIngredBtn' type='button' value='Legg til'/>
        </div>
      </div>
    )
  }
}

export default AddStepsForm;
