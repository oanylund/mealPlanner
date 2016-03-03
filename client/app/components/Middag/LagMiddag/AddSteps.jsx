import React, { PropTypes } from 'react'
import AddStepsForm from './AddStepsForm.jsx'
import { Alert } from 'react-bootstrap'

class AddSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false
    }
    this.showAddForm = this.showAddForm.bind(this)
  }

  showAddForm() {
    this.setState({
      showAddForm: true
    })
  }

  render () {
    const stepsInStore =  0; //this.props.dinnerObj.ingredients.length;
    const alertEmpty = ( <Alert bsStyle='info'><p>Trykk + knappen for å legge til steg</p></Alert> );
    const showSteps = stepsInStore === 0 ? alertEmpty : '';
    const btn = (
        <button ref='showAddIngredFormBtn' type='button'
          className='btn btn-primary btn-block btn-xs' onClick={this.showAddForm}>
          <i className='fa fa-plus'/>
        </button>
    );

    return (
      <fieldset className={this.props.showSteps}>
        <legend>Legg til steg</legend>
        { showSteps }
        { this.state.showAddForm ? <AddStepsForm /> : btn }
      </fieldset>
    )
  }
}

export default AddSteps;


// {showIngreds}
// { this.state.showAddForm ? form : btn }
