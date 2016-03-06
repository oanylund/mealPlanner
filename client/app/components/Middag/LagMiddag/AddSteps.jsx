import React, { PropTypes } from 'react'
import AddStepsForm from './AddStepsForm.jsx'
import InfoAlert from '../../Reusable/InfoAlert.jsx'
import PlusBtn from '../../Reusable/PlusBtn.jsx'

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
    const alertEmpty = <InfoAlert txt='Trykk + knappen for å legge til steg' /> ;
    const showSteps = stepsInStore === 0 ? alertEmpty : '';
    const btn = <PlusBtn click={this.showAddForm} ref='showAddStepFormBtn' />;

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
