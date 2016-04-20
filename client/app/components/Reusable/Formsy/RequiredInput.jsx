import React, { PropTypes } from 'react'
import { HOC } from 'formsy-react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

const RequiredInput = (props) => {
  let style = props.showRequired() ? 'error' : 'success';
  const reqTxt = props.reqTxt || 'Kan ikke være tomt her';
  let help = props.showRequired() ? reqTxt : null;
  if( props.isPristine() ) {
    style = null;
    help = null;
  }
  const type = props.type || 'text';
  return (
    <FormGroup validationState={style}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl
        value={props.getValue()}
        type={type}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <HelpBlock>{help}</HelpBlock>
    </FormGroup>
  )
}
export default HOC(RequiredInput);
