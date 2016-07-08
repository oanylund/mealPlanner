import React, { PropTypes } from 'react'
import AddStepsForm from '../../LagMiddag/AddStepsForm.jsx'
import ShowStepsAdded from '../../LagMiddag/ShowStepsAdded.jsx'
import InfoAlert from '../../../Reusable/InfoAlert.jsx'
import PlusBtn from '../../../Reusable/PlusBtn.jsx'
import { Meteor } from 'meteor/meteor'

class EditSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false
    }
    this.showAddForm = this.showAddForm.bind(this);
    this.hideAddForm = this.hideAddForm.bind(this);
    this.addStep = this.addStep.bind(this);
    this.editStep = this.editStep.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
    this.moveStep = this.moveStep.bind(this);
    this.moveStepUp = this.moveStepUp.bind(this);
    this.moveStepDown = this.moveStepDown.bind(this);
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
  addStep(newStep) {
    Meteor.call('addStepToDinner', this.props.id, newStep);
  }
  editStep({ index, newTxt }) {
    Meteor.call('editStepInDinner', this.props.id, index, newTxt);
  }
  deleteStep(delIndex) {
    let tmpSteps = this.props.steps;
    tmpSteps.splice(delIndex,1);
    Meteor.call('deleteStepInDinner', this.props.id, tmpSteps);
  }
  moveStep(indexes) {
    let tmpSteps = this.props.steps;
    let tmp = tmpSteps.splice(indexes.old,1);
    tmpSteps.splice(indexes.new,0,tmp[0]);
    Meteor.call('moveStepInDinner', this.props.id, tmpSteps);
  }
  moveStepUp(index) {
    if( index > 0 ) {
      let tmpSteps = this.props.steps;
      let tmp = tmpSteps.splice(index,1);
      tmpSteps.splice(index-1,0,tmp[0]);
      Meteor.call('moveStepInDinner', this.props.id, tmpSteps);
    }
  }
  moveStepDown(index) {
    let tmpSteps = this.props.steps;
    let tmp = tmpSteps.splice(index,1);
    tmpSteps.splice(index+1,0,tmp[0]);
    Meteor.call('moveStepInDinner', this.props.id, tmpSteps);
  }
  render () {
    const { steps } = this.props;

    const passToSteps = {
      steps: steps,
      deleteStep: this.deleteStep,
      editStep: this.editStep,
      moveStep: this.moveStep,
      moveStepUp: this.moveStepUp,
      moveStepDown: this.moveStepDown,
    }

    const alertEmpty = <InfoAlert txt='Trykk + knappen for å legge til steg' /> ;
    const showSteps = steps.length === 0 ? alertEmpty : <ShowStepsAdded {...passToSteps} /> ;

    return (
      <div className='showDinner-Steps'>
        <h4>Fremgangsmåte:</h4>
        {showSteps}
        { this.state.showAddForm ? <AddStepsForm addStep={this.addStep} closeForm={this.hideAddForm} /> :
        <PlusBtn click={this.showAddForm} ref='showAddStepFormBtn' /> }
      </div>
    )
  }
}

export default EditSteps;
