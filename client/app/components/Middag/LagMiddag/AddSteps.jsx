import React, { PropTypes } from 'react'
import AddStepsForm from './AddStepsForm.jsx'
import ShowStepsAdded from './ShowStepsAdded.jsx'
import InfoAlert from '../../Reusable/InfoAlert.jsx'
import PlusBtn from '../../Reusable/PlusBtn.jsx'

class AddSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false
    }
    this.showAddForm = this.showAddForm.bind(this)
    this.hideAddForm = this.hideAddForm.bind(this)
  }

  showAddForm() {
    this.setState({
      showAddForm: true
    })
  }
  hideAddForm() {
    this.setState({
      showAddForm: false
    }, () => {
      this.refs.showAddStepFormBtn.focusBtn();
    })
  }
  render () {
    const passToSteps = {
      steps: this.props.dinnerObj.steps,
      deleteStep: this.props.deleteStep,
      editStep: this.props.editStep,
      moveStep: this.props.moveStep,
      moveStepUp: this.props.moveStepUp,
      moveStepDown: this.props.moveStepDown,
    }
    const stepsInStore =  this.props.dinnerObj.steps.length;
    const alertEmpty = <InfoAlert txt='Trykk + knappen for å legge til steg' /> ;
    const showSteps = stepsInStore === 0 ? alertEmpty : <ShowStepsAdded {...passToSteps} /> ;

    return (
      <fieldset className={this.props.showSteps}>
        <legend>Legg til steg</legend>
        { showSteps }
        { this.state.showAddForm ? <AddStepsForm addStep={this.props.addStep} closeForm={this.hideAddForm} /> :
          <PlusBtn click={this.showAddForm} ref='showAddStepFormBtn' /> }
      </fieldset>
    )
  }
}

export default AddSteps;
