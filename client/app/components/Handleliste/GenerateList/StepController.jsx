import React, { PropTypes } from 'react'
import NameDateForm from './NameDateForm.jsx'
import PickWeekList from '../../../containers/PickWeekList.jsx'
import ConfirmStep from './ConfirmStep.jsx'
import { Button } from 'react-bootstrap'

const StepController = (props) => {
  const { currentStep, ...passProps } = props;

  switch(currentStep) {
    case 1:
      return <NameDateForm {...passProps} />;
    case 2:
      return (
        <div>
          <p>Velg ukeplan</p>
          <PickWeekList {...passProps} />
          <Button bsStyle='primary' onClick={props.Actions.gotoPreviousStep}>Forrige steg</Button>
        </div>
      );
    case 3:
      return <ConfirmStep {...passProps} />;
    case 4:
      return <div>Liste genereres...</div>;
  }
}

export default StepController
